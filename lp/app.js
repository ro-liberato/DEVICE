/**
 * Landing page Instituto Braga — PROTÓTIPO DE INTERFACE (sem backend).
 * Todo estado vive em memória. Nada é enviado, salvo, reservado ou cobrado.
 * Integrações: veja booking-service.js.
 */
(function () {
  "use strict";
  var C = window.SITE_CONFIG, D = window.DEMO_DATA, S = window.BookingService;

  /* ---------- Ícones ---------- */
  var P = {
    calendar: '<rect x="3.5" y="5" width="17" height="15.5" rx="2.5"/><path d="M3.5 10h17M8 3v4M16 3v4"/>',
    shield: '<path d="M12 3l7.5 3v5.5c0 4.6-3.1 8-7.5 9.5-4.4-1.5-7.5-4.9-7.5-9.5V6L12 3z"/><path d="M8.8 12.2l2.2 2.2 4.2-4.4"/>',
    team: '<circle cx="9" cy="8.5" r="3.2"/><path d="M3 19.5c.4-3.3 2.9-5.2 6-5.2s5.6 1.9 6 5.2"/><circle cx="17" cy="9.5" r="2.4"/><path d="M17.5 14.5c2.2.2 3.7 1.7 4 4"/>',
    male: '<circle cx="10" cy="14" r="5.5"/><path d="M14 10l6-6M15 4h5v5"/>',
    protese: '<rect x="7" y="3" width="3.6" height="18" rx="1.8"/><rect x="13.4" y="3" width="3.6" height="18" rx="1.8"/>',
    syringe: '<path d="M15 4l5 5M17 6l-9.5 9.5-2 4.5 4.5-2L19.5 8.5M12 9l3 3M3.5 20.5L6 18"/>',
    curve: '<path d="M3 15c4 0 4-6 9-6s5 6 9 6M3 19c4 0 4-4 9-4"/>',
    prostate: '<path d="M12 7c-1-2.6-5.5-3.2-7.5-.8C2.4 8.8 3.4 13 7 16.3c2 1.8 4 3.2 5 4.7 1-1.5 3-2.9 5-4.7 3.6-3.3 4.6-7.5 2.5-10.1C17.5 3.8 13 4.4 12 7z"/>',
    chevron: '<path d="M9 6l6 6-6 6"/>',
    chevronLeft: '<path d="M15 6l-6 6 6 6"/>',
    chevronDown: '<path d="M6 9l6 6 6-6"/>',
    pin: '<path d="M12 21s6.5-5.7 6.5-11a6.5 6.5 0 10-13 0C5.5 15.3 12 21 12 21z"/><circle cx="12" cy="10" r="2.3"/>',
    lock: '<rect x="5" y="10.5" width="14" height="10" rx="2.5"/><path d="M8 10.5V8a4 4 0 018 0v2.5"/>',
    menu: '<path d="M4 7h16M4 12h16M4 17h16"/>',
    close: '<path d="M6 6l12 12M18 6L6 18"/>',
    info: '<circle cx="12" cy="12" r="9"/><path d="M12 11v5M12 8h.01"/>',
    clock: '<circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 2"/>',
    user: '<circle cx="12" cy="8" r="4"/><path d="M4.5 20c.7-4 3.8-6 7.5-6s6.8 2 7.5 6"/>',
  };
  function icon(name, size) {
    size = size || 22;
    return '<svg class="icon" width="' + size + '" height="' + size + '" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">' + P[name] + "</svg>";
  }
  function hydrateIcons(root) {
    (root || document).querySelectorAll("i[data-icon]").forEach(function (el) {
      el.outerHTML = icon(el.dataset.icon, +el.dataset.size || 22);
    });
  }
  var $ = function (s, r) { return (r || document).querySelector(s); };

  /* ---------- Links configuráveis ---------- */
  document.querySelectorAll("[data-wa]").forEach(function (a) { a.href = C.whatsappUrl; });
  document.querySelectorAll("[data-policy]").forEach(function (a) { a.href = C.policyLinks[a.dataset.policy]; });

  /* ---------- Menu mobile ---------- */
  var nav = $("#menu-principal"), toggle = $("#menu-toggle");
  function setMenu(open) {
    nav.classList.toggle("nav--open", open);
    toggle.setAttribute("aria-expanded", open);
    toggle.setAttribute("aria-label", open ? "Fechar menu" : "Abrir menu");
    toggle.innerHTML = icon(open ? "close" : "menu", 26);
  }
  toggle.addEventListener("click", function () { setMenu(!nav.classList.contains("nav--open")); });
  nav.addEventListener("click", function (e) { if (e.target.closest("a")) setMenu(false); });

  /* ---------- Seções estáticas a partir dos dados ---------- */
  $("#highlights").innerHTML = D.highlights.map(function (h) {
    return "<li>" + icon(h.icon, 24) + "<span>" + h.label + "</span></li>";
  }).join("");

  $("#treatments").innerHTML = D.treatments.map(function (t) {
    return '<article class="card treatment"><span class="treatment__icon">' + icon(t.icon, 30) + "</span><div><h3>" + t.title + "</h3><p>" + t.description +
      '</p><a class="link" href="' + t.href + '" aria-label="Saiba mais sobre ' + t.title + '">Saiba mais ' + icon("chevron", 14) + "</a></div></article>";
  }).join("");

  $("#how").innerHTML = D.howItWorks.map(function (s, i) {
    return '<li><span class="how__num">' + (i + 1) + "</span><div><strong>" + s.title + "</strong><p>" + s.text + "</p></div></li>";
  }).join("");

  /* ---------- FAQ (sanfona) ---------- */
  var faqEl = $("#faq");
  D.faq.forEach(function (item, i) {
    var wrap = document.createElement("div");
    wrap.className = "faq__item" + (i === 0 ? " is-open" : "");
    wrap.innerHTML = '<h3><button id="faq-btn-' + i + '" aria-controls="faq-' + i + '" aria-expanded="' + (i === 0) + '">' + item.q + icon("chevronDown", 18).replace('class="icon"', 'class="icon faq__chev"') +
      '</button></h3><div id="faq-' + i + '" role="region" aria-labelledby="faq-btn-' + i + '"' + (i === 0 ? "" : " hidden") + "><p>" + item.a + "</p></div>";
    wrap.querySelector("button").addEventListener("click", function () {
      var open = !wrap.classList.contains("is-open");
      faqEl.querySelectorAll(".faq__item").forEach(function (w) {
        w.classList.remove("is-open");
        w.querySelector("button").setAttribute("aria-expanded", "false");
        w.querySelector('[role="region"]').hidden = true;
      });
      if (open) {
        wrap.classList.add("is-open");
        wrap.querySelector("button").setAttribute("aria-expanded", "true");
        wrap.querySelector('[role="region"]').hidden = false;
      }
    });
    faqEl.appendChild(wrap);
  });

  /* =====================================================
   * AGENDAMENTO — protótipo
   * ===================================================== */
  var MONTHS = ["Janeiro","Fevereiro","Março","Abril","Maio","Junho","Julho","Agosto","Setembro","Outubro","Novembro","Dezembro"];
  var WEEKDAYS = ["Dom","Seg","Ter","Qua","Qui","Sex","Sáb"];
  var STEPS = ["Escolha um horário", "Seus dados", "Pagamento"];
  var now = new Date();
  var state = {
    step: 1,
    view: new Date(now.getFullYear(), now.getMonth(), 1),
    date: null, time: null, modalityId: "presencial",
    patient: { name: "", email: "", phone: "", birth: "", consent: false },
  };
  var panel = $("#booking-panel");

  function iso(d) { return d.getFullYear() + "-" + (d.getMonth() + 1) + "-" + d.getDate(); }
  function modality() { return D.modalities.filter(function (m) { return m.id === state.modalityId; })[0]; }

  function goTo(n) {
    // [INTEGRAÇÃO 2] reserveSlot ao ir para 2/3; releaseSlot ao voltar para 1.
    state.step = n;
    render();
    $("#agendamento").scrollIntoView({ behavior: "smooth", block: "start" });
  }

  function renderSteps() {
    $("#steps").innerHTML = STEPS.map(function (label, i) {
      var n = i + 1, cls = n === state.step ? "is-current" : n < state.step ? "is-done" : "";
      return '<li class="steps__item ' + cls + '"' + (n === state.step ? ' aria-current="step"' : "") + '><span class="steps__num">' + n + '</span><span class="steps__label">' + label + "</span></li>";
    }).join("");
  }

  function summaryHTML() {
    var m = modality();
    var dateTxt = state.date ? state.date.toLocaleDateString("pt-BR", { weekday: "long", day: "numeric", month: "long", year: "numeric" }) : "—";
    return '<aside class="summary" aria-label="Resumo do agendamento"><h4>Resumo do agendamento</h4><ul>' +
      "<li>" + icon("user", 18) + " Consulta com " + C.doctor.name + "</li>" +
      "<li>" + icon("calendar", 18) + "<span>" + dateTxt + "</span></li>" +
      "<li>" + icon("clock", 18) + " " + (state.time || "—") + "</li>" +
      "<li>" + icon("pin", 18) + "<span>" + m.label + "<small>" + m.detail + "</small></span></li></ul></aside>";
  }

  /* ----- Etapa 1 ----- */
  function calendarHTML() {
    var y = state.view.getFullYear(), mo = state.view.getMonth();
    var first = new Date(y, mo, 1).getDay(), days = new Date(y, mo + 1, 0).getDate();
    var isCurrent = y === now.getFullYear() && mo === now.getMonth();
    var cells = WEEKDAYS.map(function (w) { return '<span class="calendar__wd" role="columnheader">' + w + "</span>"; }).join("");
    for (var i = 0; i < first; i++) cells += "<span></span>";
    for (var d = 1; d <= days; d++) {
      var date = new Date(y, mo, d);
      // [INTEGRAÇÃO 1] disponibilidade por dia (hoje: dados fictícios).
      var avail = S.fetchAvailableSlots(date, state.modalityId).length > 0;
      var sel = state.date && iso(state.date) === iso(date);
      cells += '<button type="button" class="calendar__day' + (avail ? " is-available" : "") + (sel ? " is-selected" : "") + '"' +
        (avail ? "" : " disabled") + ' data-day="' + d + '" aria-pressed="' + !!sel + '" aria-label="' + d + " de " + MONTHS[mo] + (avail ? "" : " (sem horários na demonstração)") + '">' + d + "</button>";
    }
    return '<div class="calendar"><div class="calendar__nav"><button type="button" data-nav="-1" aria-label="Mês anterior"' + (isCurrent ? " disabled" : "") + ">" + icon("chevronLeft", 18) +
      '</button><strong aria-live="polite">' + MONTHS[mo] + " " + y + '</strong><button type="button" data-nav="1" aria-label="Próximo mês">' + icon("chevron", 18) +
      '</button></div><div class="calendar__grid" role="grid" aria-label="Calendário de demonstração">' + cells + "</div></div>";
  }

  function renderSchedule() {
    var slots = state.date ? S.fetchAvailableSlots(state.date, state.modalityId) : [];
    var title = state.date ? "Horários de demonstração em " + state.date.toLocaleDateString("pt-BR", { day: "numeric", month: "long" }) : "Selecione uma data no calendário";
    var can = state.date && state.time;
    panel.innerHTML = '<div class="step-panel step-panel--schedule"><div class="step-panel__col">' + calendarHTML() + '</div><div class="step-panel__col">' +
      '<p class="demo-note" role="note">Protótipo: datas e horários abaixo são fictícios e não representam a agenda real.</p><h3>' + title + "</h3>" +
      '<div class="slots" role="group" aria-label="Horários de demonstração">' + slots.map(function (s) {
        return '<button type="button" class="slot' + (state.time === s ? " is-selected" : "") + '" data-slot="' + s + '" aria-pressed="' + (state.time === s) + '">' + s + "</button>";
      }).join("") + "</div>" +
      '<fieldset class="modalities"><legend>Modalidade de atendimento</legend>' + D.modalities.map(function (m) {
        return '<label class="modality' + (state.modalityId === m.id ? " is-selected" : "") + '"><input type="radio" name="modality" value="' + m.id + '"' + (state.modalityId === m.id ? " checked" : "") +
          "><span><strong>" + m.label + "</strong><small>" + m.detail + "</small></span></label>";
      }).join("") + "</fieldset>" +
      '<button class="btn btn--primary btn--block" id="go-next"' + (can ? "" : " disabled") + "><span>Continuar</span>" + icon("chevron", 16) + "</button>" +
      (can ? "" : '<p class="hint">Escolha data e horário para continuar.</p>') + "</div></div>";

    panel.querySelectorAll("[data-nav]").forEach(function (b) {
      b.onclick = function () { state.view = new Date(state.view.getFullYear(), state.view.getMonth() + +b.dataset.nav, 1); renderSchedule(); };
    });
    panel.querySelectorAll("[data-day]").forEach(function (b) {
      b.onclick = function () { state.date = new Date(state.view.getFullYear(), state.view.getMonth(), +b.dataset.day); state.time = null; renderSchedule(); };
    });
    panel.querySelectorAll("[data-slot]").forEach(function (b) {
      b.onclick = function () { state.time = b.dataset.slot; renderSchedule(); };
    });
    panel.querySelectorAll('input[name="modality"]').forEach(function (r) {
      r.onchange = function () { state.modalityId = r.value; state.time = null; renderSchedule(); };
    });
    var next = $("#go-next"); if (next) next.onclick = function () { goTo(2); };
  }

  /* ----- Etapa 2 ----- */
  var digits = function (v) { return v.replace(/\D/g, ""); };
  function maskPhone(v) {
    var d = digits(v).slice(0, 11);
    if (d.length <= 2) return d;
    if (d.length <= 6) return "(" + d.slice(0, 2) + ") " + d.slice(2);
    if (d.length <= 10) return "(" + d.slice(0, 2) + ") " + d.slice(2, 6) + "-" + d.slice(6);
    return "(" + d.slice(0, 2) + ") " + d.slice(2, 7) + "-" + d.slice(7);
  }
  function maskDate(v) {
    var d = digits(v).slice(0, 8);
    if (d.length <= 2) return d;
    if (d.length <= 4) return d.slice(0, 2) + "/" + d.slice(2);
    return d.slice(0, 2) + "/" + d.slice(2, 4) + "/" + d.slice(4);
  }
  function validate(p) {
    var e = {};
    if (p.name.trim().split(/\s+/).filter(Boolean).length < 2) e.name = "Informe seu nome completo (nome e sobrenome).";
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(p.email.trim())) e.email = "Informe um e-mail válido, por exemplo nome@email.com.";
    var ph = digits(p.phone);
    if (ph.length < 10 || ph.length > 11) e.phone = "Informe um telefone com DDD, por exemplo (21) 99999-9999.";
    var b = /^(\d{2})\/(\d{2})\/(\d{4})$/.exec(p.birth);
    if (!b) e.birth = "Informe a data de nascimento no formato DD/MM/AAAA.";
    else {
      var dd = +b[1], mm = +b[2], yy = +b[3], dt = new Date(yy, mm - 1, dd);
      if (dt.getFullYear() !== yy || dt.getMonth() !== mm - 1 || dt.getDate() !== dd || dt > new Date() || yy < 1900) e.birth = "Data de nascimento inválida.";
    }
    if (!p.consent) e.consent = "É necessário confirmar a ciência da Política de Privacidade para continuar.";
    return e;
  }

  function renderPatient() {
    var p = state.patient;
    function field(id, label, extra) {
      return '<div class="field" data-field="' + id + '"><label for="' + id + '">' + label + '</label><input id="' + id + '" value="' + String(p[id]).replace(/&/g, "&amp;").replace(/"/g, "&quot;").replace(/</g, "&lt;") + '" ' + extra + '><p class="field__error" id="' + id + '-error" role="alert" hidden></p></div>';
    }
    panel.innerHTML = '<form class="step-panel step-panel--patient" novalidate><div class="step-panel__col"><h3>Seus dados</h3>' +
      field("name", "Nome completo", 'autocomplete="name"') +
      field("email", "E-mail", 'type="email" autocomplete="email"') +
      '<div class="field-row">' + field("phone", "Telefone / WhatsApp", 'type="tel" inputmode="tel" autocomplete="tel" placeholder="(21) 99999-9999"') +
      field("birth", "Data de nascimento", 'inputmode="numeric" autocomplete="bday" placeholder="DD/MM/AAAA"') + "</div>" +
      '<div class="field field--check" data-field="consent"><label><input type="checkbox" id="consent"' + (p.consent ? " checked" : "") + '><span>Li e estou ciente da <a class="link" href="' + C.policyLinks.privacy +
      '">Política de Privacidade</a> e dos <a class="link" href="' + C.policyLinks.terms + '">Termos de Uso</a>.</span></label><p class="field__error" id="consent-error" role="alert" hidden></p></div>' +
      '<p class="hint">Protótipo: os dados informados não são enviados nem armazenados.</p></div>' +
      '<div class="step-panel__col">' + summaryHTML() + '<div class="actions"><button type="button" class="btn btn--outline" id="go-back"><span>Voltar</span></button>' +
      '<button type="submit" class="btn btn--primary"><span>Continuar</span>' + icon("chevron", 16) + "</button></div></div></form>";

    var form = panel.querySelector("form"), submitted = false;
    function showErrors() {
      var errs = validate(state.patient);
      ["name", "email", "phone", "birth", "consent"].forEach(function (k) {
        var box = $("#" + k + "-error"), wrap = form.querySelector('[data-field="' + k + '"]'), input = $("#" + k);
        box.hidden = !errs[k]; box.textContent = errs[k] || "";
        wrap.classList.toggle("has-error", !!errs[k]);
        input.setAttribute("aria-invalid", !!errs[k]);
        if (errs[k]) input.setAttribute("aria-describedby", k + "-error"); else input.removeAttribute("aria-describedby");
      });
      return errs;
    }
    ["name", "email", "phone", "birth"].forEach(function (k) {
      $("#" + k).addEventListener("input", function (e) {
        var v = e.target.value;
        if (k === "phone") v = maskPhone(v);
        if (k === "birth") v = maskDate(v);
        e.target.value = v; state.patient[k] = v;
        if (submitted) showErrors();
      });
    });
    $("#consent").addEventListener("change", function (e) { state.patient.consent = e.target.checked; if (submitted) showErrors(); });
    $("#go-back").onclick = function () { goTo(1); };
    form.addEventListener("submit", function (ev) {
      ev.preventDefault(); submitted = true;
      var errs = showErrors(), keys = Object.keys(errs);
      if (keys.length) { $("#" + keys[0]).focus(); return; }
      // [INTEGRAÇÃO 3] Envio dos dados: S.submitBookingData({...}) e S.reserveSlot({...}) aqui.
      goTo(3);
    });
  }

  /* ----- Etapa 3 (somente visual) ----- */
  function renderPayment() {
    // [INTEGRAÇÃO 4] Substituir ".pay-demo" pelo checkout oficial do provedor (S.createPaymentCheckout).
    // [INTEGRAÇÃO 5] Após confirmação do backend: S.confirmBookingAndCreateEvent e tela de confirmação real.
    function dis(id, label, ph) {
      return '<div class="field"><label for="' + id + '">' + label + '</label><input id="' + id + '" disabled placeholder="' + ph + '" autocomplete="off"></div>';
    }
    panel.innerHTML = '<div class="step-panel step-panel--payment"><div class="step-panel__col"><h3>' + icon("lock", 20) + " Pagamento</h3>" +
      '<div class="notice" role="status">' + icon("info", 20) + "<p>O pagamento será conectado na próxima etapa de desenvolvimento. Nenhum pagamento é processado e nenhuma consulta é confirmada neste protótipo.</p></div>" +
      '<div class="pay-demo" aria-label="Demonstração visual dos campos de cartão (inativos)">' + dis("card-name", "Nome no cartão", "Demonstração visual") + dis("card-number", "Número do cartão", "•••• •••• •••• ••••") +
      '<div class="field-row">' + dis("card-exp", "Validade", "MM/AA") + dis("card-cvv", "CVV", "•••") + "</div></div></div>" +
      '<div class="step-panel__col">' + summaryHTML() + '<p class="summary__price">Valor da consulta: <strong>a definir na integração</strong></p>' +
      '<div class="actions"><button type="button" class="btn btn--outline" id="go-back"><span>Voltar</span></button>' +
      '<button type="button" class="btn btn--primary" disabled aria-disabled="true">' + icon("lock", 18) + "<span>Confirmar agendamento (em breve)</span></button></div></div></div>";
    $("#go-back").onclick = function () { goTo(2); };
  }

  function render() {
    renderSteps();
    if (state.step === 1) renderSchedule();
    else if (state.step === 2) renderPatient();
    else renderPayment();
  }

  hydrateIcons();
  render();
})();
