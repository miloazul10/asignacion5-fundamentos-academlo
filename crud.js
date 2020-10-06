import cars from './cars.js';
// function printCars() {
//   for(let i = 0; i < cars.length; i++) {
//       const row = '<tr><td>'+cars[i].brand+'</td><td>' + cars[i].model + '</td></tr>'
//       mainTbody.innerHTML += row;
//   }
// }


// al inicio de esta funcion SE ESCRIBE EL ID EN CADA FILA DE LA TABLA PARA LUEGO SER PASADO COMO PARAMETRO CUANDO SE DE CLICK y se active la funcion loadData
// Que lleva consigo el id del array que se selecciono

function printCars() {
  mainTbody.innerHTML = ''
  for(let i = 0; i < cars.length; i++) {
      const row = `<tr id = "${cars[i].id}" onClick = "loadData(${i})">
                      <td>${cars[i].id}</td>
                      <td>${cars[i].brand}</td>
                      <td>${cars[i].model}</td>
                      <td>${cars[i].color}</td>
                      <td>${cars[i].year}</td>
                      <td> $ ${cars[i].price}</td>
                      <td> <button onclick="NOMBREFUNCION" class="btn btn-primary"> Seleccionar </button> </td>
                  </tr>`
      mainTbody.innerHTML += row;
  }
}


// ESTA FUNCION RECIBE EL DATO DE QUE FILA FUE SELECCIONADA EN EL HTML Y CARGA LOS DATOS EN LOS INPUTS
function loadData(indexArray) {
  let wichSelect = indexArray;
  brandInput.value = cars[wichSelect].brand
  modelInput.value = cars[wichSelect].model
  colorInput.value = cars[wichSelect].color
  yearInput.value = cars[wichSelect].year
  priceInput.value = cars[wichSelect].price
  return wichSelect;
  // alert(wichSelect)
}


// ESTA FUNCION ARMA UN NUEVO OBJETO DESDE LOS VALORES DE LOS INPUTS Y LE HACE PUSH AL ARREGLO DE DATOS
function addData () {
   cars.push({
    id:cars.length+1,
    brand: brandInput.value,
    model: modelInput.value,
    color: colorInput.value,
    year: yearInput.value,
    price:priceInput.value
  });
printCars()
}

// ESTA FUNCION ARMA UN NUEVO OBJETO DESDE LOS VALORES DE LOS INPUTS Y LE HACE PUSH AL ARREGLO DE DATOS
function editData () {

  cars.sli

}



printCars();

window.printCars = printCars;
window.loadData = loadData;
window.addData = addData;
window.editData = editData;