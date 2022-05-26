let number = document.getElementById('txtn');
let lista = document.getElementById('numbers');
let res = document.getElementById('res');
let array = [];

function isNumber(n) {
    if(Number(n) >= 1 && Number(n <= 100)) {
        return true;
    } else {
        return false;
    }
}

function inList(n, l) {
    if(l.indexOf(Number(n)) != -1) {
        return true;
    } else {
        return false;
    }
}

function adicionar() {
    if(isNumber(number.value) && !inList(number.value, array)) {
        array.push(Number(number.value));
        let option = document.createElement('option');
        option.text = `O valor ${number.value} foi adicionado`;
        option.setAttribute('value', `Numero ${number.value}`);
        lista.appendChild(option);
        res.innerHTML = "";
    } else {
        alert("[ERRO] Valor inválido, ou já encontrado na lista");
    }
    number.value = "";
    number.focus();
}

function finalizar() {
    if(array.length == 0) {
        alert("[ERRO] Adicione algum valor para finalizar");
    } else {
        let total = array.length;
        let maior = array[0];
        let menor = array[0];
        let soma = 0;
        let media = 0;
        for(let pos in array) {
            soma += array[pos];
            if(array[pos] > maior)
                maior = array[pos];
            if(array[pos] < menor)
                menor = array[pos];
        }
        media = soma / total;

        res.innerHTML = "";
        res.innerHTML += `<p>Ao todo temos ${total} números cadastrados</p>`;
        res.innerHTML += `<p>O maior valor informado foi ${maior}</p>`;
        res.innerHTML += `<p>O menor valor informado foi ${menor}</p>`;
        res.innerHTML += `<p>Somando todos os valores, temos ${soma}</p>`;
        res.innerHTML += `<p>A média dos valores digitados é ${media.toFixed(2)}</p>`;
    }
}