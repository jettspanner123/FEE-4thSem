"use client";
import React from "react";
import {useTheme} from "@/app/store/Theme";
import {motion} from "framer-motion";
import {FaMoon, FaSun} from "react-icons/fa6";
import {UnderlineHeading} from "@/app/page";


const CommunityStories = () => {

    React.useEffect(() => {
        (
            async () => {
                const locomotiveScroll = (await import("locomotive-scroll")).default;
                const LocomotiveScroll = new locomotiveScroll();
            }
        )()
    }, [])
    const {c_backgroundColor, c_color, set_background_color, set_color} = useTheme();
    const [pageChange, setPageChange] = React.useState(false);
    const NavbarOptions: { name: string, link: string }[] = [
        {name: "Home", link: "/"},
        {name: "Dashboard", link: "/dashboard"},
        {name: "Contact Us", link: "/contact"},
        {name: "Store", link: "/store"},
        {name: "About Us", link: "/about"}
    ]

    return <React.Fragment>
        {pageChange && <div className={`w-screen absolute min-h-screen bg-black`}></div>}
        <motion.main
            animate={{
                opacity: pageChange ? 0 : 1
            }}
            transition={{
                duration: 1.25
            }}
            className={`p-6 ${c_backgroundColor === "black" ? `bg-black text-white` : `bg-white text-black`} w-screen `}>
            <section>
                <motion.h1
                    animate={{y: 0}}
                    initial={{y: -200}}
                    transition={{
                        duration: 1.26,
                        ease: [0.85, 0, 0.15, 1],
                    }}
                    className={`text-[2.5rem] flex justify-between items-center p-1`}>
                    Community
                    <div>
                        <ul className={`text-[1rem] flex gap-[0.5rem]`}>
                            {NavbarOptions.map((item: { name: string, link: string }, index: number) => {
                                return <motion.li
                                    animate={{y: 0}}
                                    initial={{y: -200}}
                                    transition={{duration: 1.25, ease: [0.85, 0, 0.15, 1], delay: 0.1 * index}}
                                    onClick={() => {
                                        setPageChange(true);
                                        setTimeout(() => {
                                            window.location.assign(item.link)
                                        }, 1000)
                                    }}
                                    key={index}
                                    className={`border-[0.25px] ${c_backgroundColor === "black" ? `border-white hover:bg-white hover:text-black` : `border-black hover:text-white hover:bg-black`} p-2 rounded-full`}>{item.name}</motion.li>
                            })}

                            <motion.li
                                animate={{x: 0}}
                                initial={{x: 500}}
                                transition={{duration: 1.25, delay: 0.1 * 3, ease: [0.85, 0, 0.15, 1]}}
                                onClick={(): void => {
                                    if (c_backgroundColor === "black") {
                                        set_color("black");
                                        set_background_color("white");
                                    } else {
                                        set_color("white");
                                        set_background_color("black");
                                    }
                                }}
                                className={`border-[0.25px] ${c_backgroundColor === "black" ? `border-white hover:bg-white hover:text-black` : `border-black hover:bg-black hover:text-white`} flex justify-center items-center p-2 rounded-full`}
                            >
                                {c_backgroundColor === "black" ? <FaSun size={25}/> : <FaMoon size={25}/>}
                            </motion.li>
                        </ul>
                    </div>
                </motion.h1>
                <motion.h1
                    animate={{x: 0}}
                    initial={{x: -700}}
                    transition={{
                        duration: 1.25,
                        ease: [0.85, 0, 0.15, 1],
                        delay: 0.9
                    }}
                    className={`text-[9rem] leading-[8rem] uppercase font-bold inline-block`}>
                    Stories
                    <motion.div
                        animate={{y: 0, opacity: 1}}
                        initial={{y: 50, opacity: 0}}
                        transition={{
                            duration: 1.25,
                            ease: [0.85, 0, 0.15, 1],
                            delay: 1.8
                        }}
                        className={`bg-green-300 h-[10px] w-full rounded-full`}/>

                </motion.h1>
            </section>

            <div className={`w-full flex justify-center items-end pt-10 h-[70vh] gap-[0.5rem]`}>
                <motion.div
                    data-scroll
                    data-scroll-speed={"0.1"}
                    animate={{
                        height: "60%"
                    }}
                    initial={{
                        height: "0%"
                    }}
                    transition={{
                        duration: 1.25,
                        delay: 0.25,
                        ease: [0.85, 0, 0.15, 1]
                    }}
                    className={`bg-green-200 flex-1 h-[60%] rounded-t-[1.5rem]`}>

                </motion.div>
                <motion.div
                    data-scroll
                    data-scroll-speed={"0.2"}
                    animate={{
                        height: "70%"
                    }}
                    initial={{
                        height: "0%"
                    }}
                    transition={{
                        duration: 1.25,
                        delay: 0.25,
                        ease: [0.85, 0, 0.15, 1]
                    }}
                    className={`bg-green-300 flex-1 h-[70%] rounded-t-[1.5rem]`}>

                </motion.div>
                <motion.div
                    data-scroll
                    data-scroll-speed={"0.3"}
                    animate={{
                        height: "80%"
                    }}
                    initial={{
                        height: "0%"
                    }}
                    transition={{
                        duration: 1.25,
                        delay: 0.40,
                        ease: [0.85, 0, 0.15, 1]
                    }}
                    className={`bg-green-400 flex-1 h-[80%] rounded-t-[1.5rem]`}>

                </motion.div>
                <motion.div
                    data-scroll
                    data-scroll-speed={"0.4"}
                    animate={{
                        height: "90%"
                    }}
                    initial={{
                        height: "0%"
                    }}
                    transition={{
                        duration: 1.25,
                        delay: 0.55,
                        ease: [0.85, 0, 0.15, 1]
                    }}
                    className={`bg-green-500 flex-1 h-[90%] rounded-t-[1.5rem]`}>

                </motion.div>
            </div>

            <section className={`w-full `}>
                <UnderlineHeading text={"Outgoing Communities"}/>
                <BlogPost inner_text={"Hello world"} name={"Uddeshya Singh"}
                          tags={["Cancer", "Something", "Something_three"]} type={["Own Medical Story"]} index={0}/>
            </section>
        </motion.main>
    </React.Fragment>
}


interface BlogPostInterface {
    inner_text: string,
    name: string,
    tags: string[],
    type: string[],
    index: number
}

const BlogPost = ({inner_text, name, tags, type, index}: BlogPostInterface) => {
    const {c_backgroundColor, c_color} = useTheme();
    return <motion.div
        className={` my-20 ${c_backgroundColor === "black" ? `bg-[#212121] text-black` : `bg-black text-white`} p-6 w-full mx-2 min-h-[95vh] rounded-[2rem] flex flex-col`}>
        <div className={`flex justify-between items-center text-[1.25rem]`}>
            <div className={`text-white flex gap-[1rem] items-center`}>
                <div
                    className={`bg-green-400 text-white h-[5rem] flex uppercase justify-center items-center font-bold aspect-square rounded-[1rem]`}>
                    {name.split("")[0]}
                </div>
                <h1 className={`text-[3.5rem] inline-block`}>
                    {name}'s Story
                </h1>
            </div>

            <div>
                <ul className={`flex gap-[0.5rem]`}>
                    {tags.map((item: string, index: number) => {
                        return <li key={index}
                                   className={`border-[0.25px] ${c_backgroundColor === "black" ? `border-white text-white` : `border-black text-black`} p-2 rounded-full`}>
                            {item}
                        </li>
                    })}
                </ul>
            </div>
        </div>

        <div
            className={`w-full flex-1 my-10 ${c_backgroundColor === "black" ? `text-white` : `text-white`} w-full text-justify text-[1.5rem] h-[25rem]`}>
            {inner_text}
        </div>
        <button className={`bg-green-400 p-4 rounded-2xl w-full uppercase font-bold`}>
            View Full Blog
        </button>
    </motion.div>
}

const FirstBlogPost = ({inner_text, name, tags, type, index}: BlogPostInterface) => {
    const {c_backgroundColor, c_color} = useTheme();
    return <motion.div
        data-scroll
        data-scroll-speed={"0.5"}
        className={`${c_backgroundColor === "black" ? `bg-[#212121] text-black` : `bg-black text-white`} p-6 w-full mx-2 min-h-[95vh] rounded-[2rem]`}>
        <div className={`flex justify-between items-center text-[1.25rem]`}>
            <div className={`text-white flex gap-[1rem] items-center`}>
                <div
                    className={`bg-green-400 text-white h-[5rem] flex uppercase justify-center items-center font-bold aspect-square rounded-[1rem]`}>
                    {name.split("")[0]}
                </div>
                <h1 className={`text-[3.5rem] inline-block`}>
                    {name}'s Story
                </h1>
            </div>

            <div>
                <ul className={`flex gap-[0.5rem]`}>
                    {tags.map((item: string, index: number) => {
                        return <li key={index}
                                   className={`border-[0.25px] ${c_backgroundColor === "black" ? `border-white text-white` : `border-black text-black`} p-2 rounded-full`}>
                            {item}
                        </li>
                    })}
                </ul>
            </div>
        </div>

        <div
            className={`w-full my-10 ${c_backgroundColor === "black" ? `text-white` : `text-white`} w-full text-justify text-[1.5rem] h-[25rem]`}>
            {inner_text}
        </div>
    </motion.div>
}

export default CommunityStories;