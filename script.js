const linkOnl = document.querySelectorAll(".onl");

linkOnl.forEach((item) => {
  item.addEventListener("click", (e) => {
    window.location.href = "./online-record.html";
  });
});

const linkOfl = document.querySelectorAll(".ofl");

linkOfl.forEach((item) => {
  item.addEventListener("click", (e) => {
    window.location.href = "./ofline-record.html";
  });
});
