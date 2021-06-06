//ドロワーメニュー
const target = document.getElementById("humbermenu");
target.addEventListener("click", () => {
  target.classList.toggle("open");
  const spNav = document.getElementById("sp_globalnav");
  spNav.classList.toggle("in");
});