let s2boxes = document.getElementById("s2boxes")

fetch("http://localhost:3000/favorites")
.then(response=>response.json())
.then(data=>{
  data.forEach(item => {
   
        
        s2boxes.innerHTML+=
        `  <div class="box1">
        <h1>${item.name}</h1>
        <div class="img"><img src="${item.image}"></div>
        <p>${item.description}</p>
    
        <button><a href="./Details/details.html?id=${item.id}">Details</a></button>
        <button><a href="../Update/update.html?id=${item.id}">Update</a></button>
        <button onClick='deleteItem(${item.id})'>Delete</button>
        
    
    </div> `
    })
})

const deleteItem = (id) => {
    axios.delete('http://localhost:3000/favorites/'+id)
    .then(res=>{
      console.log(res.data);
      alert(`${id} nömrəli  uğurla silindi`)
      window.location.reload();
    })
  }