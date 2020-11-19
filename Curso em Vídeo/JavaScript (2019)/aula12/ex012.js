var agora = new Date() // armazena as informações do sistema na variavel 'agora'
var hora = agora.getHours() // seleciona apenas as horas e armazena em uma nova variavel 'hora'
console.log(`Agora são exatamente ${hora} horas`)
if(hora < 12){
    console.log('Bom dia!')
}else if(hora <= 18){
    console.log('Boa tarde')
    }else{
        console.log('Boa noite!')
    }
/*
var data = Date(Date.now())
console.log(`A data de hoje é '${data}'`)
*/
