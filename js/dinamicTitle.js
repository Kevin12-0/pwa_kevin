const debounce = (func, wait) => {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
};

if ('windowControlsOverlay' in navigator) {
    navigator.windowControlsOverlay.addEventListener('geometrychange', debounce(e => {
        // Detect if the Window Controls Overlay is visible.
        const isOverlayVisible = navigator.windowControlsOverlay.visible;

        // Get the size and position of the title bar area.
        const titleBarRect = e.titlebarAreaRect;

        console.log(`The overlay is ${isOverlayVisible ? 'visible' : 'hidden'}, the title bar width is ${titleBarRect.width}px`);
    }, 200));
}