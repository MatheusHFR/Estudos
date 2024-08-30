let velocidade = 80 

while (velocidade > 0) {
    alert("O carro está " + velocidade +" km/h")
    velocidade -= 20
    alert("Diminuindo 20")

    if(velocidade === 40){
        break
    }
}

alert ("O carro parou!")