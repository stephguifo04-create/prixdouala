const products = [
 {name:"Samsung A14",price:95000},
 {name:"Tecno Spark 20",price:85000},
 {name:"Riz 25kg",price:22000}
];

const container = document.getElementById("products");

function afficher(data){
 container.innerHTML="";
 data.forEach(p=>{
  container.innerHTML+=`
   <div class="card">
    <h3>${p.name}</h3>
    <p>${p.price} FCFA</p>
    <button>Acheter</button>
   </div>`;
 });
}
afficher(products);
