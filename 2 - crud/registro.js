import { v4 as uuidv4 } from 'https://jspm.dev/uuid';

function getPersonagem(id){
     if(id){
          personagemIndex=listaPersonagens.findIndex((perso) => perso.id ===id);

          // if(personagemIndex ==-1) return;

          const personagem = listaPersonagens[personagemIndex];
          nome.value = personagem.nome;
          tendencia.value = personagem.tendencia;
          genero.value = personagem.genero
          nota.value = personagem.nota
          img.value = personagem.img
     }
}

const listaPersonagens = JSON.parse(localStorage.getItem("listaPersonagens")) || [];
let personagemIndex;

const urlParams = new URLSearchParams(window.location.search);
const id = urlParams.get('id');
getPersonagem(id);


form.addEventListener("submit",(event)=>{
     event.preventDefault();
     const {
          name,
          tendencia,
          genero,
          nota,
          img
     } = event.target;

     const novoPersonagem = {
          id: uuidv4(),
          name: name.value,
          tendencia: tendencia.value,
          genero: genero.value,
          nota: nota.value,
          img: img.value
        };

        //colocar validaçoes
        nomeError.innerText = "";
        tendenciaError.innerText = "";
        generoError.innerText = "";
        notaError.innerText = "";
        imgError.innerText = "";
      
        if (novoPersonagem.name == "") {
          nomeError.innerText = "Nome é obrigatório";
          return;
        }
      
        if (novoPersonagem.tendencia == "") {
          tendenciaError.innerText = "Tendência é obrigatória";
          return;
        }
      
        if (novoPersonagem.nota == "") {
          notaError.innerText = "Nota é obrigatória";
          return;
        } else if (parseFloat(novoPersonagem.nota) <= 0) {
          notaError.innerText = "Nota deve ser um valor acima de zero";
          return;
        }
      
        if(novoPersonagem.genero ==""){
          generoError.innerText="Gênero é obrigatório";
          return;
        }

        if(novoPersonagem.img==""){
          imgError.innerText="Imagem é obrigatória";
        }

     //    if (personagemIndex == 0) {
     //      listaPersonagens[personagemIndex] = novoPersonagem;
     //    } else {
     //      listaPersonagens.push(novoPersonagem); 
     //    }
     listaPersonagens.push(novoPersonagem); 

     console.log("aaa");
     console.log(`personagemIndex = ${personagemIndex}`);
        console.log(listaPersonagens); //passou, tá colocando na array 


        localStorage.setItem("listaPersonagens", JSON.stringify(listaPersonagens));
        //limpa o form 
        form.reset();

    window.location='/'
})


//cria o elemento no catalogo (teste)

// listaPersonagens.forEach((personagem, index)=>{
//      const catalogo = document.getElementById(catalogo);

//      const elem = document.createElement("div");
//      elem.className = "elem";

//      const img = document.createElement("img");
//      img.src=`images/serie${index}.jpeg`;
//      img.width="50";

//      const name = document.createElement("b");
//      name.innerText = personagem.nameCaracter;

//      elem.append(img,name);
//      catalogo.appendChild(elem);
// })