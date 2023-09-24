let menuOpen = false;

function toggleMenu() {
    const navItems = document.querySelector('.nav-items ul');
    const toggleBtn = document.getElementById('toggleBtn');

    menuOpen = !menuOpen;
    
    if (menuOpen) {
        navItems.classList.add('show');
        toggleBtn.classList.add('active');
    } else {
        navItems.classList.remove('show');
        toggleBtn.classList.remove('active');
    }
}


