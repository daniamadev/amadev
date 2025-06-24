// Pode ser usado para adicionar interações se necessário
document.addEventListener('DOMContentLoaded', function() {
    // Exemplo: Adicionar classe ativa aos links de navegação
    const links = document.querySelectorAll('nav a');
    
    links.forEach(link => {
        link.addEventListener('click', function() {
            links.forEach(l => l.classList.remove('active'));
            this.classList.add('active');
        });
    });
});