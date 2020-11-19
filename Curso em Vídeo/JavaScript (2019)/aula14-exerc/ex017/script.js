function tabuada(){
    var num = document.getElementById('tnum')
    var res = document.getElementById('resu')

    if(num.value.length == 0){
        alert('Digite um número!')
    }else{
        var n = Number(num.value)
        res.innerHTML = ''
        for(var i=1;i<=10;i++){
           var item = document.createElement('option')
           item.text = `${n} x ${i} = ${n*i}`
           item.value = `res${i}`
           res.appendChild(item)
        }
    }
}