function getLanguage() {
    return localStorage.getItem('language') || 'pl';
}

function hideForeignNavigation() {
    const lang = getLanguage();
    const links = document.querySelectorAll('.header-nav-item > a:not([href^="/' + lang + '"])');
    links.forEach(function (it) {
        if (!it.href.match('.*/search')) {
            console.log('hideForeignNavigation hiding', it.href);
            it.style.display = 'none';
        }
    });
}

function translateComments() {
    const commentsAll = document.querySelectorAll("#comments");
    commentsAll.forEach(function (comments) {
        const cm = comments.querySelector("h3 span");
        cm.innerText = cm.innerText.replaceAll("Comments", "Komentarze");
        comments.querySelector(".comment-btn").innerText = "Skomentuj";
        comments.querySelector(".preview-comment").innerText = "Podgląd";
    });
}


document.addEventListener('readystatechange', function () {
    hideForeignNavigation();
    translateComments();
})
