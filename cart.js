function renderCart(){
 const box=document.getElementById("cartPage"),cart=getCart();
 if(!cart.length){
    box.innerHTML=`<div class="empty-cart">
    <i class="fa-solid fa-bag-shopping"></i>
    <h2>Your bag is empty</h2>
    <p>Add something from the STORM X collection.</p>
    <a href="shop.html" class="btn storm-btn">SHOP NOW</a>
    </div>`;
    return;
}
 let total=0;
 const rows=cart.map((i,idx)=>{total+=i.price*i.qty;
    return `<div class="cart-row">
    <img src="${productImage(PRODUCTS.find(p=>p.id===i.id))}">
    <div class="cart-main">
    <h3>${i.name}</h3>
    <p>${i.color} · Size ${i.size}</p>
    <strong>${i.price.toLocaleString()} EGP</strong>
    </div>
    <div class="cart-qty">
    <button onclick="changeQty(${idx},-1)">−</button>
    <span>${i.qty}</span>
    <button onclick="changeQty(${idx},1)">+</button>
    </div>
    <button class="remove-item" onclick="removeItem(${idx})">
    <i class="fa-regular fa-trash-can"></i>
    </button>
    </div>`}).join("");
    box.innerHTML=`<div class="row g-4">
    <div class="col-lg-8">${rows}</div>
    <div class="col-lg-4">
    <div class="checkout-box">
    <h3>ORDER SUMMARY</h3>
    <div class="summary-line">
    <span>Subtotal</span>
    <b>${total.toLocaleString()} EGP</b>
    </div>
    <div class="summary-line">
    <span>Delivery</span>
    <b>Calculated on WhatsApp</b>
    </div>
    <hr>
    <div class="summary-line total">
    <span>TOTAL</span>
    <b>${total.toLocaleString()} EGP</b>
    </div>
    <div class="customer-form">
    <input id="customerName" placeholder="Your name">
    <input id="customerPhone" placeholder="Phone number">
    <textarea id="customerAddress" placeholder="Delivery address">
    </textarea>
    </div>
    <button id="whatsappOrder" class="btn whatsapp-btn w-100">
    <i class="fa-brands fa-whatsapp me-2"></i> ORDER IN WHATSAPP</button>
    </div>
    </div>
    </div>`;
    document.getElementById("whatsappOrder").onclick=()=>sendWhatsApp(cart,total);
}
function changeQty(i,d){
    const c=getCart();
    c[i].qty=Math.max(1,c[i].qty+d);saveCart(c);renderCart()
}
function removeItem(i){
    const c=getCart();
    c.splice(i,1);saveCart(c);
    renderCart()
}
function sendWhatsApp(cart,total){
 const name=document.getElementById("customerName").value.trim(),
 phone=document.getElementById("customerPhone").value.trim(),
 address=document.getElementById("customerAddress").value.trim();
 if(!name||!phone||!address){
    alert("Please complete your name, phone and address.");
    return;
}
 let msg=` STORM X — NEW ORDER\n\n`;
 cart.forEach((i,n)=>msg+=`${n+1}. ${i.name}\nColor: ${i.color}\nSize: ${i.size}\nQty: 
 ${i.qty}\nPrice: ${(i.price*i.qty).toLocaleString()} EGP\n\n`);
 msg+=`--------------------\nTOTAL: ${total.toLocaleString()} EGP\n\nCUSTOMER\nName: ${name}\nPhone: 
 ${phone}\nAddress: ${address}\n\nPayment: Cash on Delivery`;
 const whatsappNumber="201556378901"; 
 window.open(`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(msg)}`,"_blank");
}
document.addEventListener("DOMContentLoaded",renderCart);