let Imports = {
    HeroSectionHeading: document.querySelector(".hero_section_heading"),
    MouseCursor: document.querySelector(".mouse_cursor"),
    HeroSectionHeadingHelper: document.querySelector(".hero_section_heading_helper"),
    ListItems: document.querySelectorAll(".list_item"),
    PhoneImage: document.querySelector(".phone_img"),
    ImageHelper: document.querySelector(".image_helper"),
    ServicesSection: document.querySelector(".services_section"),
    MainNavbar: document.querySelector(".main_navbar"),
    RedBox: document.querySelector(".red_box"),
    ServicesSectionScroll: document.querySelector(".services_section_scroll"),
    AboutUsDescription: document.querySelector(".about_us_desc"),
    ServicesSectionBlackBox: document.querySelector(".services_section_other_div"),
    FloatingNavbar: document.querySelector(".floating_navbar"),
    HeroSection: document.querySelector(".hero_section"),
    ECommerceCards: document.querySelectorAll(".ecommerce_card_main"),
    LoginPageBackdrop: document.querySelector(".user_reg_page_backdrop"),
    LoginPageNavbar: document.querySelector(".user_reg_page_nav"),
    LoginPageLogin: document.querySelector(".user_reg_page_login"),
    LoginPageSignup: document.querySelector(".user_reg_page_signup"),
    LoginPage: document.querySelector(".user_reg_page"),
    ECommerceCardButton: document.querySelectorAll(".ecommerce_card_button"),
    LoginPageExitButton: document.querySelector(".login_page_exit_button"),
    PageTransitionDiv: document.querySelector(".page_transition_div"),
    ServicesSectionSomeDiv: document.querySelector(".services_section_some_div_ecommerce"),
    LoginFormUsernameInput: document.getElementById("login_form_username_input"),
    LoginFormPasswordInput: document.getElementById("login_form_password_input"),
    LoginFormSubmitButton: document.getElementById("login_form_submit_button"),
}


let Constants = {
    MousePosition: {x: 0, y: 0},
    IsMouseDown: false,
    ScrollY: 0,
    RawScrollY: 0,
    IsLoginPageOpen: false,
}


const UpdateMousePointerPosition = () => {
    window.addEventListener("mousemove", (e) => {
        Constants.MousePosition = {x: e.clientX, y: e.clientY};
    })

    window.addEventListener("mousedown", () => {
        Constants.IsMouseDown = true
    })
    window.addEventListener("mouseup", () => {
        Constants.IsMouseDown = false
    });

}

const UpdateScrollY = () => {
    window.addEventListener("scroll", (e) => {
        Constants.ScrollY = window.scrollY / (2 * window.innerHeight);
        Constants.RawScrollY = window.scrollY;
    })
}


const HeroSectionMouseAnimation = () => {
    Imports.HeroSectionHeading.style.transform = `translate(calc(-50% + ${Constants.MousePosition.x / window.innerWidth * 70}px), calc(-50% + 3rem)`;
    Imports.PhoneImage.style.transform = `translate(calc(-50% - ${Constants.MousePosition.x / window.innerWidth * 70}px), calc(-50% + 3rem)`;
    Imports.ImageHelper.style.transform = `translate(calc(-50% - ${Constants.MousePosition.x / window.innerWidth * 70}px), calc(-50% + 3rem)`;


    Imports.HeroSection.style.background = `radial-gradient(circle at ${Constants.MousePosition.x}px ${Constants.MousePosition.y}px, #535C91 0%,  #1B1A55 20%, #070F2B 50%)`
}


const ServicesSectionAnimation = () => {
    const ServiceSectionScrollInterval = setInterval(() => {
        Imports.ServicesSectionScroll.style.transform = `translate(-${Constants.ScrollY * 100 * 2}vw)`
    }, 1)


    "At our core, we're more than just a website. We're the bridge connecting you with the heartbeat of your community. With a passion for local businesses and a commitment to convenience, we strive to make your life easier. Our platform isn't just about transactions; it's about relationships. We're here to empower small businesses, celebrate neighborhood gems, and simplify your search for trusted services. From plumbers to pet groomers, we've got you covered. Because when you support local, you're supporting a dream, a family, a legacy. Join us in building stronger communities, one service at a time. At our core, we're a community-driven platform dedicated to supporting local businesses, fostering connections, and simplifying life's everyday needs.".split("").forEach((item, index) => {
        Imports.AboutUsDescription.innerHTML += `<span class="mouse_hover_letters">${item}</span>`
    })

    let MouseHoverLetters = document.querySelectorAll(".mouse_hover_letters");


    Imports.AboutUsDescription.onmouseover = () => {
        Imports.MouseCursor.style.opacity = 0;
    }

    Imports.AboutUsDescription.onmouseout = () => {
        Imports.MouseCursor.style.opacity = 1;
    }
    MouseHoverLetters.forEach((item, index) => {
        item.onmouseover = () => {
            item.style.color = `#525CEB`;
            setTimeout(() => {
                item.style.color = `black`;
            }, 300)
        }
    })


}

const ServicesSectionBlackBoxScrollAnimation = () => {
    if (Constants.ScrollY <= 0.6) {
        Imports.ServicesSectionBlackBox.style.transform = `translate(-50%, 15rem) scale(${Constants.ScrollY * 1.23 + .3})`
    }
    Imports.ServicesSectionBlackBox.onmouseover = () => {
        Imports.MouseCursor.style.opacity = 0;
    }


    Imports.ServicesSectionBlackBox.onmouseout = () => {
        Imports.MouseCursor.style.opacity = 1;
    }


}


const ServicesSectionBlackBoxMouseAnimation = () => {
    const {left, top} = Imports.ServicesSectionBlackBox.getBoundingClientRect();
    Imports.ServicesSectionBlackBox.style.background = `radial-gradient(circle farthest-side at ${Constants.MousePosition.x - left}px ${Constants.MousePosition.y - top}px, #333A73 0%, black 80%)`
}


const MouseCursorAnimation = () => {


    Imports.MouseCursor.style.left = `${Constants.MousePosition.x - 48}px`;
    Imports.MouseCursor.style.top = `${Constants.MousePosition.y - 48}px`;


    Imports.ECommerceCards.forEach((item, index) => {
        item.addEventListener("mouseover", (e) => {
            Imports.MouseCursor.style.opacity = '0';
            item.style.transform = `scale(1.1)`
        })


        item.addEventListener("mouseout", (e) => {
            Imports.MouseCursor.style.opacity = '1';
            item.style.transform = `scale(1)`
        })
    })


    if (Constants.IsMouseDown) {
        Imports.MouseCursor.style.backgroundColor = `#FFE3CA`;
        Imports.MouseCursor.style.color = `black`;
        Imports.MouseCursor.style.transform = `scale(4)`;
        Imports.MouseCursor.innerHTML = "";

    } else {
        Imports.MouseCursor.style.backgroundColor = `transparent`;
        Imports.MouseCursor.style.color = `#FFE3CA`;
        Imports.MouseCursor.style.transform = `scale(1)`;
        Imports.MouseCursor.innerHTML = "Scroll Down";
    }
}


const GSAPAnimation = () => {


    gsap.to(".services_section", {
        scrollTrigger: {
            trigger: ".services_section",
            start: "top bottom",
            end: "+=800",
            scrub: true,
        },
        y: "-200vh",
    })

}


const FloatingNavbarAnimation = () => {

    document.querySelectorAll(".list_item").forEach((item) => {
        item.addEventListener("click", (e) => {
            setTimeout(() => {
                item.style.transition = `all 250ms ease-out`;
                item.style.opacity = "0";
            }, 300)
        })
    })
    if (Constants.RawScrollY > 115) Imports.FloatingNavbar.style.transform = `translate(-50%, 0)`;
    else Imports.FloatingNavbar.style.transform = `translate(-50%, -15vh)`;
    if (Constants.RawScrollY > 1075 && Constants.RawScrollY < 2050) {
        Imports.FloatingNavbar.style.background = `rgba(0, 0, 0, 0.55)`;
        Imports.FloatingNavbar.style.border = `0.5px solid white`;
        Imports.FloatingNavbar.style.backdropFilter = `blur(20px)`
        Imports.FloatingNavbar.style.color = `white`;
        Imports.FloatingNavbar.style.boxShadow = `10px 10px white`;
    } else {
        Imports.FloatingNavbar.style.background = `white`;
        Imports.FloatingNavbar.style.color = `black`;
        Imports.FloatingNavbar.style.boxShadow = `10px 10px black`;
        Imports.FloatingNavbar.style.border = `0.5px solid black`;
    }

    Imports.FloatingNavbar.onmouseover = () => {
        Imports.MouseCursor.style.opacity = 0;
    }


    Imports.FloatingNavbar.onmouseout = () => {
        Imports.MouseCursor.style.opacity = 1;
    }

    Imports.MainNavbar.onmouseover = () => {
        Imports.MouseCursor.style.opacity = 0;
    }


    Imports.MainNavbar.onmouseout = () => {
        Imports.MouseCursor.style.opacity = 1;
    }
}

const HandleLoginPageAnimation = () => {
    Imports.ECommerceCardButton.forEach((item, index) => {
        item.addEventListener("click", (e) => {

                Imports.LoginPage.style.pointerEvents = "auto";
                Imports.LoginPageNavbar.style.transform = `translate(0)`;
                Imports.LoginPageLogin.style.transform = `translate(0)`;
                setTimeout(() => {
                    Imports.MouseCursor.style.opacity = 0;
                }, 500)
            }
        )
    })

    Imports.LoginPageExitButton.onclick = () => {
        Imports.LoginPage.style.pointerEvents = "none";
        Imports.LoginPageNavbar.style.transform = `translate(-100%)`;
        Imports.LoginPageLogin.style.transform = `translate(-150%)`;
        setTimeout(() => {
            Imports.MouseCursor.style.opacity = 1;
        }, 500)
    }


}


const Functionality = {
    ScrollToY: (some_top) => {
        for (let i = 1; i <= some_top; i++) {
            setTimeout(() => {
                window.scrollTo({
                    top: i,
                    behavior: "smooth"
                })
            }, i + 40)
        }
    },
    TriggerPageTransition: () => {
        Imports.MainNavbar.style.opacity = 0;
        setTimeout(() => {
            Imports.PageTransitionDiv.style.top = 0
        }, 500)
    },
}

const HandleLogIn = () => {
    Imports.LoginFormSubmitButton.onclick = async (e) => {
        e.preventDefault();
        if (Imports.LoginFormUsernameInput.value.length === 0 && Imports.LoginFormPasswordInput.value.length === 0) {
            document.getElementById("login_error_prompt").style.display = "block";
            setTimeout(() => {
                document.getElementById("login_error_prompt").style.display = "none";
            }, 5000)
            return;
        }
        const user_login_date = {
            username: Imports.LoginFormUsernameInput.value,
            password: Imports.LoginFormPasswordInput.value,
        }

        const LoadJSONData = async () => {
            const res = await fetch("data.json");
            const jsonDATA = await res.json();
            return jsonDATA;
        }

        const res = await LoadJSONData();
        for (let i = 0; i < res['user_list'].length; i++) {
            if (user_login_date.username === res['user_list'][i]['username'] && user_login_date.password === res['user_list'][i]['password']) {
                document.getElementById("login_error_prompt").innerText = "Username & Password Found!";
                document.getElementById("login_error_prompt").style.color = "blue";
                document.getElementById("login_error_prompt").style.display = "block";
                setTimeout(() => {
                    Functionality.TriggerPageTransition();
                }, 400)
                setTimeout(() => {
                    window.open("Dashboard.html");
                }, 3000)
            }
            document.getElementById("login_error_prompt").style.display = "block";
            setTimeout(() => {
                document.getElementById("login_error_prompt").style.display = "none";
            }, 5000)
        }
    }
}

    window.onload = () => {
        console.log("hello world");
        UpdateMousePointerPosition();
        UpdateScrollY();
        setInterval(HeroSectionMouseAnimation, 1);
        setInterval(MouseCursorAnimation, 1);
        setInterval(ServicesSectionBlackBoxScrollAnimation, 1);
        setInterval(ServicesSectionBlackBoxMouseAnimation, 1);
        setInterval(FloatingNavbarAnimation, 1);
        ServicesSectionAnimation();
        GSAPAnimation();
        HandleLoginPageAnimation();
        HandleLogIn();
    }

