function contar(){
    var ini = window.document.getElementById('tini')
    var fim = window.document.getElementById('tfim')
    var sal = window.document.getElementById('tsal')
    var res = window.document.getElementById('tres')

    if(ini.value.length == 0 || fim.value.length == 0 || sal.value.length == 0){
        res.innerHTML = 'Falha na contagem!'
    }else{
        res.innerHTML = 'Valores: '

        var i = Number(ini.value)
        var f = Number(fim.value)
        var s = Number(sal.value)
        
        if(s <= 0){
            alert('Salto inválido. Será considerado Salto = 1')
            s = 1
        }

        if(i < f){ 
            for(var x=i;x<=f;x+=s){ // crescente
                res.innerHTML += `${x}, `
            }
        }else{
            for(var x=i;x>=f;x-=s){ // decrescente
                res.innerHTML += `${x}, `
            }
        }
        res.innerHTML += `\u{1F6D1}`
    }
} 