const Imports = {
    MainFrame: document.querySelector(".main_frame"),
    MainFrameHeading: document.getElementById("main_frame_heading"),
    CharSet: document.querySelectorAll(".char"),
}

let Constants = {}


const Functionality = {}


const Animation = {
    MainFrameHeadingAnimation: () => {
        gsap.to(".main_frame", {
            backgroundColor: "#7469B6",
        })
        gsap.to(Imports.CharSet, {
            y: "-25px",
            stagger: 0.2,
        })
        gsap.to(Imports.CharSet, {
            textShadow: "10px 10px black",
            stagger: 0.2
        })
        gsap.to("#main_holder_div", {
            opacity: 1,
            delay: 3,
        })

        gsap.to("#main_holder_div", {
            scrollTrigger: {
                trigger: "#main_holder_div",
                start: "start 10%",
                end: "+=300",
                scrub: true,
            },
            y: "2rem",
            x: "-22rem",
            width: "calc(50vw - 3rem)",
            height: "90vh",
            borderRadius: "5%",
            boxShadow: "10px 10px black",
        })


        const timeline = gsap.timeline({
            scrollTrigger: {
                trigger: "#about_us",
                start: "50% 50%",
                end: "+=200",
                scrub: true,
            }
        })

        timeline.to("#main_holder_div", {
            x: "calc(150vw)",
            width: "20rem",
            height: "20rem",
            borderRadius: "50%",
        })


    }
}

window.onload = () => {
    Animation.MainFrameHeadingAnimation();
}