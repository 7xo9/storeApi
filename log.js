let userN = document.getElementById("name-input")
let pass = document.getElementById("pass-input")
let singInBtn = document.getElementById("singINbtn")




singInBtn.addEventListener("click", ()=>{



    let userName = userN.value
    let passIn = pass.value 

    let Uname = document.getElementById("userName")
    userName.innerText = Uname

    fetch("https://6552924d5c69a779032a2d8c.mockapi.io/usersInfo")
    .then(res => res.json())
    .then(data => {
        for(let i =0; i < data.length;i++){

           let Userin = data[i].UserN
           let passin = data[i].Password

           if (userName == Userin && passIn == passin){
            alert("You have sing in sucssfully")
            window.location.href = "loggedin.html"
           }else{
            alert("Wrong User Name or Password")
           }
            
            

        }
    })

})