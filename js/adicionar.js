// URL da API
const apiURL = 'https://odd-fawn-bathing-suit.cyclic.app';

// input e buttons - adiciona e remove
const inputNumero = document.querySelector('#numero');
const botaoMais = document.querySelector('#botaoMais');
const botaoMenos = document.querySelector('#botaoMenos');
const confirmaSaida = document.querySelector('#inputConfirmaEntrada');

// inputs formulario registrar saida
const modelo = document.querySelector('#inputModeloEntrada');
const codigo = document.querySelector('#inputCodigoEntrada');
const quantidade = document.querySelector('#inputQuantidadeEntrada');
const quantidadeSaida = document.querySelector('#numero');

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


confirmaSaida.addEventListener('click', async(event) => {
  try {
    event.preventDefault();
    const raw = {
      quantidade: +quantidadeSaida.value,
    }

    const requestOptions = {
      method: 'POST',
      redirect: 'follow',
      body: JSON.stringify(raw),
      headers: {
        "Content-Type": "application/json"
      }
    };

    if(quantidadeSaida.value == 0){
      Swal.fire({
        title: "Quantidade deve ser maior ou igual a 1.",
        icon: "warning",
        confirmButtonColor: "#0275d8",
      });
      return;
    }
    
    const resposta = await fetch(`${apiURL}/entradas/${id}`, requestOptions);
    const conteudo = await resposta.json();

    if(conteudo == 'Entrada realizada com sucesso!'){
      Swal.fire({
        title: "Entrada realizada com sucesso!",
        icon: "success",
        confirmButtonColor: "#5cb85c",
      });
    }

    setTimeout(()=> {
      window.location.href = '../index.html';
    }, 1500);   
  } catch (error) {
    return console.log(error);
  }
});

    // Adiciona um evento de clique ao botão de mais
    botaoMais.addEventListener('click', function(event) {
      event.preventDefault();
      inputNumero.value = parseInt(inputNumero.value) + 1;
    });

    // Adiciona um evento de clique ao botão de menos
    botaoMenos.addEventListener('click', function(event) {
      event.preventDefault();
      if (parseInt(inputNumero.value) > 0) {
        inputNumero.value = parseInt(inputNumero.value) - 1;
      }
    });