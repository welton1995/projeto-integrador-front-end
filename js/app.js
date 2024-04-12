const URL = 'http://localhost:3333';
const tabela = document.querySelector('#tabela');
const teste = document.querySelector('#teste');

const buscaRegistros = async () => {
  try {
      const requestOptions = {
        method: 'GET',
        redirect: 'follow'
    };
    const resposta = await fetch(`http://localhost:3333`, requestOptions);
    const conteudo = await resposta.json();
    console.log(conteudo);


    conteudo.chaves.reverse().forEach((chave)=>{
      const tr = document.createElement('tr');
      tr.innerHTML = `

      <td class="text-center align-middle">${chave.nome}</a></td>
      <td class="text-center align-middle">${chave.codigo}</a></td>
      <td class="text-center align-middle">${chave.quantidade}</a></td>
      <td class="text-center align-middle">
        <a href="pages/remover.html?id=${chave._id}&nome=${chave.nome}&codigo${chave.codigo}&quantidade=${chave.quantidade}"><img src="./imgs/remover.png" width="24px" title="Remover quantidade" class='icon'  data-bs-toggle="modal" data-bs-target="#exampleModal"></a>
        <a href="html/info.html?id=${chave._id}&nome=${chave.nome}&codigo${chave.codigo}&quantidade=${chave.quantidade}"><img src="./imgs/adicionar.png" width="24px" title="Adicionar quantidade" class='icon'></a>
        <a href="html/info.html?id=${chave._id}&nome=${chave.nome}&codigo${chave.codigo}&quantidade=${chave.quantidade}"><img src="./imgs/lixeira.png" width="24px" title="Remover produto" class='icon'></a>
      </td>
      `
      tabela.appendChild(tr); 
    });

  } catch (error) {
    return console.log(error);
  }
}
buscaRegistros();

    // Adiciona um evento de clique ao botão de mais
    botaoMais.addEventListener('click', function() {
      inputNumero.value = parseInt(inputNumero.value) + 1;
    });

    // Adiciona um evento de clique ao botão de menos
    botaoMenos.addEventListener('click', function() {
      if (parseInt(inputNumero.value) > 0) {
        inputNumero.value = parseInt(inputNumero.value) - 1;
      }
    });



