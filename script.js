window.addEventListener('load', function() {
    const signupButton = document.getElementById('sign-up-button-scroller')
    signupButton.addEventListener('click', function(e) {
        let hashval = signupButton.getAttribute('href')
        console.log(hashval)
        let target = document.querySelector(hashval)
        target.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        })
        history.pushState(null, null, hashval)
        e.preventDefault()
    })

})


window.addEventListener('load', function() {
    const sendFormButton = document.getElementById('mc-embedded-subscribe')
    console.log(sendFormButton)
})


//<form action="https://cafe-robot.us18.list-manage.com/subscribe/post?u=343737dedbadf272d034f2cc4&amp;id=52ec62aeee" method="post" id="mc-embedded-subscribe-form" name="mc-embedded-subscribe-form" class="validate" target="" novalidate>