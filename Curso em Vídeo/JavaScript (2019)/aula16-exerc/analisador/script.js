    let num = document.getElementById('tnum')
    let lis = document.getElementById('tlis')
    let res = document.getElementById('resu')
    let val = []

function vernum(n){
    if(Number(n) >= 1 && Number(n) <= 100){
        return true
    }else{
        return false
    }
}

function verlis(n, l){
    if(l.indexOf(Number(n)) != -1){
        return true
    }else{
        return false
    }
}

function adicionar(){
    if(vernum(num.value) && !verlis(num.value, val)){
        val.push(Number(num.value))
        let item = document.createElement('option') // é criada uma variavel que encorpora um elemento do tipo option
        item.text = `Valor ${num.value} foi adicionado` // o item recebe então uma mensagem
        lis.appendChild(item) // adiciona o elemento de item ao select da lista e apresenta a mensagem contida nele
        res.innerHTML = ''
    }else{
        alert('O valor já consta na lista')
    }
    num.value = '' // limpa o ultimo valor digitado no input
    num.focus() // posiciona automaticamente o "cursor" no input
}


function finalizar(){
        if(val.length == 0){
            alert('É preciso ter valores na lista para finalizar')
        }else{
            let tot = val.length
            let maior = val[0]
            let menor = val[0]
            let soma = 0
            let media = 0
            for(let pos in val){
                soma += val[pos]
                if(val[pos] > maior){
                    maior = val[pos]
                }
                if(val[pos] < menor){
                    menor = val[pos]
                }    
            }
            media = soma/tot
            res.innerHTML = ''

            res.innerHTML += `<p>Ao todo, temos ${tot} números cadastrados</p>`
            res.innerHTML += `<p>O MAIOR valor informado foi ${maior}</p>`
            res.innerHTML += `<p>O MENOR valor informado foi ${menor}</p>`
            res.innerhtml += `Somando todos os valores, temos ${soma}`
            res.innerHTML += `A média dos valores digitados é ${media}`
        }
}
