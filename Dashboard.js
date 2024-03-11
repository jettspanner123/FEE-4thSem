
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
    DetailsPageInnerDiv: document.getElementById("details_page_inner_div"),
}

let Constants = {
    MousePosition: {x: 0, y: 0},
    IsMouseDown: false,
    CardId: 0,
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
            backgroundColor: "#C5FFF8",
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
            <button id="${Constants.CardId++}" class="ecommerce_card_button">${HourlyRate} per hr</button>
        </div>`
}

const BookMarkPage = (some_id) => {
     
}


const ReturnDetailPageInterface = function (FullName, Address, PhoneNo, hr_rate, email, image_src, main_desc) {
    return `<div id="yes" style="flex: 1; border-radius: 1rem; height: 100%; padding: 1.2rem;text-transform: uppercase; display: flex; flex-direction: column; justify-content: space-between;">
            <h1 style="font-size: 1.8rem; background: #525CEB; color: white; padding: 1rem; border-radius: .75rem;" >Personal Detials: </h1> 
            <div style="padding: 1rem;">
            <h1 style="margin-top: 2rem">Full Name: <span style="font-weight: 100">${FullName}</span></h1>
            <h1>Address: <span style="font-weight: 100">${Address}</span></h1>
            <h1>Phone Nm: <span style="font-weight: 100">${PhoneNo}</span></h1>
            <h1>HR Rate: <span style="font-weight: 100">${hr_rate}</span>r/h</h1>
            <h1>Email: <span style="font-weight: 100">${email}</span></h1>
            </div> 
            <textarea rows="5" style="width: 100%; padding: 1rem; font-size: 1rem; border-radius: 1rem; margin-top: .5rem;" placeholder="Any Special Requests."></textarea>
            <button style="width: 100%; border: none ;background: #525CEB; color: white; font-weight: bolder; text-transform: uppercase; padding: .75rem; outline: none; border-radius: .5rem; font-size: 1.5rem; margin-top: .25rem;">Submit Request</button>
        </div>
        <div style="flex: 1;display: flex; flex-direction: column; justify-content: space-between; background-color: #f2d7c0; border-radius: 1rem;padding: 1rem; height: 100%;">
            <img  src="${image_src}" alt="" style="width: 100%; height: 50%; border-radius: 1rem; object-fit: cover"/>
            <p style="font-weight: lighter; margin-top: 1rem; font-size: 2rem; text-align: justify">${main_desc}</p>
            <button id="" style="width: 100%; background: #f48e1a; color: white; font-weight: bolder; border: .5px solid black; text-transform: uppercase;font-size: 1.5rem; padding: .75rem; margin-top: 4.75rem; ;outline: none; border-radius: .5rem;">Bookmark This Page</button>
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



        document.querySelectorAll(".ecommerce_card_button").forEach((item, index) => {
            item.addEventListener("click", (e) => {
                Imports.DetailsPage.style.top = `0vh`;
                Imports.CustomCursor.style.opacity = 0;
                Object.values(this_data).map((item2 ,index) => {
                    if(index == item.id) Imports.DetailsPageInnerDiv.innerHTML += ReturnDetailPageInterface(item2['details']['full_name'], item2['details']['address'], item2['details']['phone_number'],item2['details']['rate_per_hour'], item2['details']['email_id'], item2['main_image'], item2['main_desc']);
                })
                setTimeout(() => {
                    Imports.DetailsPage.style.opacity = `1`;
                }, 300)
            })
        })

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


}