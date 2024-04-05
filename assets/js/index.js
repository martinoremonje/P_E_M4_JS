import { Leon, Lobo, Oso, Serpiente, Aguila } from './AnimalesEspeciales.js';

//Aqui la declare de forma global, no encontre otra forma de agregarselo de forma dinamica
window.playSound = function(sonidoUrl) {
    const audio = new Audio(sonidoUrl);
    audio.play();
  };

(function(){
    var selectElement = document.getElementById('animal');
    var previewDiv = document.getElementById('preview');

    let changeImage = () => {
        var value = selectElement.value; 
        switch (value) {
            case "Leon":
            case "Serpiente":
            case "Aguila":
            case "Oso":
            case "Lobo":
                previewDiv.style.backgroundImage = `url('./assets/imgs/${value}.jpg')`;
                previewDiv.style.backgroundSize = 'contain'; 
                previewDiv.style.backgroundPosition = 'center'; 
                break;
            default:
                imgElement.src = '/assets/imgs/lion.svg'; 
        }
    }
    selectElement.addEventListener('change', changeImage);
})();

function Reset() {
    document.getElementById('animal').value = "Seleccione un animal";
    document.getElementById('edad').value = "Seleccione un rango de años";
    document.getElementById('comentarios').value = "";
    document.getElementById('preview').style.backgroundImage = "url('./assets/imgs/lion.svg')"
  }
  

const Agregar = () => {
    
    const tipoAnimal = document.getElementById('animal').value;
    const edadAnimal = document.getElementById('edad').value;
    const comentariosAnimal = document.getElementById('comentarios').value;

    //Aqui se hace la validacion del form:
  
    if(tipoAnimal != "Seleccione un animal" && edadAnimal != "Seleccione un rango de años" && comentariosAnimal != ""){

        let animal;
        switch (tipoAnimal) {
          case 'Leon':
            animal = new Leon('León', edadAnimal, 'assets/imgs/Leon.jpg', comentariosAnimal, 'assets/sounds/Rugido.mp3');
            break;
          case 'Lobo':
            animal = new Lobo('Lobo', edadAnimal, 'assets/imgs/Lobo.jpg', comentariosAnimal, 'assets/sounds/Aullido.mp3');
            break;
          case 'Oso':
            animal = new Oso('Oso', edadAnimal, 'assets/imgs/Oso.jpg', comentariosAnimal, 'assets/sounds/Gru単ido.mp3');
            break;
          case 'Serpiente':
            animal = new Serpiente('Serpiente', edadAnimal, 'assets/imgs/Serpiente.jpg', comentariosAnimal, 'assets/sounds/Siseo.mp3');
            break;
          case 'Aguila':
            animal = new Aguila('Águila', edadAnimal, 'assets/imgs/Aguila.jpg', comentariosAnimal, 'assets/sounds/Chillido.mp3');
            break;
          
          default:
            console.log('Tipo de animal no reconocido');
            return;
        }
        Reset()
        const animalesDiv = document.getElementById('Animales');
        const animalCard = document.createElement('div');
        animalCard.className = 'animal-card'; 
        animalCard.innerHTML = `
      <div class="animal-background" style="background-image: url('${animal.Img}');"></div>
      <button onclick="playSound('${animal.Sonido}')"><img src="assets/imgs/audio.svg" alt="Play Audio" style="width: 130px; height: 24px; color: black"></button>
    `;
      
    animalCard.querySelector('.animal-background').addEventListener('click', function() {
        showModal(animal.Img, animal.Edad, animal.Comentarios);
      }); 
    
        animalesDiv.appendChild(animalCard);
       
      } else{
        alert("Porfavor complete todos los datos")
      }
    }
  
  
document.getElementById("btnRegistrar").addEventListener("click", function(){
    Agregar()
});

//Esta es la funcion para mostrar el modal del animal, se le agrego al div que contiene la img del animal creado,
//En la linea 79

function showModal(imgSrc, edad, comentarios) {
    const modalBody = document.querySelector('#exampleModal .modal-body');
    modalBody.innerHTML = `
      <img src="${imgSrc}" alt="Animal" style="width: 100%;">
      <p>Edad: ${edad}</p>
      <p>${comentarios}</p>
    `;
  
    $('#exampleModal').modal('show');
  };
  
  
  










