const slider = document.getElementById('slider');
const a4Container = document.getElementById('content');

slider.addEventListener('input', () => {
    const value = slider.value;
    a4Container.style.transform = `translateY(${value}%)`;
});

document.getElementById('print-button').addEventListener('click', function() {
    window.print();
});
