// โหลด Navbar
async function loadNavbar() {
    const res = await fetch('/layout/navbar.html');
    const html = await res.text();
    document.getElementById('navbar-container').innerHTML = html;

    setActiveMenu();
}

// Active menu อัตโนมัติ
function setActiveMenu() {
    const current = window.location.pathname.split('/').pop();

    document.querySelectorAll('.nav-item').forEach(link => {
        const path = link.getAttribute('data-path');

        if (path === current) {
            link.classList.add('active');
        }
    });
}

// เรียกใช้
document.addEventListener("DOMContentLoaded", loadNavbar);