(function(){const button=document.getElementById('tool-menu-toggle');if(!button)return;const en=document.documentElement.lang==='en';button.querySelector('span')?.remove();const state=document.createElement('span');state.className='disclosure-state';state.innerHTML='<span data-menu-label></span><span class="disclosure-chevron" aria-hidden="true">⌄</span>';button.append(state);const sync=()=>state.querySelector('[data-menu-label]').textContent=button.getAttribute('aria-expanded')==='true'?(en?'Hide':'Ẩn'):(en?'Show':'Hiện');sync();button.addEventListener('click',()=>{const open=button.getAttribute('aria-expanded')!=='true';button.setAttribute('aria-expanded',String(open));document.querySelector('.sidebar').classList.toggle('nav-expanded',open);sync();});})();

(()=>{const year=new Intl.DateTimeFormat("en",{year:"numeric",timeZone:"Asia/Ho_Chi_Minh"}).format(new Date());document.querySelectorAll("footer .copyright-year").forEach(el=>{el.textContent=year;});})();

// Shared theme control; storage may be unavailable in private browsing.
(()=>{
  const root=document.documentElement;
  const system=window.matchMedia('(prefers-color-scheme: dark)');
  let preference=null;
  try{preference=localStorage.getItem('hvac-theme');}catch{}
  if(!['light','dark'].includes(preference))preference=null;
  const en=root.lang==='en';
  const button=document.createElement('button');
  button.type='button';button.className='theme-toggle';
  function apply(theme){
    root.dataset.theme=theme;
    const dark=theme==='dark';
    // Native picture selection downloads the image for the active theme only.
    document.querySelectorAll('picture[data-theme-picture] source[data-theme-dark]').forEach(source=>{
      source.media=dark?'all':'not all';
    });
    button.textContent=dark?(en?'☀ Light':'☀ Sáng'):(en?'☾ Dark':'☾ Tối');
    button.setAttribute('aria-label',en?'Toggle dark mode':'Bật hoặc tắt giao diện tối');
    button.setAttribute('aria-pressed',String(dark));
  }
  apply(preference||(system.matches?'dark':'light'));
  const header=document.querySelector('main header');
  if(header)header.append(button);
  button.addEventListener('click',()=>{
    preference=root.dataset.theme==='dark'?'light':'dark';
    apply(preference);
    try{localStorage.setItem('hvac-theme',preference);}catch{}
  });
  system.addEventListener('change',()=>{if(!preference)apply(system.matches?'dark':'light');});
  window.addEventListener('storage',event=>{
    if(event.key!=='hvac-theme'&&event.key!==null)return;
    preference=['light','dark'].includes(event.newValue)?event.newValue:null;
    apply(preference||(system.matches?'dark':'light'));
  });
})();

// Keep toggle state available to screen readers as well as visible styling.
(()=>{
 const initialize=()=>{
  document.querySelectorAll('.segmented,.shape-switch').forEach(group=>{
   const sync=()=>group.querySelectorAll('button').forEach(button=>button.setAttribute('aria-pressed',String(button.classList.contains('selected'))));
   sync();group.addEventListener('click',()=>queueMicrotask(sync));
   new MutationObserver(sync).observe(group,{attributes:true,attributeFilter:['class'],subtree:true});
  });
 };
 if(document.readyState==='loading')document.addEventListener('DOMContentLoaded',initialize,{once:true});else initialize();
})();

// Move the existing controls rather than duplicating theme or language state.
(()=>{
 const sidebar=document.querySelector('.sidebar'),brand=sidebar?.querySelector('.brand');
 const header=document.querySelector('main>header'),languages=header?.querySelector('.languages'),theme=header?.querySelector('.theme-toggle');
 if(!sidebar||!brand||!languages||!theme)return;
 const row=document.createElement('div');row.className='mobile-topbar';
 brand.before(row);row.append(brand);
 const actions=document.createElement('div');actions.className='mobile-topbar-actions';row.append(actions);
 const languageAnchor=document.createComment('language controls desktop position'),themeAnchor=document.createComment('theme control desktop position');
 languages.before(languageAnchor);theme.before(themeAnchor);
 const mobile=window.matchMedia('(max-width: 600px)');
 const place=()=>{if(mobile.matches)actions.append(languages,theme);else{languageAnchor.after(languages);themeAnchor.after(theme);}};
 place();mobile.addEventListener('change',place);
})();
// One disclosure treatment for static and dynamically rendered calculator sections.
(()=>{'use strict';const en=document.documentElement.lang==='en';
 function enhance(details){if(details.classList.contains('hvac-disclosure')||details.closest('#engineering-report,#report-dialog,#project-report-dialog,#project-print-report,#cooling-report'))return;const summary=details.querySelector(':scope>summary');if(!summary)return;
  const old=summary.querySelector('.ahu-visual-toggle');old?.remove();
  const last=summary.lastElementChild;if(last&&/^(?:Ẩn\s*\/\s*hiện|Hide\s*\/\s*show|＋|\+)$/i.test(last.textContent.trim()))last.remove();
  const title=document.createElement('div');title.className='disclosure-title';while(summary.firstChild)title.append(summary.firstChild);summary.append(title);
  const state=document.createElement('span');state.className='disclosure-state';state.setAttribute('aria-hidden','true');state.innerHTML='<span class="disclosure-show">'+(en?'Show':'Hiện')+'</span><span class="disclosure-hide">'+(en?'Hide':'Ẩn')+'</span><span class="disclosure-chevron">⌄</span>';summary.append(state);details.classList.add('hvac-disclosure');
 }
 function scan(node){if(node.nodeType!==1)return;if(node.matches('details'))enhance(node);node.querySelectorAll('details').forEach(enhance);}
 const main=document.querySelector('main');if(!main)return;scan(main);new MutationObserver(records=>{for(const r of records)for(const node of r.addedNodes)scan(node);}).observe(main,{childList:true,subtree:true});
})();
// Add a compact scope note to calculator, project and saved-list report previews/printouts.
(()=>{'use strict';const en=document.documentElement.lang==='en',selector='#engineering-report,#cooling-report,#report-dialog,#project-report-dialog,#project-print-report,#fabrication-list-dialog,#supports-list-dialog,.project-report-dialog';
 function stamp(container){const target=container.matches('dialog')?(container.querySelector('article')||container):container;if(target.querySelector('.report-use-note'))return;const p=document.createElement('p');p.className='report-use-note';p.append(en?'Results support preliminary calculations and require verification before use. ':'Kết quả hỗ trợ tính toán sơ bộ, cần được kiểm tra trước khi áp dụng. ');const a=document.createElement('a');a.href='https://hvacstudio.vn'+(en?'/en/terms/':'/vi/dieu-khoan-su-dung/');a.textContent=en?'Terms of use':'Điều khoản sử dụng';p.append(a);target.append(p);}
 function scan(node){if(node.nodeType!==1)return;if(node.matches(selector))stamp(node);node.querySelectorAll(selector).forEach(stamp);}
 if(document.body){scan(document.body);new MutationObserver(records=>{for(const r of records)for(const node of r.addedNodes)scan(node);}).observe(document.body,{childList:true,subtree:true});}
 window.addEventListener('beforeprint',()=>document.querySelectorAll(selector).forEach(stamp));
})();
