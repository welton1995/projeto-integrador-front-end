const URL = 'http://localhost:3333';
const tabela = document.querySelector('#tabela');
const buscaRegistros = async () => {
  // let bancodeDadosVazio = document.querySelector('#bancodeDadosVazio');
  // let imagemLoading = document.querySelector('#loading');

  try {
    // imagemLoading.style.display = 'block';

      const requestOptions = {
        method: 'GET',
        redirect: 'follow'
    };
    const resposta = await fetch(`http://localhost:3333`, requestOptions)
    const conteudo = await resposta.json();
    console.log(conteudo);

    conteudo.chaves.reverse().forEach((chave)=>{
      const tr = document.createElement('tr');
      tr.innerHTML = `

      <td class="text-center align-middle">${chave.nome}</a></td>
      <td class="text-center align-middle">${chave.codigo}</a></td>
      <td class="text-center align-middle">${chave.quantidade}</a></td>
      <td class="text-center align-middle">
        <a href="html/info.html?id=${chave._id}&nome=${chave.nome}&codigo${chave.codigo}&quantidade=${chave.quantidade}"><img src="./imgs/remover.png" width="24px" title="Remover quantidade" class='icon'></a>
        <a href="html/info.html?id=${chave._id}&nome=${chave.nome}&codigo${chave.codigo}&quantidade=${chave.quantidade}"><img src="./imgs/adicionar.png" width="24px" title="Adicionar quantidade" class='icon'></a>
        <a href="html/info.html?id=${chave._id}&nome=${chave.nome}&codigo${chave.codigo}&quantidade=${chave.quantidade}"><img src="./imgs/lixeira.png" width="24px" title="Remover produto" class='icon'></a>
      </td>

      `
      tabela.appendChild(tr);
    })

  } catch (error) {
    console.log(error);
    // imagemLoading.style.display = 'block';
    return;
  }
}
buscaRegistros();
