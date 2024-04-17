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





// header menu 


document.addEventListener("DOMContentLoaded", function() {
    // Отримуємо всі елементи меню
    const menuItems = document.querySelectorAll('.nav_2__container ul li span');
    const listOfProductCategories = document.querySelectorAll('.list_of_product_categories ul li span');
    const modalMenuContainer = document.querySelector('.modal_menu__container');
    const modalMenuSectionHeader = document.querySelector('.modal_menu__content__left_block___header');
    const modalListOfProductsHeader = document.querySelector('.modal_menu__content__right_block___header');
        
    
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
                modalMenuSectionHeader.innerHTML = span.innerHTML;             
            }
        });
    });

    listOfProductCategories.forEach(function (span) {
        span.addEventListener('click', function () {

            listOfProductCategories.forEach(function (span) {
                span.style.color = 'rgb(29, 29, 29)';
                span.parentElement.style.background = 'rgb(255, 255, 255)';
            })

            span.style.color = 'rgb(255, 255, 255)';
            span.parentElement.style.background = 'rgb(255, 125, 1)';
            span.classList.add('active');

            modalListOfProductsHeader.innerHTML = span.innerHTML;
        })
    })
});



//