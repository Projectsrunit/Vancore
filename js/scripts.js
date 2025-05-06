// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

document.addEventListener('DOMContentLoaded', function() {
    const canvas = document.getElementById('connection-canvas');
    const ctx = canvas.getContext('2d');
    const centralLogo = document.querySelector('.central-logo-wrapper');
    const platformIcons = document.querySelectorAll('.platform-icon');

    function resizeCanvas() {
        canvas.width = document.querySelector('.icon-connection-wrapper').offsetWidth;
        canvas.height = document.querySelector('.icon-connection-wrapper').offsetHeight;
        drawLines();
    }


  function drawLines() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);

        const startX = centralLogo.offsetLeft + centralLogo.offsetWidth / 2;
        const startY = centralLogo.offsetTop + centralLogo.offsetHeight / 2 + centralLogo.offsetHeight/4;

        platformIcons.forEach(icon => {
            const endX = icon.offsetLeft + icon.offsetWidth / 2;
            const endY = icon.offsetTop + icon.offsetHeight / 2;

            ctx.beginPath();
            ctx.moveTo(startX, startY);
            ctx.lineTo(endX, endY);
            ctx.strokeStyle = '#ccc';
            ctx.lineWidth = 2;
            ctx.setLineDash([5, 5]);
            ctx.stroke();
        });
    }

    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);
    drawLines();
});

// Activate pricing period buttons
const pricingButtons = document.querySelectorAll('.btn-group .btn');
pricingButtons.forEach(button => {
    button.addEventListener('click', () => {
        pricingButtons.forEach(btn => btn.classList.remove('active'));
        button.classList.add('active');
    });
});

const swiper = new Swiper(".testimonial-swiper", {
    loop: true,
    spaceBetween: 20,
    slidesPerView: 1,
    pagination: {
    el: ".swiper-pagination",
    clickable: true,
    },
    navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
    },
    autoplay: {
    delay: 5000,
    disableOnInteraction: false,
    },
});