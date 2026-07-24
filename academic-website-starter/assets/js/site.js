(function () {
  const c = window.SITE_CONFIG;
  const page = document.body.dataset.page || "home";

  const navItems = [
    ["home", "Home", "index.html"],
    ["cv", "CV", "cv.html"],
    ["research", "Research", "research.html"],
    ["teaching", "Teaching", "teaching.html"],
    ["contact", "Contact", "contact.html"]
  ];

  const nav = document.querySelector("[data-site-nav]");
  if (nav) {
    nav.innerHTML = `
      <div class="nav-inner">
        <a class="brand" href="index.html">${escapeHtml(c.shortName)}</a>
        <button class="menu-button" type="button" aria-expanded="false" aria-controls="main-menu">Menu</button>
        <div class="nav-links" id="main-menu">
          ${navItems.map(([key, label, href]) =>
            `<a href="${href}" ${page === key ? 'aria-current="page"' : ""}>${label}</a>`
          ).join("")}
        </div>
      </div>`;

    const button = nav.querySelector(".menu-button");
    const links = nav.querySelector(".nav-links");
    button.addEventListener("click", () => {
      const open = button.getAttribute("aria-expanded") === "true";
      button.setAttribute("aria-expanded", String(!open));
      links.classList.toggle("open", !open);
    });
  }

  const profile = document.querySelector("[data-profile]");
  if (profile) {
    profile.innerHTML = `
      <img class="profile-image" src="${c.profileImage}" alt="Portrait of ${escapeHtml(c.name)}">
      <h2>${escapeHtml(c.name)}</h2>
      <p class="profile-role">${escapeHtml(c.role)}</p>
      <p class="profile-affiliation">${escapeHtml(c.affiliation)}</p>
      <div class="profile-links">
        <a href="mailto:${encodeURIComponent(c.email)}">Email</a>
        <a href="${c.scholarUrl}" target="_blank" rel="noreferrer">Google Scholar</a>
        <a href="${c.githubUrl}" target="_blank" rel="noreferrer">GitHub</a>
        <a href="${c.linkedinUrl}" target="_blank" rel="noreferrer">LinkedIn</a>
      </div>`;
  }

  document.querySelectorAll("[data-name]").forEach(el => el.textContent = c.name);
  document.querySelectorAll("[data-role]").forEach(el => el.textContent = c.role);
  document.querySelectorAll("[data-affiliation]").forEach(el => el.textContent = c.affiliation);
  document.querySelectorAll("[data-location]").forEach(el => el.textContent = c.location);
  document.querySelectorAll("[data-email]").forEach(el => {
    el.textContent = c.email;
    if (el.tagName === "A") el.href = `mailto:${c.email}`;
  });
  document.querySelectorAll("[data-intro]").forEach(el => el.textContent = c.intro);
  document.querySelectorAll("[data-cv-link]").forEach(el => el.href = c.cvFile);

  const footer = document.querySelector("[data-site-footer]");
  if (footer) {
    footer.innerHTML = `© ${c.copyrightYear} ${escapeHtml(c.name)}. Hosted with GitHub Pages.`;
  }

  document.title = `${page === "home" ? c.name : capitalize(page) + " | " + c.name}`;

  function escapeHtml(value) {
    return String(value).replace(/[&<>'"]/g, char => ({
      "&": "&amp;", "<": "&lt;", ">": "&gt;", "'": "&#39;", '"': "&quot;"
    })[char]);
  }

  function capitalize(value) {
    return value.charAt(0).toUpperCase() + value.slice(1);
  }
})();
