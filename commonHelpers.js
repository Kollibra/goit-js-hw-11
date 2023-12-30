import{i as d,S as h}from"./assets/vendor-46aac873.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))a(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const l of t.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&a(l)}).observe(document,{childList:!0,subtree:!0});function r(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerpolicy&&(t.referrerPolicy=e.referrerpolicy),e.crossorigin==="use-credentials"?t.credentials="include":e.crossorigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function a(e){if(e.ep)return;e.ep=!0;const t=r(e);fetch(e.href,t)}})();const c=document.querySelector(".js-search"),n=document.querySelector(".gallery"),i=document.querySelector(".loader");i.style.display="none";c.addEventListener("submit",f);function f(s){s.preventDefault(),n.innerHTML="",i.style.display="block";const o=s.target.elements.search.value;p(o).then(r=>{i.style.display="none",r.hits.length||d.error({title:"Error",message:"Sorry, there are no images matching your search query. Please try again!"}),n.insertAdjacentHTML("beforeend",m(r.hits)),new h(".gallery a",{captions:!0,captionsData:"alt",captionDelay:250}).refresh(),c.reset()}).catch(r=>{i.style.display="none",console.log(r)})}function p(s){const o="https://pixabay.com/api/",r="41464505-2754a712b3ad6890f1a57d527";s.includes(" ")&&(s=s.replace(/\s+/g,"+"));const a=new URLSearchParams({key:r,q:s,image_type:"photo",orientation:"horizontal",safesearch:!0});return fetch(`${o}?${a}`).then(e=>{if(!e.ok)throw new Error(e.statusText);return e.json()})}function m(s){return s.map(({webformatURL:o,largeImageURL:r,tags:a,likes:e,views:t,comments:l,downloads:u})=>`<li class="gallery-item">
          <a class="gallery-link" href="${r}">
            <img
              class="gallery-image"
              src="${o}"
              alt="${a}"
              width="360"
            />
          </a>
          <div class="thumb-block">
            <div class="block">
              <h2 class="title">Likes</h2>
              <p class="amount">${e}</p>
            </div>
            <div class="block">
              <h2 class="title">Views</h2>
              <p class="amount">${t}</p>
            </div>
            <div class="block">
              <h2 class="title">Comments</h2>
              <p class="amount">${l}</p>
            </div>
            <div class="block">
              <h2 class="title">Downloads</h2>
              <p class="amount">${u}</p>
            </div>
          </div>
        </li>`).join("")}
//# sourceMappingURL=commonHelpers.js.map
