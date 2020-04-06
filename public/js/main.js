(()=> {
console.log('you can do it..');

let myData = document.querySelectorAll('.workData');
let otherData = document.querySelectorAll('.etc-work');
let lightBox = document.querySelector('.popover');
let closeBtn = document.querySelector('.close-btn');
let myImages = document.querySelector('.img-cont');
let menuCont = document.querySelector('.main-nav');
let clickBox = document.querySelector('#menu');
let burger = document.querySelector('.burger');
let conTact = document.querySelector('#form');
let contBtn = document.querySelector('.nav-cont');
let contBtn2 = document.querySelector('.contact-btn');
let myFace = document.querySelector('.myFace');
let submitBtn = document.querySelector('.submit-btn');
let submitSend = document.querySelector('.sendit');

function imgChange(){
    let offset = 450,
    //used to 450px
    multiplier = this.dataset.offset; 
    myImages.style.right = `${offset * multiplier + "px"}`;

    // debugger;

}

let waypoint = new Waypoint({
  element: document.getElementById('intro'),
  handler: function() {
    console.log('Scrolled to waypoint!')


    intro.classList.add('intro-hi')

   
    // this.element.innerHTML = "<h3>I am a junior FRONT-END DEVELOPER</h3>";
  },offset: '650'
  
  
})


let waypoint2 = new Waypoint({
  element: document.getElementById('onEp'),
  handler: function() {
    console.log('Scrolled to waypoint!')


    onEp.classList.add('p-open1')

   
    // this.element.innerHTML = "<h3>I am a junior FRONT-END DEVELOPER</h3>";
  },offset: '590'
  
})

let waypoint3 = new Waypoint({
  element: document.getElementById('twOp'),
  handler: function() {
    console.log('Scrolled to waypoint!')


    twOp.classList.add('p-open2')

   
    // this.element.innerHTML = "<h3>I am a junior FRONT-END DEVELOPER</h3>";
  },offset: '570'
  
})

function showLight(data, el) {

   lightBox.querySelector(".name").textContent = `${data.name}`;
   lightBox.querySelector(".tool").textContent = `${data.tool}`;
   lightBox.querySelector(".team").textContent = `${data.team}`;
   lightBox.querySelector(".text").textContent = `${data.text}`;
   lightBox.querySelector(".text-2").innerHTML =`${data.textEtc}`;
   lightBox.querySelector(".workImg").innerHTML = `<img src = "images/${data.image}">`;
   lightBox.querySelector(".link").innerHTML = `<a href = "${data.link}" target="_blank"><img src="images/github.svg"></a>`
   

    lightBox.classList.add('show-popover');

    // el.appendChild(lightBox);

    
    
  };

  function fetchData() {
    let url = `/info/${this.dataset.target}`,
        targetElement = this;

        fetch(url)
        .then(res => res.json())
        .then(data => {
            console.log(data);
            showLight(data, targetElement);
            
        })
        .catch(function(error) {
            console.log(error);
        })
  };

  function closePop() {
	
    lightBox.classList.remove('show-popover');


};


//Light box ended...


function clickMenu() {
  burger.classList.toggle('open');
  menuCont.classList.toggle('slideToggle');
  conTact.classList.remove('show-cont');

};

window.onscroll = function (){

let scrollPosition = window.pageYOffset 
  
  scrollPosition = window.scrollY;
  // console.log(scrollPosition);
};
  
function heLLo() {
  let scrollPosition = window.pageYOffset 
  scrollPosition = window.scrollY;
    window.scrollTo(0,711);

    
  };

 //try to make a scroll link, but doesn't need a java script, just using sass;)

function intoContact(){
  conTact.classList.toggle('show-cont');
  //debugger;
};

function clickSubmit(){
  let url = `/send`
    submitSend.classList.toggle('sendPage');

  
};

document.addEventListener('keydown', function(event) {
  const key = event.key; 

 
  if (key === "Escape") {
    lightBox.classList.remove('show-popover');
    burger.classList.remove('open');
    menuCont.classList.remove('slideToggle');
    conTact.classList.remove('show-cont');
  }
    });



myData.forEach(button => button.addEventListener("click", imgChange));
myData.forEach(button => button.addEventListener("click", fetchData));
otherData.forEach(button => button.addEventListener("click",fetchData));
closeBtn.addEventListener("click", closePop);
clickBox.addEventListener("click",clickMenu);
contBtn.addEventListener("click", intoContact);
contBtn2.addEventListener("click", intoContact);
myFace.addEventListener("click", heLLo);
submitBtn.addEventListener("click",clickSubmit);
})();