document.getElementById('menu-btn').addEventListener('click', function() {
    this.classList.toggle('open');
    document.getElementById('menu').classList.toggle('hidden');
    document.getElementById('menu').classList.toggle('flex');
});
