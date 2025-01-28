// zoom +/-
function changeFontSize(action) {
    const root = document.documentElement;
    let currentSize = parseFloat(getComputedStyle(root).fontSize);
    if (action === 'increase') {
        root.style.fontSize = `${currentSize + 2}px`;
    } else if (action === 'decrease') {
        root.style.fontSize = `${currentSize - 2}px`;
    }
}

/* Navigation entre les pages (Précédente et Suivante)
<SCRIPT LANGUAGE="JavaScript">
function goHist(a) { history.go(a); }
</SCRIPT>
<FORM METHOD="post">
<INPUT TYPE="button" VALUE="Précédent" onClick="goHist(-1)">
<INPUT TYPE="button" VALUE="Suivant" onClick="goHist(1)">
</FORM>
ça fonctionne pas*/

