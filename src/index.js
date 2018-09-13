import './sass/main.scss'
window.onload=function() {
    var regexPhone = new RegExp(/^[+]*[(]{0,1}[0-9]{1,4}[)]{0,1}[-\s\./0-9]*$/g)
    var regexEmail = new RegExp(/^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/g)

    var messageLengthMax = 300;

    var phone = document.querySelector('input[name="phone"]')
    var phoneInfoValid = document.querySelector('.phone')
    var phoneValid = false

    var email = document.querySelector('input[name="email"]')
    var emailInfoValid = document.querySelector('.email')
    var emailValid = false

    var message = document.querySelector('.message')
    var messageValid = false

    var name = document.querySelector('input[name="name"]')

    var passView =  document.querySelector('.pass-view');

    var confirm = document.querySelector('.button')

    confirm.addEventListener('click', function (evt) {
        passView.classList.add('display-none')
        phoneValidation();
        messageValidation();
        emailValidation();
        if( phoneValid && emailValid && messageValid) {
            passForm()
        }
    })

    function passForm() {
        document.querySelector('.phone-pass').innerHTML = phone.value;
        document.querySelector('.email-pass').innerHTML = email.value;
        document.querySelector('.message-pass').innerHTML = message.value;
        phone.value = ''
        phoneValid = false
        email.value = ''
        emailValid = false
        message.value = ''
        messageValid = false
        if (name) {
            document.querySelector('.name-pass').innerHTML = name.value;
            name.value = ''
        }
        passView.classList.remove('display-none');

    }

    function emailValidation() {
        if(!email.value.match(regexEmail)) {
            emailInfoValid.classList.replace('display-none','error')
            emailValid = false;
        }
        else {
            emailInfoValid.classList.add('display-none')
            emailValid = true;
        }
    }

    function phoneValidation() {

        if(!phone.value.match(regexPhone)) {
            phoneInfoValid.classList.replace('display-none','error')
            phoneValid = false;
        }
        else {
            phoneInfoValid.classList.add('display-none')
            phoneValid = true;
        }
    }

    function messageValidation() {
        var MSG = document.querySelector(".messageText")
        var messageText = '';
        if(message.value) {
            if(message.value.length > messageLengthMax) {
                messageText = 'Message is too long'
                messageValid = false
            }
            if (message.value && message.value.length <= messageLengthMax) {
                messageValid = true
                MSG.classList.add('display-none')
            }
        }
        else {
            messageText = 'Message required ... '
            messageValid = false
        }
        MSG.classList.replace('display-none','error')
        MSG.innerHTML = messageText;
    }

}
