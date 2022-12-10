let banco = [];

const getBanco = () => JSON.parse(localStorage.getItem('lista'))??[]
const setBanco = (banco) => localStorage.setItem('lista', JSON.stringify(banco))
console.log(JSON.parse(localStorage.getItem(lista)))

let texto = document.getElementById('texto');

// ACOES DEFINIDAS EM ARROW FUNCTIONS

// CRIAR ITEM NA NOSSA LISTAGEM DE TAREFAS (label + definir class + criar input com checkbox e botao)

const criarItem = (tarefa, status, indice) => {
    const item = document.createElement('label')
    item.classList.add('listaItem')
    item.innerHTML = `
    <input type = "checkbox" class="checkbox" id="botao"  ${status} data-indice = ${indice} >
    <div> ${tarefa} </div>
    <input type = "button" value = "X" data-indice = ${indice}>
    `
    document.getElementById('lista').appendChild(item) 
}

// LIMPAR TAREFAS

const limparTarefas = () => {
    const lista = document.getElementById('lista')

    while (lista.firstChild){
        lista.removeChild(lista.lastChild)
    }
}

// ATUALIZAR TELA

const atualizarTela = () => {
    limparTarefas()
    const banco = getBanco()
    banco.forEach((item,indice) => criarItem (item.tarefa, item.status, indice))
        
}

// INSERIR ITEM NA LISTA DE TAREFAS 

const inserirItem = (evento) => {
    let tecla = evento.key;
    let texto = evento.target.value;
   
    
    if (tecla === 'Enter') {
        if (texto == '') {
            console.log('erro')
        }else {

            const banco = getBanco();

            banco.push ({'tarefa': texto, 'status': ''})
            setBanco(banco);
            atualizarTela();
            evento.target.value = '';
            // console.log(tecla)    
}
}}

    // REMOVER ITEM

const removerItem = (indice) => {
    const banco = getBanco();
    banco.splice (indice, 1);
    setBanco(banco);
    atualizarTela();
}    

// ATUALIZAR ITEM 

const atualizarItem = (indice) => {
    const banco = getBanco()
    banco[indice].status = banco[indice].status === '' ? 'checked' : ''
    setBanco(banco)
    atualizarTela()
    console.log(lista)
}


const clickItem  = (evento) => {
    const elemento = evento.target

    if (elemento.type === 'button') {
        const indice = elemento.dataset.indice
        removerItem (indice)

    }else if  (elemento.type === 'checkbox') {
        const indice = elemento.dataset.indice
        atualizarItem (indice)

    
    }
    console.log (elemento.type)
}

// adicionar escutadore de eventos de tecla pressionada e de click

document.getElementById('novaTarefa').addEventListener('keypress', inserirItem);
document.getElementById('lista').addEventListener('click', clickItem);

atualizarTela();


let info = document.querySelectorAll(".textInsert p")
let todaLista = document.querySelectorAll('.lista')
let ativo = document.querySelector(".ativo")
// console.log(lista)

console.log(info);
info.forEach(element => {
 element.addEventListener('click', () =>{
    info.forEach(item => {
        item.classList.remove('ativo');
        
       });
       element.classList.add('ativo')
       if(element.innerText=="Ativo"){
        todaLista.forEach(elem => {

            console.log(evento)
            // if()){
                

            // //    elem.style.display="flex";
            //    console.log(indice)
            // }else{
            //     elem.style.display="none";
            // }    
        }) 
       }else if(element.innerText=="checkbox"){

       }
 })
}); 