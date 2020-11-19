function verificar(){
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.querySelector('div#res')
    
    if(fano.value.length == 0 || fano.value > ano || fano.value < 1870){
        window.alert('[ERRO] Dados inválidos. Verifique-os Novamente!!')
    }else{
        var fsex = document.getElementsByName('radsex')
        var idade = ano - fano.value
        //res.innerHTML = `Idade calculada: ${idade}`//testar calculo da idade
        var genero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
        if(fsex[0].checked){
            genero = 'Homem'
            document.body.style.background = '#5858da'
            if(idade >= 0 && idade < 10){ // Criança
                img.setAttribute('src', '_img/cri-h.png')
            }else if(idade < 21){ // Jovem
                img.setAttribute('src', '_img/jov-h.png')
            }else if(idade < 50){ // Adulto
                img.setAttribute('src', '_img/adu-h.png')
            }else{ // Idoso
                img.setAttribute('src', '_img/ido-h.png')
            }
        }else if(fsex[1].checked){
            genero = 'Mulher'
            document.body.style.background = '#BE908D';
            if(idade >= 0 && idade < 10){ // Criança
                img.setAttribute('src', '_img/cri-m.png')
            }else if(idade < 21){ // Jovem
                img.setAttribute('src', '_img/jov-m.png')
            }else if(idade < 50){ // Adulto
                img.setAttribute('src', '_img/adu-m.png')
            }else{ // Idoso
                img.setAttribute('src', '_img/ido-m.png')
            }
        }
        res.style.textAlign = 'center' //centraliza o texto gerado após verificar
        res.innerHTML = `Detectamos ${genero} com ${idade} anos.`
        res.appendChild(img)
    }
}