const resultado = prompt("Escolha uma alternativa: \na)\nb)\nc)")

const resultadoNumerico = parseFloat(resultado)
switch (resultadoNumerico) {
    case 1: 
     alert("O resultado é A")
     
    case 2:
      alert("O resultado é B")
      
    case 3:
      alert("O resultado é C")
      
    default:
      alert("Fianlizando")
}