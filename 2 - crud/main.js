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

})