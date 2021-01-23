let numero = document.getElementById('txtnum')
let lista = document.getElementById('resSel')
let res = document.querySelector('div#res')

var array = []

function adicionar(){
    
    if(numero.value.length == 0){ //verifica se a entrada esta vazia
        alert('ERRO: Digite um número')
    }else if(numValido(numero.value) && !inLista(numero.value, array)){ //se o numero for de 1 a 100 e nao estiver na lista
        array.push(Number(numero.value))
        let item = document.createElement('option') 
        item.text = `O número ${numero.value} foi adicionado.`
        lista.appendChild(item)
        res.innerHTML = ''
    }else{
        alert('Número inválido ou ja contem na lista')
    }

}

function finalizar(){
    if(array.length == 0){
        alert('ERRO: Adicione os números!')
    }else{
        res.innerHTML = ''
        array.sort()
        let qtd = array.length
        let maior = array[0]
        let menor = array[0]
        for(let pos in array){
            if(array[pos] > maior){
                maior = array[pos]
            }
            if(array[pos] < menor){
                menor = array[pos]
            }
        }
        let soma = funcSoma(array)
        let media = funcMedia(array)
    
        res.innerHTML = `<p>Ao todo temos ${qtd} números.</p>`
        res.innerHTML += `<p>O maior deles é o ${maior}.</p>`
        res.innerHTML += `<p>O menor é o ${menor}.</p>`
        res.innerHTML += `<p>A soma dos números é ${soma}.</p>`
        res.innerHTML += `<p>E a média deles é ${media}.</p>`
    }
}

function numValido(num){ //verifica se o numero é de 1 a 100
    if(Number(num) >=1 && Number(num) <= 100){
        return true
    }else{
        return false
    }
}

function inLista(num, lista){ //verifica se o numero esta na lista
        if(lista.indexOf(Number(num)) != -1){
            return true
        }else{
            return false
        }
}

function funcSoma(array){ //soma dos numeros
    let sum = 0
    for(let pos = 0; pos < array.length; pos++){
        sum += array[pos]
    }
    return sum
}

function funcMedia(array){ //media dos numeros
    let resMedia = funcSoma(array) / array.length
    return resMedia
}