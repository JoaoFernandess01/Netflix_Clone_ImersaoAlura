// Função para alternar entre dark e light mode
function toggleTheme() {
    const html = document.documentElement; // usa html para maior especificidade
    const isLightMode = html.classList.contains('light-mode');

    if (isLightMode) {
        html.classList.remove('light-mode');
        localStorage.setItem('theme', 'dark');
    } else {
        html.classList.add('light-mode');
        localStorage.setItem('theme', 'light');
    }
}

// Carrega o tema salvo no localStorage
function loadTheme() {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'light') {
        document.documentElement.classList.add('light-mode');
    }
}

// Adiciona evento ao botão de alternância
document.addEventListener('DOMContentLoaded', () => {
    const toggleButton = document.getElementById('theme-toggle');
    if (toggleButton) {
        toggleButton.addEventListener('click', toggleTheme);
        console.log('Botão de tema encontrado e evento adicionado'); // debug
    } else {
        console.log('Botão de tema não encontrado'); // debug
    }
    loadTheme(); // Carrega o tema ao carregar a página

    // Se estivermos na página de seleção de perfis, habilita salvar o perfil ativo.
    const profileLinks = document.querySelectorAll('a.profile-link');
    profileLinks.forEach(link => {
        link.addEventListener('click', (event) => {
            const figure = link.closest('figure.profile');
            if (!figure) return;

            const img = figure.querySelector('img');
            const nameEl = figure.querySelector('figcaption');
            if (img && nameEl) {
                localStorage.setItem('activeProfileName', nameEl.textContent.trim());
                localStorage.setItem('activeProfileImage', img.src);
            }
        });
    });
});
