console.log('%cAstro', `color: ${getComputedStyle(document.documentElement).getPropertyValue('--primary-color')}; font-size: 100px; font-family: "Poppins", sans-serif; font-weight:bold;`);

if ('serviceWorker' in navigator) window.addEventListener('load', () => navigator.serviceWorker
    .register('/astro/sw.js', {
        scope: '/astro/~/'
    })
    .then(() => console.log('Service worker registered successfully')));