let pokemonRepository=function(){let e=[];function t(){return e}function n(t){e.push(t)}function i(){$("#modal").modal("hide")}function a(e){return d(),fetch(e.detailsUrl).then(function(e){return e.json()}).then(function(t){c(),e.imageUrl=t.sprites.other["official-artwork"].front_default,e.height=t.height,e.types=[],t.types.forEach(function(t){e.types.push(" "+t.type.name)}),e.ability=[],t.abilities.forEach(function(t){e.ability.push(" "+t.ability.name)}),e.weight=t.weight}).catch(function(e){console.error(e)})}function l(e){a(e).then(function(){var t;let n,a,l,o,d,c,r,s,p,m,h,u,f,g;t=e,(n=document.querySelector("#modal")).innerHTML="",(a=document.createElement("div")).classList.add("modal-dialog"),(l=document.createElement("div")).classList.add("modal-content","bg-blur"),(o=document.createElement("button")).classList.add("btn","btn3d","btn-close","close-size","bold","col-2"),o.addEventListener("click",i),(d=document.createElement("div")).classList.add("modal-body","pop-look"),(c=document.createElement("div")).classList.add("p-2","pop-look","text-white","text-center","d-flex","bg-dark"),(r=document.createElement("div")).classList.add("mt-3","p-2","pop-look","bg-dark","text-white","text-center"),(s=document.createElement("h1")).classList.add("col","m-auto","caps"),s.innerText=t.name,(p=document.createElement("p")).innerText="Weight: "+t.weight,(m=document.createElement("p")).innerText="Height: "+t.height,(h=document.createElement("p")).innerText="Types: "+t.types,(u=document.createElement("p")).innerText="Abilities: "+t.ability,(f=document.createElement("div")).classList.add("pop-look","mt-3","bg-dark"),(g=document.createElement("img")).classList.add("img-thumbnail"),g.src=t.imageUrl,g.alt="Image of "+t.name,c.appendChild(s),c.appendChild(o),d.appendChild(c),f.appendChild(g),d.appendChild(f),r.appendChild(m),r.appendChild(p),r.appendChild(h),r.appendChild(u),d.appendChild(r),l.appendChild(d),a.appendChild(l),n.appendChild(a),$("#modal").modal("toggle")})}window.addEventListener("keydown",e=>{let t=document.querySelector("#modal");"Escape"===e.key&&t.classList.contains("show")&&i()});let o=document.querySelector("#modal");function d(){document.querySelector("#loading").classList.add("is-visible"),console.log("Loading")}function c(){document.querySelector("#loading").classList.remove("is-visible"),console.log("Done")}return o.addEventListener("click",e=>{e.target===o&&i()}),{getAll:t,add:n,addListItem:function e(t){let n=document.querySelector(".row"),i=document.createElement("div"),a=document.createElement("button");a.classList.add("col","btn","btn3d","m-2","btn-block","btn-default","caps"),a.innerText=t.name,i.appendChild(a),n.appendChild(i),a.addEventListener("click",function(){l(t)})},loadList:function e(){return d(),fetch("https://pokeapi.co/api/v2/pokemon/?limit=150").then(function(e){return e.json()}).then(function(e){c(),e.results.forEach(function(e){n({name:e.name,detailsUrl:e.url})})}).catch(function(e){console.error(e)})},loadDetails:a,showDetails:l}}();pokemonRepository.loadList().then(function(){pokemonRepository.getAll().forEach(function(e){pokemonRepository.addListItem(e)})});