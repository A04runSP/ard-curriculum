import {resourceLibrary} from './data/resourceLibrary.js';

const aliases=[
  [/^MDN/i,/MDN Web Docs/i],
  [/^CS50x/i,/CS50x/i],
  [/Harvard CS50x/i,/CS50x/i],
  [/freeCodeCamp/i,/freeCodeCamp/i],
  [/The Odin Project/i,/The Odin Project/i],
  [/Full Stack Open/i,/Full Stack Open/i],
  [/React/i,/React official documentation/i],
  [/TypeScript/i,/TypeScript Handbook/i],
  [/Node\.js/i,/Node.js official documentation/i],
  [/Express/i,/Express.js official documentation/i],
  [/PostgreSQL/i,/PostgreSQL official documentation/i],
  [/GitHub/i,/GitHub Docs/i],
  [/Git(?!Hub)/i,/Git official documentation \/ Pro Git book/i],
  [/Docker/i,/Docker official Get Started guide/i],
  [/web\.dev/i,/web.dev/i],
  [/WCAG/i,/WCAG Quick Reference/i],
  [/Nielsen Norman/i,/Nielsen Norman Group articles/i],
  [/Figma/i,/Figma Learn \/ Design 101/i],
  [/Eloquent JavaScript/i,/Eloquent JavaScript/i],
  [/You Don't Know JS/i,/You Don't Know JS Yet \(book series\)/i],
  [/Refactoring UI/i,/Refactoring UI/i],
  [/System Design Primer/i,/System Design Primer/i],
  [/Designing Data-Intensive Applications/i,/Designing Data-Intensive Applications/i],
  [/OWASP Top 10/i,/OWASP Top 10/i],
  [/Exercism/i,/Exercism/i],
  [/Missing Semester/i,/MIT — The Missing Semester of Your CS Education/i],
  [/MIT 6\.006: Introduction to Algorithms/i,/MIT 6\.006: Introduction to Algorithms — Lecture Notes/i]
];

const directUrls=new Map([
  ["mdn: keyed collections", "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Keyed_collections"],
  ["mdn: javascript testing and test-your-skills resources", "https://developer.mozilla.org/en-US/docs/Learn_web_development/Core/Scripting/Test_your_skills"],
  ["mit 6.006: introduction to algorithms — syllabus", "https://ocw.mit.edu/courses/6-006-introduction-to-algorithms-spring-2020/pages/syllabus/"]
]);

const getUrl=text=>{
  const value=text.trim();
  const direct=directUrls.get(value.toLowerCase());
  if(direct)return direct;
  for(const [pattern,titlePattern] of aliases){
    if(pattern.test(value)){
      const item=resourceLibrary.find(r=>titlePattern.test(r.title));
      if(item?.url)return item.url;
    }
  }
  return '';
};

const style=document.createElement('style');
style.textContent='.meta-block .ard-resource-link{color:#20E3E6;text-decoration:underline;text-decoration-color:rgba(32,227,230,.78);text-underline-offset:3px;text-decoration-thickness:1px;transition:color .18s ease,text-decoration-color .18s ease}.meta-block .ard-resource-link:hover{color:#20E3E6;text-decoration-color:#20E3E6}.meta-block .ard-resource-link:focus-visible{outline:2px solid #20E3E6;outline-offset:3px;border-radius:3px}';
document.head.appendChild(style);

const enhanceResources=()=>{
  document.querySelectorAll('.meta-block').forEach(block=>{
    const heading=block.querySelector('h3');
    if(!heading||heading.textContent.trim().toLowerCase()!=='resources')return;
    block.querySelectorAll('li').forEach(li=>{
      if(li.querySelector('a'))return;
      const url=getUrl(li.textContent||'');
      if(!url)return;
      const text=li.textContent.trim();
      li.textContent='';
      const link=document.createElement('a');
      link.className='ard-resource-link';
      link.href=url;
      link.target='_blank';
      link.rel='noopener noreferrer';
      link.textContent=text;
      li.appendChild(link);
    });
  });
};

enhanceResources();
new MutationObserver(enhanceResources).observe(document.body,{childList:true,subtree:true});
