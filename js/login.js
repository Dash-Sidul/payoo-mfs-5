document.getElementById('button-login').addEventListener('click', function(event){
    event.preventDefault(); 
    const phoneNumber = document.getElementById('phone-number').value;
    const pinNumber = document.getElementById('pin-number').value;
    if(phoneNumber === '01580657917' && pinNumber === '1328'){
        window.location.href = '/home.html'
    }
    else{
        alert('wrong pin number number or pasword')
    }
})
