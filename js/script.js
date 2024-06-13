document.addEventListener('mousemove', function(e) {
    const cursorLight = document.querySelector('.cursor-light');
    cursorLight.style.transform = `translate(${e.clientX}px, ${e.clientY}px)`;
});
