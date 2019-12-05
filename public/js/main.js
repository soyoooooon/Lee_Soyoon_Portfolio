(()=> {
console.log('Trevor..plz');

let myData = document.querySelectorAll('.workData');
let lightBox = document.querySelector('.popover');
let closeBtn = document.querySelector('.close-btn');
let myImages = document.querySelector('.img-cont');


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
   lightBox.querySelector(".link").innerHTML = `<a href = "${data.link}">Git</a>`
   

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

    // debugger;

};

myData.forEach(button => button.addEventListener("click", imgChange));
myData.forEach(button => button.addEventListener("click", fetchData));
//   myData.forEach(button => button.addEventListener("click", fetchData));
  closeBtn.addEventListener("click", closePop);
})();