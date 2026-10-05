document.addEventListener("DOMContentLoaded",()=>{
 const id=Number(new URLSearchParams(location.search).get("id")||1),
  p=PRODUCTS.find(x=>x.id===id)||PRODUCTS[0], 
  s=STYLES.find(x=>x.id===p.style);
 document.title=`  STORM X`;
 document.getElementById("productDetails").innerHTML=`
 <div class="product-detail row g-5 align-items-center">
  <div class="col-lg-7">
  <div class="detail-image">
  <img src="${productImage(p)}" alt="${p.name}">
  </div>
  </div>
  <div class="col-lg-5">
   <p class="eyebrow gold">${s.name}</p>
   <h1>${p.name}</h1>
   <div class="detail-price">${p.price.toLocaleString()} EGP</div>
   <div class="stars">★★★★★ <span>4.9 (28 reviews)</span></div>
   <p class="detail-desc">${p.desc}</p>
   <hr>
   <label class="detail-label">COLOR</label>
   <div class="color-options">${p.colors.map((c,i)=>
    `<button class="color-option ${i===0?"active":""}" data-color="${c}">${c}</button>`).join("")}
    </div>
   <label class="detail-label">SIZE</label>
   <div class="detail-sizes">${p.sizes.map((x,i)=>`
    <button class="detail-size ${i===0?"active":""}" data-size="${x}">${x}</button>`).join("")}
    </div>
   <a href="#" class="size-guide">SIZE GUIDE <i class="fa-solid fa-ruler"></i></a>
   <div class="quantity-row">
   <button id="minus">−</button>
   <span id="qty">1</span>
   <button id="plus">+</button>
   </div>
   <button id="addToCart" class="btn storm-btn w-100">ADD TO CART <i class="fa-solid fa-bag-shopping ms-2"></i></button>
   <div class="detail-perks">
   <span>
   <i class="fa-solid fa-leaf"></i> Premium Cotton</span>
   <span>
   <i class="fa-solid fa-truck-fast"></i> Fast Delivery</span>
   <span><i class="fa-solid fa-rotate"></i> Easy Returns</span>
   </div>
  </div>
 </div>`;
 let qty=1;
 document.getElementById("plus").onclick=()=>{qty++;
    document.getElementById("qty").textContent=qty};
    document.getElementById("minus").onclick=()=>{qty=Math.max(1,qty-1);
        document.getElementById("qty").textContent=qty};
 document.querySelectorAll(".detail-size").forEach(b=>b.onclick=()=>{document.querySelectorAll(".detail-size").forEach(x=>x.classList.remove("active"));
    b.classList.add("active")});
 document.querySelectorAll(".color-option").forEach(b=>b.onclick=()=>{document.querySelectorAll(".color-option").forEach(x=>x.classList.remove("active"));
    b.classList.add("active")});
 document.getElementById("addToCart").onclick=()=>{const size=document.querySelector(".detail-size.active").dataset.size,color=document.querySelector(".color-option.active").dataset.color;
    const cart=getCart();
    const key=`${p.id}-${color}-${size}`;
    const old=cart.find(i=>i.key===key);
    if(old)old.qty+=qty;
    else cart.push({key,id:p.id,name:p.name,price:p.price,color,size,qty});
    saveCart(cart);
    location.href="cart.html"};
});