/* CAZA FINNANCIAL desk chat + live booking */
const CAZA_CHAT_URL = "https://jtifhcvbgxqwlywugvjv.supabase.co/functions/v1/caza-chat";
const CAZA_ANON =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imp0aWZoY3ZiZ3hxd2x5d3Vndmp2Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzI1MDc5NTgsImV4cCI6MjA4ODA4Mzk1OH0.UfRVLuvM8_HPvKXUEDXb0cxR50znv16L5Tf99AnSc7g";
const SESSION_KEY = "caza_chat_sid";

function sid() {
  try {
    let v = sessionStorage.getItem(SESSION_KEY);
    if (v) return v;
    v = crypto.randomUUID();
    sessionStorage.setItem(SESSION_KEY, v);
    return v;
  } catch {
    return "anon";
  }
}

const COPY = {
  en: {
    hello: "Hi, I am the Caza Finnancial desk. I can share hours, walk through services, or book a 45-minute consult with Ismael. How can I help?",
    hours: "Hours",
    book: "Book a consult",
    services: "Services",
    ph: "Ask about hours, taxes, or booking",
    online: "Online · booking desk",
    note: "CAZA desk · 702-203-2757",
    nudgeTitle: "Have a question?",
    nudgeBody: "Chat with the desk — hours, taxes, or book a consult with Ismael.",
    nudgeDismiss: "Dismiss chat invite",
    pick: "Open times (Pacific)",
    need: "To lock that time I need your name and a phone or email.",
    name: "Your name",
    email: "Email",
    phone: "Phone",
    lock: "Book this time",
    sending: "Booking…",
    oops: "Something went wrong. Call 702-203-2757.",
  },
  es: {
    hello: "Hola, soy la oficina de Caza Finnancial. Puedo decirle el horario, explicar los servicios o reservar una consulta de 45 minutos con Ismael. ¿En qué le ayudo?",
    hours: "Horario",
    book: "Reservar consulta",
    services: "Servicios",
    ph: "Pregunte por horario, impuestos o citas",
    online: "En línea · citas",
    note: "Oficina CAZA · 702-203-2757",
    nudgeTitle: "¿Tiene una pregunta?",
    nudgeBody: "Escriba a la oficina — horario, impuestos o una cita con Ismael.",
    nudgeDismiss: "Cerrar invitación de chat",
    pick: "Horarios abiertos (Pacífico)",
    need: "Para reservar necesito su nombre y un teléfono o correo.",
    name: "Su nombre",
    email: "Correo",
    phone: "Teléfono",
    lock: "Reservar esta hora",
    sending: "Reservando…",
    oops: "Algo salió mal. Llame al 702-203-2757.",
  },
};

function lang() {
  return document.documentElement.lang === "es" ? "es" : "en";
}
function t() {
  return COPY[lang()];
}

export function initCazaChat() {
  const root = document.getElementById("cazaChat");
  if (!root || root.dataset.ready === "1") return;
  root.dataset.ready = "1";
  const panel = document.getElementById("cazaChatPanel");
  const fab = document.getElementById("cazaChatFab");
  const msgs = document.getElementById("cazaChatMsgs");
  const input = document.getElementById("cazaChatInput");
  const sendBtn = document.getElementById("cazaChatSend");
  const quick = document.getElementById("cazaChatQuick");
  const status = document.getElementById("cazaChatStatus");
  const note = document.getElementById("cazaChatNote");
  const closeBtn = document.getElementById("cazaChatClose");
  const nudge = document.getElementById("cazaChatNudge");
  const nudgeX = document.getElementById("cazaChatNudgeX");
  const nudgeTitle = document.getElementById("cazaChatNudgeTitle");
  const nudgeBody = document.getElementById("cazaChatNudgeBody");
  const NUDGE_KEY = "caza_chat_nudge_off";

  const convo = [];
  let pendingSlot = null;
  let opened = false;

  function nudgeOff() {
    try { return sessionStorage.getItem(NUDGE_KEY) === "1"; } catch { return false; }
  }
  function dismissNudge() {
    if (nudge) nudge.classList.remove("is-on");
    try { sessionStorage.setItem(NUDGE_KEY, "1"); } catch {}
  }
  function showNudge() {
    if (!nudge || opened || nudgeOff()) return;
    nudge.classList.add("is-on");
  }

  function paintChrome() {
    if (status) status.textContent = t().online;
    if (note) note.textContent = t().note;
    if (input) input.placeholder = t().ph;
    if (nudgeTitle) nudgeTitle.textContent = t().nudgeTitle;
    if (nudgeBody) nudgeBody.textContent = t().nudgeBody;
    if (nudgeX) nudgeX.setAttribute("aria-label", t().nudgeDismiss);
    if (quick) {
      quick.innerHTML = "";
      [["hours", t().hours], ["book", t().book], ["services", t().services]].forEach(([k, label]) => {
        const b = document.createElement("button");
        b.type = "button";
        b.textContent = label;
        b.addEventListener("click", () => {
          const map = {
            hours: lang() === "es" ? "¿Cuál es su horario?" : "What are your hours?",
            book: lang() === "es" ? "Quiero reservar una consulta" : "I want to book a consult",
            services: lang() === "es" ? "¿Qué servicios ofrecen?" : "What services do you offer?",
          };
          send(map[k]);
        });
        quick.appendChild(b);
      });
    }
  }

  function bubble(text, role) {
    const el = document.createElement("div");
    el.className = "caza-msg caza-msg--" + role;
    el.innerHTML = "<p></p>";
    el.querySelector("p").textContent = text;
    msgs.appendChild(el);
    msgs.scrollTop = msgs.scrollHeight;
    return el;
  }

  function renderSlots(slots) {
    if (!slots || !slots.length) return;
    const wrap = document.createElement("div");
    wrap.className = "caza-slots";
    const h = document.createElement("div");
    h.className = "caza-slots-h";
    h.textContent = t().pick;
    wrap.appendChild(h);
    slots.forEach((s) => {
      const b = document.createElement("button");
      b.type = "button";
      b.textContent = s.label;
      b.addEventListener("click", () => startBook(s));
      wrap.appendChild(b);
    });
    msgs.appendChild(wrap);
    msgs.scrollTop = msgs.scrollHeight;
  }

  function startBook(slot) {
    pendingSlot = slot;
    const card = document.createElement("form");
    card.className = "caza-book";
    card.innerHTML = `
      <p>${t().need}</p>
      <p class="caza-book-when">${slot.label}</p>
      <input name="name" required placeholder="${t().name}" autocomplete="name">
      <input name="email" type="email" placeholder="${t().email}" autocomplete="email">
      <input name="phone" type="tel" placeholder="${t().phone}" autocomplete="tel">
      <button type="submit">${t().lock}</button>
      <span class="caza-book-err" hidden></span>`;
    card.addEventListener("submit", async (e) => {
      e.preventDefault();
      const fd = new FormData(card);
      const name = String(fd.get("name") || "").trim();
      const email = String(fd.get("email") || "").trim();
      const phone = String(fd.get("phone") || "").trim();
      const err = card.querySelector(".caza-book-err");
      if (!name || (!email && !phone)) {
        err.hidden = false;
        err.textContent = t().need;
        return;
      }
      const btn = card.querySelector("button");
      btn.disabled = true;
      btn.textContent = t().sending;
      try {
        const res = await fetch(CAZA_CHAT_URL, {
          method: "POST",
          headers: {
            "content-type": "application/json",
            apikey: CAZA_ANON,
            authorization: "Bearer " + CAZA_ANON,
          },
          body: JSON.stringify({
            action: "book",
            name, email, phone,
            slot_iso: slot.iso,
            lang: lang(),
            session_id: sid(),
            ...(window.cazaAttr && window.cazaAttr.payload ? { attribution: window.cazaAttr.payload("chat") } : {}),
          }),
        });
        const d = await res.json();
        if (!d.ok) throw new Error(d.error || "book failed");
        card.remove();
        const line = lang() === "es"
          ? `Listo. Quedó agendado el ${d.label}. Le enviamos confirmación si dejó un correo.`
          : `You are booked for ${d.label}. We sent a confirmation if you left an email.`;
        convo.push({ role: "user", content: `Book ${slot.label}` });
        convo.push({ role: "assistant", content: line });
        bubble(line, "bot");
      } catch (_) {
        err.hidden = false;
        err.textContent = t().oops;
        btn.disabled = false;
        btn.textContent = t().lock;
      }
    });
    msgs.appendChild(card);
    msgs.scrollTop = msgs.scrollHeight;
  }

  async function send(text) {
    const value = (text || input.value || "").trim();
    if (!value) return;
    input.value = "";
    bubble(value, "user");
    convo.push({ role: "user", content: value });
    const typing = bubble("…", "bot");
    sendBtn.disabled = true;
    try {
      const res = await fetch(CAZA_CHAT_URL, {
        method: "POST",
        headers: {
          "content-type": "application/json",
          apikey: CAZA_ANON,
          authorization: "Bearer " + CAZA_ANON,
        },
        body: JSON.stringify({
          messages: convo,
          session_id: sid(),
          ...(window.cazaAttr && window.cazaAttr.payload ? { attribution: window.cazaAttr.payload("chat") } : {}),
        }),
      });
      const d = await res.json();
      typing.remove();
      const reply = (d && d.reply) || t().oops;
      convo.push({ role: "assistant", content: reply });
      bubble(reply, "bot");
      if (d && d.slots) renderSlots(d.slots);
    } catch (_) {
      typing.remove();
      bubble(t().oops, "bot");
    } finally {
      sendBtn.disabled = false;
      input.focus();
    }
  }

  function open() {
    opened = true;
    dismissNudge();
    root.classList.add("is-open");
    fab.setAttribute("aria-expanded", "true");
    if (!msgs.children.length) {
      paintChrome();
      bubble(t().hello, "bot");
    }
    input.focus();
  }
  function close() {
    opened = false;
    root.classList.remove("is-open");
    fab.setAttribute("aria-expanded", "false");
  }

  if (!fab || !sendBtn || !input) return;
  fab.addEventListener("click", () => {
    if (window.cazaAttr && window.cazaAttr.markCta) window.cazaAttr.markCta("chat-fab", "chat");
    opened ? close() : open();
  });
  nudge?.addEventListener("click", (e) => {
    if (e.target.closest(".caza-chat-nudge-x")) return;
    if (window.cazaAttr && window.cazaAttr.markCta) window.cazaAttr.markCta("chat-nudge", "chat");
    open();
  });
  nudgeX?.addEventListener("click", (e) => {
    e.preventDefault();
    e.stopPropagation();
    dismissNudge();
  });
  closeBtn?.addEventListener("click", close);
  sendBtn.addEventListener("click", () => send());
  input.addEventListener("keydown", (e) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      send();
    }
  });
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && opened) close();
  });

  const langEn = document.getElementById("langEn");
  const langEs = document.getElementById("langEs");
  langEn?.addEventListener("click", () => setTimeout(paintChrome, 0));
  langEs?.addEventListener("click", () => setTimeout(paintChrome, 0));
  paintChrome();
  setTimeout(showNudge, 1100);
}

if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", initCazaChat);
} else {
  initCazaChat();
}
