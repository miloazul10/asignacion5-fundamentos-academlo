import cars from './cars.js';

// Esta funcion imprime el ID junto con la linea para poderla seleccionar con un click luego, para que cada fila teng su id estampado

function printCars() {
  mainTbody.innerHTML = ''
  for(let i = 0; i < cars.length; i++) {
      const row = `<tr id = "${i}" onClick = "loadData(${i})">
                      <td>${cars[i].id}</td>
                      <td>${cars[i].brand}</td>
                      <td>${cars[i].model}</td>
                      <td>${cars[i].color}</td>
                      <td>${cars[i].year}</td>
                      <td> $ ${cars[i].price}</td>

                  </tr>`
      mainTbody.innerHTML += row;
  }
}

printCars();

// Aqui se lee el id estampado y con el se mandan a llamar los datos a los inputs

function loadData(indexArray) {
  let activeState = document.getElementById(indexArray);
  mainTbody.innerHTML = ''
  for(let i = 0; i < cars.length; i++) {
    if (i!=indexArray){
      const row = `<tr id = "${i}" onClick = "loadData(${i})">
                      <td>${cars[i].id}</td>
                      <td>${cars[i].brand}</td>
                      <td>${cars[i].model}</td>
                      <td>${cars[i].color}</td>
                      <td>${cars[i].year}</td>
                      <td> $ ${cars[i].price}</td>

                  </tr>`
                  mainTbody.innerHTML += row;
    // AQUI LO QUE ESTOY HACIENDO ES QUE SE QUEDE CON FONDO CELESTE LA FILA QUE SELECCIONEMOS PARA TRABAJAR
    }
    else{
      const row = `<tr id = "${i}" onClick = "loadData(${i})" class = "statusActive">
                      <td>${cars[i].id}</td>
                      <td>${cars[i].brand}</td>
                      <td>${cars[i].model}</td>
                      <td>${cars[i].color}</td>
                      <td>${cars[i].year}</td>
                      <td> $ ${cars[i].price}</td>
                    </tr>`
                  mainTbody.innerHTML += row;

    }
  }

  // AQUI SE LLENAN LOS INPUTS
  let wichSelect = indexArray;
  idInput.value = cars[wichSelect].id
  brandInput.value = cars[wichSelect].brand
  modelInput.value = cars[wichSelect].model
  colorInput.value = cars[wichSelect].color
  yearInput.value = cars[wichSelect].year
  priceInput.value = cars[wichSelect].price 
}

// Funcion para agregar datos 
function addData() {
    cars.push({
    id:cars.length+1,
    brand: brandInput.value,
    model: modelInput.value,
    color: colorInput.value,
    year: yearInput.value,
    price:priceInput.value
  });
  cleanValues();
  alert("¡Exito! Registro CREADO")
}

// funcion para editar los datos
function editData() {
  const position = idInput.value;
  let newValue = {
    id: 1, 
    brand: brandInput.value, 
    model: modelInput.value, 
    color: colorInput.value, 
    year: yearInput.value, 
    price: priceInput.value
  }
  cars.splice (position, 1, newValue)
  cleanValues();
  alert("¡Exito! Registro EDITADO")
}


// Funcion para eliminar los datos
function deleteCars() {
  const position = idInput.value;
  cars.splice (position, 1);
  printCars();
  // cars.splice (position, 1);
  // cars.pop();
  // cleanValues();
  // alert(position)
  // printCars();
  // alert("¡Exito! Registro ELIMINADO");
}

  
  


// funcion para limpiar los inputs
function cleanValues(){
  idInput.value = '';
  brandInput.value = '';
  modelInput.value = '';
  colorInput.value = '';
  yearInput.value = '';
  priceInput.value = '';
  printCars();
}

window.printCars = printCars;
window.loadData = loadData;
window.addData = addData;
window.editData = editData;
window.deleteCars = deleteCars;
window.cleanValues = cleanValues;