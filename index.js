//  top slider //

document.addEventListener('DOMContentLoaded', function() {
    const ellipses = document.querySelectorAll('.slider_ellipse__container span');
    const bannerSlider = document.querySelector('.banner_slider');

    ellipses.forEach((ellipse, index) => {
        ellipse.addEventListener('click', function() {
            bannerSlider.className = 'banner_slider image' + (index + 1);
            updateEllipseStyles(this);
        });
    });

    function updateEllipseStyles(clickedEllipse) {
        ellipses.forEach(ellipse => {
            if (ellipse === clickedEllipse) {
                ellipse.style.backgroundColor = '#FF7D01';
                ellipse.style.border = 'none';
            } else {
                ellipse.style.backgroundColor = 'transparent';
                ellipse.style.border = '2px solid #FF7D01';
            }
        });
    }
});

//



// slider popular categories //


$(document).ready(function () {
    $('.popular_categories__card__container').slick();
});

//



// slider brands //

$(".multiple-items").slick({
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4
  });

//



// header menu //

/*
document.addEventListener("DOMContentLoaded", function() {
    // Отримуємо всі елементи меню
    const menuItems = document.querySelectorAll('.nav_2__container ul li span');
    
    // Додаємо обробник події кліку до кожного спану
    menuItems.forEach(function(span) {
        // Додаємо обробник події кліку
        span.addEventListener('click', function() {
            // Забираємо стилі з усіх спанів
            menuItems.forEach(function(item) {
                item.style.color = '';
                const img = item.parentNode.querySelector('img');
                // Перевіряємо, чи є зображення і чи це не елемент з класом "promotional"
                if (img && !item.classList.contains('promotional')) {
                    img.src = './img/icons/keyboard-arrow-down.png';
                }
            });
            
            // Встановлюємо стилі для поточного спану
            span.style.color = 'rgb(255, 125, 1)';
            const img = span.parentNode.querySelector('img');
            // Перевіряємо, чи є зображення і чи це не елемент з класом "promotional"
            if (img && !span.classList.contains('promotional')) {
                img.src = './img/icons/keyboard-arrow-top.png';
            }
        });
    });
});

*/


document.addEventListener("DOMContentLoaded", function() {
    // Отримуємо всі елементи меню
    const menuItems = document.querySelectorAll('.nav_2__container ul li span');
    const modalMenuContainer = document.querySelector('.modal_menu__container');
        
    
    // Додаємо обробник події кліку до кожного спану
    menuItems.forEach(function(span) {
        // Додаємо обробник події кліку
        span.addEventListener('click', function() {
            // Перевіряємо, чи був вже клікнутий цей елемент
            if (span.classList.contains('active')) {
                // Повертаємо стиль та зображення до початкового стану
                span.style.color = '';
                const img = span.parentNode.querySelector('img');
                if (img && !span.classList.contains('promotional')) {
                    img.src = './img/icons/keyboard-arrow-down.png';
                }
                // Знімаємо клас "active"
                span.classList.remove('active');
                modalMenuContainer.style.display = 'none';
            } else {
                // Забираємо стилі з усіх спанів
                menuItems.forEach(function(item) {
                    item.style.color = '';
                    const img = item.parentNode.querySelector('img');
                    if (img && !item.classList.contains('promotional')) {
                        img.src = './img/icons/keyboard-arrow-down.png';
                    }
                    // Знімаємо клас "active"
                    item.classList.remove('active');
                });
                // Встановлюємо стилі для поточного спану
                span.style.color = 'rgb(255, 125, 1)';
                const img = span.parentNode.querySelector('img');
                if (img && !span.classList.contains('promotional')) {
                    img.src = './img/icons/keyboard-arrow-top.png';
                }
                // Додаємо клас "active"
                span.classList.add('active');

                modalMenuContainer.style.display = 'flex';             
            }
        });
    });
});