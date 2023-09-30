const listaPersonagens = JSON.parse(localStorage.getItem("listaPersonagens")) || [];

listaPersonagens.forEach((personagem) => {
     console.log(personagem);
     console.log(personagem.img)
     const container = document.querySelector(".container");

     const elem = document.createElement("div");
     elem.className = "elem";

     const img = document.createElement("img");
     img.src=`${personagem.img}`;
     img.width="50";

     const name= document.createElement("a");
     name.innerText = personagem.nome;
     name.href=`/registro.html?id=${personagem.id}`;

     elem.appendChild(img);
     elem.appendChild(name);

     container.appendChild(elem);
});


function exibirNomesEImagens() {
     const listaNomesEImagens = JSON.parse(localStorage.getItem('listapersonagens')) || [];
     const listaElement = document.getElementById('container');
   
     // Limpa a lista atual antes de adicionar os itens
     listaElement.innerHTML = '';
   
     // Itera sobre a lista de nomes e imagens e cria elementos de lista para cada um
     listaNomesEImagens.forEach(item => {
       const listItem = document.createElement('li');
       const nomeElement = document.createElement('span');
       const imagemElement = document.createElement('img');
   
       nomeElement.textContent = item.nome;
       imagemElement.src = item.imagem;
       imagemElement.alt = item.nome;
       imagemElement.width = 100; // Defina a largura da imagem conforme necessário
   
       listItem.appendChild(nomeElement);
       listItem.appendChild(imagemElement);
       listaElement.appendChild(listItem);
     });
   }
   
   // Chama a função para exibir nomes e imagens existentes quando a página é carregada
   exibirNomesEImagens();