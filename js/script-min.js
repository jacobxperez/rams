/* RAMs <https://github.com/jacobxperez/rams/>
 * Copyright (C) 2022 Jacob Perez <jacobxperez@gmx.com>
 * Licensed under the Apache License, Version 2.0
 * http://www.apache.org/licenses/LICENSE-2.0
------------------------------------------------------------------------------*/
document.addEventListener("DOMContentLoaded",(()=>{(()=>{const t=document.querySelectorAll("[data-toggle]"),e=document.querySelectorAll('[data-toggle="pop"]'),a=document.querySelectorAll("[data-tooltip]");function o(t){!1===t.hasAttribute("data-state","active")?t.setAttribute("data-state","active"):t.removeAttribute("data-state")}for(let e=0;e<t.length;e++)t[e].addEventListener("click",(function(t){o(this),t.stopPropagation()}));for(let t=0;t<a.length;t++)a[t].addEventListener("click",(function(t){o(this),t.stopPropagation()}));document.addEventListener("click",(function(t){for(let a=0;a<e.length;a++)t.target!==e[a]&&e[a].removeAttribute("data-state");for(let e=0;e<a.length;e++)t.target!==a[e]&&a[e].removeAttribute("data-state")}))})()}));
