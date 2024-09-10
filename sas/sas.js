function verificarSituacao() {
    var nota1 = parseFloat(document.getElementById('nota1').value);
    var nota2 = parseFloat(document.getElementById('nota2').value);
    var nota3 = parseFloat(document.getElementById('nota3').value);
    
    if (nota1 < 0 || nota1 > 10 || nota2 < 0 || nota2 > 10 || nota3 < 0 || nota3 > 10) {
        document.getElementById('resultado').innerText = 'Notas devem estar entre 0 e 10.';
        return;
    }

    var media = (nota1 + nota2 + nota3) / 3;
    
    var situacao;
    if (media < 4) {
        situacao = 'Reprovado';
    } else if (media >= 4 && media < 7) {
        situacao = 'Em recuperação';
    } else {
        situacao = 'Aprovado';
    }
    
    document.getElementById('resultado').innerText = `Média: ${media.toFixed(2)} - Situação: ${situacao}`;
}