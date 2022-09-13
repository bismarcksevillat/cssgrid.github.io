const gridWidth = document.getElementById("container").offsetWidth;
document.getElementById("container").style.height = gridWidth * 1.2 + "px";

window.addEventListener("resize", () => {
  const resizeWidth = document.getElementById("container").offsetWidth;
  document.getElementById("container").style.height = resizeWidth * 1.2 + "px";
});
