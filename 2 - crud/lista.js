const listaPersonagens = JSON.parse(localStorage.getItem("listaPersonagens")) || [];

listaPersonagens.forEach((personagem) => {
     const container = document.querySelector(".container");

     const elem = document.createElement("div");
     elem.className = "elem";

     const name= document.createElement("a");
     name.innerText = `Nome: ${personagem.name}`;
     name.className="name";
     name.href=`/registro.html?id=${personagem.id}`;

    const tend= document.createElement("p");
    tend.className="tend";
    tend.innerText=`Tendência: ${personagem.tendencia}`;

    const gen= document.createElement("p");
    gen.className="genero";
    gen.innerText=`Gênero: ${personagem.genero}`;

    const nota= document.createElement("p");
    nota.className="nota";
    nota.innerText=`Nota: ${personagem.nota}`;

    const img = document.createElement("img");
    img.src = `images/perfil${personagem.genero}.jpg`;
    img.width = "50";
    img.className ="imgElem"

    const btnDelete = document.createElement("button");
    btnDelete.className="btnDelete botao"
    btnDelete.innerText = "Remover";
    btnDelete.id = "delete";
  
    btnDelete.addEventListener("click", () => {
      if (confirm("Você tem certeza que quer remover este personagem da lista????????")) {
        // container.removeChild(elem);
        elem.remove();
        // deleteAnimal(animal._id).then((msg) => alert(msg));
      }
    });

    const btnVer = document.createElement("button");
    btnVer.className="btnVer botao"
    btnVer.innerText = "Ver Mais";
    btnVer.id = "verMais";
  
    btnVer.addEventListener("click", () => {
     alert(personagem.descricao);
    });
    
    elem.appendChild(img);
    elem.appendChild(name);
    elem.appendChild(tend);
    elem.appendChild(gen);
    elem.appendChild(nota);
    elem.appendChild(btnDelete);
    elem.appendChild(btnVer);

    container.appendChild(elem);
});


// function exibirNomesEImagens() {
//      const listaNomesEImagens = JSON.parse(localStorage.getItem('listapersonagens')) || [];
//      const listaElement = document.getElementById('container');
   
//      // Limpa a lista atual antes de adicionar os itens
//      listaElement.innerHTML = '';
   
//      // Itera sobre a lista de nomes e imagens e cria elementos de lista para cada um
//      listaNomesEImagens.forEach(item => {
//        const listItem = document.createElement('li');
//        const nomeElement = document.createElement('span');
//        const imagemElement = document.createElement('img');
   
//        nomeElement.textContent = item.nome;
//        imagemElement.src = item.imagem;
//        imagemElement.alt = item.nome;
//        imagemElement.width = 100; // Defina a largura da imagem conforme necessário
   
//        listItem.appendChild(nomeElement);
//        listItem.appendChild(imagemElement);
//        listaElement.appendChild(listItem);
//      });
//    }
   
//    // Chama a função para exibir nomes e imagens existentes quando a página é carregada
//    exibirNomesEImagens();