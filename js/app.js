// URL da API
const apiURL = 'https://odd-fawn-bathing-suit.cyclic.app';

// inputs para cadastrar chave
const modeloCadastrar = document.querySelector('#inputModeloCadastrar');
const codigoCadastrar = document.querySelector('#inputCodigoCadastrar');
const quantidadeCadastrar = document.querySelector('#inputQuantidadeCadastrar');
const btnCadastrar = document.querySelector('#btnCadastrar');


// Lista todas chaves cadastradas
const buscaRegistros = async () => {
  try {
      const requestOptions = {
        method: 'GET',
        redirect: 'follow'
    };
    const resposta = await fetch(apiURL, requestOptions);
    const conteudo = await resposta.json();

    if(conteudo.length == 0){
      const tr = document.createElement('tr');
      tr.innerHTML = `
        <td colspan="5" class="text-center">Nenhuma entrada realizada.</td>
      `
      tabela.appendChild(tr);
      return;
    }
 
    conteudo.chaves.reverse().forEach((chave)=>{
      const tabela = document.querySelector('#tabela');
      const tr = document.createElement('tr');
      tr.innerHTML = `

      <td class="text-center align-middle">${chave.nome}</a></td>
      <td class="text-center align-middle">${chave.codigo}</a></td>
      <td class="text-center align-middle">${chave.quantidade}</a></td>
      <td class="text-center align-middle">
        <a href="pages/remover.html?id=${chave._id}&nome=${chave.nome}&codigo=${chave.codigo}&quantidade=${chave.quantidade}"><img src="./imgs/remover.png" width="24px" title="Saída de Estoque" class='icon'  data-bs-toggle="modal" data-bs-target="#exampleModal"></a>
        <a href="pages/adicionar.html?id=${chave._id}&nome=${chave.nome}&codigo=${chave.codigo}&quantidade=${chave.quantidade}"><img src="./imgs/adicionar.png" width="24px" title="Entrada de Estoque" class='icon'></a>
        <a href="pages/excluirChave.html?id=${chave._id}&nome=${chave.nome}&codigo=${chave.codigo}&quantidade=${chave.quantidade}"><img src="./imgs/lixeira.png" width="24px" title="Remover Chave" class='icon'></a>
      </td>
      `
      tabela.appendChild(tr); 
    });

  } catch (error) {
    return console.log(error);
  }
}

buscaRegistros();


// Cadastra uma chave no Banco de dados
btnCadastrar.addEventListener('click', async(event)=> {
  if(!modeloCadastrar.value || !codigoCadastrar.value || !quantidadeCadastrar.value) {
    Swal.fire({
      title: "Preencha todos os campos e tente novamente!",
      icon: "info",
      confirmButtonColor: "#5bc0de",
    });
    return;
  }

  try {
    event.preventDefault();
    const raw = {
      nome: modeloCadastrar.value,
      codigo: codigoCadastrar.value,
      quantidade: quantidadeCadastrar.value
    }

    const requestOptions = {
      method: 'POST',
      redirect: 'follow',
      body: JSON.stringify(raw),
      headers: {
        "Content-Type": "application/json"
      }
    };

    const resposta = await fetch(apiURL, requestOptions);
    const conteudo = await resposta.json();

    if(conteudo == 'Código de chave já cadastrado!'){
      Swal.fire({
        title: "Código de chave já cadastrado!",
        icon: "warning",
        confirmButtonColor: "#5bc0de",
      });
      return;
    }

    if(conteudo == 'Chave cadastrada com sucesso!'){
      Swal.fire({
        title: "Chave cadastrada com sucesso!",
        icon: "success",
        confirmButtonColor: "#5cb85c",
      });
    }

    setTimeout(()=> {
      window.location.href = './index.html';
    }, 1500);  
  } catch (error) {
    return console.log(error);
  }
});



