// Verificação dos campos
let loginFields = document.querySelectorAll('.login-field')  
for (let loginField = 0; loginField < loginFields.length; loginField++){
    loginFields[loginField].addEventListener('input', function(e){
        if (e.currentTarget.value.trim() != ''){
            e.currentTarget.style.borderColor = '#141414'
        }  
    })
}

// Login de users através do nome e senha
let loginBtn = document.querySelector('#login')
loginBtn.addEventListener('click', function login(e){
    e.preventDefault()
    let user = document.querySelector('#username')
    let password = document.querySelector('#password')
    if (user.value.trim() == '' || password.value.trim() == ''){
        Swal.fire({
            title: 'Erro !',
            text: 'Preencha os campos necessários para prosseguir',
            icon: 'error'
        })
        user.style.borderColor = 'red'
        password.style.borderColor = 'red'
        
    }
    else{
        Swal.fire({
            title: 'Login realizado!',
            text: `Bem-vindo, ${user.value}!`,
            icon: 'success',
            timer: 2000,
            showConfirmButton: false
        });
        //Verificar se está funcionando :D
        let userLogged = {user: user.value, pass: password.value}
        let json = JSON.stringify(userLogged)
        localStorage.setItem(user.value, json)
    }
})