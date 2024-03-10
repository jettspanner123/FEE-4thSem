
const Imports = {
    OpeningTransitionDiv: document.querySelector(".opening_transition_div"),
    BackgroundImage: document.querySelector(".spinning_image"),
    CustomCursor: document.querySelector(".mouse_cursor"),
    NavbarMain: document.querySelector(".navbar_main"),
    ScrollToECommerce: document.getElementById("scroll_to_ecommerce"),
    DocumentButtons: document.getElementsByTagName("button"),
    FilterButtons: document.querySelectorAll(".filter_button"),
    MainECommerceSection: document.getElementById("main_ecommerce_section"),
    ECommerceMainCards: document.querySelectorAll(".ecommerce_card_main"),
    DetailsPage: document.getElementById("details_page"),
    ECommerceCardButtons: document.querySelectorAll(".ecommerce_card_button"),
    BackButton: document.getElementById("back_button"),
}

let Constants = {
    MousePosition: {x: 0, y: 0},
    IsMouseDown: false,
}

const Animations = {
    OpeningTransitionDivAnimation: () => {
        Imports.OpeningTransitionDiv.style.top = `-100vh`;
    },
    UpdateCursorPointerPosition: () => {
        Imports.CustomCursor.style.left = `${Constants.MousePosition.x - 48}px`;
        Imports.CustomCursor.style.top = `${Constants.MousePosition.y - 48}px`;
        if (Constants.IsMouseDown) {
            Imports.CustomCursor.style.backgroundColor = `#FFE3CA`;
            Imports.CustomCursor.style.color = `black`;
            Imports.CustomCursor.style.transform = `scale(4)`;
            Imports.CustomCursor.innerHTML = "";
        } else {
            Imports.CustomCursor.style.backgroundColor = `transparent`;
            Imports.CustomCursor.style.color = `#FFE3CA`;
            Imports.CustomCursor.style.transform = `scale(1)`;
            Imports.CustomCursor.innerHTML = "Scroll Down";
        }

        Imports.NavbarMain.addEventListener("mousemove", (e) => {
            Imports.CustomCursor.style.opacity = 0;
        })

        Imports.NavbarMain.addEventListener("mouseout", (e) => {
            Imports.CustomCursor.style.opacity = 1;
        })
    },
    GSAPAnimation: () => {
        gsap.to(".navbar_main", {
            scrollTrigger: {
                trigger: ".navbar_main",
                start: "start -26%",
                end: "end end",
                scrub: true,
            },
            width: "85vw",
            y: "-5.5rem",
            color: "black",
            backgroundColor: "rgba(0,0,0,0.15)",
            border: "0.5px solid black",
            boxShadow: "10px 10px black",
        })

        gsap.to(".inner_main_frame", {
            scrollTrigger: {
                trigger: ".inner_main_frame",
                start: "start 80%",
                end: "+=10",
                scrub: true,
            },
            opacity: 1
        })


        gsap.to(".main_frame", {
            scrollTrigger: {
                trigger: ".main_frame",
                start: "start center",
                end: "+=300",
                scrub: true
            },
            y: "-80vh",
        })

        gsap.to(".background_heading", {
            scrollTrigger: {
                trigger: ".background_heading",
                start: "start 34%",
                end: "end start",
                scrub: true,
            },
            y: "5rem",
        })

        gsap.to(".main_frame", {
            scrollTrigger: {
                trigger: ".main_frame",
                start: "start 80%",
                end: "+=100",
                scrub: true
            },
            width: "100vw",
            backgroundColor: "#C5FFF8",
        })

    },
    ScrollToECommerceAnimation: () => {
        for (let i = 0; i < window.innerHeight / 2 - 70; i++) {
            setTimeout(() => {
                window.scrollTo({
                    top: i,
                    behavior: "smooth",
                })
            }, i + 100)
        }
    },
    FilterButtonTapAnimation: () => {
        Imports.FilterButtons.forEach((item, index) => {

            item.addEventListener("mouseover", (e) => {
                Imports.CustomCursor.style.opacity = 0;
            })

            item.addEventListener("mouseout", (e) => {
                Imports.CustomCursor.style.opacity = 1;
            })

            item.addEventListener("click", (e) => {
                item.style.backgroundColor = `red`;
                item.style.color = `pink`;

                Imports.FilterButtons.forEach((item, index2) => {
                    if (index2 !== index) {
                        item.style.backgroundColor = `white`;
                        item.style.color = `black`;

                    }
                })
            })
        })
    },
    HandleMouseMoveECommerceCard: () => {
        Imports.MainECommerceSection.addEventListener("mouseover", (e) => {
            Imports.CustomCursor.style.opacity = '0';
        })
        Imports.MainECommerceSection.addEventListener("mouseover", (e) => {
            Imports.CustomCursor.style.opacity = "1";
        })
    }


}


const ReturnCardInterface = function (MainImagePath, Description, Type, DisplayName, HourlyRate) {
    return `<div class="ecommerce_card_main">
            <!--                    this is the image div-->
            <div class="ecommerce_card_image_div" style="overflow: hidden">
                <img style="object-fit: cover; width: 100%; height: 100%;" src="${MainImagePath}" alt=""/>
            </div>
            <p class="ecommerce_card_heading">${Description}</p>
            <p class="ecommerce_card_heading"><span style="font-weight: bolder;">Name: </span>${DisplayName}</p>
            <p class="ecommerce_card_heading"><span style="font-weight: bolder;">Ocupation:</span>${Type}</p>
            <button class="ecommerce_card_button">${HourlyRate} per hr</button>
        </div>`
}

const Functionality = {
    HandleECommerce: async () => {
        const jsonFile = await fetch("data.json");
        const jsonData = await jsonFile.json();
        const this_data = jsonData['ecommerce_list'];
        Object.values(this_data).map((item, index) => {
            Imports.MainECommerceSection.innerHTML += ReturnCardInterface(item['main_image'], item['main_desc'], item['job_type'], item['display_name'], item['details']['rate_per_hour'])
        })


        require(['fs'], (fs) => {
            console.log(fs.readFileSync("data.json").toString())
        })


        document.querySelectorAll(".ecommerce_card_button").forEach((item, index) => {
            item.addEventListener("click", (e) => {
                Imports.DetailsPage.style.top = `0vh`;
                Imports.CustomCursor.style.opacity = 0;
                setTimeout(() => {
                    Imports.DetailsPage.style.opacity = `1`;
                }, 300)
            })
        })
    }
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


window.onload = () => {
    UpdateMousePointerPosition();
    setTimeout(Animations.OpeningTransitionDivAnimation, 800);
    setTimeout(Animations.HandleMouseMoveECommerceCard, 100);
    setInterval(Animations.UpdateCursorPointerPosition, 1);
    Imports.ScrollToECommerce.onclick = Animations.ScrollToECommerceAnimation;
    Animations.GSAPAnimation();
    Animations.FilterButtonTapAnimation();
    Functionality.HandleECommerce();
    Imports.BackButton.onclick = () => {
        Imports.CustomCursor.style.opacity = 1;
        Imports.DetailsPage.style.opacity = 0;
        setTimeout(() => {
            Imports.DetailsPage.style.top = `-10vh`;
        }, 200)

        setTimeout(() => {
            Imports.DetailsPage.style.top = `-100vh`;
        }, 400)
    }

}