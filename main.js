const form = document.getElementById('form-verify');

function validarNumero(numA, numB){
    return numA < numB;
}

form.addEventListener('submit', function(e){
    let formEValido = false;
    e.preventDefault();

    const numeroA = document.getElementById('numero-a');
    const numeroB = document.getElementById('numero-b');
    
    const containerSuccessMessage = document.querySelector('.message-success');
    const containerErrorMessage = document.querySelector('.message-error');

    const mensagemSucesso = `O valor B é maior do que o valor A<br/> ${numeroB.value} > ${numeroA.value}`
    const mensagemErro = `O valor B é menor do que o valor A<br/>${numeroB.value} < ${numeroA.value}`;

    formEValido = validarNumero(numeroA.valueAsNumber, numeroB.valueAsNumber);

    if(formEValido == true){
        containerErrorMessage.style.display = 'none';
        containerSuccessMessage.innerHTML = mensagemSucesso;
        containerSuccessMessage.style.display = 'flex';

        numeroA.value = '';
        numeroB.value = '';

    } else {
        containerSuccessMessage.style.display = 'none';
        containerErrorMessage.innerHTML = mensagemErro;
        containerErrorMessage.style.display = 'flex';
        
        numeroA.value = '';
        numeroB.value = '';
    }
});