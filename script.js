const cursor=document.querySelector(".magnetic-cursor");
const cursorCore=document.querySelector(".cursor-core");
let mouseX=0;
let mouseY=0;
let cursorX=0;
let cursorY=0;
document.addEventListener("mousemove",(event)=>{
mouseX=event.clientX;
mouseY=event.clientY;
});
function moveCursor(){
cursorX+=(mouseX-cursorX)*.15;
cursorY+=(mouseY-cursorY)*.15;
cursor.style.left=cursorX+"px";
cursor.style.top=cursorY+"px";
requestAnimationFrame(moveCursor);
}
moveCursor();
const interactiveElements=document.querySelectorAll("a,button,.project,.skill,.certificate");
interactiveElements.forEach((element)=>{
element.addEventListener("mouseenter",()=>{
cursor.classList.add("hover");
const rect=element.getBoundingClientRect();
const elementX=rect.left+rect.width/2;
const elementY=rect.top+rect.height/2;
const moveX=(elementX-mouseX)*.15;
const moveY=(elementY-mouseY)*.15;
cursor.style.marginLeft=moveX+"px";
cursor.style.marginTop=moveY+"px";
});
element.addEventListener("mouseleave",()=>{
cursor.classList.remove("hover");
cursor.style.marginLeft="0px";
cursor.style.marginTop="0px";
});
});
document.addEventListener("mousedown",()=>{
cursor.classList.add("click");
});
document.addEventListener("mouseup",()=>{
cursor.classList.remove("click");
});
const projects=document.querySelectorAll(".project");
const observer=new IntersectionObserver((entries)=>{
entries.forEach((entry)=>{
if(entry.isIntersecting){
entry.target.classList.add("show");
}
});
},{threshold:.15});
projects.forEach((project)=>{
project.style.opacity="0";
project.style.transform="translateY(60px)";
project.style.transition="opacity .8s ease,transform .8s ease";
observer.observe(project);
});
const style=document.createElement("style");
style.textContent=".project.show{opacity:1!important;transform:translateY(0)!important}";
document.head.appendChild(style);