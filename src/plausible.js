(function () {
  // 引入 Plausible 的站点专属脚本
  var s = document.createElement('script');
  s.async = true;
  s.src = "https://plausible.io/js/pa-YNbSUJVUHsMnIPRYE21oN.js"; // ← 用你的这串
  document.head.appendChild(s);

  // 初始化 plausible 对象（照抄官方给你的逻辑）
  window.plausible = window.plausible || function () {
    (plausible.q = plausible.q || []).push(arguments);
  };
  plausible.init = plausible.init || function (i) {
    plausible.o = i || {};
  };
  plausible.init();
})();
