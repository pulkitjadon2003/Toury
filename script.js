function init(){
    gsap.registerPlugin(ScrollTrigger);

// Using Locomotive Scroll from Locomotive https://github.com/locomotivemtl/locomotive-scroll

const locoScroll = new LocomotiveScroll({
  el: document.querySelector("#main"),
  smooth: true
});
// each time Locomotive Scroll updates, tell ScrollTrigger to update too (sync positioning)
locoScroll.on("scroll", ScrollTrigger.update);

// tell ScrollTrigger to use these proxy methods for the "#main" element since Locomotive Scroll is hijacking things
ScrollTrigger.scrollerProxy("#main", {
  scrollTop(value) {
    return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
  }, // we don't have to define a scrollLeft because we're only scrolling vertically.
  getBoundingClientRect() {
    return {top: 0, left: 0, width: window.innerWidth, height: window.innerHeight};
  },
  // LocomotiveScroll handles things completely differently on mobile devices - it doesn't even transform the container at all! So to get the correct behavior and avoid jitters, we should pin things with position: fixed on mobile. We sense it by checking to see if there's a transform applied to the container (the LocomotiveScroll-controlled element).
  pinType: document.querySelector("#main").style.transform ? "transform" : "fixed"
});



// each time the window updates, we should refresh ScrollTrigger and then update LocomotiveScroll. 
ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

// after everything is set up, refresh() ScrollTrigger and update LocomotiveScroll because padding may have been added for pinning, etc.
ScrollTrigger.refresh();




}

init()


gsap.from("#nav", {
  y: -40,
  opacity: 0,
  delay: 0.4,
})

gsap.to("#nav",{
    backgroundColor:"black",
    scrollTrigger:{
        trigger:"#nav",
        scroller:"#main",
        // markers:true,
        start:"top -100%",
        end:"top 120%",
        scrub:.1,
    }
})

gsap.from("#page1-div",{
    opacity:0,
    duration:1
})


gsap.from("#page1-div h1,#page1-div p,#page1-div button",{
    opacity:0,
    y:40,
    delay:.5,
    stagger:.3,
    duration:.3
})


gsap.from("#page2>h1",{
    x:-40,
    opacity:0,
    duration:1,
    delay:.1,
    duration:1,
    scrollTrigger:{
        trigger:"#page2>h1",
        scroller:"#main",
        // markers:true,
        start:"top 55%",
        end:"top 20%",
        scrub:1
    }
})


gsap.from("#page2-div",{
    x:100,
    opacity:0,
    delay:.1,

    scrollTrigger:{
        trigger:"#page2-div",
        scroller:"#main",
        //markers:true,
        start:"top 70%",
        end:"top 20%",
        scrub:1

    }
})

gsap.from("#page3 h1",{
    opacity:0,
    y:100,
    duration:1,
    scrollTrigger:{
        trigger:"#page3 h1",
        scroller:"#main",
        // markers:true,
        start:"top 70%"
    }
})
gsap.from("#page3 .card",{
    opacity:0,
    y:50,
    stagger:.2,
    scrollTrigger:{
        trigger:"#page3 .card",
        scroller:"#main",
        // markers:true,
        start:"top 70%"
    }
})
