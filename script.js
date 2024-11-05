const main = document.querySelector('.main');

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const targetId = this.getAttribute('href').substring(1);
        const targetElement = document.getElementById(targetId);

        if (targetElement) {
            targetElement.scrollIntoView({
                behavior: 'smooth',
                block: 'center' // Centers the element in the viewport
            });
        }
    });
});

// ************************************* Task 1 *************************************

const a1_button = document.querySelector('.a1 button');
a1_button.addEventListener('click', function(){
    alert('You just got an alert :)')
})

// ************************************* Task 2 *************************************

const a2_heading = document.querySelector('#a2 h1');
const a2_input = document.querySelector('#a2 input');
const a2_button = document.querySelector('#a2 button');
a2_button.addEventListener('click', function(){
    if(a2_input.value!=''){
    a2_heading.innerHTML = `Changed value: ${a2_input.value}`;
    }
})

// ************************************* Task 3 *************************************

const a3 = document.querySelector('.a3');
const a3_button = document.querySelector('.a3 button');
let url = './nature.jpg'
let toggle = 0;
a3_button.addEventListener('click', function(){
    if(toggle==1){
        a3.style.backgroundImage = "url('')";
        a3_button.innerHTML = 'Show'
        toggle = 0;
    }else{
        a3.style.backgroundImage = `url(${url})`;
        a3_button.innerHTML = 'Hide'
        toggle = 1;
    }
    
})

// ************************************* Task 4 *************************************

const grads = [
    "linear-gradient(135deg, #FF5F6D, #FFC371)",   // Tropical Sunset
    "linear-gradient(135deg, #00d2ff, #3a7bd5)",   // Bright Aqua
    "linear-gradient(135deg, #f9d423, #ff4e50)",   // Citrus Burst
    "linear-gradient(135deg, #00c9ff, #92fe9d)",   // Minty Fresh
    "linear-gradient(135deg, #da22ff, #9733ee)"    // Electric Violet
];
const a4_button = document.querySelector('.a4 button');
const a4 = document.querySelector('.a4');
let count = 0;
a4_button.addEventListener('click', function(){
    a4.style.background = grads[count];
    count++;
    if(count==5){
        count = 0;
    }
})

// ************************************* Task 5 *************************************
const a5 = document.querySelector('.a5');
const a5_button = document.querySelector('.a5 button');
const a5_input = document.querySelector('.a5 input');
a5_button.addEventListener('click', function(){
    console.log(a5_input.value);
    alert('Value has been loged!! CHECK CONSOLE');
})

// ************************************* Task 6 *************************************

const a6_img = document.querySelector('.a6 img');
const a6_button = document.querySelector('.a6 button');
const a6_input = document.querySelector('.a6 input');
a6_button.addEventListener('click', function(){
    a6_img.setAttribute('src', a6_input.value);
})

