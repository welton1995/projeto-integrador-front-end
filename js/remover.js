
// input e buttons - adiciona e remove
const inputNumero = document.querySelector('#numero');
const botaoMais = document.querySelector('#botaoMais');
const botaoMenos = document.querySelector('#botaoMenos');
const confirmaSaida = document.querySelector('#confirmaSaida');

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