gsap.registerPlugin(ScrollTrigger);

var tl = gsap.timeline({
    scrollTrigger: {
        trigger: ".reviews",
        start: "top 40%",
        end: "bottom top",
        scrub: 1,
    }
});

tl.fromTo(".rl", {y: '350%'}, {y: '-150%'}, 0);
tl.fromTo(".rr", {y: '300%'}, {y: '-50%'}, 0);

gsap.fromTo(".rtitle", {x: '100%'}, {x: '-120%', scrollTrigger: {
    trigger: ".rtitle",
    start: "center center",
    end: "bottom center",
    endTrigger: ".reviews",
    pin: true,
    scrub: 1,
}},0);
