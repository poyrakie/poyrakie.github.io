function validate(event) {
    event.preventDefault()

    for (let element of event.target){
        
        if(element.required) {
            validateForm(element)
        }
    }
}

function validateForm(element) {
    console.log(element)
    let result = false

    const errorMessage = {
        nameError: 'Must provide a valid name',
        emailError: 'Must provide a valid E-mail',
        messageError: 'Your message must be between 2 and 450 characters'
    }

    switch(element.name) {
        case 'name':
            result = validateName(element.value)
            break;
        case 'email':
            result = validateEmail(element.value)
            break;
        case 'message':
            result = validateMessage(element.value)
            charCounter(element.value)
            break;
        }

    if (!element.value) {
        document.getElementById(`${element.id}`).classList.remove('success');
        document.getElementById(`${element.id}`).classList.remove('error');
        document.getElementById(`${element.name}Span`).innerHTML = '';
    } else {
        if (!result) {

            document.getElementById(`${element.id}`).classList.add('error');
      
            document.getElementById(`${element.id}`).classList.remove('success');
            document.getElementById(`${element.name}Span`).innerHTML = errorMessage[element.name + "Error"];
      
          } else {
      
              document.getElementById(`${element.id}`).classList.add('success');
              document.getElementById(`${element.id}`).classList.remove('error');
              document.getElementById(`${element.name}Span`).innerHTML = '';
      
          }
    }

}

function validateEmail(element) {
    if (!/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,})+$/.test(element))
        return false 
    return true
}
function validateMessage(element) {
    if (!/^.{2,450}$/.test(element))
        return false
    return true
}
function validateName(element) {
    if (!/^[ a-zA-ZàèìòùÀÈÌÒÙáéíóúýÁÉÍÓÚÝâêîôûÂÊÎÔÛãñõÃÑÕäëïöüÿÄËÏÖÜŸçÇßØøÅåÆæœ'`'\-]{2,}$/.test(element))
        return false
    return true
}

function charCounter(element) {
    const message = document.getElementById('formMessage');
    if (!message.value) {
        document.getElementById('characterCounter').innerHTML = ''
    } else {
        document.getElementById('characterCounter').innerHTML = `${message.value.length}/450 characters`
    }
    
    if (message.value.length > 450) {
        document.getElementById('characterCounter').classList.add('errorSpan')
    }
    else {
        document.getElementById('characterCounter').classList.remove('errorSpan')
    }
}