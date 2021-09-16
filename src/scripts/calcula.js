//Script responsável pela parte lógica da calculadora
export default function calcular(acao, valor) {
    if (acao === 'acao') {

        if (valor === 'c') {
            document.getElementById('resultado').value = ''
        }

        if (valor === '+' || valor === '-' || valor === '*' || valor === '/' || valor === '.') {
            document.getElementById('resultado').value += valor
        }

        if (valor === '=') {
            //metodo eval é responsável por transformar os numeros string em cálculo por meio do javascript
            var valor_campo = eval(document.getElementById('resultado').value)

            document.getElementById('resultado').value = valor_campo
        }
    } else if (acao === 'valor') {
        document.getElementById('resultado').value += valor
        console.log(valor);
    }
}