function getLanguage() {
    const parts = window.location.pathname.split("/", 3);
    const fromPath = parts.length > 1 ? parts[1] : '';
    if (fromPath.match('[a-z][a-z]')) {
        console.log('detected lang from path', fromPath);
        return fromPath;
    } else {
        console.log('could not get lang from path', window.location.pathname);
        return 'pl';
    }
}

function hideLink(it) {
    if (!it.href.match('.*/search') && !it.href.match('.*/[a-z]+/blog')) {
        console.log('hideForeignNavigation hiding', it.href);
        it.style.display = 'none';
    }
}

function hideForeignNavigation() {
    const lang = getLanguage();
    const links = document.querySelectorAll('.header-nav-item > a:not([href^="/' + lang + '"])');
    const mobileLinks = document.querySelectorAll('.header-menu-nav-item > a:not([href^="/' + lang + '"])');

    links.forEach(hideLink);
    mobileLinks.forEach(hideLink);
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
