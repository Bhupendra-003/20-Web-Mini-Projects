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
    a2_heading.innerHTML = `Changed value: ${a2_input.value}`;
})

// ************************************* Task 3 *************************************

const a3 = document.querySelector('.a3');
const a3_button = document.querySelector('.a3 button');
let url = './nature.jpg'
let toggle = 0;
a3.addEventListener('click', function(){
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
