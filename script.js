window.addEventListener('load', function() {
    const signupButton = document.getElementById('sign-up-button')
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