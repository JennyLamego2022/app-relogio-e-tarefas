let contador = 0;
let input = document.getElementById('texto')
let btnAdicionar = document.querySelector('.botao')


function addTarefa(){
    let valorInput = input.value;

    if((valorInput !=="") && (valorInput !==null) && (valorInput !== undefined)){
        
        ++contador;

        let novaTarefa = `<div id="${contador}" class="item">`
    }


}