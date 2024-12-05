document.getElementById('btn-cash-out').addEventListener('click', function(event){
    event.preventDefault();
    const inputCashOut = document.getElementById('input-cash-out').value;
    const cashOutPin = document.getElementById('cash-out-pin').value;
    if(cashOutPin === '1234'){
        const balance = document.getElementById('account-balance').innerText;
        const cashOutNumber = parseFloat(inputCashOut);
        const newBalance = parseFloat(balance);
        const mainBalance = newBalance - cashOutNumber;
        document.getElementById('account-balance').innerText = mainBalance;
    }
})