// Menu do celular (botão ☰)
(function () {
  var botao = document.querySelector('.menu-toggle');
  var menu = document.getElementById('menu');
  var header = document.querySelector('.site-header');
  if (!botao || !menu) return;
  function fechar() {
    botao.setAttribute('aria-expanded', 'false');
    botao.setAttribute('aria-label', 'Abrir menu');
    menu.classList.remove('is-open');
    header.classList.remove('menu-open');
  }
  botao.addEventListener('click', function () {
    var aberto = botao.getAttribute('aria-expanded') === 'true';
    if (aberto) { fechar(); return; }
    botao.setAttribute('aria-expanded', 'true');
    botao.setAttribute('aria-label', 'Fechar menu');
    menu.classList.add('is-open');
    header.classList.add('menu-open');
  });
  document.addEventListener('keydown', function (e) { if (e.key === 'Escape') fechar(); });
  window.addEventListener('resize', function () { if (window.innerWidth > 860) fechar(); });
})();
