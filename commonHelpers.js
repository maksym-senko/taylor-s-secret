(function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))s(e);new MutationObserver(e=>{for(const o of e)if(o.type==="childList")for(const i of o.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&s(i)}).observe(document,{childList:!0,subtree:!0});function c(e){const o={};return e.integrity&&(o.integrity=e.integrity),e.referrerPolicy&&(o.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?o.credentials="include":e.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function s(e){if(e.ep)return;e.ep=!0;const o=c(e);fetch(e.href,o)}})();document.querySelectorAll(".question-box").forEach(t=>{const n=t.querySelector(".icon");t.addEventListener("mouseenter",()=>{n&&(n.src="./image/hover.png")}),t.addEventListener("mouseleave",()=>{!t.classList.contains("active")&&n&&(n.src="./image/plus.png")}),t.addEventListener("focus",()=>{n&&(n.src="./image/focus.png")}),t.addEventListener("blur",()=>{!t.classList.contains("active")&&n&&(n.src="./image/plus.png")}),t.addEventListener("click",()=>{const c=t.classList.contains("active");if(document.querySelectorAll(".question-box").forEach(s=>{s.classList.remove("active");const e=s.querySelector(".icon");e&&(e.src="./image/plus.png")}),!c){t.classList.add("active");const s=t.querySelector(".icon");s&&(s.src="./image/minus.png")}})});const l=document.querySelector(".header"),a=document.querySelector(".nav-container"),d=document.querySelector(".nav-menu-mobile"),u=document.querySelector(".police-mobile"),m=document.querySelectorAll(".nav-link"),r=document.querySelector(".menu-toggle");r.querySelector("img");const g=()=>{l.classList.toggle("expanded"),a.classList.toggle("expanded"),d.classList.toggle("expanded"),u.classList.toggle("expanded"),r.classList.toggle("expanded")},f=()=>{l.classList.remove("expanded"),a.classList.remove("expanded"),d.classList.remove("expanded"),u.classList.remove("expanded"),r.classList.remove("expanded")};r.addEventListener("click",g);m.forEach(t=>t.addEventListener("click",f));document.addEventListener("DOMContentLoaded",()=>{const t=document.querySelector(".header").offsetHeight;document.querySelectorAll('a.nav-link[href^="#"]').forEach(n=>{n.addEventListener("click",function(c){c.preventDefault();const s=this.getAttribute("href").slice(1),e=document.getElementById(s);if(e){const o=e.getBoundingClientRect().top+window.scrollY;window.scrollTo({top:o-(t+40),behavior:"smooth"})}})})});console.log("FAQ script loaded");
//# sourceMappingURL=commonHelpers.js.map
