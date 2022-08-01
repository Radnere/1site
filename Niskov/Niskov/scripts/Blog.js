function Email()
{
    const mailInput = document.getElementById('mailInput');
    const errorMail = document.getElementById('errorMail');
    let check = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-])+\.([A-Za-z]{2,4})$/g;
    let Email = mailInput.value;
    let valid = check.test(Email);
    if(valid) { 
        errorMail.innerHTML='E-mail введен правильно!';
        errorMail.style.color = 'green';
    }
    else 
    {  
        if(mailInput.value.length === 0)
        {
            errorMail.innerHTML='В поле ничего нет!';
            errorMail.style.color = 'red';
        }
        else
        {
            errorMail.innerHTML='E-mail введен неправильно!';
            errorMail.style.color = 'red';
        }
    }
    return valid;
}

function Phone()
{
    const telInput = document.getElementById('telInput');
    const errorTel = document.getElementById('errorTel');
    let check =/^\+\d{12}$/g;
    let Tel = telInput.value;
    let valid = check.test(Tel);
    if(valid)  
    {
        let valid2 = false;
        for (let i = 4; i < 13; i++) {
            if (telInput.value[i] != '0') {
                valid2 = true;
                break;
            }
        }
        if(valid2)
        {
            errorTel.innerHTML='Телефон введен верно!';
            errorTel.style.color = 'green';
        }
        else
        {
            errorTel.innerHTML='Телефон введен из одних нулей!';
            errorTel.style.color = 'red';
        }
    }
    else
    {
        if(telInput.value.length === 0)
        {
            errorTel.innerHTML='В поле ничего нет!';
            errorTel.style.color = 'red';
        }
        else if(telInput.value[0] != '+')
        {
            errorTel.innerHTML='В начале должен быть +!';
            errorTel.style.color = 'red';
        }
        else if(telInput.value[1] != '3' || telInput.value[2] != '8' || telInput.value[3] != '0')
        {
            errorTel.innerHTML='Пожалуйста, введите номер телефона в формате +ZZZxxxxxxxxx(Z - код страны, Х - цифры)';
            errorTel.style.color = 'red';
        }
        else if(telInput.value.length < 13 || telInput.value.length > 13)
        {
            errorTel.innerHTML='Номер должен состоять из 12 цифр (+ZZZxxxxxxxxx)!';
            errorTel.style.color = 'red';
        }
        else
        {
            errorTel.innerHTML='Телефон введен неверно!';
            errorTel.style.color = 'red';
        }
    }
    return valid;
}

function MainButton()
{
    const sendButton = document.getElementById('sendButton');
    const mailInput = document.getElementById('mailInput');
    const mailInputHTML5 = document.getElementById('mailInputHTML5');
    const telInput = document.getElementById('telInput');
    let checkMail = /^([A-Za-z0-9_/\-\.])+@([A-Za-z0-9_\-])+\.([A-Za-z]{2,4})+$/g;
    let checkMailHTML5 = /^([A-Za-z0-9_/\-\.])+@([A-Za-z0-9_\-])+\.([A-Za-z]{2,4})+$/g;
    let checkTel = /^\+\d{12}$/g;
    let checkTelHTML5 = /^\+\d{12}$/g;
    let Email = mailInput.value;
    let EmailHTML5 = mailInputHTML5.value;
    let Tel = telInput.value;
    if(checkTelHTML5.test(Tel) && checkMailHTML5.test(EmailHTML5))
    {
        sendButton.disabled = false;
    }
    else 
    {
        sendButton.disabled = true;
        if(checkTel.test(Tel) && checkMail.test(Email))
        {
            sendButton.disabled = false;
        }        
    }
}

function EmailHTML5()
{
    const tempElement = document.createElement("input");
    tempElement.setAttribute("type", "color");
    if (tempElement.type !== "text") {}
    else
    {
        const mailInput = document.getElementById('mailInputHTML5');
        const error = document.getElementById('errorHTML5');
        const errorMail = document.getElementById('errorMailHTML5');
        let check = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-])+\.([A-Za-z]{2,4})$/g;
        let Email = mailInput.value;
        let valid = check.test(Email);
        error.innerHTML='Браузер не поддерживает HTML5';
        if(valid) { 
            errorMail.innerHTML='E-mail введен правильно!';
            errorMail.style.color = 'green';
        }
        else 
        {  
            if(mailInput.value.length === 0)
            {
                errorMail.innerHTML='В поле ничего нет!';
                errorMail.style.color = 'red';
            }
            else
            {
                errorMail.innerHTML='E-mail введен неправильно!';
                errorMail.style.color = 'red';
            }
        }
        return valid;
    }
}