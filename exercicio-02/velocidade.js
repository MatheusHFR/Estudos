const veiculo1 = prompt("Qual o modelo do veiculo 1 ?")
const veiculo2 = prompt("Qual o modelo do veiculo 2 ?")

const velocidade1 = prompt(`Qual a velocidade do(a) ${veiculo1} ?`)
const velocidade2 = prompt(`Qual a velocidade do(a) ${veiculo2} ?`)

if(velocidade1 > velocidade2) {
    alert(` O ${veiculo1} é mais rápido que o ${veiculo2} !`)
} else if(velocidade2 > velocidade1) {
    alert(`O ${veiculo2} é mais rápido que o ${veiculo1} !`)
}  else {
    alert('Os dois tem a mesma volocidade')
}





