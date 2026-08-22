/* CAZA FINNANCIAL lead attribution.
 * First touch is kept. Last CTA (button + section) updates on click.
 * No cookies. localStorage on cazafinnv.com only.
 */
(function (w, d) {
  "use strict";
  var KEY = "caza_attr_v1";
  var SEARCH = /(google|bing|yahoo|duckduckgo|ecosia|brave|baidu|yandex)\./i;
  var SOCIAL = /(facebook|instagram|linkedin|twitter|x\.com|t\.co|tiktok|pinterest|reddit|youtube)\./i;
  var AI = /(chatgpt|openai|perplexity|claude|anthropic|copilot|gemini|bard|grok|x\.ai|you\.com|phind)\./i;

  function params() {
    try { return new URLSearchParams(w.location.search); } catch (e) { return new URLSearchParams(""); }
  }
  function externalReferrer() {
    var r = d.referrer || "";
    if (!r) return "";
    try {
      var h = new URL(r).hostname.replace(/^www\./, "");
      var here = w.location.hostname.replace(/^www\./, "");
      if (h === here) return "";
      return r;
    } catch (e) { return ""; }
  }
  function channel(q, ref) {
    var med = (q.get("utm_medium") || "").toLowerCase();
    var src = (q.get("utm_source") || "").toLowerCase();
    if (src === "agent" || med === "llm" || med === "agent" || q.get("agent")) return "agent";
    if (q.get("gclid") || q.get("msclkid") || med === "cpc" || med === "ppc") return "paid search";
    if (q.get("fbclid")) return "paid social";
    if (med === "email") return "email";
    if (src || med) return "campaign";
    if (!ref) return "direct";
    if (AI.test(ref)) return "ai assistant";
    if (SEARCH.test(ref)) return "organic search";
    if (SOCIAL.test(ref)) return "social";
    return "referral";
  }
  function snapshot() {
    var q = params();
    var ref = externalReferrer();
    var refHost = "";
    try { refHost = ref ? new URL(ref).hostname.replace(/^www\./, "") : ""; } catch (e) {}
    return {
      channel: channel(q, ref),
      utm_source: q.get("utm_source") || "",
      utm_medium: q.get("utm_medium") || "",
      utm_campaign: q.get("utm_campaign") || "",
      utm_content: q.get("utm_content") || "",
      referrer_host: refHost,
      landing_path: w.location.pathname + (w.location.search || "") + (w.location.hash || ""),
      at: new Date().toISOString()
    };
  }
  function read() {
    try { return JSON.parse(localStorage.getItem(KEY) || "null"); } catch (e) { return null; }
  }
  function write(obj) {
    try { localStorage.setItem(KEY, JSON.stringify(obj)); } catch (e) {}
  }

  var now = snapshot();
  var store = read() || {};
  if (!store.first) store.first = now;
  store.last = now;
  if (!store.cta) store.cta = { name: "", section: "", at: "" };
  write(store);

  function markCta(name, section) {
    store = read() || store;
    store.cta = {
      name: String(name || "").slice(0, 80),
      section: String(section || "").slice(0, 60),
      at: new Date().toISOString()
    };
    write(store);
  }

  function sectionOf(el) {
    var n = el && el.closest && el.closest("section, header, footer, .caza-chat");
    if (!n) return "";
    if (n.id) return n.id;
    if (n.classList.contains("site-header") || n.tagName === "HEADER") return "nav";
    if (n.classList.contains("site-footer") || n.tagName === "FOOTER") return "footer";
    if (n.classList.contains("caza-chat")) return "chat";
    return "";
  }

  d.addEventListener("click", function (e) {
    var el = e.target.closest("[data-cta], a.btn, a.service-card__link, .caza-chat-fab, .tax-est .btn");
    if (!el) return;
    var name = el.getAttribute("data-cta") || (el.id ? el.id : "") || (el.textContent || "").trim().slice(0, 40);
    markCta(name, el.getAttribute("data-section") || sectionOf(el));
  }, true);

  function payload(origin) {
    store = read() || store;
    var first = store.first || now;
    var last = store.last || now;
    var cta = store.cta || {};
    var originName = origin || "form";
    var source = [originName, cta.name || "", cta.section || "", first.channel || last.channel]
      .filter(Boolean)
      .join("|")
      .slice(0, 180);
    return {
      origin: originName,
      source: source,
      channel: first.channel || last.channel,
      cta: cta.name || "",
      section: cta.section || "",
      first: first,
      last: last,
      agent: (first.channel === "agent" || last.channel === "agent" || first.utm_source === "agent")
    };
  }

  w.cazaAttr = { markCta: markCta, payload: payload };
})(window, document);
