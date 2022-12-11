let contador = 0;
let input = document.getElementById('texto')
let btnAdicionar = document.querySelector('.botao')
let novaLista = document.querySelector('.lista')


function addTarefa(){
    let valorInput = input.value;

    if((valorInput !=="") && (valorInput !==null) && (valorInput !== undefined)){
        
        ++contador;

        let novaTarefa = `<div id="${contador}"class="item">
        <div onclick = "tarefaFeita${contador}"class = "item-icone">
        <i id="icone_${contador}"class='bx bxs-plus-circle'></i>        
        </div>
        <div onclick="tarefaFeita(${contador})"class="item-nome">
            ${valorInput}
        </div>
        <div class="item-botao">
            <button onclick="deletarTarefa(${contador})"class="delete">
            <i class="mdi mdi-delete"></i> Deletar </button>        
        </div>
    </div>`; 

        novaLista.innerHTML += novaTarefa;
        input.value = "";
        input.focus();
        
    }
}


function deletarTarefa(id){
    var tarefa = document.getElementById(id)
    tarefa.remove();

}

//EXTRA FILTROS

// function tarefaFeita(id){
//     var item = document.getElementById(id)
//     var classe = item.getAttribute('class')

//     if(classe == "item"){
//         item.classList.add('clicado')
//         var icone = document.getElementById('icone' + id)
//         icone.classList.remove('bx bxs-plus-circle')
//         icone.classList.add("mdi-check-circle")
        
//     }else{
//         item.classList.remove('clicado')

//         var icone = document.getElementById('icone' + id)
//         icone.classList.remove("mdi-check-circle")
//         icone.classList.add('bx bxs-plus-circle')
//     }

// }