console.log(prompt("Bem vindo!"));
btAdicionar.onclick = handleBtAdicionarClick;
  console.log(confirm("Deseja adicionar aluno?"));

const btAdicAluno = document.getElementById("btAdicAluno");
const inputMat = document.getElementById("inputMat");
const inputNome = document.getElementById("inputNome");
const inputIdade = document.getElementById("inputIdade");
const inputCpf = document.getElementById("inputCpf");
const btSubmit = document.getElementById("btEnviar");
const btLimpar = document.getElementById("btLimpar");


function validarMatricula(inputMat) {
  if (inputMat.value.trim() === '') {
    return 'Este campo é obrigatório.';
  } else if (inputMat.aluno > 8 || inputMat.aluno < 8) {
    console.log(alert("Número de caracteres inválidos!");
  } else (
  console.log(inputMat[]));
  return '';
}
function validarNome(inputNome) {
  if (inputNome.value.trim() === '') {
    return 'Este campo é obrigatório.';
  } else if (inputNome.aluno == 0) {
    console.log(alert("Nome inválido!"));   
  } else (
 console.log(inputNome[]));
  return '';
}
function validarIdade(inputIdade) {
  if (inputIdade.value.trim() === '') {
    return 'Este campo é obrigatório.';
  } else if (inputIdade.aluno == 0) {
    console.log(alert("Idade inválida!"));   
  } else if (inputIdade.aluno != int)
    console.log(alert("Informe um valor inteiro!")
  } else (console.log(inputIdade[]));
  return '';
}
function validarCpf(inputCpf) {
  if (inputCpf.value.trim() === '') {
    return 'Este campo é obrigatório.';
  } else if (inputCpf.aluno > 14) {
    console.log(alert("Número de caracteres inválidos!");
  } else (console.log(inputCpf[]));
  return '';
}
const handleBtAdicionarClick = () => {
  let idade = parseInt(inputIdade.value);
  if (isNaN(idade)) {
    alert("Digite um número inteiro!");
    inputIdade.focus();
    return;
  }

  inputMat.value = matrícula;
  inputNome.value = nome;
  inputIdade.value = idade;
  inputCpf.value = cpf;
 };

const handleBtSalvarClick = () => {
  inputMat.value = matrícula;
  inputNome.value = nome;
  inputIdade.value = idade;
  inputCpf.value = cpf;
 };


const handleBtLimparClick = (evt) => {
  console.log("evt.target", evt.target);
  inputMat.value = "";
  inputNome.value = "";
  inputIdade.value = "";
  inputCpf.value = "";
  };


btSalvar.onclick = handleBtSalvarClick;
  console.log(alert("Aluno adicionado com sucesso!"));
btLimpar.onclick = handleBtLimparClick;

//arrays
let notas = new Array(n);
console.log(nota[]);
let alunos = new Array(aluno);
console.log(aluno[]);
let nomes = new Array(nome);
console.log(nome[]);

//Validações
let nomes = new Array(nome);
console.log(nome[]);


let matricula = new Array(matricula);
console.log(inputMat[]));


let cpf = new Array(cpf);
console.log(cpf[]);


let idade = new Array (idade);
console.log(idade[]);

// 
var aluno = {
  nome:"",
  idade:"",
  cpf:"",
  matricula:"",
};

console.log(aluno[]);
console.log(alunos.length);


document.getElementById("titulo").innerHTML = "Alterando o título 1";

const submit = document.getElementById("submit");

submit.addEventListener("click", validate);

function validate(e) {
  e.preventDefault();

  const nameField = document.getElementById("firstname");
  let valid = true;

  if (!NameField.value) {
    const nameError = document.getElementById("nameError");
    nameError.classList.add("visible");
    nameField.classList.add("invalid");
    nameError.setAttribute("aria-hidden", false);
    nameError.setAttribute("aria-invalid", true);
  }
  return valid;
}

class Welcome extends HTMLElement {
  constructor() {
    super()

    this._root = this.attachShadow({ mode: 'closed' })
  }

  attributeChangedCallback(attr, oldValue, newValue) {
    this.connectedCallback()
  }

  connectedCallback() {
    let name = 'Mundo'

    if (this.hasAttribute('name')) {
      name = this.getAttribute('name')
    }

    this._root.innerHTML = `<h1>Olá, ${name}!</h1>`
  }

  disconnectedCallback() {
    this._root.innerHTML = '' // Limpa o elemento
  }
