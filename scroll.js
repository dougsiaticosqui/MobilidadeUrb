window.onscroll = () => {
    const nav = document.querySelector('#navbar');
    if(this.scrollY <= 10) nav.className = ''; else nav.className = 'scroll';
  };

  function typeWrite(elemento){
    const textoArray = elemento.innerHTML.split(' ');
    elemento.innerHTML = ' ';
    textoArray.forEach(function(letra, i){   
      
    setTimeout(function(){
        elemento.innerHTML += letra;
    }, 75 * i)

  });
}
const titulo = document.querySelector('titulo-principal');
typeWrite(titulo);
