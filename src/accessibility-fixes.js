function fixStageMetaHeadings(root=document){
  root.querySelectorAll('.stage-view .meta-block > h3').forEach((heading)=>{
    if(heading.tagName === 'H2') return;
    const replacement = document.createElement('h2');
    replacement.className = heading.className;
    replacement.innerHTML = heading.innerHTML;
    [...heading.attributes].forEach((attr)=>replacement.setAttribute(attr.name, attr.value));
    heading.replaceWith(replacement);
  });
}

const observer = new MutationObserver(()=>requestAnimationFrame(()=>fixStageMetaHeadings()));
observer.observe(document.getElementById('root') || document.body,{childList:true,subtree:true});
requestAnimationFrame(()=>fixStageMetaHeadings());
