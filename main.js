const c = window.CONTENT;
const $ = (id) => document.getElementById(id);
const esc = (s) => String(s).replace(/[&<>"]/g, (m) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[m]));
const tags = (list) => `<div class="tags">${list.map((t) => `<span class="tag">${esc(t)}</span>`).join("")}</div>`;

document.title = `${c.name} — ${c.role}`;
$("logo").innerHTML = `${esc(c.name.split(" ").slice(0, 2).join(".").toLowerCase())}<span>/backend</span>`;
$("chip").textContent = (c.available ? "Sẵn sàng trao đổi cơ hội mới · " : "") + c.location;
$("chip").classList.toggle("on", !!c.available);
$("headline").innerHTML = esc(c.headline).replace("backend", "<em>backend</em>");
$("intro").textContent = c.intro;

const ct = c.contact;
const link = (href, label, cls) => (href ? `<a class="btn ${cls}" href="${esc(href)}" target="_blank" rel="noopener">${esc(label)}</a>` : "");
$("hero-cta").innerHTML = `<a class="btn primary" href="#about">Tìm hiểu về mình</a>${c.cv ? `<a class="btn" href="${esc(c.cv)}" download>Tải CV (PDF) ↓</a>` : `<a class="btn" href="#contact">Liên hệ</a>`}`;
$("contact-cta").innerHTML = `<a class="btn light" href="mailto:${esc(ct.email)}">${esc(ct.email)}</a>${link(ct.github, "GitHub", "")}${link(ct.linkedin, "LinkedIn", "")}`;

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
  const flow = p.flow ? `<div class="flow">${p.flow.map((s, i) => (i ? "<b>→</b>" : "") + `<div>${esc(s)}</div>`).join("")}</div>` : "";
  const note = p.note ? `<div class="note">${esc(p.note)}</div>` : "";
  const pts = p.points ? `<ul>${p.points.map((x) => `<li>${esc(x)}</li>`).join("")}</ul>` : "";
  const desc = p.desc ? `<p>${esc(p.desc)}</p>` : "";
  if (p.bars) {
    const bars = p.bars.map(([l, v, w], i) => `<div class="bar-row ${i ? "after" : ""}"><div><span>${esc(l)}</span><span>${esc(v)}</span></div><div class="bar"><span data-w="${w}"></span></div></div>`).join("");
    return `<article class="card wide"><div class="col"><h3>${esc(p.title)}</h3>${desc}${tags(p.tags)}</div><div class="col bars">${bars}</div></article>`;
  }
  return `<article class="card"><h3>${esc(p.title)}</h3>${flow}${note}${desc}${pts}${tags(p.tags)}</article>`;
};
$("work-list").innerHTML = c.projects.map((g) => `
  <div class="place"><span>Tại ${esc(g.place)}</span><i></i><span>${esc(g.period)}</span></div>
  <div class="cards">${g.items.map(card).join("")}</div>`).join("");

$("skills").innerHTML = Object.entries(c.skills).map(([k, v]) =>
  `<div class="skill"><h3>${esc(k)}</h3><div class="list">${v.map((t) => `<span>${esc(t)}</span>`).join("")}</div></div>`).join("");
$("year").textContent = `© ${new Date().getFullYear()} ${c.name}`;

// Hiện dần khi cuộn tới
document.querySelectorAll("main section").forEach((s) => s.classList.add("reveal"));
const show = (el) => {
  el.classList.add("in");
  el.querySelectorAll(".bar span[data-w]").forEach((b) => (b.style.width = b.dataset.w + "%"));
};
if ("IntersectionObserver" in window) {
  const io = new IntersectionObserver((es) => es.forEach((e) => { if (e.isIntersecting) { show(e.target); io.unobserve(e.target); } }), { threshold: 0.08 });
  document.querySelectorAll(".reveal").forEach((el) => io.observe(el));
} else {
  document.querySelectorAll(".reveal").forEach(show);
}
