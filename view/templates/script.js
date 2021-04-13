let box = document.getElementById('deck');

let state = {
    offsetX: 0,
    offsetY: 0,
    target: null
}

box.addEventListener('dblclick', event => {
    const target = event.target;

    if (target && target.classList.contains('card')) {
        if (target.getAttribute('value') === 'on') {
            target.setAttribute('value', 'off');
        } else {
            target.setAttribute('value', 'on');
        }
    }
});

box.addEventListener('mousedown', event => {
    if (event.target && event.target.classList.contains('card') &&
        event.target.getAttribute('value') === 'on') {
        state.target = event.target;
        state.offsetX = event.offsetX;
        state.offsetY = event.offsetY;
    }

});


box.addEventListener('mouseup', () => {
    state.target = null;
});

box.addEventListener('mousemove', e => {
    if (state.target) {
        state.target.style.left = (e.pageX - state.offsetX) + 'px';
        state.target.style.top = (e.pageY - state.offsetY) + 'px';
    }
});