let s2boxes = document.getElementById("s2boxes");
let id = new URLSearchParams(window.location.search).get("id");

fetch(`http://localhost:3000/features/${id}`)
.then(res=>res.json())
.then(data=>{
  
   
        
        s2boxes.innerHTML+=
        `  <div class="box1">
        <h1>${data.name}</h1>
        <div class="img"><img src="${data.image}"></div>
        <p>${data.description}</p>
    
        
    </div> `
    })

