var vetor = []; var vetor_sem5 = []; vetor_div2 = [];
var soma = 0; var maior = 0; var menor = Infinity; 
var res = document.getElementById('res')


res.innerHTML = `Vetor: `
for (let c = 0;c < 10;c++) { 
    vetor.push(Math.floor(Math.random() * 100))
    vetor_div2[c] = vetor[c] / 2
    soma += vetor[c]

    if (c != 9) {
        res.innerHTML += `${vetor[c]}, `
    } else {
        res.innerHTML += `${vetor[c]}.</p>`
    }
    
    if (vetor[c] > maior) {
        maior = vetor[c]
    } else if (vetor[c] < menor) {
        menor = vetor[c]
    }

    if (vetor[c] > 5) {
        vetor_sem5.push(vetor[c])
    } else {
        let n = 0
        while (n <= 5) {
            n = Math.floor(Math.random() * 100)
        }
        vetor_sem5.push(n)
    }
}

res.innerHTML += `A soma de todos os valores do vetor é igual a ${soma}</p>`
res.innerHTML += `O maior valor é o ${maior} e o menor é o ${menor}</p>`

res.innerHTML += `O mesmo vetor sem valores menores de 5:</br>`
for (let c in vetor_sem5) {
    if (c != 9) {
        res.innerHTML += `${vetor_sem5[c]}, `
    } else {
        res.innerHTML += `${vetor_sem5[c]}.</p>`
    }
}

vetor.sort((a, b) => a - b)
res.innerHTML += `O vetor em ordem crescente:</br>`

for (let c in vetor) {
    if (c != 9) {
        res.innerHTML += `${vetor[c]}, `
    } else {
        res.innerHTML += `${vetor[c]}.</p>`
    }
}

res.innerHTML += `Os valores divido por 2:</br>`
for (let c in vetor_div2) {
    if (c != 9) {
        res.innerHTML += `${vetor_div2[c]}, `
    } else {
        res.innerHTML += `${vetor_div2[c]}.`
    }
}