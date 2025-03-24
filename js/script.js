const navbarMenu = document.querySelector ('.navbar-menu');
// command untuk mengaktifkan tombol menu 
document.querySelector ('#menu').onclick = () => {
  navbarMenu.classList.toggle ('active');
}

// command untuk menonaktifkan tombol menu di luar area sidebar

const menu = document.querySelector ('#menu');
document.addEventListener('click', function(e) {
  if(!menu.contains(e.target) && !navbarMenu.contains(e.target)) {
    navbarMenu.classList.remove('active');
  }
})