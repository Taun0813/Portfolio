const c = window.CONTENT;
const $ = (id) => document.getElementById(id);
const esc = (s) => String(s).replace(/[&<>"]/g, (m) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[m]));
const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

document.title = `${c.name} — ${c.role}`;
$("logo").textContent = c.name;
$("badge").textContent = c.available ? "Đang nhận cơ hội mới · " + c.location : c.location;
$("badge").classList.toggle("on", !!c.available);

$("about-body").innerHTML = c.about.map((p) => `<p>${esc(p)}</p>`).join("");
$("skills").innerHTML = Object.entries(c.skills)
  .map(([k, v], i) => `<div class="skill-row" style="--i:${i}"><h3>${esc(k)}</h3><div class="tags">${v.map((t) => `<span>${esc(t)}</span>`).join("")}</div></div>`)
  .join("");

// dải kỹ năng chạy ngang (nhân đôi để lặp mượt)
const allSkills = Object.values(c.skills).flat().map((s) => `<span>${esc(s)}</span>`).join("");
$("marquee").innerHTML = allSkills + allSkills + allSkills + allSkills;

$("project-list").innerHTML = c.projects
  .map((p, i) => `
    <article class="card" style="--i:${i}">
      <h3>${esc(p.title)}</h3>
      <p>${esc(p.desc)}</p>
      <div class="tags">${p.tags.map((t) => `<span>${esc(t)}</span>`).join("")}</div>
      <div class="links">
        ${p.live ? `<a href="${esc(p.live)}" target="_blank" rel="noopener">Xem demo ↗</a>` : ""}
        ${p.repo ? `<a href="${esc(p.repo)}" target="_blank" rel="noopener">Mã nguồn ↗</a>` : ""}
      </div>
    </article>`)
  .join("");

$("exp-list").innerHTML = c.experience
  .map((e, i) => `
    <div class="exp" style="--i:${i}">
      <span class="period">${esc(e.period)}</span>
      <div><h3>${esc(e.title)} · <em>${esc(e.org)}</em></h3>
      <ul>${e.points.map((p) => `<li>${esc(p)}</li>`).join("")}</ul></div>
    </div>`)
  .join("");

const ct = c.contact;
$("contact-body").innerHTML = `
  <p>Có dự án hoặc cơ hội hợp tác? Hãy nhắn cho mình.</p>
  <div class="cta">
    <a class="btn primary" href="mailto:${esc(ct.email)}">${esc(ct.email)}</a>
    ${ct.github ? `<a class="btn" href="${esc(ct.github)}" target="_blank" rel="noopener">GitHub</a>` : ""}
    ${ct.linkedin ? `<a class="btn" href="${esc(ct.linkedin)}" target="_blank" rel="noopener">LinkedIn</a>` : ""}
  </div>`;

$("year").textContent = `© ${new Date().getFullYear()} ${c.name}`;
$("print").addEventListener("click", () => window.print());
$("theme").addEventListener("click", () => {
  const next = document.documentElement.dataset.theme === "dark" ? "light" : "dark";
  document.documentElement.dataset.theme = next;
  try { localStorage.setItem("theme", next); } catch (e) {}
});

// Terminal gõ chữ lần lượt
const lines = [["hero-name", c.name, 55], ["hero-role", c.role, 35], ["hero-tagline", c.tagline, 14]];
if (reduce) {
  lines.forEach(([id, text]) => ($(id).textContent = text));
} else {
  (async () => {
    for (const [id, text, speed] of lines) {
      for (let i = 1; i <= text.length; i++) {
        $(id).textContent = text.slice(0, i);
        await new Promise((r) => setTimeout(r, speed));
      }
      await new Promise((r) => setTimeout(r, 200));
    }
  })();
}

// Hiện dần khi cuộn tới
const io = "IntersectionObserver" in window
  ? new IntersectionObserver((entries) => entries.forEach((en) => {
      if (en.isIntersecting) { en.target.classList.add("in"); io.unobserve(en.target); }
    }), { threshold: 0.08 })
  : null;
document.querySelectorAll(".reveal").forEach((el) => (io ? io.observe(el) : el.classList.add("in")));

// Thẻ dự án sáng theo con trỏ chuột
document.querySelectorAll(".card").forEach((card) => {
  card.addEventListener("pointermove", (e) => {
    const r = card.getBoundingClientRect();
    card.style.setProperty("--mx", e.clientX - r.left + "px");
    card.style.setProperty("--my", e.clientY - r.top + "px");
  });
});

// Thanh tiến trình cuộn
const bar = $("progress");
const onScroll = () => {
  const h = document.documentElement;
  bar.style.transform = `scaleX(${h.scrollTop / Math.max(1, h.scrollHeight - h.clientHeight)})`;
};
addEventListener("scroll", onScroll, { passive: true });
onScroll();
