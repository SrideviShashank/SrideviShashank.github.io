function postData() {
    console.log('test')
axios.post('https://reqres.in/api/login',{
    "email":document.getElementById('email').value,
    "password":document.getElementById('password').value
}).then((result)=>{
    html='User Logged In Sucessfully. Token: '+result.data.token
    document.getElementById('message').innerHTML=html;
    console.log(result.data);
}).catch((error)=>{
    document.getElementById('message').innerHTML='Login Failed. Reason: '+error.response.data.error
    alert(error.response.status);
})  
}

function orDernow()  {
if (confirm("Plesae fill the form")) {
  
document.getElementById("demo").innerHTML = txt;
}
}