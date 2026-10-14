const menuBtn = document.getElementById("menu-btn");
const nav = document.getElementById("nav");
const copyBtn = document.getElementById("copy-btn");

document.getElementById("year").textContent = new Date().getFullYear();

menuBtn.addEventListener("click", () => {
  const open = nav.classList.toggle("open");
  menuBtn.setAttribute("aria-expanded", open);
});

nav.addEventListener("click", (e) => {
  if (e.target.tagName === "A") {
    nav.classList.remove("open");
    menuBtn.setAttribute("aria-expanded", "false");
  }
});

copyBtn.addEventListener("click", async () => {
  try {
    await navigator.clipboard.writeText("shilpydwivedi21@gmail.com");
    copyBtn.textContent = "Email copied";
  } catch (err) {
    copyBtn.textContent = "Copy failed, select the email above";
  }
  setTimeout(() => (copyBtn.textContent = "Copy email"), 2500);
});

const links = document.querySelectorAll("nav a");
const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        links.forEach((a) =>
          a.classList.toggle("active", a.getAttribute("href") === `#${entry.target.id}`)
        );
      }
    });
  },
  { rootMargin: "-40% 0px -55% 0px" }
);
document.querySelectorAll("main section[id]").forEach((s) => observer.observe(s));
