// Fungsi untuk toggle dark mode
function toggleDarkMode() {
    const body = document.body;
    const icon = document.getElementById('dark-mode-icon');
    
    // Toggle class dark-mode pada body
    body.classList.toggle('dark-mode');
    
    // Ubah ikon
    if (body.classList.contains('dark-mode')) {
        icon.className = 'fas fa-sun'; // Ikon matahari untuk kembali ke light mode
        localStorage.setItem('darkMode', 'enabled');
    } else {
        icon.className = 'fas fa-moon'; // Ikon bulan untuk dark mode
        localStorage.setItem('darkMode', 'disabled');
    }
}

// Load preferensi dari localStorage saat halaman dimuat
document.addEventListener('DOMContentLoaded', () => {
    const darkMode = localStorage.getItem('darkMode');
    const icon = document.getElementById('dark-mode-icon');
    
    if (darkMode === 'enabled') {
        document.body.classList.add('dark-mode');
        if (icon) icon.className = 'fas fa-sun'; // Pastikan ikon ada
    } else {
        if (icon) icon.className = 'fas fa-moon';
    }
    
    // Event listener untuk tombol toggle (hanya jika tombol ada di halaman)
    const toggleButton = document.getElementById('dark-mode-toggle');
    if (toggleButton) {
        toggleButton.addEventListener('click', toggleDarkMode);
    }
});