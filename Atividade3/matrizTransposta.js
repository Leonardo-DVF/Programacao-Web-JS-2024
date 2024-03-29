function transporMatriz(A) {
    let matrizString = '';
    for (let i = 0; i < A.length; i++) {
        for (let j = 0; j < A[i].length; j++) {
            matrizString += A[i][j] + ' ';
        }
        matrizString += '\n';
    }
    console.log('Matriz original:');
    console.log(matrizString);

    let matrizTranspostaString = '';
    for (let j = 0; j < A[0].length; j++) {
        for (let i = 0; i < A.length; i++) {
            matrizTranspostaString += A[i][j] + ' ';
        }
        matrizTranspostaString += '\n';
    }
    console.log('Matriz transposta:');
    console.log(matrizTranspostaString);
}

const A = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
];

transporMatriz(A);