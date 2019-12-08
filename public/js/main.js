(()=> {
console.log('Trevor..');

let myData = document.querySelectorAll('.workData');
let lightBox = document.querySelector('.popover');
let closeBtn = document.querySelector('.close-btn');
let myImages = document.querySelector('.img-cont');
let menuCont = document.querySelector('.main-nav');
let clickBox = document.querySelector('#menu');
let burger = document.querySelector('.burger');
let conTact = document.querySelector('#form');
let contBtn = document.querySelector('.nav-cont');
let myFace = document.querySelector('.myFace');
// let marQuee = document.querySelector('.infinite')

function imgChange(){
    let offset = 450,
    multiplier = this.dataset.offset; 
    myImages.style.right = `${offset * multiplier + "px"}`;

    // debugger;

}


function showLight(data, el) {

   lightBox.querySelector(".name").textContent = `${data.name}`;
   lightBox.querySelector(".tool").textContent = `${data.tool}`;
   lightBox.querySelector(".team").textContent = `${data.team}`;
   lightBox.querySelector(".text").textContent = data.text;
   lightBox.querySelector(".workImg").innerHTML = `<img src = "images/${data.image}">`;
   lightBox.querySelector(".link").innerHTML = `<a href = "${data.link}"><img src="images/github.svg"></a>`
   

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

// window.onscroll = function (){

// let scrollPosition = window.pageYOffset 
  
//   scrollPosition = window.scrollY;
//   // console.log(scrollPosition);
// };
  
function heLLo() {
  let scrollPosition = window.pageYOffset 
  scrollPosition = window.scrollY;
    window.scrollTo(3,526);

    
  };

 //try to make a scroll link, but doesn't need a java script, just using sass;)

function intoContact(){
  conTact.classList.toggle('show-cont');
  //debugger;
};


myData.forEach(button => button.addEventListener("click", imgChange));
myData.forEach(button => button.addEventListener("click", fetchData));
closeBtn.addEventListener("click", closePop);
clickBox.addEventListener("click",clickMenu);
contBtn.addEventListener("click", intoContact);
myFace.addEventListener("click", heLLo);
})();