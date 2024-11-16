// Função para calcular o fatorial de um número
function fatorial(num) {
    if (num === 0 || num === 1) {
        return 1;
    }
    let resultado = 1;
    for (let i = 2; i <= num; i++) {
        resultado *= i;
    }
    return resultado;
}

// Função para calcular combinações C(n, p)
function calcularCombinacao(n, p) {
    if (p > n) {
        return "O valor de p não pode ser maior que n.";
    }
    // C(n, p) = n! / (p! * (n - p)!)
    const combinacao = fatorial(n) / (fatorial(p) * fatorial(n - p));
    return combinacao;
}

// Lidar com o evento de submissão do formulário
document.getElementById('form-combinacao').addEventListener('submit', function(event) {
    event.preventDefault();

    // Obter valores de n e p
    const n = parseInt(document.getElementById('n').value);
    const p = parseInt(document.getElementById('p').value);

    // Validar se os valores são válidos
    if (isNaN(n) || isNaN(p) || n < 0 || p < 0) {
        alert('Por favor, insira valores válidos para n e p.');
        return;
    }

    // Calcular a combinação
    const resultado = calcularCombinacao(n, p);

    // Exibir o resultado
    const resultadoElement = document.getElementById('resultado');
    const mensagemElement = document.getElementById('mensagem');
    
    // Exibir a combinação ou erro
    if (typeof resultado === 'string') {
        resultadoElement.className = 'resultado erro';
        mensagemElement.textContent = resultado;
    } else {
        resultadoElement.className = 'resultado sucesso';
        mensagemElement.textContent = `O número de combinações C(${n}, ${p}) é: ${resultado}`;
    }
});
