
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


