const state={style:new URLSearchParams(location.search).get("style")||"",
    search:"",
    categories:[],
    sizes:[],sort:"featured"
};
function renderFilters(){
 const sf=document.getElementById("styleFilters"), 
 sz=document.getElementById("sizeFilters");
 sf.innerHTML=STYLES.map(s=>`<label class="check"><input type="radio" name="style" value="${s.id}" 
    ${state.style===s.id?"checked":""}> ${s.name}</label>`).join("");
 const allSizes=[...new Set(PRODUCTS.flatMap(p=>p.sizes))];
 sz.innerHTML=allSizes.map(s=>`<button class="size-chip ${state.sizes.includes(s)?"active":""}
 " data-size="${s}">${s}</button>`).join("");
 document.querySelectorAll('input[name="style"]').forEach(x=>x.onchange=()=>{state.style=x.value;render()});
 document.querySelectorAll(".size-chip").forEach(x=>x.onclick=()=>{state.sizes=state.sizes.includes(x.dataset.size)?state.sizes.filter(s=>s!==x.dataset.size):[...state.sizes,x.dataset.size];
    render()});
}
function render(){
 let arr=PRODUCTS.filter(p=>(!state.style||p.style===state.style)&&(!state.search||p.name.toLowerCase().includes(state.search.toLowerCase()))&&(state.categories.length===0||state.categories.includes(p.category))&&(state.sizes.length===0||state.sizes.some(s=>p.sizes.includes(s))));
 if(state.sort==="low")arr.sort((a,b)=>a.price-b.price); if(state.sort==="high")arr.sort((a,b)=>b.price-a.price);
 document.getElementById("shopGrid").innerHTML=arr.length?arr.map(productCard).join(""):`<div class="empty-state">No products found. Try another filter.</div>`;
 document.getElementById("resultCount").textContent=`${arr.length} PRODUCTS`;
 renderFilters();
}
document.addEventListener("DOMContentLoaded",()=>{
 document.getElementById("searchInput").oninput=e=>{state.search=e.target.value;render()};
 document.getElementById("sortSelect").onchange=e=>{state.sort=e.target.value;render()};
 document.querySelectorAll(".category-filter").forEach(x=>x.onchange=()=>{state.categories=[...document.querySelectorAll(".category-filter:checked")].map(i=>i.value);render()});
 document.getElementById("clearFilters").onclick=()=>{state.style="";state.search="";state.categories=[];state.sizes=[];document.getElementById("searchInput").value="";
    document.querySelectorAll(".category-filter").forEach(x=>x.checked=false);render()};
 render();
});