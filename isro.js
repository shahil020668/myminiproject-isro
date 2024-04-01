let x = document.querySelector('.fa-solid');
let hide = document.querySelector('.newnave');
let side = document.querySelector('.sidebar');

const enableBoxes = () => {
    hide.style.display = 'flex';
} 

const disable = () => {
    hide.style.display = 'none';

}

x.addEventListener("click",disable);

side.addEventListener("click",enableBoxes);


const slider = document.querySelector(".slider");
        let slide = 1;
        const imag = document.querySelectorAll(".cimage");
        function moveright() {

            if(slide>1){
                slider.style.transform = `translateX(${-(slide-2)*45}vw)`;
                slide--;
            }
            else{
                slider.style.transform = `translateX(-180vw)`;
                slide = 5;
            }
            console.log(slide);
        }

        function moveleft () {
            
            if(slide < imag.length){
                slider.style.transform = `translateX(-${45*slide}vw)`;
                slide++;
                // document.write("hello");
            }
            else {
                slider.style.transform = `translateX(0px)`;
                slide=1;
            }
            // console.log(slide);
            // document.write("hello");
        }

        setInterval(moveleft,6000);


function checkau1() {
    alert("You will be directed to an external website. Are you sure that you want to proceed?");
}

// let navele = document.querySelector(".navele");
// let velen = document.querySelector(".velen");

// function displayf () {
//     velen.style.visibility = 'visible';
//     velen.style.opacity = '1';
// }

// function disablef () {
//     velen.style.visibility = 'hidden';
//     velen.style.opacity = '0';
// }

let backup = document.querySelector(".backup");
let body = document.querySelector("body");
function showe ()  {
    backup.style.display = `block`;
    console.log("shahil");
}
// body.addEventListener("scroll",showe);