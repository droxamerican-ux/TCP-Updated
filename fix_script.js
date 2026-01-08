(function() {
    const mobileMenuToggle = document.getElementById('mobileMenuToggle');
    const mobileSidePanel = document.getElementById('mobileSidePanel');
    const mobileOverlay = document.getElementById('mobileOverlay');

    function toggleMobileMenu() {
        if (mobileSidePanel) mobileSidePanel.classList.toggle('show');
        if (mobileOverlay) mobileOverlay.classList.toggle('show');
    }

    if (mobileMenuToggle) mobileMenuToggle.onclick = toggleMobileMenu;
    if (mobileOverlay) mobileOverlay.onclick = toggleMobileMenu;

    // Check login status
    if (!localStorage.getItem('isLoggedIn') && !window.location.href.includes('login.html')) {
        window.location.href = 'login.html';
    }
})();
