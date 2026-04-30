// Espera todos os recursos da pagina terminarem de carregar antes de revelar o site.
window.addEventListener('load', loadEnd);

// Finaliza a tela de loading e libera a navegacao.
function loadEnd() {
  const body = document.body;
  const loading = document.getElementById('loading');

  if (!body || !loading) {
    return;
  }

  body.classList.remove('is-loading');
  body.classList.add('is-loaded');

  // Remove o overlay do fluxo apos a animacao de saida terminar.
  loading.addEventListener(
    'transitionend',
    () => {
      loading.setAttribute('hidden', '');
    },
    { once: true }
  );
}
