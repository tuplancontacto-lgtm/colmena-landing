// FIX ENVÍO FORMULARIO COTIZACIÓN + CALLMEBOT
document.addEventListener('DOMContentLoaded', () => {
  const form = document.getElementById('mainForm');
  if (!form) return;

  form.addEventListener('submit', () => {
    if (typeof enviarLeadAsesor === 'function') {
      enviarLeadAsesor();
    }
  });
});

