let s2boxes = document.getElementById("s2boxes");
let page = 4
function getDataJson(){
fetch("http://localhost:3000/features")
.then(response=>response.json())
.then(data=>{
  data.slice(page - 4, page).forEach(item => {
   
        
        s2boxes.innerHTML+=
        `  <div class="box1">
        <h1>${item.name}</h1>
        <div class="img"><img src="${item.image}"></div>
        <p>${item.description}</p>
    
        <button><a href="./Details/details.html?id=${item.id}">Details</a></button>
        <button><a href="../Update/update.html?id=${item.id}">Update</a></button>
        <button onClick='deleteItem(${item.id})'>Delete</button>
        <div class="heart"><i class="bi-heart" onclick = "addFavorite(${item.id})"></i></div>
    </div> `
    })
})
}
getDataJson()

let loadmore = document.querySelector("#getall");
loadmore.addEventListener('click', () => {
    
    page += 4;
    getDataJson();
})


/// Delete

const deleteItem = (id) => {
    axios.delete('http://localhost:3000/features/'+id)
    .then(res=>{
      console.log(res.data);
      alert(`${id} nömrəli  uğurla silindi`)
      window.location.reload();
    })
  }


  function addFavorite(id) {
    axios.get('http://localhost:3000/features/'+id)
    .then(res=>{
        
        axios.post('http://localhost:3000/favorites',res.data)
       
    })
    
  }