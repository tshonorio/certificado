var cartaPaulo = {
nome: "seiya de pegaso",
imagem: "https://i.pinimg.com/originals/25/e0/17/25e017ead93c4cf341bf96a1d9bfb8f4.jpg",
atributos:{
    ataque: 90,
    defesa: 60,
    magia: 85,
 }
}

var cartaRafa = {
    nome: "Bulbasauro",
    imagem: "https://i.pinimg.com/originals/3d/f2/db/3df2dbe82ab0a446ef57bada79b5b277.png",
 atributos:{
    ataque: 70,
    defesa: 65,
    magia: 90,
 }
}

    var cartaGui  = {
        nome: "Lord Darth Vader",
        imagem: "https://sm.ign.com/ign_br/screenshot/default/darth-vader_5yvm.jpg",
        atributos:{
        ataque: 88,
        defesa: 62,
        magia: 90,
 }
}

var cartaMaquina
var cartaJogador
var cartas = [cartaPaulo, cartaRafa, cartaGui]



function sortearCarta(){
    var numeroCartaMaquina = parseInt(Math.random() * 3)
    cartaMaquina = cartas[numeroCartaMaquina]
        
    var numeroCartaJogador = parseInt(Math.random() * 3)
    while (numeroCartaJogador == numeroCartaMaquina) {
        numeroCartaJogador = parseInt(Math.random() * 3)
    }
    cartaJogador = cartas[numeroCartaJogador]
    console.log(cartaJogador)

    document.getElementById('btnSortear').disabled =true
    document.getElementById('btnJogar').disabled = false
    exibeCartaJogador()
    
}

function exibeCartaJogador() {
    var divCartaJogador = document.getElementById("carta-jogador")
    var moldura = '<img src="https://www.alura.com.br/assets/img/imersoes/dev-2021/card-super-trunfo-transparent-ajustado.png"style=" width: inherit; height: inherit; position: absolute;">'

    divCartaJogador.style.backgroundImage = `url(${cartaJogador.imagem})`
    
    var nome = `<p class = "carta-subtitle">${cartaJogador.nome}</p>`

    var opcoesTexto = ""

    for(var atributo in cartaJogador.atributos){
        opcoesTexto += "<input type='radio' name='atributo' value='" + atributo + "'>" + atributo + " " + cartaJogador.atributos[atributo] + "<br>"
       
    }
   
   var html = "<div id = 'opcoes' class = 'carta-status'>" 

    divCartaJogador.innerHTML = moldura+nome+html+opcoesTexto
}

function obtemAtributoSelecionado() {
    
    var radioAtributo = document.getElementsByName('atributo')
    for (var i = 0; i < radioAtributo.length; i++){
        if(radioAtributo[i].checked){
        
        return radioAtributo[i].value
        }
    }
}

function jogar(){

    var divResultado = document.getElementById("resultado")
    var atributoSelecionado = obtemAtributoSelecionado()
    console.log(atributoSelecionado)

    if (cartaJogador.atributos[atributoSelecionado] > cartaMaquina.atributos[atributoSelecionado]){
        htmlResultado = '<p class ="resultado-final">Venceu</p>'
    }else if (cartaJogador.atributos[atributoSelecionado]< cartaMaquina.atributos[atributoSelecionado]) {
        htmlResultado = '<p class ="resultado-final">Perdeu</p>'
    } else{
        htmlResultado = '<p class ="resultado-final">Empatou</p>'
    }
    divResultado.innerHTML = htmlResultado
    exibeCartaMaquina()

}

function exibeCartaMaquina() {
    var divCartaMaquina = document.getElementById("carta-maquina")
    var moldura = '<img src="https://www.alura.com.br/assets/img/imersoes/dev-2021/card-super-trunfo-transparent-ajustado.png"style=" width: inherit; height: inherit; position: absolute;">'

    divCartaMaquina.style.backgroundImage = `url(${cartaMaquina.imagem})`
    
    var nome = `<p class = "carta-subtitle">${cartaMaquina.nome}</p>`

    var opcoesTexto = ""

    for(var atributo in cartaMaquina.atributos){
        opcoesTexto += "<p type='text' name='atributo' value='" + atributo + "'>" + atributo + " " + cartaMaquina.atributos[atributo] + "<br>"
       
    }
   
   var html = "<div id = 'opcoes' class = 'carta-status'>" 

    divCartaMaquina.innerHTML = moldura+nome+html+opcoesTexto
}
