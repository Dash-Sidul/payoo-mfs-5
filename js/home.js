document.getElementById('btn-add-money').addEventListener('click', function(event){
    event.preventDefault();
    const addMoneyInput = document.getElementById('add-money-input').value;
    const pinNumberInput = document.getElementById('input-pin-number').value;
    if(pinNumberInput === '1234'){
        const balance = document.getElementById('account-balance').innerText;
        const addMoneyNumber = parseFloat(addMoneyInput);
        const balanceNumber = parseFloat(balance);
        const newBalance = addMoneyNumber + balanceNumber;
        document.getElementById('account-balance').innerText = newBalance;
    }
    else{
        alert('failed to add money')
    }
})