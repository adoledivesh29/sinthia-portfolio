const scroll = new LocomotiveScroll({
    el: document.querySelector('#main'),
    smooth: true
});

function moveCircle() {
    window.addEventListener('mousemove', (e) => {
        gsap.to('#minicircle', {
            x: e.clientX - 5,
            y: e.clientY - 5,
            duration: 0.1,
            ease: 'power2.inOut'
        });
    });
}

function circleSkewHandler() {
    gsap.to('#minicircle', {
        rotate: 360,
        duration: 10,
        ease: Linear.easeNone
    })
}

function firstPageAnim() {
    var tl = gsap.timeline();
    tl.from('#nav', {
        y: '-10',
        opacity: 0,
        duration: 1,
        ease: Expo.easeInOut
    })

    tl.to('.boundingelem', {
        y: '0',
        duration: 1,
        ease: Expo.easeInOut,
        stagger: 0.2,
        delay: -1
    })

    tl.from('#hero-footer', {
        y: -10,
        opacity: 0,
        duration: 1.5,
        ease: Expo.easeInOut,
        stagger: 0.1,
        delay: -1
    })
}


firstPageAnim()
moveCircle();