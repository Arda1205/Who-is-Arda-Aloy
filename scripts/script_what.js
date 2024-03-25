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

function show() {
    document.getElementById('option')
        .style.display = "block";

    document.getElementById('option2')
        .style.display = "none";
    document.getElementById('option3')
        .style.display = "none";
    document.getElementById('option4')
        .style.display = "none";
    document.getElementById('option5')
        .style.display = "none";
    document.getElementById('option6')
        .style.display = "none";
}

function show2() {
    document.getElementById('option2')
        .style.display = "block";

    document.getElementById('option')
        .style.display = "none";
    document.getElementById('option3')
        .style.display = "none";
    document.getElementById('option4')
        .style.display = "none";
    document.getElementById('option5')
        .style.display = "none";
    document.getElementById('option6')
        .style.display = "none";
}

function show3() {
    document.getElementById('option3')
        .style.display = "block";

    document.getElementById('option')
        .style.display = "none";
    document.getElementById('option2')
        .style.display = "none";
    document.getElementById('option4')
        .style.display = "none";
    document.getElementById('option5')
        .style.display = "none";
    document.getElementById('option6')
        .style.display = "none";
}

function show4() {
    document.getElementById('option4')
        .style.display = "block";

    document.getElementById('option')
        .style.display = "none";
    document.getElementById('option2')
        .style.display = "none";
    document.getElementById('option3')
        .style.display = "none";
    document.getElementById('option5')
        .style.display = "none";
    document.getElementById('option6')
        .style.display = "none";
}

function show5() {
    document.getElementById('option5')
        .style.display = "block";
    
    document.getElementById('option')
        .style.display = "none";
    document.getElementById('option2')
        .style.display = "none";
    document.getElementById('option3')
        .style.display = "none";
    document.getElementById('option4')
        .style.display = "none";
    document.getElementById('option6')
        .style.display = "none";
}

function show6() {
    document.getElementById('option6')
        .style.display = "block";

    document.getElementById('option')
        .style.display = "none";
    document.getElementById('option2')
        .style.display = "none";
    document.getElementById('option3')
        .style.display = "none";
    document.getElementById('option4')
        .style.display = "none";
    document.getElementById('option5')
        .style.display = "none";
}