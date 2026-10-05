const STYLES = [
  {
    id:"classic", 
    name:"Classic Black", 
    subtitle:"Timeless. Always.", 
    color:"#000000", 
    text:"#fff",
      image:"assets/images/hodi1.jpeg"
  },
  {
    id:"urban", 
    name:"Urban Gray", 
    subtitle:"Clean. Modern.", 
    color:"#777b80", 
    text:"#fff",
    image:"assets/images/hodi1.jpeg"
  },
  {
    id:"sand", 
    name:"Sand Beige", 
    subtitle:"Calm. Different.", 
    color:"#c9b79c", 
    text:"#111",
    image:"assets/images/hodi1.jpeg"
  },
  {
    id:"forest", 
    name:"Forest Green", 
    subtitle:"Bold. Natural.", 
    color:"#174d3a", 
    text:"#fff",
    image:"assets/images/hodi1.jpeg"
  }
];

const PRODUCTS = [
 {
  id:1,
  name:"Classic Hoodie",
  style:"classic",
  category:"Hoodie",
  price:1200,
  colors:["Black"],
  sizes:["S","M","L","XL","XXL"],
  image:"assets/images/hodi1.jpeg"
},
 {id:2,name:"Urban Hoodie",
  style:"urban",
  category:"Hoodie",
  price:1250,
  colors:["Gray","Black"],
  sizes:["S","M","L","XL"],
  desc:"Clean urban hoodie with heavyweight comfort.",
  tone:"#73777b",
  image:"assets/images/hodi1.jpeg"
},
 {
  id:3,name:"Sand Hoodie",
  style:"sand",
  category:"Hoodie",
  price:1300,
  colors:["Beige","Cream"],
  sizes:["M","L","XL","XXL"],
  desc:"Soft sand-tone hoodie made for everyday movement.",
  tone:"#c9b79c",
  image:"assets/images/hodi1.jpeg"
},
 {
  id:4,name:"Forest Hoodie",
  style:"forest",
  category:"Hoodie",
  price:1300,
  colors:["Green","Black"],
  sizes:["S","M","L","XL"],
  desc:"Deep forest green hoodie with a bold minimal finish.",
  tone:"#174d3a",
  image:"assets/images/hodi1.jpeg"
},
 {
  id:5,name:"Classic Tracksuit",
  style:"classic",
  category:"Tracksuit",
  price:2200,
  colors:["Black"],
  sizes:["M","L","XL","XXL"],
  desc:"Matching premium tracksuit built for an athletic street look.",
  tone:"#090909",
  image:"assets/images/hodi1.jpeg"
},
 {
  id:6,name:"Urban Tracksuit",
  style:"urban",
  category:"Tracksuit",
  price:2250,
  colors:["Gray"],
  sizes:["S","M","L","XL"],
  desc:"Modern gray tracksuit with a sharp everyday silhouette.",
  tone:"#6d7074",
  image:"assets/images/hodi1.jpeg"
},
 {
  id:7,name:"Sand Tracksuit",
  style:"sand",
  category:"Tracksuit",
  price:2350,
  colors:["Beige"],
  sizes:["M","L","XL"],
  desc:"Neutral premium tracksuit with a clean oversized feel.",
  tone:"#bcae96",
  image:"assets/images/hodi1.jpeg"
},
 {
  id:8,name:"Forest Tracksuit",
  style:"forest",
  category:"Tracksuit",
  price:2350,
  colors:["Green"],
  sizes:["S","M","L","XL","XXL"],
  desc:"Deep green tracksuit for a standout streetwear look.",
  tone:"#174d3a",
  image:"assets/images/hodi1.jpeg"
}
];

function productImage(product, small=false){
  if(product.image){
    return product.image;
  }
  const s = STYLES.find(x=>x.id===product.style);
  const bg = product.tone;
  const fg = s.text;
  return `data:image/svg+xml;charset=UTF-8,${encodeURIComponent(`
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 700 800">
    <defs><linearGradient id="g" x1="0" y1="0" x2="1" y2="1"><stop stop-color="${bg}"/><stop offset="1" stop-color="#070707"/></linearGradient></defs>
    <rect width="700" height="800" fill="url(#g)"/>
    <path d="M70 760L165 210Q180 135 260 125L350 210 440 125Q520 135 535 210L630 760Z" fill="${bg}" stroke="#ffffff22" stroke-width="5"/>
    <path d="M265 125Q350 205 435 125" fill="none" stroke="#fff2" stroke-width="9"/>
    <path d="M292 245Q350 280 408 245" fill="none" stroke="#fff3" stroke-width="7"/>
    <text x="350" y="420" fill="${fg}" text-anchor="middle" font-family="Arial" font-weight="900" font-size="54" font-style="italic">STORM</text>
    <text x="350" y="475" fill="#D4A017" text-anchor="middle" font-family="Arial" font-weight="900" font-size="65" font-style="italic">X</text>
    <circle cx="80" cy="100" r="2" fill="#FFD54F"/><circle cx="610" cy="180" r="3" fill="#FFD54F"/><circle cx="575" cy="95" r="2" fill="#fff"/>
  </svg>`)}`;
}

function productCard(p){
  return `<div class="col-6 col-xl-3">
    <article class="product-card">
      <a href="product.html?id=${p.id}" class="product-image"><img src="${productImage(p,true)}" alt="${p.name}"><span class="wish"><i class="fa-regular fa-heart"></i></span></a>
      <div class="product-info">
        <p class="product-style">${STYLES.find(s=>s.id===p.style).name}</p>
        <h3>${p.name}</h3>
        <div class="price">${p.price.toLocaleString()} EGP</div>
        <div class="mini-sizes">${p.sizes.map(x=>`<span>${x}</span>`).join("")}</div>
      </div>
    </article>
  </div>`;
}