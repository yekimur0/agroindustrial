document.body.addEventListener('click', (e) => {
  let target = e.target;
  if(target.classList.contains('header-a-mobile-products-head')) openProductsMenuMobile();
  if(target.classList.contains('header-a-mobile-products-nav-item')) openProductsSubMenuMobile(target);
})


function openProductsMenuMobile() {
  document.querySelector('.header-a-mobile-products-nav').classList.toggle('active');
}

function openProductsSubMenuMobile (target) {
  const menu = target.querySelector('.mobile-submenu');

 
  if (menu) {
    menu.classList.toggle('active'); 
    target.classList.toggle('parent-active')
  }
}

$(document).ready(function() {
  $('#city').niceSelect();
});

$(document).ready(function() {
  $('#city-mobile').niceSelect();
});