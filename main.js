// BURGER MENU

const hamb = document.querySelector(".burger");
hamb.addEventListener("click", toggle);

const hamb2 = document.querySelector(".nav-wrap");
hamb2.addEventListener("click", toggle);

function toggle(e) {
    hamb.classList.toggle("open");
    hamb2.classList.toggle("open");
}

window.addEventListener('click', e => { 
  const target = e.target 
  if (!target.closest('.nav-wrap') && !target.closest('.burger')) {
    hamb2.classList.remove('open');
    hamb.classList.remove('open');
  }
})
// ***************************************************************************************************************

// SLIDER FAVOURITE COFFEE

let count = 0;

let offset = 0;
const area = document.querySelector('.area');
const next = document.querySelector('.next');
const prev = document.querySelector('.prev');

let step = 480;
if(window.screen.width < 681) {
  step = 348;
}

// if(document.documentElement.scrollWidth < 681) {
//   step = 348;
// }

next.addEventListener('click', ()=>{    // кнопка пролистывания слайда вперед 
offset = offset + step;
 if(offset > step *2) {
 offset = 0;
 }
 area.style.left = -offset + 'px';

 let a = 1;
 pagination(a);

 clearInterval(autoSwipe);
 autoSwipe = setInterval (() => {
    nextSlide();
 },3000)
})

prev.addEventListener('click', ()=>{    // кнопка пролистывания слайда назад
  offset = offset - step;
  if(offset < 0) {
    offset = step *2;
  }
  area.style.left = -offset + 'px';

  let a = -1;
  pagination(a);

  clearInterval(autoSwipe);
  autoSwipe = setInterval (() => {
    nextSlide();
  },3000)
})

 let autoSwipe = setInterval (() => {   // авто пролистывание слайда вперед
  nextSlide();
},3000)

function nextSlide(){                   // функция пролистывания слайда вперед
  offset = offset + step;
  if(offset > step*2) {
    offset = 0;
  }
  // progress();

  let a = 1;
  pagination(a);

  area.style.left = -offset + 'px';
}
// ****************************************************************************************************************

// ****************************************************************************************************************
function pagination(n){
  count = count + n;
  if(count>2){
    count=0;
  } 
  if(count<0){
    count=2;
  } 
  // console.log(count)
  progress();
}


function progress() {
  let elem = document.querySelectorAll('.progress-line')[count];
  let width = 1;
  let id = setInterval(progressStatus, 30);
  function progressStatus() {
    if(width >= 100) {
      clearInterval(id);
      elem.style.background = 'C1B6AD';
      elem.style.width = 0;
    }
    else {
      width++;
      elem.style.width = width + '%';
      elem.style.background = '665F55';
    }
  }
}