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



//Array Notas 
  const notas = [];
let soma = 0;
for (let i = 0; i < notas.length; i++) {
  soma += notas[i];
}
const media = soma / notas.length;
console.log("A média das notas é:", media);
  
// Array Alunos
  const alunos = [];
let soma = 0;
for (let i = 0; i < alunos.length; i++) {
  soma += alunos[i];
}
const media = soma / alunos.length;
console.log("A média de alunos é:", media);

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

// JSON
var aluno = {
  nome:"",
  idade:"",
  cpf:"",
  matricula:"",
};

console.log(aluno[]);
console.log(alunos.length);

