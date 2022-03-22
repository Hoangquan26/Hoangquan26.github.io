var btns = document.querySelectorAll('.js-buy');
var length = btns.length;
var modal = document.querySelector('.js-modal')
var close = document.querySelectorAll('.js-close')
var modalContain = document.getElementById('js-modal-content')
for(var i = 0; i < length; i++) {
    btns[i].addEventListener('click', openModal)
}

for(var i = 0; i < length - 1; i++) {
    close[i].addEventListener('click', closeModal)
}

function openModal() {
    modal.classList.add('open')
}

function closeModal() {
    modal.classList.remove('open')
}

modal.addEventListener('click', closeModal);

modalContain.addEventListener('click', function(e) {
    console.log(e)
    e.stopPropagation();
})

// responsive-menu
var menuBtn = document.getElementById('menu-btn');
var header = document.querySelector('.home')
function openMenu() {
    header.classList.toggle('menu')
}
menuBtn.addEventListener('click', openMenu)
var more = document.querySelector('#nav>ul>li:last-child')
var menus = document.querySelectorAll('#nav>ul>li');
for(var i = 0; i < menus.length; i++) {
    if(menus[i] != more)
        menus[i].addEventListener('click', openMenu)
    else
        menus[i].addEventListener('click', function(e) {
            e.preventDefault();
        })
}
//đóng moblie menu khi nhấn ra ngoài mobile menu
var mainElement = document.getElementById('main');
function closeMobileMenu() {
    if(header.classList.contains('menu') === true)
        openMenu();
}
mainElement.addEventListener('mousedown', closeMobileMenu)

header.addEventListener('mousedown', function(e) {
    e.stopPropagation();
})

