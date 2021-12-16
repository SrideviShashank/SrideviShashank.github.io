function postData() {
    console.log('test')
axios.post('https://reqres.in/api/login',{
    "email":document.getElementById('email').value,
    "password":document.getElementById('password').value
}).then((result)=>{
    html='User Logged In Sucessfully. Token: '+result.data.token
  
    alert('login successful');
}).catch((error)=>{
    
    alert('invalid login');
})  
}

const form = document.getElementById('form');
const Firstname = document.getElementById('Firstname');
const Lastname = document.getElementById('Lastname');
const email = document.getElementById('emailAddress');

form.addEventListener('submit', e => {
    e.preventDefault();

    validateInputs();
});
const setError = (element, message) => {
    const inputControl = element.parentElement;
    const errorDisplay = inputControl.querySelector('.error');

    errorDisplay.innerText = message;
    inputControl.classList.add('error');
    inputControl.classList.remove('success')
}
const setSuccess = element => {
    console.log(element);
    const inputControl = element.parentElement;
    const errorDisplay = inputControl.querySelector('.error');

    errorDisplay.innerText = '';
    inputControl.classList.add('success');
    inputControl.classList.remove('error');
};
const isValidEmail = email => {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}



const validateInputs = () => {
    
    console.log('validateInputs')
    const FirstnameValue = Firstname.value.trim();
    const LastnameValue = Lastname.value.trim();
    const emailValue = email.value.trim();
    

    if(FirstnameValue === '') {
        console.log('here')
        setError(Firstname, 'Firstname is required');
    } 
    else {
        setSuccess(Firstname);
    }




if(LastnameValue === '') {
    setError(Lastname, 'Lastname is required');
} 
else {
    setSuccess(Lastname);
}





if(emailValue === '')
 {
    setError(email, 'Email is required');
} 
else if (!isValidEmail(emailValue))
 {
    setError(email, 'Provide a valid email address');
} 
else {
    setSuccess(email);
}
};

