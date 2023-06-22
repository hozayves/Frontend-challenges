const share = document.querySelector('#share');
const tooltip = document.querySelector("[role='alert']");

window.addEventListener('click', (e) => {
    console.log(e.target.getAttribute('aria-hidden'));
    console.log(e.target.getAttribute('id'))
    if (e.target.getAttribute('aria-hidden') === null && e.target.getAttribute('id') !== 'share'){
        share.setAttribute('aria-hidden', true);
        tooltip.classList.add('hidden');
    }
    else {
        let isHidden = JSON.parse(share.getAttribute('aria-hidden'));
        share.setAttribute('aria-hidden', !isHidden);
        tooltip.classList.add('flex');
        tooltip.classList.remove('hidden')
    }
})