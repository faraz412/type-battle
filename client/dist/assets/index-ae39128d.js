(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))o(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const i of r.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&o(i)}).observe(document,{childList:!0,subtree:!0});function l(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function o(e){if(e.ep)return;e.ep=!0;const r=l(e);fetch(e.href,r)}})();document.querySelector("#navbar").innerHTML=`
<nav>
        <label class="logo"><img src="/images/logo.png" alt="logo"></label>
        <ul>
          <li><a href="">Pit Stop</a></li>
          <li><a href="">Updates</a></li>
          <li><a href="">Discord</a></li>
          <li><a href="">About</a></li>
          <li><a href="">Merch</a></li>
          <li><a href="">CREATE ACCOUNT</a></li>
          <li><a href="">SIGN IN</a></li>
        </ul>
        <div id="user-wpm-nav">0 WPM</div>
        <div id="user-race-nav">0 RACES</div>
      </nav>
`;
