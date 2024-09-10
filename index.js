const btAdicAluno = document.getElementById("btAdicAluno");
const inputMat = document.getElementById("inputMat");
const inputNome = document.getElementById("inputNome");
const inputIdade = document.getElementById("inputIdade");
const inputCpf = document.getElementById("inputCpf");
const btSubmit = document.getElementById("btEnviar");
const btLimpar = document.getElementById("btLimpar");

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
  inputMat.value = 0;
  inputNome.value = 0;
  inputIdade.value = 0;
  inputCpf.value = "";
  };

btAdicionar.onclick = handleBtAdicionarClick;
btSalvar.onclick = handleBtSalvarClick;
btLimpar.onclick = handleBtLimparClick;

console.log(alert("Aluno adicionado com sucesso!"));
console.log(confirm("Deseja adicionar aluno?"));
console.log(prompt("Bem vindo!"));

//arrays
let notas = new Array(n);
console.log(nota[]);
let alunos = new Array(aluno);
console.log(aluno[]);
let nomes = new Array(nome);
console.log(nome[]);

//Validações
let nomes = new Array(nome);
if (nome.aluno == 0) console.log(alert("Nome inválido!"));
console.log(nome[]);


let matricula = new Array(matricula);
if (matricula.aluno > 8 || matricula.aluno < 8) console.log(alert("Número de caracteres inválidos!");
console.log(matricula[]);


let cpf = new Array(cpf);
if (cpf.aluno => 14) console.log(alert("Número de caracteres inválidos!");
console.log(cpf[]);


let idade = new Array (idade);
if (idade.aluno != int) console.log(alert("Informe um número inteiro!");
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
