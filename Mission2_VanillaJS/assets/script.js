const main = document.getElementById('home');

document.addEventListener('DOMContentLoaded', function() {
    setTimeout(() => {
        fadeIn(main); 
    }, 200);
    
})

function fadeIn(element, duration = 2000) {
    element.style.display = '';
    element.style.opacity = 0;
    let last = +new Date();
    let tick = function () {
      element.style.opacity = +element.style.opacity + (new Date() - last) / duration;
      last = +new Date();
      if (+element.style.opacity < 1) {
        (window.requestAnimationFrame && requestAnimationFrame(tick)) || setTimeout(tick, 16);
      }
    };
    tick();
}

window.addEventListener('scroll', ()=>{
    let content = document.querySelector('#title-intro');
    letContentPosition = content.getBoundingClientRect().top;
    let screenPosition = window.innerHeight;
    if(letContentPosition < screenPosition){
      content.classList.add('active');
    } else {
      content.classList.remove('active');
    }
});

window.addEventListener('scroll', ()=>{
    let content = document.querySelector('#content-intro');
    letContentPosition = content.getBoundingClientRect().top;
    let screenPosition = window.innerHeight/1;
    if(letContentPosition < screenPosition){
      content.classList.add('active');
    } else {
      content.classList.remove('active');
    }
});

window.addEventListener('scroll', ()=>{
    let content = document.querySelector('#img-intro');
    letContentPosition = content.getBoundingClientRect().top;
    let screenPosition = window.innerHeight/1;
    if(letContentPosition < screenPosition){
      content.classList.add('active');
    } else {
      content.classList.remove('active');
    }
});

window.addEventListener('scroll', ()=>{
    let content = document.querySelector('#mov1');
    letContentPosition = content.getBoundingClientRect().top;
    let screenPosition = window.innerHeight/1;
    if(letContentPosition < screenPosition){
      content.classList.add('active');
    } else {
      content.classList.remove('active');
    }
});

window.addEventListener('scroll', ()=>{
    let content = document.querySelector('#mov2');
    letContentPosition = content.getBoundingClientRect().top;
    let screenPosition = window.innerHeight/1;
    if(letContentPosition < screenPosition){
      content.classList.add('active');
    } else {
      content.classList.remove('active');
    }
});

window.addEventListener('scroll', ()=>{
    let content = document.querySelector('#mov3');
    letContentPosition = content.getBoundingClientRect().top;
    let screenPosition = window.innerHeight/1;
    if(letContentPosition < screenPosition){
      content.classList.add('active');
    } else {
      content.classList.remove('active');
    }
});

window.addEventListener('scroll', ()=>{
    let content = document.querySelector('#mov4');
    letContentPosition = content.getBoundingClientRect().top;
    let screenPosition = window.innerHeight/1;
    if(letContentPosition < screenPosition){
      content.classList.add('active');
    } else {
      content.classList.remove('active');
    }
});

window.addEventListener('scroll', ()=>{
    let content = document.querySelector('#mov5');
    letContentPosition = content.getBoundingClientRect().top;
    let screenPosition = window.innerHeight/1;
    if(letContentPosition < screenPosition){
      content.classList.add('active');
    } else {
      content.classList.remove('active');
    }
});

window.addEventListener('scroll', ()=>{
    let content = document.querySelector('#mov6');
    letContentPosition = content.getBoundingClientRect().top;
    let screenPosition = window.innerHeight/1;
    if(letContentPosition < screenPosition){
      content.classList.add('active');
    } else {
      content.classList.remove('active');
    }
});

window.addEventListener('scroll', ()=>{
    let content = document.querySelector('#mov7');
    letContentPosition = content.getBoundingClientRect().top;
    let screenPosition = window.innerHeight/1;
    if(letContentPosition < screenPosition){
      content.classList.add('active');
    } else {
      content.classList.remove('active');
    }
});

window.addEventListener('scroll', ()=>{
    let content = document.querySelector('#mov8');
    letContentPosition = content.getBoundingClientRect().top;
    let screenPosition = window.innerHeight/1;
    if(letContentPosition < screenPosition){
      content.classList.add('active');
    } else {
      content.classList.remove('active');
    }
});

window.addEventListener('scroll', ()=>{
    let content = document.querySelector('#mov9');
    letContentPosition = content.getBoundingClientRect().top;
    let screenPosition = window.innerHeight/1;
    if(letContentPosition < screenPosition){
      content.classList.add('active');
    } else {
      content.classList.remove('active');
    }
});

window.addEventListener('scroll', ()=>{
    let content = document.querySelector('#mov10');
    letContentPosition = content.getBoundingClientRect().top;
    let screenPosition = window.innerHeight/1;
    if(letContentPosition < screenPosition){
      content.classList.add('active');
    } else {
      content.classList.remove('active');
    }
});

window.addEventListener('scroll', ()=>{
    let content = document.querySelector('#char1');
    letContentPosition = content.getBoundingClientRect().top;
    let screenPosition = window.innerHeight/1;
    if(letContentPosition < screenPosition){
      content.classList.add('active');
    } else {
      content.classList.remove('active');
    }
});

window.addEventListener('scroll', ()=>{
    let content = document.querySelector('#char2');
    letContentPosition = content.getBoundingClientRect().top;
    let screenPosition = window.innerHeight/1;
    if(letContentPosition < screenPosition){
      content.classList.add('active');
    } else {
      content.classList.remove('active');
    }
});

window.addEventListener('scroll', ()=>{
    let content = document.querySelector('#char3');
    letContentPosition = content.getBoundingClientRect().top;
    let screenPosition = window.innerHeight/1;
    if(letContentPosition < screenPosition){
      content.classList.add('active');
    } else {
      content.classList.remove('active');
    }
});

window.addEventListener('scroll', ()=>{
    let content = document.querySelector('#char4');
    letContentPosition = content.getBoundingClientRect().top;
    let screenPosition = window.innerHeight/1;
    if(letContentPosition < screenPosition){
      content.classList.add('active');
    } else {
      content.classList.remove('active');
    }
});

window.addEventListener('scroll', ()=>{
    let content = document.querySelector('#char5');
    letContentPosition = content.getBoundingClientRect().top;
    let screenPosition = window.innerHeight/1;
    if(letContentPosition < screenPosition){
      content.classList.add('active');
    } else {
      content.classList.remove('active');
    }
});

window.addEventListener('scroll', ()=>{
    let content = document.querySelector('#char6');
    letContentPosition = content.getBoundingClientRect().top;
    let screenPosition = window.innerHeight/1;
    if(letContentPosition < screenPosition){
      content.classList.add('active');
    } else {
      content.classList.remove('active');
    }
});

window.addEventListener('scroll', ()=>{
    let content = document.querySelector('#char7');
    letContentPosition = content.getBoundingClientRect().top;
    let screenPosition = window.innerHeight/1;
    if(letContentPosition < screenPosition){
      content.classList.add('active');
    } else {
      content.classList.remove('active');
    }
});

window.addEventListener('scroll', ()=>{
    let content = document.querySelector('#char8');
    letContentPosition = content.getBoundingClientRect().top;
    let screenPosition = window.innerHeight/1;
    if(letContentPosition < screenPosition){
      content.classList.add('active');
    } else {
      content.classList.remove('active');
    }
});

window.addEventListener('scroll', ()=>{
    let content = document.querySelector('#char9');
    letContentPosition = content.getBoundingClientRect().top;
    let screenPosition = window.innerHeight/1;
    if(letContentPosition < screenPosition){
      content.classList.add('active');
    } else {
      content.classList.remove('active');
    }
});

window.addEventListener('scroll', ()=>{
    let content = document.querySelector('#char10');
    letContentPosition = content.getBoundingClientRect().top;
    let screenPosition = window.innerHeight/1;
    if(letContentPosition < screenPosition){
      content.classList.add('active');
    } else {
      content.classList.remove('active');
    }
});
