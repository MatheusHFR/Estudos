function carregar() {
var msg = window.document.getElementById('msg')
var img = window.document.getElementById('imagem')
var data = new Date()
//var hora = data.getHours()
var hora = 10 
msg.innerHTML = `Agora são ${hora} Horas`
if(hora >= 0 && hora < 12){
    //BOM DIA!
    img.src = 'fotomanha.png'
    document.body.style.background = '#D7BB09'
} else if(hora >= 12 && hora < 18){
    //BOA TARDE!
    document.body.style.background = '#b9846f'
    img.src = 'fototarde.png'
} else {
    //BOA NOITE!
    document.body.style.background = '#515154'
    img.src = 'fotonoite.png'
}
}