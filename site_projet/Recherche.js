/* premier script
--> il cherche tout meme dans le code = nul 


 document.getElementById('search-button').addEventListener('click', function () {
    const searchTerm = document.getElementById('search-input').value.toLowerCase(); // Terme recherché
    const content = document.querySelector('main'); // Contenu de la page

    // Réinitialiser les surlignements précédents
    content.innerHTML = content.innerHTML.replace(/<mark>(.*?)<\/mark>/g, '$1');

    if (searchTerm) {
        const regex = new RegExp(`(${searchTerm})`, 'gi'); // Création de l'expression régulière
        content.innerHTML = content.innerHTML.replace(regex, '<mark>$1</mark>'); // Ajouter les balises <mark>
    }
});
*/

document.getElementById('search-button').addEventListener('click', function () {
    const searchTerm = document.getElementById('search-input').value.trim().toLowerCase(); // Terme recherché
    const content = document.querySelector('main'); // Contenu à rechercher

    // Réinitialiser les surlignements précédents
    const resetHighlight = () => {
        const marks = content.querySelectorAll('mark');
        marks.forEach((mark) => {
            const parent = mark.parentNode;
            parent.replaceChild(document.createTextNode(mark.textContent), mark);
            parent.normalize(); // Fusionne les nœuds de texte adjacents
        });
    };

    resetHighlight(); // Réinitialiser les surlignements

    if (searchTerm) {
        // Fonction pour surligner les termes recherchés
        const highlight = (node) => {
            const text = node.textContent.toLowerCase();
            const matchIndex = text.indexOf(searchTerm);

            if (matchIndex !== -1) {
                const span = document.createElement('mark');
                span.textContent = node.textContent.substr(matchIndex, searchTerm.length);

                const before = document.createTextNode(node.textContent.substring(0, matchIndex));
                const after = document.createTextNode(node.textContent.substring(matchIndex + searchTerm.length));

                const parent = node.parentNode;
                parent.replaceChild(after, node);
                parent.insertBefore(span, after);
                parent.insertBefore(before, span);
            }
        };

        // Parcourir uniquement les nœuds de texte visibles
        const walk = (node) => {
            if (node.nodeType === 3) { // Nœud de texte
                highlight(node);
            } else if (node.nodeType === 1 && node.childNodes && !['SCRIPT', 'STYLE'].includes(node.tagName)) {
                node.childNodes.forEach(walk);
            }
        };

        walk(content);
    }
});

