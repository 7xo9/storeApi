let items = document.getElementById("item")

function gettinginfo() {

    fetch('https://fakestoreapi.com/products')
        .then(res => res.json())
        .then(data => {
            for(let i =0; i < data.length;i++){

            
                console.log(data);
                let bigDiv = document.createElement("div")
                let newDiv = document.createElement("div")
                let title = document.createTextNode(data[i].title)

                bigDiv.className = "newDiv"

                bigDiv.appendChild(newDiv)
                newDiv.appendChild(title)
               

                // getting images

                let img = data[i].image

                let imgDiv = document.createElement("div")
                let Div = document.createElement("div")
                
                Div.className = "imgcon"
                
                let imgBigDiv = document.createElement("div")
                
                imgBigDiv.className = "bigbig"

                imgDiv.style.cssText = `background-image: url(${img});
                 width: 20vw;height: 20vh;
                background-repeat: no-repeat; background-size:contain;
                justify-content: end;`

                imgBigDiv.appendChild(Div)
                imgBigDiv.appendChild(imgDiv)
                bigDiv.appendChild(imgBigDiv)

                items.appendChild(bigDiv)

                // Priceing 

                let price = document.createElement("p")
                let p = data[i].price
                price.innerText = `Price: ${p}$`
                bigDiv.appendChild(price)

            }
        })


}

gettinginfo();