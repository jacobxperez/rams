/* RAMs <https://github.com/jacobxperez/rams/>
 * Copyright (C) 2022 Jacob Perez <jacobxperez@gmx.com>
 * Licensed under the Apache License, Version 2.0
 * http://www.apache.org/licenses/LICENSE-2.0
------------------------------------------------------------------------------*/
document.addEventListener("DOMContentLoaded",(()=>{!function(){const t=document.querySelectorAll("[data-toggle]"),e=document.querySelectorAll('[data-toggle="pop"]'),a=document.querySelectorAll("[data-tooltip]");function o(t){t.addEventListener("click",(e=>{!1===t.hasAttribute("data-state","active")?t.setAttribute("data-state","active"):t.removeAttribute("data-state"),e.stopPropagation()}))}function c(t,e){e.target!==t&&t.removeAttribute("data-state")}t.forEach(o),a.forEach(o),document.addEventListener("click",(t=>{e.forEach(c),a.forEach(c)}))}()}));
