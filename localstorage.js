
function onSubmit (event){
    event.preventDefault()
    
    let nombre = document.getElementById("username").value;
    let email = document.getElementById("email").value;
    let message = document.getElementById("message").value;

    const data = {
        nombre : nombre,
        email : email,
        msg : message,
    };

    

    if (localStorage.getItem('info') === null) {
        let info = [];
        info.push(data);
        localStorage.setItem('info', JSON.stringify(info));
    }
        else {
        let info = JSON.parse(localStorage.getItem('info'));
        info.push(data);
        localStorage.setItem('info', JSON.stringify(info));

        
    }
}


document.getElementById("borrar").addEventListener('click', localStorage.clear());
document.getElementById("form").addEventListener('submit', onSubmit );



