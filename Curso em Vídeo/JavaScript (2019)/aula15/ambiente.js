let num = [3, 5, 1, 7]
console.log(`Nosso vetor é composto pelos números ${num}`)

num[3] = 8 // Adiciona/substitui o valor na posição indicada
console.log(`Nosso vetor é composto pelos números ${num}`)

num.push(9) // Adiciona o valor na ultima posição do array
console.log(`Nosso vetor é composto pelos números ${num}`)

num.length // 'length' é um atributo para contabilizar o tamanho do array
console.log(`O seu vetor tem ${num.length} posições`)

num.sort()
console.log(`Os valores ordenados: ${num}`)

let pos = num.indexOf(8) // Caso seja solicitado um valor que não esteja presente no vetor, ele retornará '-1'
    if(pos == -1){
        console.log(`O valor não foi encontrado!`)
    }else{
        console.log(`O valor 8 esta na posição ${pos}`)
    }

for(pos=0;pos<num.length;pos++){
    console.log(num[pos])
}