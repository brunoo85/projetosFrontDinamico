let listaPersonagens = [];

form.addEventListener("submit",(event)=>{
     event.preventDefault();

     const {
          nameCaracter,
          tendencia,
          genero,
          notaPersonagem,
          imgPersonagem

     } = event.target;

     const novoPersonagem = {
          nameCaracter: nameCaracter.value,
          tendencia: tendencia.value,
          genero: genero.value,
          nota: notaPersonagem.value,
          imgPersonagem: imgPersonagem.value
        };

        //colocar validaçoes
        if(novoPersonagem.nameCaracter==""){

        }


        listaPersonagens.push(novoPersonagem); 
        console.log(listaPersonagens); //passou, tá colocando na array 


        //localStorage.setItem("arrayAnimais", JSON.stringify(arrayAnimais)); --> array do local storage do exemplo do professor
        //limpa o form 
        form.reset();
})


//cria o elemento no catalogo (teste)

listaPersonagens.forEach((personagem, index)=>{
     const catalogo = document.getElementById(catalogo);

     const elem = document.createElement("div");
     elem.className = "elem";

     const img = document.createElement("img");
     img.src=`images/serie${index}.jpeg`;
     img.width="50";

     const name = document.createElement("b");
     name.innerText = personagem.nameCaracter;

     elem.append(img,name);
     catalogo.appendChild(elem);
})