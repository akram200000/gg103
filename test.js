// Variable declarations
var reveals = document.querySelectorAll('.hidden');
var reveals1 = document.querySelectorAll('.hidden1');
var reveals2 = document.querySelectorAll('.hidden2');
const scrollers = document.querySelectorAll(".scroller");

// Intersection Observer setup for reveals
const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('show');
        } else {
            entry.target.classList.remove('show');
        }
    });
});
reveals.forEach(el => observer.observe(el));

// Intersection Observer setup for reveals1
const observer1 = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('show1');
        } else {
            entry.target.classList.remove('show1');
        }
    });
});
reveals1.forEach(el => observer1.observe(el));

// Intersection Observer setup for reveals2
const observer2 = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('show2');
        } else {
            entry.target.classList.remove('show2');
        }
    });
});
reveals2.forEach(el => observer2.observe(el));

// Animation setup for scrollers
if (!window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
    addAnimation();
}

function addAnimation() {
    scrollers.forEach((scroller) => {
        scroller.setAttribute("data-animated", true);
        const scrollerInner = scroller.querySelector(".scroller__inner");
        const scrollerContent = Array.from(scrollerInner.children);
        scrollerContent.forEach((item) => {
            const duplicatedItem = item.cloneNode(true);
            duplicatedItem.setAttribute("aria-hidden", true);
            scrollerInner.appendChild(duplicatedItem);
        });
    });
}

reveals1.forEach(el => observer1.observe(el));

function jumpToSection(sectionId) {
    // Get the section element by its ID
    const section = document.getElementById(sectionId);

    // Scroll to the section
    section.scrollIntoView({ behavior: 'smooth' });
}


// JavaScript
const counterUp = window.counterUp.default;

const callback = entries => {
    entries.forEach(entry => {
        const el = entry.target;
        if (entry.isIntersecting && !el.classList.contains('is-visible')) {
            if (el.classList.contains('counter')) {
                const value = parseInt(el.textContent.trim(), 10);
                const options = {
                    duration: 2000,
                    delay: 16,
                };
                if (value > 160) {
                    counterUp(el, options);
                } else {
                    el.textContent = value;
                }
            }
            el.classList.add('is-visible');
        }
    });
}

const IO = new IntersectionObserver(callback, { threshold: 1 });

document.querySelectorAll('.counter').forEach(el => {
    IO.observe(el);
});

// Add event listener to the button
document.getElementById('showAnotherCounterButton').addEventListener('click', function() {
    const anotherCounterDiv = document.querySelector('.text22.another-counter');
    if (anotherCounterDiv) {
        anotherCounterDiv.style.display = 'block'; // Show the counter div when the button is clicked
    }
});










/**/ 









window.addEventListener("load", () => {
    const loader = document.querySelector(".loader");
  
    loader.classList.add("loader--hidden");
  
    loader.addEventListener("transitionend", () => {
      document.body.removeChild(loader);
    });
  });
  

