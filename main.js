function getCart(){ 
  return JSON.parse(localStorage.getItem("stormXCart") || "[]"); 
}
function saveCart(cart){ 
  localStorage.setItem("stormXCart", JSON.stringify(cart)); 
  updateCartCount(); 
}
function updateCartCount(){ 
  let el=document.getElementById("cartCount"); 
  if(el) el.textContent=getCart().reduce((a,i)=>a+i.qty,0); 
}
document.addEventListener("DOMContentLoaded", ()=>{
  updateCartCount();
  let styles=document.getElementById("styleGrid");
  if(styles) styles.innerHTML=STYLES.map(s=>`<div class="col-12 col-sm-6 col-lg-3">
    <a class="style-card" href="shop.html?style=${s.id}" style="--style:${s.color}">
<div class="style-art" style="background-image:url('${s.image}'); background-size:cover; background-position:center;">
</div>
    <div class="style-card-bottom">
    <div>
    <h3>${s.name}</h3>
    <p>${s.subtitle}</p>
    </div>
    <i class="fa-solid fa-arrow-right"></i>
    </div>
    </a>
    </div>`).join("");
  let featured=document.getElementById("featuredProducts");
  if(featured) featured.innerHTML=PRODUCTS.slice(0,4).map(productCard).join("");
});