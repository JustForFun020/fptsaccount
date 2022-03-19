let navFirst = document.querySelector(".nav__first");
let navBar = document.querySelector(".nav__bar");
let navLink = document.querySelectorAll('.nav__first li');
let iconClose = document.querySelector('.icon-close')

navBar.onclick = () => {
  for (var i = 0; i < navLink.length; i++) {
    navLink[i].classList.add('show')
    navLink[i].classList.add('col-sm-12')
  }
  navBar.classList.add('hide')
};

iconClose.onclick = () => {
    for (var i = 0; i < navLink.length; i++) {
        navLink[i].classList.remove('show')
        navLink[i].classList.remove('col-sm-12')
      }
      navBar.classList.remove('hide')
}
