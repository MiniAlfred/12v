function showPage(pageId) {
    document.querySelectorAll('.page').forEach(page => {
        page.style.display = 'none';
    });
    document.getElementById(pageId).style.display = 'flex';

    document.querySelectorAll('.navbar button').forEach(button => {
        button.classList.remove('active');
    });
    document.getElementById('btn' + pageId.charAt(0).toUpperCase() + pageId.slice(1)).classList.add('active');
}

// Set the initial active button
document.getElementById('btnPage1').classList.add('active');
