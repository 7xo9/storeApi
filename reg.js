let username = document.getElementById("name-input")
let email = document.getElementById("email-input")
let pass = document.getElementById("pass-input")
let singupBtn = document.getElementById("singUpbtn")


singupBtn.addEventListener("click", ()=>{

    let UserN = username.value
    let Email = email.value
    let Password = pass.value

    if(Password.length >= 8 && UserN.length >= 5){




             fetch("https://6552924d5c69a779032a2d8c.mockapi.io/usersInfo", {
                   method: "POST",
                  body: JSON.stringify({
                    UserN,
                     Email,
                   Password
          })
            ,headers: {
               'Content-type': 'application/json; charset=UTF-8',
           }
       })
                   .then(res => res.json())
                   .then(data => {console.log(data);})
                   alert("You have Singed Up successfully")
                   window.location.href = "loggedin.html"  
                    
         }else if(Password.length >= 8 && UserN.length < 5){
                  alert("The user Name should be 5 letters and above")
         }else if(Password.length < 8 && UserN.length >= 5){
                   alert("The Password should be 8 letters and above")
       }else if(Password.length < 8 && UserN.length < 5){
               alert("The user Name should be 5 letters and above and password above 8")
            }

     }

)
          



