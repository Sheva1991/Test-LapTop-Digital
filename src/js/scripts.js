(function () {
    setTimeout(function () {
        showPosters();
    }, 1000)

    window.addEventListener('scroll', function (e) {
        showPosters();
    });

    function showPosters() {
        let animates = document.querySelectorAll('.animate:not(.animated)');
        animates.forEach(function (animate) {
            let rect = animate.getBoundingClientRect();
            if (rect.y < (pageYOffset + window.innerHeight)) {
                let animation = animate.getAttribute('data-class')
                animate.classList.add("animated")
                animate.classList.add(animation)
            }
        })
    }
})()