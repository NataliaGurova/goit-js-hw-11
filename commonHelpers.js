import{i as l,S as f}from"./assets/vendor-5b791d57.js";(function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))r(e);new MutationObserver(e=>{for(const o of e)if(o.type==="childList")for(const i of o.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&r(i)}).observe(document,{childList:!0,subtree:!0});function s(e){const o={};return e.integrity&&(o.integrity=e.integrity),e.referrerPolicy&&(o.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?o.credentials="include":e.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function r(e){if(e.ep)return;e.ep=!0;const o=s(e);fetch(e.href,o)}})();function y(t){const n=t.hits.map(s=>{const{largeImageURL:r,webformatURL:e,tags:o,likes:i,views:d,comments:m,downloads:p}=s;return`
        <li class="gallery-item">
          <a class="gallery-link" href="${r}">
          <img class="gallery-image" src="${e}" alt="${o}"/>
          </a>
          <div>
            <p><b>Likes </b>${i}</p>
            <p><b>Views </b>${d}</p>
            <p><b>Comments </b>${m}</p>
            <p><b>Downloads </b>${p}</p>
          </div>
        </li>
      `}).join("");u.insertAdjacentHTML("beforeend",n)}const g={captions:!0,captionType:"attr",captionsData:"alt",captionPosition:"bottom",captionSelector:"img",captionDelay:250};function h(t){const s=`https://pixabay.com/api/?key=42275750-ff2dba3de74b1266fbd0f53be&q=${t}&image_type=photo`;return fetch(s).then(r=>{if(!r.ok)throw new Error(r.status);return r.json()}).then(r=>{r.hits.length===0?(c(),l.error({position:"topRight",color:"red",message:"Sorry, there are no images matching<br>your search query. Please try again!"})):(y(r),c(),new f(".gallery a",g).refresh())}).catch(r=>{console.error("Error fetching data:",r)})}const a=document.querySelector("#form");document.querySelector(".button");const u=document.querySelector(".gallery"),b=document.querySelector(".block");a.addEventListener("submit",S);const L=()=>{const t=document.createElement("span");t.classList.add("loader"),t.textContent="Loading images, please wait...",b.append(t)},c=()=>{const t=document.querySelector(".loader");t&&t.remove()};function S(t){t.preventDefault();const n=a.elements.query.value.trim();n===""?l.error({position:"topRight",overlay:!1,color:"red",message:"Sorry, there are no images matching<br>your search query. Please try again!"}):(L(),h(n)),a.reset(),w()}function w(){u.innerHTML=""}
//# sourceMappingURL=commonHelpers.js.map
