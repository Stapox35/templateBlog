document.addEventListener('DOMContentLoaded', function () {
    const menuToggle = document.querySelector('.menu-toggle');
    const menu = document.querySelector('.menu');
    let rozwiniete = false;
    menuToggle.addEventListener('click', function () {
        menu.classList.toggle('active');
        if(!rozwiniete)
        {
            document.getElementById('sc').style.backgroundColor = "rgba(0, 0, 0, 0.9)";
            document.getElementsByTagName('html')[0].style.overflow = "hidden";
        }
        else
        {
            document.getElementById('sc').style.backgroundColor = "rgba(0, 0, 0, 0)";
            document.getElementsByTagName('html')[0].style.overflow = "visible";
        }
        rozwiniete = !rozwiniete;

    });
});