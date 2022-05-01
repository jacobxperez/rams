/* RAMs <https://github.com/jacobxperez/rams/>
 * Copyright (C) 2022 Jacob Perez <jacobxperez@gmx.com>
 * Licensed under the Apache License, Version 2.0
 * http://www.apache.org/licenses/LICENSE-2.0
------------------------------------------------------------------------------*/
document.addEventListener("DOMContentLoaded",(()=>{!function(){const t=document.querySelectorAll("[data-toggle]"),e=document.querySelectorAll('[data-toggle="pop"]'),a=document.querySelectorAll("[data-tooltip]");function o(t){t.addEventListener("click",(function(t){!1===this.hasAttribute("data-state","active")?this.setAttribute("data-state","active"):this.removeAttribute("data-state"),t.stopPropagation()}))}function n(t,e){e.target!==t&&t.removeAttribute("data-state")}t.forEach(o),a.forEach(o),document.addEventListener("click",(function(t){e.forEach(n),a.forEach(n)}))}()}));
