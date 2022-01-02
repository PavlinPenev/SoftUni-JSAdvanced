function attachGradientEvents() {

    const gradient = document.getElementById('gradient');
    gradient.addEventListener('mousemove', (ev) => {
        document.getElementById('result').textContent = `${Math.floor(ev.offsetX/gradient.clientWidth*100)}%`;
    });

}