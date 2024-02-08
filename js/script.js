    const lightEffect = document.querySelector('.light-effect');

    document.addEventListener('mousemove', (e) => {
        lightEffect.style.left = e.pageX + 'px';
        lightEffect.style.top = e.pageY + 'px';
        lightEffect.style.opacity = 0.8;
    });

    document.addEventListener('mouseout', () => {
        lightEffect.style.opacity = 0;
    });

