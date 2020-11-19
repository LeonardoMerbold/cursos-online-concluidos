function carregar(){
    var msg = window.document.getElementById(`mensagem`)
    var img = window.document.getElementById(`imagem`)
    var data = new Date()
    var hora = data.getHours()
    //var hora = 19
    
    msg.innerHTML = `Agora são ${hora} horas.`
    
    if(hora >= 0 && hora <12){
        img.src = '_img/manha.png' // Imagem de Dia
        document.body.style.background = '#C38F67';
    }else if(hora >= 12 && hora <= 18){
        img.src = '_img/tarde.png' // Imagem de Tarde
        document.body.style.background = '#7298B7';
    }else{
        img.src = '_img/noite.png' // Imagem de Noite
        document.body.style.background = '#544570';
    }

}