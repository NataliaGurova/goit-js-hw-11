import{i as f,S as m}from"./assets/vendor-5b791d57.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))t(e);new MutationObserver(e=>{for(const o of e)if(o.type==="childList")for(const s of o.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&t(s)}).observe(document,{childList:!0,subtree:!0});function n(e){const o={};return e.integrity&&(o.integrity=e.integrity),e.referrerPolicy&&(o.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?o.credentials="include":e.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function t(e){if(e.ep)return;e.ep=!0;const o=n(e);fetch(e.href,o)}})();const a=document.querySelector("#form");document.querySelector(".button");const c=document.querySelector(".gallery"),d={captions:!0,captionType:"attr",captionsData:"alt",captionPosition:"bottom",captionSelector:"img",captionDelay:250};a.addEventListener("submit",y);function y(i){i.preventDefault();const r=a.elements.query.value.trim();if(r==="")f.show({position:"topRight",color:"red",message:'"Sorry, there are no images matching your search query. Please try again!"'});else{g(r);const n=new m(".gallery a",d);n.on("show.simplelightbox"),n.refresh()}console.log(r),a.reset(),b()}function g(i){const n=`https://pixabay.com/api/?key=42275750-ff2dba3de74b1266fbd0f53be&q=${i}&image_type=photo`;return fetch(n).then(t=>{if(!t.ok)throw new Error(t.status);return t.json()}).then(t=>{console.log(t),h(t)}).catch(t=>{console.error("Error fetching data:",t)})}function h(i){const r=i.hits.map(n=>{const{largeImageURL:t,webformatURL:e,tags:o,likes:s,views:l,comments:u,downloads:p}=n;return`
        <li class="gallery-item">
          <a class="gallery-link" href="${t}">
          <img class="gallery-image" src="${e}" alt="${o}"/>
          </a>
          <div>
            <p><b>Likes </b>${s}</p>
            <p><b>Views </b>${l}</p>
            <p><b>Comments </b>${u}</p>
            <p><b>Downloads </b>${p}</p>
          </div>
        </li>
      `}).join("");c.insertAdjacentHTML("beforeend",r)}function b(){c.innerHTML=""}
//# sourceMappingURL=commonHelpers.js.map
