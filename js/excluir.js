// URL da API
const apiURL = 'https://odd-fawn-bathing-suit.cyclic.app';

// inputs formulario registrar saida
const modelo = document.querySelector('#inputModeloSaida');
const codigo = document.querySelector('#inputCodigoSaida');
const quantidade = document.querySelector('#inputQuantidadeSaida');
const confirmaSaida = document.querySelector('#inputConfirmaSaida');

// informações captadas via parametros de URL
const parametros = new URLSearchParams(window.location.search);
const id = parametros.get('id');
const modeloURL = parametros.get('nome');
const codigoURL = parametros.get('codigo');
const quantidadeURL = parametros.get('quantidade');

// atribui as informações recebidas ao html;
modelo.value = modeloURL;
codigo.value = codigoURL;
quantidade.value = quantidadeURL;

confirmaSaida.addEventListener('click', async(event)=> {
  try {
    event.preventDefault();
    const requestOptions = {
      method: 'DELETE',
      redirect: 'follow',
      headers: {
        "Content-Type": "application/json"
      }
    }

    const resposta = await fetch(`${apiURL}/${id}`, requestOptions);
    const conteudo = await resposta.json();

    if(conteudo == 'Chave não encontrada!'){
      Swal.fire({
        title: "Chave não encontrada!",
        icon: "warning",
        confirmButtonColor: "#0275d8",
      });
      return;
    };

    if(conteudo == 'Falha ao excluir chave tente novamnte!'){
      Swal.fire({
        title: "Falha ao excluir chave tente novamnte!",
        icon: "warning",
        confirmButtonColor: "#0275d8",
      });
      return;
    }

    if(conteudo == 'Chave excluida com sucesso!'){
      Swal.fire({
        title: "Chave excluida com sucesso!",
        icon: "success",
        confirmButtonColor: "#0275d8",
      });

      setTimeout(()=> {
        window.location.href = '../index.html';
      }, 1500)

    };

  } catch (error) {
    return console.log(error);
  }
});