gsap.from("#page1 #circle",{
    scale:0,
    delay:1,
    duartion:2,
    rotate:720
})

gsap.from("#page2 #circle",{
    scale:0,
    delay:1,
    duartion:2,
    rotate:720,
    scrollTrigger:{
        trigger:"#page2 #circle ";
        scroller:"body",
        markers:true,
        scrub:true
    }
})