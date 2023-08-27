let arr = new Array(10);
const container = document.querySelector(".container");

function fillArray(arr, amountOfElementsForSubArr) {
  for (i = 0; i < arr.length; i++) {
    arr[i] = new Array(amountOfElementsForSubArr);
    for (j = 0; j < arr.length; j++) {
      arr[i][j] = i * 10 + j + 1;
    }
  }
}

function createTable(element) {
  let table = document.createElement("table");
  return element.appendChild(table);
}

function fillTable(table, arr) {
  for (i = 0; i < arr.length; i++) {
    let tableRow = document.createElement("tr");

    for (j = 0; j < arr.length; j++) {
      let tableData = document.createElement("td");
      tableData.innerHTML = arr[i][j];
      tableRow.appendChild(tableData);
    }

    table.appendChild(tableRow);
  }
}

fillArray(arr, 10);
fillTable(createTable(container), arr);
