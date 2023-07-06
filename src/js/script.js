const check = document.querySelector('#check');
const burger = document.querySelector('#burger');
const links = document.querySelector('#links');
const spanSatu = document.querySelector('#burger > span:nth-child(1)');
const spanDua = document.querySelector('#burger > span:nth-child(2)');
const spanTiga = document.querySelector('#burger > span:nth-child(3)');
        
check.addEventListener('click', function(){
    if (check.checked) {
        burger.classList.add('gap-[0.40rem]');
        spanSatu.classList.add('rotate-45');
        spanDua.style.transform = 'scale(0)';
        spanTiga.classList.add('-rotate-45');
        links.classList.remove('invisible');
        links.classList.add('visible');
    } else {
        burger.classList.remove('gap-[0.40rem]');
        spanSatu.classList.remove('rotate-45');
        spanDua.style.transform = 'scale(1)';
        spanTiga.classList.remove('-rotate-45');
        links.classList.remove('visible');
        links.classList.add('invisible');
    }
})

window.addEventListener('click', function(e) {
    if (e.target !== check && e.target !== burger && e.target !== links) {
        burger.classList.remove('gap-[0.40rem]');
        spanSatu.classList.remove('rotate-45');
        spanDua.style.transform = 'scale(1)';
        spanTiga.classList.remove('-rotate-45');
        links.classList.remove('visible');
        links.classList.add('invisible');
    }
})