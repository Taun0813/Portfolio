const c = window.CONTENT;
const $ = (id) => document.getElementById(id);
const esc = (s) => String(s).replace(/[&<>"]/g, (m) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[m]));
const tags = (list) => `<div class="tags">${list.map((t) => `<span class="tag">${esc(t)}</span>`).join("")}</div>`;
const ICON = {
  arrow: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M5 12h14M13 6l6 6-6 6"/></svg>',
  copy: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><rect x="9" y="9" width="11" height="11" rx="2"/><path d="M5 15V6a2 2 0 0 1 2-2h9"/></svg>',
  download: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M12 4v11M7 11l5 5 5-5M5 20h14"/></svg>'
};

document.title = `${c.name} — ${c.role}`;
$("logo").textContent = c.name;
$("chip").textContent = (c.available ? "Sẵn sàng trao đổi cơ hội mới · " : "") + c.location;
$("chip").classList.toggle("on", !!c.available);
$("headline").innerHTML = esc(c.headline).replace(/backend/i, (m) => `<em>${m}</em>`);
$("intro").textContent = c.intro;

const ct = c.contact;
const link = (href, label) => (href ? `<a class="btn" href="${esc(href)}" target="_blank" rel="noopener">${esc(label)}</a>` : "");
$("hero-cta").innerHTML = `<a class="btn primary" href="#work">Xem dự án ${ICON.arrow}</a>${c.cv ? `<a class="btn" href="${esc(c.cv)}" download>Tải CV (PDF) ${ICON.download}</a>` : `<a class="btn" href="#contact">Liên hệ</a>`}`;
$("contact-cta").innerHTML = `<a class="btn light" href="mailto:${esc(ct.email)}">${esc(ct.email)}</a><button class="btn" type="button" id="copy-mail">Sao chép email ${ICON.copy}</button>${link(ct.github, "GitHub")}${link(ct.linkedin, "LinkedIn")}`;

$("avatar").textContent = c.name.split(" ").map((w) => w[0]).slice(0, 2).join("").toUpperCase();
$("snap-name").textContent = c.name;
$("snap-role").textContent = c.role;
const dl = (rows) => rows.map(([k, v]) => `<div><dt>${esc(k)}</dt><dd>${esc(v)}</dd></div>`).join("");
$("snap-list").innerHTML = dl(c.snapshot);
$("about-text").innerHTML = c.about.paragraphs.map((p) => `<p>${esc(p)}</p>`).join("");
$("facts").innerHTML = dl(c.about.facts);

$("exp-list").innerHTML = c.experience.map((e) => `
  <div class="exp"><span class="period">${esc(e.period)}</span>
  <div class="exp-body"><h3>${esc(e.title)} · ${esc(e.org)}</h3><p>${esc(e.desc)}</p></div></div>`).join("");

const card = (p) => {
  const flow = p.flow ? `<div class="flow">${p.flow.map((s, i) => (i ? `<span class="arrow">${ICON.arrow}</span>` : "") + `<div>${esc(s)}</div>`).join("")}</div>` : "";
  const note = p.note ? `<div class="note">${esc(p.note)}</div>` : "";
  const pts = p.points ? `<ul>${p.points.map((x) => `<li>${esc(x)}</li>`).join("")}</ul>` : "";
  const desc = p.desc ? `<p>${esc(p.desc)}</p>` : "";
  if (p.bars) {
    const bars = p.bars.map(([l, v, w], i) => `<div class="bar-row ${i ? "after" : ""}"><div><span>${esc(l)}</span><span>${esc(v)}</span></div><div class="bar"><span style="--w:${w}%" data-w="${w}"></span></div></div>`).join("");
    return `<article class="card wide"><div class="col"><h3>${esc(p.title)}</h3>${desc}${tags(p.tags)}</div><div class="col bars">${bars}</div></article>`;
  }
  return `<article class="card"><h3>${esc(p.title)}</h3>${flow}${note}${desc}${pts}${tags(p.tags)}</article>`;
};
$("work-list").innerHTML = c.projects.map((g) => `
  <div class="place"><span>Tại ${esc(g.place)}</span><i></i><span>${esc(g.period)}</span></div>
  <div class="cards">${g.items.map(card).join("")}</div>`).join("");

$("skills").innerHTML = Object.entries(c.skills).map(([k, v]) =>
  `<div class="skill"><h3>${esc(k)}</h3><p>${v.map(esc).join(" · ")}</p></div>`).join("");
$("year").textContent = `© ${new Date().getFullYear()} ${c.name}`;

// Sao chép email, có phản hồi cho người dùng
const toast = $("toast");
$("copy-mail").addEventListener("click", async () => {
  try {
    await navigator.clipboard.writeText(ct.email);
    toast.textContent = "Đã sao chép email vào bộ nhớ tạm.";
  } catch (e) {
    toast.textContent = `Chưa sao chép được, bạn có thể chép tay: ${ct.email}`;
  }
  clearTimeout(toast._t);
  toast._t = setTimeout(() => (toast.textContent = ""), 4000);
});

// Thanh thời gian phản hồi chạy khi cuộn tới
const fill = (el) => el.querySelectorAll(".bar span[data-w]").forEach((b) => (b.style.width = b.dataset.w + "%"));
const cardsWithBars = document.querySelectorAll(".bars");
if ("IntersectionObserver" in window) {
  const io = new IntersectionObserver((es) => es.forEach((e) => { if (e.isIntersecting) { fill(e.target); io.unobserve(e.target); } }), { threshold: 0.4 });
  cardsWithBars.forEach((el) => io.observe(el));
} else {
  cardsWithBars.forEach(fill);
}

// Làm nổi bật mục đang xem trên thanh điều hướng
const links = [...document.querySelectorAll("#nav a[href^='#']:not(.nav-cta)")];
if ("IntersectionObserver" in window) {
  const secs = links.map((a) => document.querySelector(a.getAttribute("href"))).filter(Boolean);
  const spy = new IntersectionObserver((es) => es.forEach((e) => {
    if (!e.isIntersecting) return;
    links.forEach((a) => a.setAttribute("aria-current", String(a.getAttribute("href") === "#" + e.target.id)));
  }), { rootMargin: "-40% 0px -55% 0px" });
  secs.forEach((s) => spy.observe(s));
}
