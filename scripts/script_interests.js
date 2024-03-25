var mobileNav = document.getElementById('mobile_nav')

function toggleMenu() {
    mobileNav.classList.toggle('hidden')
}

// Apply animation to the section text when you scroll down to it
window.addEventListener('scroll', function () {
    let scrollTop = document.documentElement.scrollTop

    let hiddenList = this.document.querySelectorAll('.hidden2')

    // For loop to allow each individual element to fade in and out
    for (let i = 0; i < hiddenList.length; i++) {

        let hidden = hiddenList[i]

        // Code which allows it to fade in and out
        if (scrollTop > hidden.offsetTop - 800) {
            hidden.classList.remove('fadeOut')
            hidden.classList.add('fadeIn')
        }
        else {
            hidden.classList.remove('fadeIn')
            hidden.classList.add('fadeOut')
        }
    }
})