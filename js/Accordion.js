// accordion drop down
const btns = document.querySelectorAll('.accordion_btn');
console.log(btns)
btns.forEach(btn => {
    btn.addEventListener('click', (el) => {
        let accordion_body = el.target.parentElement.parentElement.children[1];
        el.target.children[0].classList.toggle('open')
        accordion_body.classList.toggle('open')
    })
})