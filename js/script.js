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
      await fetch('https://rs.cadeolixo.com.br/webhook/send-form', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(dados)
      });
      window.location.href = 'https://hotmart.com/pt-br/marketplace/produtos/mtccontenporaneo/L13395143E?sck=HOTMART_SITE';
    } catch (error) {
      alert('Erro ao enviar! Tente novamente.');
      console.error(error);
    }
  });
}