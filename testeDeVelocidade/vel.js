const veic1 = prompt('Qual o modelo do seu veiculo?')
const vel1 = parseFloat(prompt('Qual a velocidade do seu veiculo?'))

const veic2 = prompt('Qual o modelo do seu veiculo?')
const vel2 = parseFloat(prompt('Qual a velocidade do seu veiculo?'))

if (vel1 > vel2) {
    alert(` O ${veic1} é mais rápido do que o ${veic2} !`)
} else if (vel1 > vel2) {
    alert(`${veic2} é mais rápido do que ${veic1}`)
} else{
    alert(`Os veiculos ${veic1} e ${veic2} estão na mesma velocidade!!`)
}