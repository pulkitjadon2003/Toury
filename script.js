gsap.from("#nav", {
  y: -40,
  opacity: 0,
  delay: 0.4,
})

gsap.from("#page1-div h1,#page1-div p,#page1-div button",{
    opacity:0,
    y:40,
    delay:.6

})


gsap.from("#page2>h1",{
    x:-40,
    opacity:0,
    duration:1,
    scrollTrigger:{
        trigger:"#page2>h1",
        scroller:"body",
        // markers:true,
        start:"top 55%",
        end:"top 20%"
    }
})


gsap.from("#page2-div",{
    x:100,
    opacity:0,
    scrollTrigger:{
        trigger:"#page2-div",
        scroller:"body",
        // markers:true,
        start:"top 60%",
        end:"top 20%",
    }
})

