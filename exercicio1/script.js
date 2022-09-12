let coxinha = prompt(`Gostaria de uma coxinha? Digite S para sim e N para não`).toLowerCase()
let conta = Number(0)
while (coxinha==="s") {
    conta = (conta + 2.50);  
    coxinha = prompt(`Gostaria de uma coxinha? Digite S para sim e N para não`).toLowerCase()
}
console.log (`Sua conta ficou em R$ ${conta}`)