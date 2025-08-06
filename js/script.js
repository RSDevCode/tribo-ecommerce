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