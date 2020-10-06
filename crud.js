import cars from './cars.js';

// Esta funcion escribe las filas en el HTML, para que cada fila teng su ID estampado y mande a llamar la funcion load data cuando se le de click

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
        idInput.value = cars[indexArray].id
        brandInput.value = cars[indexArray].brand
        modelInput.value = cars[indexArray].model
        colorInput.value = cars[indexArray].color
        yearInput.value = cars[indexArray].year
        priceInput.value = cars[indexArray].price 
}

// Funcion para agregar datos 
function addData() {
  // PARA DARLE CONTINUIDAD AL ID
  let maxi = 0
  for(let i = 0; i < cars.length; i++) {
    if(cars[i].id > maxi){
      maxi = cars[i].id
    }
  }
    cars.push({
    id: maxi + 1,
    brand: brandInput.value,
    model: modelInput.value,
    color: colorInput.value,
    year: yearInput.value,
    price:priceInput.value
  });
  cleanValues();
  
  // alert("¡Exito! Registro CREADO")
 
}

// funcion para editar los datos
function editData() {
  for(let i = 0; i < cars.length; i++) {
    if (cars[i].id == idInput.value){
      let newValue = {
        id: idInput.value, 
        brand: brandInput.value, 
        model: modelInput.value, 
        color: colorInput.value, 
        year: yearInput.value, 
        price: priceInput.value
      }
      cars.splice (i, 1, newValue)
      cleanValues();
    }
  }
}

// Funcion para eliminar los datos
function deleteCars() {
 
  if (idInput.value != cars.length){
    for(let i = 0; i < cars.length; i++) {
      if (cars[i].id == idInput.value){
        cars.splice (i, 1)
        cleanValues();
      }
    }
  }
  // ESTE IF LO PUSE PORQUE NO ME ELIMINABA EL ULTIMO EN ALGUNAS CIRCUNSTANCIAS
  else{
    cars.pop();
    cleanValues();
  }
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