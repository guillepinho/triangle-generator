updateVisit();

let basePyramid;
let numberOfLines;
let controlLeft;
let controlRight;
const triangle = document.querySelector('.triangle');
const input = document.querySelector('#pyramid');
const button = document.querySelector('#createPyramid');
button.addEventListener('click', getPyramidBase);

// Pega a informação do input para criar a pirâmide e dispara a sequência de funções
function getPyramidBase() {
  clearPyramid();
  basePyramid = parseInt(input.value);
  numberOfLines = (basePyramid + 1) / 2;
  createLines(numberOfLines);
  controlLeft = numberOfLines;
  controlRight = numberOfLines;
  let lines = document.querySelectorAll(".line");
  fillTriangle(lines);
}

// Limpa a pirâmide anteriormente desenhada, se houver
function clearPyramid() {
  let lines = document.querySelectorAll(".line");
  for (let line of lines) {
    line.remove();
  }
}

// Cria a quantidade de linhas necessárias para desenhar a pirâmide
function createLines(number) {
  for (let i = 0; i < number; i += 1) {
    const newDiv = document.createElement('div');
    newDiv.classList.add('line');
    triangle.appendChild(newDiv);
  }
}

// Atualiza a quantidade de visitar no site, utilizando o LocalStorage
function updateVisit() {
  if (typeof (Storage) != "undefined") {
    if (localStorage.count !== undefined) {
      let count = parseInt(localStorage.count);
      count += 1;
      localStorage.count = count;
      document.getElementById("count").innerHTML = count;
    } else {
      localStorage.count = 1;
      document.getElementById("count").innerHTML = 1;
    }
  } else {
    document.write("Sem suporte para Web Storage");
  }
}

// Passa por todos as linhas (div com class line) e preenche o triangulo
function fillTriangle(lines) {
  console.log(lines.length);
  for (let index = 0; index < lines.length; index += 1) {
    fillLine(lines[index]);
    controlRight += 1;
    controlLeft -= 1;
  }
}

// Cria uma caixa com base nas diferentes classes
function createBox(className) {
  let box = document.createElement("div");
  box.className = className;
  return box;
}

// Preenche uma linha
function fillLine(divLine) {
  for (let lineColumn = 1; lineColumn <= basePyramid; lineColumn += 1) {
    if (lineColumn >= controlLeft && lineColumn <= controlRight) {
      let box = createBox("box");
      divLine.appendChild(box);
    } else {
      divLine.appendChild(createBox("box-empty"));
    }
  }
}

