//Atividade 1
function mostrarLembrete() {
    //Ativdade 2
    console.log('Water the plants');
}

//Atividade 3 
function saudacaoEmEspanhol() {
    //Atividade 4
    console.log('Buenas tardes.');
}

//Atividade 5
function agradecerCliente() {
    console.log('Thank you for your purchase! We appreciate your business.')
}

//Atividade 6
agradecerCliente()

//Atividade 7
agradecerCliente()
agradecerCliente()
agradecerCliente()

//Atividade 8 e 9
function agradecerCliente(nome='Cole'){
    console.log('Thank you for your purchase '+nome+'! We appreciate your business.')
}

//Atividade 10
agradecerCliente('Maria')

//Atividade 11
function criarListaDeCompras(item1 = 'Leite', item2 = 'pão', item3 = 'ovos'){
    console.log(item1 + item2 + item3)
}

//Atividade 12
//Tarefa 1
function contarMonitores(linhas , colunas ){
    return linhas * colunas
}
//Tarefa 2
const numeroDeMonitores = contarMonitores(5, 4)
console.log(numeroDeMonitores)
//Tarefa 3
function custoDosMonitores(linhas , colunas){
    return (linhas*colunas)*200
}
const custoTotal = custoDosMonitores(5, 4)
console.log(custoTotal)

//Atividade 13
//Tarefa 1
const plantaPrecisaDeAgua = dia => {
    if (dia === 'Wednesday') {
        return true
    } else {
        return false
    }   
}

console.log(plantaPrecisaDeAgua('Tuerday'))
