it ('nada agora', function() {})

/* function soma(a, b) {
    return a+b;
} */

/* const soma = function (a , b) {
    return a + b;
} */

/* const soma = (a , b) => {
    return a + b;
} */

const soma = a => a+a;


console.log(soma(1, 7))

it('a function test....',  () => {
    console.log('function', this)
})