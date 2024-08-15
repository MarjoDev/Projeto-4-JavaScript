let comNumero
let tentativas = []
let tentativasNum = 0
let maxTentativas = 10

function novoJogo(){
    window.location.reload()
}

function init(){
    comNumero = Math.floor(Math.random() * 100 + 1)
}

if (tentativasNum < maxTentativas){
    function comparar(){
        const tentativa = Number(document.getElementById('inputBox').value)
        tentativas.push(' ' + tentativa)
        document.getElementById('guesses').innerHTML = tentativas
    
        if (tentativas > comNumero){
            document.getElementById('textOutput').innerHTML = 'Muito alto'
            document.getElementById('inputBox').value = ''
            tentativasNum++
            document.getElementById('attempts').innerHTML = tentativasNum
        } 
        else if (tentativas < comNumero){
            document.getElementById('textOutput').innerHTML = 'Muito baixo'
            document.getElementById('inputBox').value = ''
            tentativasNum++
            document.getElementById('attempts').innerHTML = tentativasNum
        }
        else {
            document.getElementById('textOutput').innerHTML = 'Parabéns! Você acertou!'
            tentativasNum++
            document.getElementById('attempts').innerHTML = tentativasNum
            document.getElementById('inputBox').setAttribute('readonly', 'readonly')
        }
    }
}
else {
    document.getElementById('textOutput').innerHTML = 'Você perdeu! O número era ' + comNumero
    document.getElementById('inputBox').setAttribute('readonly', 'readonly')
}