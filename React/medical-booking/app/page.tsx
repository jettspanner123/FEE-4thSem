"use client";
import React from "react";
import {
    FaBookMedical,
    FaCheck,
    FaEye,
    FaFacebook,
    FaHeart,
    FaInstagram,
    FaMoon,
    FaPlus,
    FaSun,
    FaTwitter
} from "react-icons/fa6";
import {useTheme} from "@/app/store/Theme";
import {motion, MotionValue, useScroll, useTransform} from "framer-motion";
import {useForm} from "react-hook-form";
import SectionTwoImageOne from "../src/section_2_img_1.jpg"
import SectionTwoImageTwo from "../src/section_2_img_2.jpg"
import SectionTwoImageThree from "../src/section_2_img_3.jpg"
import FrontPage from "../src/fornt_page.jpg"
import One from "../src/1.jpg"
import Two from "../src/2.jpg"
import Three from "../src/3.jpg"
import Four from "../src/4.jpg"
import Five from "../src/5.jpg"
import Six from "../src/6.jpg"
import Seven from "../src/7.jpg"
import Eight from "../src/8.jpg"
import Nine from "../src/9.jpg"
import Ten from "../src/10.jpg"
import Eleven from "../src/11.jpg"
import Twelve from "../src/12.jpg"
import Thirteen from "../src/13.jpg"
import Image from "next/image";


export default function Home(): React.JSX.Element {


    React.useEffect(() => {
        (
            async (): Promise<any> => {
                //@ts-ignore
                const locomotiveScroll = (await import("locomotive-scroll")).default;
                const LocomotiveScroll = new locomotiveScroll();
            }

        )()
    }, [])


    const PicOptions: { name: string, link: string }[] = [
        {name: "SignUp/LogIn", link: "/registration"},
        {name: "Community", link: "/community"},
        {name: "About Us", link: "/about"},
        {name: "Contact Us", link: "/contact"}
    ]

    const Options: { name: string, link: string }[] = [
        {name: "Home", link: "/"},
        {name: "Refresh", link: ""}
    ]

    const [pageChange, setPageChange] = React.useState(true);

    const {c_color, c_backgroundColor, set_color, set_background_color} = useTheme();
    React.useEffect(() => {
        window.document.documentElement.style.backgroundColor = `${c_backgroundColor}`
        window.document.documentElement.style.color = `${c_color}`
    }, [c_color, c_backgroundColor])
    const Sus: string = "Sustainable";
    const underlineRef = React.useRef<HTMLDivElement>(null);
    const {scrollYProgress} = useScroll({
        target: underlineRef,
        offset: ["start end", "start center"]
    })
    const underline_width: MotionValue<string> = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);
    // @ts-ignore
    return (
        <React.Fragment>
            <motion.main
                animate={{opacity: pageChange ? 1 : 0}}
                transition={{
                    duration: 1.25
                }}
                style={{
                    backgroundColor: c_backgroundColor === "black" ? "black" : "white",
                    color: c_color === "white" ? "white" : "black"
                }}
                className={`w-screen overflow-x-hidden`}>
                <section className={`h-screen p-4 flex w-screen`}>
                    <div className={`flex-1 p-4 flex flex-col`}>
                        <nav className={`flex justify-between items-center w-full`}>
                            <motion.h1
                                animate={{x: 0}}
                                initial={{x: -300}}
                                transition={{x: {ease: [0.85, 0, 0.15, 1], duration: 1.25}}}
                                className={`text-[1.75rem] flex justify-center items-center gap-[0.5rem] transition-none uppercase font-bold`}>
                                <span className={`text-green-400`}>
                                    <FaBookMedical size={25}/>
                                </span>
                                MedicMate
                            </motion.h1>
                            <ul className={`flex justify-between items-center gap-[0.5rem]`}>
                                {Options.map((item: { name: string, link: string }, index: number) => {

                                    if (item.name === "Refresh") return <motion.li
                                        animate={{y: 0}}
                                        initial={{y: -100}}
                                        transition={{ease: [0.85, 0, 0.15, 1], duration: 1.25, delay: 0.1 * index}}
                                        className={`p-2 ${c_backgroundColor === "black" ? `hover:bg-white hover:text-black` : `hover:bg-black hover:text-white`} rounded-full  border-[0.25px] ${c_backgroundColor === "black" ? `border-white` : `border-black`}  transition-none cursor-pointer `}
                                        onClick={() => window.location.reload()}
                                        key={index}>
                                        {item.name}
                                    </motion.li>
                                    return <motion.li
                                        animate={{y: 0}}
                                        initial={{y: -100}}
                                        transition={{ease: [0.85, 0, 0.15, 1], duration: 1.25, delay: 0.1 * index}}
                                        className={`p-2 ${c_backgroundColor === "black" ? `hover:bg-white hover:text-black` : `hover:bg-black hover:text-white`} rounded-full  border-[0.25px] ${c_backgroundColor === "black" ? `border-white` : `border-black`}  transition-none cursor-pointer `}
                                        key={index}
                                        onClick={() => {
                                            setPageChange(false);
                                            setTimeout(() => {
                                                window.location.assign(item.link)
                                            }, 2000);
                                        }}
                                    >{item.name}</motion.li>
                                })}
                            </ul>
                        </nav>


                        <div className={`w-full flex-1  flex flex-col justify-start pt-[8rem]`}>
                            <motion.h5
                                data-scroll
                                data-scroll-speed={"0.1"}
                                animate={{opacity: 1}}
                                initial={{opacity: 0}}
                                transition={{duration: 2.25, delay: 0.5}}
                                className={`font-semibold px-1 py-3`}>Sculpting the future with green revolution.
                            </motion.h5>
                            <motion.h1
                                data-scroll
                                data-scroll-speed={"0.05"}
                                animate={{opacity: 1}}
                                initial={{opacity: 0}}
                                transition={{duration: 2, delay: 1}}
                                className={`text-[5rem] leading-[4rem]`}>Leading the Way
                            </motion.h1>
                            <h1 className={`text-[5rem] flex `}>
                                <motion.span
                                    data-scroll
                                    data-scroll-speed={"0.05"}
                                    animate={{opacity: 1}}
                                    initial={{opacity: 0}}
                                    transition={{duration: 2, delay: 1.25}}
                                >
                                    in
                                </motion.span>
                                <span className={`text-green-300 ml-10 flex`}>
                                {Sus.split("").map((item: string, index: number) => {
                                    return <motion.div
                                        animate={{scale: 1}}
                                        initial={{scale: 0}}
                                        transition={{ease: [0.85, 0, 0.15, 1], duration: 0.75, delay: index * 0.05}}
                                        key={index}>{item}</motion.div>
                                })}
                            </span>
                            </h1>
                            <motion.h1
                                animate={{opacity: 1}}
                                initial={{opacity: 0}}
                                data-scroll
                                data-scroll-speed={"0.01"}
                                transition={{duration: 2, delay: 1.5}}
                                className={`text-[5rem] leading-[4rem]`}>HealthCare.
                            </motion.h1>
                            <div className={`w-full gap-[0.5rem] flex mt-10`}>
                                <motion.div
                                    animate={{scale: 1}}
                                    initial={{scale: 0}}
                                    transition={{duration: 0.5, type: "spring"}}
                                >
                                    <motion.div
                                        data-scroll
                                        data-scroll-speed={"0.15"}
                                        className={`border-[0.25px] ${c_backgroundColor === "black" ? `border-white bg-black/80 hover:bg-white hover:text-black` : `border-black bg-white/80 hover:bg-black hover:text-white`} p-4 rounded-full`}>Work
                                        With Us
                                    </motion.div>
                                </motion.div>

                                <motion.div
                                    animate={{scale: 1}}
                                    initial={{scale: 0}}
                                    transition={{duration: 0.5, type: "spring", delay: 0.15}}
                                >
                                    <motion.div
                                        data-scroll
                                        data-scroll-speed={"0.1"}
                                        className={`border-[0.25px] ${c_backgroundColor === "black" ? `border-white bg-black/80 hover:bg-white hover:text-black` : `border-black bg-white/80 hover:bg-black hover:text-white`} p-4 rounded-full`}>Work
                                        Forum
                                    </motion.div>
                                </motion.div>

                                <motion.div
                                    animate={{scale: 1}}
                                    initial={{scale: 0}}
                                    transition={{duration: 0.5, type: "spring", delay: 0.3}}
                                >
                                    <motion.div
                                        data-scroll
                                        data-scroll-speed={"0.05"}
                                        className={`border-[0.25px] ${c_backgroundColor === "black" ? `border-white bg-black/80 hover:bg-white hover:text-black` : `border-black bg-white/80 hover:bg-black hover:text-white`}  p-4 rounded-full`}>
                                        Store
                                    </motion.div>
                                </motion.div>


                            </div>

                            <div className={`flex w-full h-full mt-10`}>
                                <div className={`flex-1 flex gap-[0.5rem] justify-start items-end `}>
                                    <motion.div
                                        animate={{scale: 1}}
                                        initial={{scale: 0}}
                                        transition={{duration: 0.5, type: "spring"}}
                                    >
                                        <motion.div
                                            data-scroll
                                            data-scroll-speed={"0.15"}
                                            className={`${c_backgroundColor === "black" ? `bg-white ` : `bg-black `} ${c_backgroundColor !== "black" ? `text-green-300` : `text-green-700`} p-3 rounded-full`}>
                                            <FaFacebook size={25}/>
                                        </motion.div>
                                    </motion.div>

                                    <motion.div
                                        animate={{scale: 1}}
                                        initial={{scale: 0}}
                                        transition={{duration: 0.5, delay: 0.15, type: "spring"}}
                                    >
                                        <motion.div
                                            data-scroll
                                            data-scroll-speed={"0.1"}
                                            className={`${c_backgroundColor === "black" ? `bg-white ` : `bg-black `} ${c_backgroundColor !== "black" ? `text-green-300` : `text-green-700`} p-3 rounded-full`}>
                                            <FaInstagram size={25}/>
                                        </motion.div>
                                    </motion.div>

                                    <motion.div
                                        animate={{scale: 1}}
                                        initial={{scale: 0}}
                                        transition={{duration: 0.5, delay: 0.3, type: "spring"}}
                                    >
                                        <motion.div
                                            data-scroll
                                            data-scroll-speed={"0.05"}
                                            className={`${c_backgroundColor === "black" ? `bg-white ` : `bg-black `} p-3 rounded-full ${c_backgroundColor !== "black" ? `text-green-300` : `text-green-700`}`}>
                                            <FaTwitter size={25}/>
                                        </motion.div>
                                    </motion.div>
                                </div>
                                <div className={`flex-1 flex gap-[0.5rem] items-end`}>
                                    <motion.div
                                        data-scroll
                                        data-scroll-speed={"0.05"}
                                        animate={{height: "80%"}}
                                        initial={{height: "0%"}}
                                        transition={{duration: 0.5, type: "spring", delay: 0.75}}
                                        className={`flex-1 relative flex overflow-hidden justify-between items-center ${c_backgroundColor === "black" ? `bg-gradient-to-br from-green-300 to-white text-black` : `bg-black text-white`} rounded-2xl h-[80%]`}>
                                        <div>
                                            <h1 className={`p-3 uppercase -translate-y-1/3 font-semibold text-center`}>
                                                Current Appointments
                                            </h1>
                                            <button
                                                className={`absolute p-3 rounded-full ${c_backgroundColor === "black" ? `bg-black text-green-300` : `bg-white text-green-700`} right-3 bottom-3`}>
                                                <FaPlus size={30}/>
                                            </button>
                                        </div>
                                    </motion.div>


                                    <motion.div
                                        data-scroll
                                        data-scroll-speed={"0.15"}
                                        animate={{height: "80%"}}
                                        initial={{height: "0%"}}
                                        transition={{duration: 0.5, type: "spring", delay: 0.95}}

                                        className={`flex-1 relative flex overflow-hidden justify-between items-center ${c_backgroundColor === "black" ? `bg-gradient-to-tl from-green-300 to-white text-black` : `bg-black text-white`} rounded-2xl h-[80%]`}>
                                        <div>
                                            <h1 className={`p-3 uppercase -translate-y-1/3 font-semibold text-center`}>
                                                {/* eslint-disable-next-line react/no-unescaped-entities */}
                                                Doctor's Consultancy
                                            </h1>

                                            <button
                                                className={`absolute p-3 rounded-full ${c_backgroundColor === "black" ? `bg-black text-green-300` : `bg-white text-green-700`} right-3 bottom-3`}>
                                                <FaPlus size={30}/>
                                            </button>
                                        </div>
                                    </motion.div>

                                </div>
                            </div>
                        </div>
                    </div>
                    <motion.div
                        initial={{height: "0%", y: -300}}
                        animate={{height: "100%", y: 0}}
                        transition={{duration: 2, ease: [0.85, 0, 0.15, 1]}}
                        className={`flex-1 relative bg-green-300 overflow-hidden h-full rounded-[1.5rem] `}>
                        <nav className={`absolute top-0 right-0 p-1 m-4 z-[20]`}>
                            <ul className={`flex text-black  justify-end items-center gap-[0.5rem]`}>
                                <motion.li
                                    animate={{y: 0}}
                                    initial={{y: -100}}
                                    transition={{ease: [0.85, 0, 0.15, 1], duration: 1.25, delay: 0.25}}
                                    onClick={(): void => {
                                        if (c_backgroundColor === "black") {
                                            set_color("black");
                                            set_background_color("white");
                                        } else {
                                            set_color("white");
                                            set_background_color("black");
                                        }
                                    }}
                                    className={`bg-white p-2 rounded-full border-[0.25px] border-black`}>
                                    {c_backgroundColor === "black" ? <FaSun size={25}/> : <FaMoon size={25}/>}
                                </motion.li>
                                {PicOptions.map((item: { name: string, link: string }, index: number) => {
                                    return <motion.li
                                        animate={{y: 0}}
                                        initial={{y: -100}}

                                        transition={{
                                            ease: [0.85, 0, 0.15, 1],
                                            duration: 1.25,
                                            delay: 0.2 * index + 0.5
                                        }}
                                        onClick={() => {
                                            setPageChange(false);
                                            setTimeout(() => {
                                                window.location.assign(item.link);
                                            }, 2000)
                                        }}
                                        className={`bg-white p-2 rounded-full cursor-pointer border-[0.25px] border-black`}
                                        key={index}>{item.name}</motion.li>
                                })}
                            </ul>
                        </nav>
                        <Image src={FrontPage} className={`w-full rounded-[1.5rem] h-full`} alt={""} />
                        <div className={`bg-green-300/50 absolute h-full w-full left-0 top-0 z-10`}></div>
                    </motion.div>
                </section>


                <section className={` p-6 mt-[10rem] w-screen `}>
                    <UnderlineHeading text={"How does this work?"}/>

                    <div className={`p-2 mt-[3rem]`}>
                        <SlidingComponent offset={""} left={<div></div>} right={
                            <Image className={`w-full h-full`} src={SectionTwoImageOne} alt={""}/>
                        }/>
                        <ReverseSlidingComponent offset={""} left={<div></div>} right={
                            <Image className={`w-full h-full`} src={SectionTwoImageTwo} alt={""}/>
                        }/>
                        <SlidingComponent offset={""} left={<div></div>} right={
                            <Image className={`w-full h-full`} src={SectionTwoImageThree} alt={""}/>
                        }/>
                    </div>
                </section>

                <PhotoGallerySection/>

                <WorkWithUsSection/>

                <motion.h1
                    whileInView={{opacity: 1}}
                    initial={{
                        opacity: 0,
                    }}
                    transition={{
                        duration: 1.25,
                        type: "spring"
                    }}
                    className={`${c_backgroundColor === "black" ? `text-white` : `text-black`} -translate-y-[10rem] text-center text-[2rem] flex gap-[1rem] items-center justify-center `}>
                    Thank You for Visiting
                    <FaHeart size={35} className={`text-green-500`}/>
                </motion.h1>
            </motion.main>
        </React.Fragment>
    );
}

const WorkWithUsSection = () => {

    const keywords: string[] = [
        "Medical booking",
        "Healthcare appointments",
        "Doctor appointments",
        "Dentist appointments",
        "Specialist appointments",
        "Online scheduling",
        "Appointment management",
        "Health services booking",
        "Clinic appointments",
        "Hospital appointments",
        "Patient scheduling",
        "Telemedicine appointments",
        "Virtual consultations",
        "Healthcare access",
        "Online scheduling",
        "Appointment management",
        "Health services booking",
        "Clinic appointments",
        "Hospital appointments",
        "Patient scheduling",
        "Telemedicine appointments",
        "Virtual consultations",
        "Healthcare access",
        "Medical booking",
        "Healthcare appointments",
        "Doctor appointments",
        "Dentist appointments",
        "Specialist appointments",
        "Online scheduling",
        "Appointment management",
        "Health services booking",
        "Clinic appointments",
        "Hospital appointments",
        "Patient scheduling",
        "Telemedicine appointments",
        "Virtual consultations",
        "Healthcare access",
        "Online scheduling",
        "Appointment management",
        "Health services booking",
        "Clinic appointments",
        "Hospital appointments",
        "Patient scheduling",
        "Telemedicine appointments",
        "Virtual consultations",
        "Healthcare access",
    ]
    const {c_backgroundColor} = useTheme();
    const ref = React.useRef<HTMLDivElement>(null);
    const {scrollYProgress} = useScroll({
        target: ref,
        offset: ["start 150%", "end start"]
    })
    const x = useTransform(scrollYProgress, [0, 1], ["-50%", "0%"]);
    const y = useTransform(scrollYProgress, [0, 1], ["-15rem", "-17rem"]);

    function getRandomFloat(min: number, max: number): number {
        return Math.random() * (max - min) + min;
    }

    const {register, handleSubmit} = useForm();

    type FormType = {
        full_name?: string;
        degree_name?: string;
        resume?: string;
    }
    const [isSubmited, setSubmited] = React.useState(false);
    const HandleFormSubmit = (data: FormType) => {
        setSubmited(true);
        setTimeout(() => {
            setSubmited(false);
        }, 1500)
    }
    return <section className={`w-full `}>
        <motion.div
            ref={ref}
            style={{x, y}}
            className={`bg-green-300 ${c_backgroundColor === "black" ? `text-black` : `text-white`} flex w-[300vw]`}>
            <h1 className={`text-[8rem] font-bold uppercase w-[300vw]`}>Work With us</h1>
            <h1 className={`text-[8rem] font-bold uppercase w-[300vw]`}>work with us</h1>
            <h1 className={`text-[8rem] font-bold uppercase w-[300vw]`}>work with us</h1>
            <h1 className={`text-[8rem] font-bold uppercase w-[300vw]`}>work with us</h1>
        </motion.div>
        <div className={`p-6 h-screen -translate-y-[25%] gap-[2.5rem] flex w-full`}>
            <motion.div
                data-scroll
                data-scroll-speed={"0.5"}
                className={`flex-1 rounded-[2.5rem] h-full ${c_backgroundColor === "black" ? `bg-white text-black` : `bg-black text-white`} p-6 `}>
                {keywords.map((item: string, index: number) => {
                    return <motion.div
                        whileInView={{scale: 1}}
                        initial={{
                            scale: 0
                        }}
                        transition={{
                            duration: 0.25,
                            delay: getRandomFloat(0.05, 1)
                        }}
                        key={index}
                        className={`bg-green-500  inline-block text-white p-2 rounded-xl m-[0.25rem]`}>{item}</motion.div>
                })}
            </motion.div>

            <motion.div
                data-scroll
                data-scroll-speed={"0.25"}
                className={`flex-1 h-full flex flex-col justify-center items-center p-6 rounded-[2.5rem] ${c_backgroundColor === "black" ? `bg-white/10` : `bg-black/10`}`}>

                <h1 className={`text-[1.25rem] text-center p-3 uppercase inline-block`}>
                    Fill out the for to work with us!
                    <div className={`h-[5px] w-full rounded-full bg-green-500`}/>
                </h1>
                <form onSubmit={handleSubmit(HandleFormSubmit)} className={`h-full flex flex-col w-full pt-10`}>
                    <label className={`text-[1.25rem] `}>Full Name: </label>
                    <br/>
                    <input {...register("full_name")}
                           className={`w-full border-[0.25px] ${c_backgroundColor === "black" ? `border-white` : `border-black`} bg-transparent  p-2 text-[1rem]`}
                           placeholder={"Enter full name here."}/>
                    <label className={`text-[1.25rem] mt-10`}>Degree Name: </label>
                    <br/>
                    <input {...register("degree_name")}
                           className={`w-full border-[0.25px] ${c_backgroundColor === "black" ? `border-white` : `border-black`}  bg-transparent  p-2 text-[1rem]`}
                           placeholder={"Enter your degree here here."}/>
                    <label className={`text-[1.25rem] mt-10`}>Full Name: </label>
                    <br/>
                    <textarea
                        {...register("resume")}
                        placeholder={"Enter resume here."}
                        className={`w-full border-[0.25px] flex-1 ${c_backgroundColor === "black" ? `border-white` : `border-black`} bg-transparent  p-2 text-[1rem]`}
                    ></textarea>
                    <button
                        className={`w-full ${isSubmited ? `bg-green-300` : `bg-green-500`} p-3 text-white font-bold uppercase rounded-xl my-10`}>
                        {!isSubmited ? <span>Submit</span> :
                            <span className={`flex gap-[0.5rem] justify-center items-center`}>
                            Submited
                            <FaCheck size={25}/>
                        </span>}
                    </button>
                </form>
            </motion.div>
        </div>

    </section>
}


const PhotoGallerySection = () => {

    const ref = React.useRef<HTMLDivElement>(null);
    const {scrollYProgress} = useScroll({
        target: ref,
        offset: ["start end", "end end"]
    })

    const y = useTransform(scrollYProgress, [0, 1], ["70%", "-50%"]);
    const {c_backgroundColor} = useTheme();
    const first_slide = React.useRef<HTMLDivElement>(null);
    const first_slide_y = useTransform(scrollYProgress, [0, 1], ["-200%", "100%"]);
    const second_slide_y = useTransform(scrollYProgress, [0, 1], ["100%", "-200%"]);
    return <section className={`h-[200vh] w-screen z-[10]`}>
        <UnderlineHeading text={"Thousands of people are happy."}/>
        <div className={`h-full w-screen relative`}>
            <motion.section
                ref={ref}
                style={{y}}
                className={`h-full overflow-hidden flex w-screen ${c_backgroundColor === "black" ? `bg-black/80` : `bg-white/80`} justify-center gap-[1.5rem]`}>
                <motion.div
                    ref={first_slide}
                    style={{y: first_slide_y}}
                    className={`flex-1 flex flex-col gap-[2.5rem] h-[150%] `}>
                    <div
                        className={`${c_backgroundColor === "black" ? `bg-white` : `bg-black`} overflow-hidden rounded-[2rem] h-[30rem]`}>
                        <Image src={One} alt={""} className={`w-full object-cover h-full`}/>
                    </div>
                    <div
                        className={`overflow-hidden ${c_backgroundColor === "black" ? `bg-white` : `bg-black`} rounded-[2rem] h-[30rem]`}>
                        <Image src={Two} alt={""} className={`w-full object-cover h-full`}/>
                    </div>

                    <div
                        className={` overflow-hidden ${c_backgroundColor === "black" ? `bg-white` : `bg-black`} rounded-[2rem] h-[30rem]`}>
                        <Image src={Three} alt={""} className={`w-full object-cover h-full`}/>
                    </div>
                    <div
                        className={`overflow-hidden ${c_backgroundColor === "black" ? `bg-white` : `bg-black`} rounded-[2rem] h-[30rem]`}>
                        <Image src={Four} alt={""} className={`w-full object-cover h-full`}/>
                    </div>
                    <div
                        className={`overflow-hidden ${c_backgroundColor === "black" ? `bg-white` : `bg-black`} rounded-[2rem] h-[30rem]`}>
                        <Image src={Five} alt={""} className={`w-full object-cover h-full`}/>
                    </div>
                </motion.div>


                <motion.div
                    ref={first_slide}
                    style={{y: second_slide_y}}
                    className={`flex-1 flex flex-col gap-[2.5rem] h-[150%] `}>
                    <div
                        className={` overflow-hidden ${c_backgroundColor === "black" ? `bg-white` : `bg-black`} rounded-[2rem] h-[30rem]`}>
                        <Image src={Three} alt={""} className={`w-full object-cover h-full`}/>
                    </div>
                    <div
                        className={`overflow-hidden ${c_backgroundColor === "black" ? `bg-white` : `bg-black`} rounded-[2rem] h-[30rem]`}>
                        <Image src={Six} alt={""} className={`w-full object-cover h-full`}/>
                    </div>

                    <div
                        className={`overflow-hidden ${c_backgroundColor === "black" ? `bg-white` : `bg-black`} rounded-[2rem] h-[30rem]`}>
                        <Image src={Seven} alt={""} className={`w-full object-cover h-full`}/>
                    </div>
                    <div
                        className={`overflow-hidden ${c_backgroundColor === "black" ? `bg-white` : `bg-black`} rounded-[2rem] h-[30rem]`}>
                        <Image src={Five} alt={""} className={`w-full object-cover h-full`}/>
                    </div>


                    <div
                        className={`overflow-hidden ${c_backgroundColor === "black" ? `bg-white` : `bg-black`} rounded-[2rem] h-[30rem]`}>
                        <Image src={Eight} alt={""} className={`w-full object-cover h-full`}/>
                    </div>


                </motion.div>


                <motion.div
                    ref={first_slide}
                    style={{y: first_slide_y}}
                    className={`flex-1 flex flex-col gap-[2.5rem] h-[150%] `}>

                    <div
                        className={` overflow-hidden ${c_backgroundColor === "black" ? `bg-white` : `bg-black`} rounded-[2rem] h-[30rem]`}>
                        <Image src={Twelve} alt={""} className={`w-full object-cover h-full`}/>
                    </div>
                    <div
                        className={`overflow-hidden ${c_backgroundColor === "black" ? `bg-white` : `bg-black`} rounded-[2rem] h-[30rem]`}>
                        <Image src={Eleven} alt={""} className={`w-full object-cover h-full`}/>
                    </div>

                    <div
                        className={`overflow-hidden ${c_backgroundColor === "black" ? `bg-white` : `bg-black`} rounded-[2rem] h-[30rem]`}>
                        <Image src={Ten} alt={""} className={`w-full object-cover h-full`}/>
                    </div>
                    <div
                        className={`overflow-hidden ${c_backgroundColor === "black" ? `bg-white` : `bg-black`} rounded-[2rem] h-[30rem]`}>
                        <Image src={Nine} alt={""} className={`w-full object-cover h-full`}/>
                    </div>


                    <div
                        className={`overflow-hidden ${c_backgroundColor === "black" ? `bg-white` : `bg-black`} rounded-[2rem] h-[30rem]`}>
                        <Image src={Eight} alt={""} className={`w-full object-cover h-full`}/>
                    </div>

                </motion.div>


                <motion.div
                    ref={first_slide}
                    style={{y: second_slide_y}}
                    className={`flex-1 flex flex-col gap-[2.5rem] h-[150%] `}>

                    <div
                        className={`overflow-hidden ${c_backgroundColor === "black" ? `bg-white` : `bg-black`} rounded-[2rem] h-[30rem]`}>
                        <Image src={Thirteen} alt={""} className={`w-full object-cover h-full`}/>
                    </div>

                    <div
                        className={`overflow-hidden ${c_backgroundColor === "black" ? `bg-white` : `bg-black`} rounded-[2rem] h-[30rem]`}>
                        <Image src={One} alt={""} className={`w-full object-cover h-full`}/>
                    </div>

                    <div
                        className={`overflow-hidden ${c_backgroundColor === "black" ? `bg-white` : `bg-black`} rounded-[2rem] h-[30rem]`}>
                        <Image src={Nine} alt={""} className={`w-full object-cover h-full`}/>
                    </div>

                    <div
                        className={`overflow-hidden ${c_backgroundColor === "black" ? `bg-white` : `bg-black`} rounded-[2rem] h-[30rem]`}>
                        <Image src={Five} alt={""} className={`w-full object-cover h-full`}/>
                    </div>


                    <div
                        className={`overflow-hidden ${c_backgroundColor === "black" ? `bg-white` : `bg-black`} rounded-[2rem] h-[30rem]`}>
                        <Image src={Three} alt={""} className={`w-full object-cover h-full`}/>
                    </div>

                </motion.div>


            </motion.section>


        </div>
    </section>
}


export const UnderlineHeading = ({text}: { text: string }) => {
    const underlineRef = React.useRef<HTMLDivElement>(null);
    const {scrollYProgress} = useScroll({
        target: underlineRef,
        offset: ["start end", "start center"]
    })
    const underline_width = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);
    return <h1 className={`text-[3.5rem] p-6 inline-block `}>
        {text}
        <motion.div
            style={{width: underline_width}}
            ref={underlineRef}
            className={`h-[10px] origin-center rounded-full bg-green-300`}/>
    </h1>
}


const SlidingComponent = ({offset, left, right}: {
    offset: string,
    left: React.JSX.Element,
    right: React.JSX.Element
}): React.JSX.Element => {

    const {c_backgroundColor} = useTheme();
    const whiteBox = React.useRef<HTMLDivElement>(null);
    const {scrollYProgress} = useScroll({
        target: whiteBox,
        offset: ["start end", "end start"]
    })

    const x = useTransform(scrollYProgress, [0, 1], ["50%", "101%"]);
    const x_t = useTransform(scrollYProgress, [0, 1], ["50%", "-1%"]);
    return <div className={`h-[30rem] mb-[5rem] relative w-full  flex`}>
        <motion.div
            ref={whiteBox}
            style={{x, transform: `translate(-50%)`}}
            className={`absolute  ${c_backgroundColor === "black" ? `bg-white text-black` : `bg-black text-white`} w-[50%] h-full rounded-[5rem]`}>
            {left}
        </motion.div>
        <motion.div
            style={{x: x_t, transform: `translate(50)`, y: "2rem",}}
            className={`text-black shadow-lg shadow-black overflow-hidden relative w-[50%] h-full rounded-[5rem]`}>
            {right}
            <div className={`bg-green-300/50 w-full h-full z-[10] absolute top-0 left-0`}/>
        </motion.div>
    </div>
}


const ReverseSlidingComponent = ({offset, left, right}: {
    offset: string,
    left: React.JSX.Element,
    right: React.JSX.Element
}): React.JSX.Element => {

    const {c_backgroundColor} = useTheme();
    const whiteBox = React.useRef<HTMLDivElement>(null);
    const {scrollYProgress} = useScroll({
        target: whiteBox,
        offset: ["start end", "end start"]
    })

    const x = useTransform(scrollYProgress, [0, 1], ["50%", "101%"]);
    const x_t = useTransform(scrollYProgress, [0, 1], ["50%", "-1%"]);
    return <div className={`h-[30rem] mb-[5rem] relative w-full  flex`}>
        <motion.div
            ref={whiteBox}
            style={{x: x_t, transform: `translate(-50%)`}}
            className={`absolute  ${c_backgroundColor === "black" ? `bg-white text-black` : `bg-black text-white`} w-[50%] h-full rounded-[5rem]`}>
            {left}
        </motion.div>
        <motion.div
            style={{x, transform: `translate(50)`, y: "2rem"}}
            className={`text-black relative overflow-hidden shadow-lg shadow-black bg-green-300 w-[50%] h-full rounded-[5rem]`}>
            {right}
            <div className={`bg-green-300/50 w-full h-full z-[10] absolute top-0 left-0`}/>
        </motion.div>
    </div>
}