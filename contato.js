// Formulário de contato: monta a mensagem e abre o WhatsApp da empresa
(function () {
  var form = document.getElementById('form-contato');
  var erro = document.getElementById('form-erro');
  if (!form) return;
  form.addEventListener('submit', function (e) {
    e.preventDefault();
    var v = function (id) { return document.getElementById(id).value.trim(); };
    if (!v('nome') || !v('email') || !v('whats') || !v('msg')) { erro.hidden = false; return; }
    erro.hidden = true;
    var texto = 'Olá! Meu nome é ' + v('nome') +
      '.\nE-mail: ' + v('email') +
      '\nWhatsApp: ' + v('whats') +
      '\n\n' + v('msg');
    window.open('https://wa.me/5544991235971?text=' + encodeURIComponent(texto), '_blank', 'noopener');
  });
})();
