import{i as c,S as l}from"./assets/vendor-5b791d57.js";(function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))t(e);new MutationObserver(e=>{for(const o of e)if(o.type==="childList")for(const s of o.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&t(s)}).observe(document,{childList:!0,subtree:!0});function i(e){const o={};return e.integrity&&(o.integrity=e.integrity),e.referrerPolicy&&(o.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?o.credentials="include":e.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function t(e){if(e.ep)return;e.ep=!0;const o=i(e);fetch(e.href,o)}})();const u={captions:!0,captionType:"attr",captionsData:"alt",captionPosition:"bottom",captionSelector:"img",captionDelay:250};function d(r){const i=`https://pixabay.com/api/?key=42275750-ff2dba3de74b1266fbd0f53be&q=${r}&image_type=photo`;return fetch(i).then(t=>{if(!t.ok)throw new Error(t.status);return t.json()}).then(t=>{t.hits.length===0?(hideLoader(),c.show({position:"topRight",color:"red",message:"Sorry, there are no images matching<br>your search query. Please try again!"})):(showGallery(t),hideLoader(),new l(".gallery a",u).refresh())}).catch(t=>{console.error("Error fetching data:",t)})}const a=document.querySelector("#form");document.querySelector(".button");const f=document.querySelector(".gallery"),p=document.querySelector(".block");a.addEventListener("submit",h);const m=()=>{const r=document.createElement("span");r.classList.add("loader"),r.textContent="Loading images, please wait...",p.append(r)};function h(r){r.preventDefault();const n=a.elements.query.value.trim();n===""?c.show({position:"topRight",color:"red",message:"Sorry, there are no images matching<br>your search query. Please try again!"}):(m(),d(n)),a.reset(),y()}function y(){f.innerHTML=""}
//# sourceMappingURL=commonHelpers.js.map
