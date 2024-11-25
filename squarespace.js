function getLanguage() {
    const parts = window.location.pathname.split("/", 3);
    const fromPath = parts.length > 1 ? parts[1] : 'pl';
    //return localStorage.getItem('language') || 'pl';
    return fromPath;
}

function hideForeignNavigation() {
    const lang = getLanguage();
    const links = document.querySelectorAll('.header-nav-item > a:not([href^="/' + lang + '"])');
    links.forEach(function (it) {
        if (!it.href.match('.*/search') && !it.href.match('.*/[a-z]+/blog')) {
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

hideForeignNavigation();

document.addEventListener('readystatechange', function () {
    hideForeignNavigation();
    translateComments();
})
