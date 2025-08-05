const checkbox = document.getElementById('consentimento');
const botaoEnviar = document.getElementById('botaoEnviar');

if (checkbox && botaoEnviar) {
  checkbox.addEventListener('change', () => {
    botaoEnviar.disabled = !checkbox.checked;
  });
}

const modalForm = document.getElementById('modalForm');
const formModal = document.getElementById('formModal');

function abrirModal() {
  modalForm.classList.remove('hidden');
}

function fecharModal() {
  modalForm.classList.add('hidden');
}

if (formModal) {
  formModal.addEventListener('submit', async (e) => {
    e.preventDefault();
    const dados = {
      name: formModal.name.value,
      email: formModal.email.value,
      phone: formModal.phone.value
    };
    try {
      await fetch('https://n8n.triboecom.com.br/webhook/send', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(dados)
      });
      window.location.href = 'https://pay.hotmart.com/K101114610X?bid=1754002347287';
      
      await fetch('https://graph.facebook.com/v19.0/1093245918897465/events?access_token=EAAr7bJEr7sABPGB65ok2t835UCSpSKuVuTl6klwji1r8u4Dvv0d6dbVz7mkjBV4okN98spnlk4AZADCjTrbwIXXpp2E23NOxH7I453MvtULmYQVgY4APL9jHbPLX8NovCSunAZCITJn0KP3tX5ftkIQKCrrnZA3fIzCFaHemLuuplv3aQHpCACoBhOleEwI0AZDZD', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          data: [
            {
              event_name: "Purchase",
              event_time: 1754305923,
              action_source: "website",
              user_data: {
                em: ["7b17fb0bd173f625b58636fb796407c22b3d16fc78302d79f0fd30c2fc2fc068"],
                ph: [null]
              },
              attribution_data: {
                attribution_share: "0.3"
              },
              custom_data: {
                currency: "USD",
                value: "142.52"
              },
              original_event_data: {
                event_name: "Purchase",
                event_time: 1754305923
              }
            }
          ]
        })
      });
    } catch (error) {
      alert('Erro ao enviar! Tente novamente.');
      console.error(error);
    }
  });
}

function toggleMenu() {
    document.getElementById('menu-toggle').addEventListener('click', () => {
    const menu = document.getElementById('mobile-menu');
    menu.classList.toggle('hidden');
  });
}