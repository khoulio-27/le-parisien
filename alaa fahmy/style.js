let el = document.querySelector(".scroller");
let height = document.documentElement.scrollHeight - document.documentElement.clientHeight;

console.log(document.documentElement.scrollHeight);
console.log(document.documentElement.clientHeight);
console.log(height);

window.addEventListener("scroll", () => {
  const scrollTop = document.documentElement.scrollTop;
  el.style.width = `${(scrollTop / height) * 100}%`;
});


const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      console.log(entry)
      if (entry.isIntersecting) {
        entry.target.classList.add('show');
      } else {
        entry.target.classList.remove('show');
      }
    });
});


const hiddenElements = document.querySelectorAll('.hidden');
hiddenElements.forEach((el) => observer.observe(el));

// dark theme
var icon = document.getElementById("icon");

icon.onclick = function() {
    document.body.classList.toggle("dark-theme");
    if(document.body.classList.contains("dark-theme")){
        icon.src ="images/sun.png";
    } else {
        icon.src = "images/moon.png";
    }
}


const burger = document.querySelector(".burger");
const mainNav = document.querySelector(".main-nav");

burger.addEventListener("click", () => {
  burger.classList.toggle("active");
  mainNav.classList.toggle("active");
})

document.querySelectorAll(".man").forEach(n => n.
  addEventListener("click", () => {
    burger.classList.remove("active"); 
    mainNav.classList.remove("active"); 
  }))



  let intro = document.querySelector('.intro');
  let paris = document.querySelector('.paris');
  let SIU = document.querySelectorAll('.SIU');

  window.addEventListener('DOMContentloaded', ()=>{

    setTimeout(()=>{

      SIU.forEach((span, idx)=>{
        setTimeout(()=> {
          span.classList.add('active');
        }, (idx + 1) * 400)
      })
    })
  })



