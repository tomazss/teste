function Calcular(){
    let num =  window.document.getElementById('numero').value
    let res =window.document.getElementById('res')
    let fib = [];
    let a = 0;
    let b = 1;
    fib.push(a);
    fib.push(b);
    
  
    
    
    while (b <= num) {
        let c = a + b
        a= b
        b = c
        a +b
        fib.push(c)
        
    }
   let numero = parseInt(num)

    if(numero > 0){
        if (fib.includes(numero)) {
            res.innerHTML = ''
            res.innerHTML += ` <p>o número <strong>${num}</strong> pertence à sequência de Fibonacci.</p>
            ${fib}`
        } else {
            res.innerHTML = ''
            res.innerHTML += ` <p>o número <strong>${num} não pertence à sequência de Fibonacci.</p>
            ${fib}`
        }
    }else{
        res.innerHTML = "Erro digite um numero"
    }
    
  
  
limpar()


}
function limpar() {
    document.getElementById('numero').value = "";
}

