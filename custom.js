document.addEventListener('mousemove', function(e) {
    const follower = document.getElementById('mouse-follower');
    if (follower) {
        follower.style.left = e.pageX + 'px';
        follower.style.top = e.pageY + 'px';
    }
});

// Regex to match the word "Violeta" and "Oliver"
const regexNames = /\b(Violeta|Oliver)\b/gi;

// Regex to match "VoCÊ EsTÁ LOooUCO?"
const regexShake = /\b(VoCÊ EsTÁ LOooUCO?)\b/gi;

// Function to highlight matches
function highlightText(node) {
    if (node.nodeType === 3) { // Text node
        let content = node.nodeValue;
        const parentNode = node.parentNode;

        if (regexNames.test(content) || regexShake.test(content)) {
            const span = document.createElement('span');
            span.innerHTML = content
                .replace(regexNames, '<span class="highlight-names">$&</span>')
                .replace(regexShake, '<span class="eff-shake">$&</span>');

            parentNode.replaceChild(span, node);
        }
    } else if (node.nodeType === 1 && node.childNodes && !/(script|style)/i.test(node.tagName)) { 
        for (let i = 0; i < node.childNodes.length; i++) {
            highlightText(node.childNodes[i]);
        }
    }
}

// Start highlighting from the body
highlightText(document.body);





