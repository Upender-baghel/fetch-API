fetch('https://fakestoreapi.com/products').then((data)=>{
                return data.json();

            }).then((completeData)=>{
                let data1="";
                completeData.map((values)=>{
                    data1 += `<div class="card">

                    <h1 class="t1">${values.title}</h1>
                    <img src=${values.image} alt="Error"  class="image" >
                    <p>${values.description}</p>
                    <p class="c1"> ${values.category} </p>
                    <p class="p1">${values.price}</p>
        
                </div>`
                    

                });
                document.getElementById("cards").innerHTML =data1;

            }).catch((err)=>
            {
                console.log(err);
            })


