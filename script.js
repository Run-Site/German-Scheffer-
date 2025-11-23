function guardarContacto() {
    const vCardData = `BEGIN:VCARD
VERSION:3.0
FN:German Scheffer Abogado 
ORG:Estudio Juridico;
TEL;TYPE=CELL:+5493544468050
EMAIL:ventas@jsmasfacil.com
URL:drgermanscheffer@gmail.com
NOTE:Áreas de actuación principal:
• Despidos y conflictos laborales
• Familia
• Divorcios
• Sucesiones
• Penal
END:VCARD`;

    const blob = new Blob([vCardData], { type: 'text/vcard' });
    const url = URL.createObjectURL(blob);
    
    const link = document.createElement('a');
    link.href = url;
    link.download = 'Contacto_German_Scheffer.vcf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
}

function toggleCollapse(id) {
    const element = document.getElementById(id);
    element.classList.toggle('show-content');
    
    if (element.classList.contains('show-content')) {
        element.style.opacity = '0';
        requestAnimationFrame(() => {
            element.style.opacity = '1';
        });
    }
}

function copyToClipboard(text) {
    navigator.clipboard.writeText(text)
        .then(() => alert('Copiado al portapapeles'))
        .catch(err => console.error('Error al copiar:', err));
}

document.addEventListener('DOMContentLoaded', () => {
    document.querySelectorAll('.btn').forEach(btn => {
        btn.addEventListener('mouseenter', () => {
            btn.style.transform = 'translateY(-3px)';
        });
        
        btn.addEventListener('mouseleave', () => {
            btn.style.transform = 'translateY(0)';
        });
    });

    // Añadir target="_blank" a todos los enlaces externos
    document.querySelectorAll('a[href^="http"]').forEach(link => {
        if (!link.href.includes(window.location.hostname)) {
            link.setAttribute('target', '_blank');
            link.setAttribute('rel', 'noopener noreferrer');
        }
    });
});