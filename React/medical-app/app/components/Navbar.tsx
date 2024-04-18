import React from "react";
import {AnimatePresence, motion, useScroll, useTransform} from "framer-motion";
import {FaBriefcaseMedical, FaMoon} from "react-icons/fa6";
import {useTheme} from "@/app/store/Theme";
import {CiSun} from "react-icons/ci";
import {useHomePageStates} from "@/app/store/HomePageStore";

const HomePageNavbar = (): React.JSX.Element => {


    const Options: { name: string, link: string }[] = [
        {name: "Home", link: "/"},
        {name: "Dashboard", link: "/dashboard"},
        {name: "Forums", link: "/forums"},
        {name: "About Us", link: "/about"},
        {name: "LogIn/SignUp", link: "/reg"}
    ]

    const {scrollYProgress} = useScroll();
    const width = useTransform(scrollYProgress, [0, 1], ["70%", "100%"])
    const right = useTransform(scrollYProgress, [0, 1], ["-3rem", "12.5rem"]);
    const {c_color, c_backgroundColor, set_background_color, set_color} = useTheme();
    const {setLoginOpen, isLoginOpen} = useHomePageStates();
    React.useEffect(() => {
        if (c_backgroundColor === "white") {
            document.body.style.backgroundColor = "white";
        } else document.body.style.backgroundColor = "black";
    }, [c_color, c_backgroundColor])


    const ref = React.useRef<HTMLDivElement>(null);
    return (
        <React.Fragment>
            <motion.nav
                style={{width, color: c_color}}
                className={`flex z-10 justify-between rounded-xl items-center px-[5rem] p-[2rem] fixed top-0 left-0`}>
                <motion.h1

                    animate={{opacity: 1}}
                    initial={{opacity: 0}}
                    transition={{duration: 2, delay: 1.2}}
                    className={`text-[1.5rem] relative font-bold flex justify-center items-center gap-[10px] `}>
                    <FaBriefcaseMedical size={20}/>
                    MedicMate

                    <motion.div
                        style={{right}}
                        className={`text-green-500 font-bold border-[0.25px] ${c_backgroundColor === "black" ? `border-white` : `border-black`} rounded-full absolute top-1/2 -translate-y-1/2 `}>|</motion.div>
                </motion.h1>

                <ul className={`flex gap-[1rem] items-center `}>
                    {Options.map((item: { name: string, link: string }, index: number) => {
                        if (item.name === "LogIn/SignUp")
                            return (
                                <motion.li
                                    animate={{y: 0}}
                                    initial={{y: -100}}
                                    onClick={() => {
                                        if (isLoginOpen) {
                                            setLoginOpen(false);
                                        } else {
                                            setLoginOpen(true);
                                        }
                                    }}
                                    transition={{
                                        ease: [0.85, 0, 0.15, 1],
                                        duration: 1.75,
                                        delay: 0.15 * index,
                                    }}
                                    className={`${c_backgroundColor === "white" ? `hover:bg-black hover:text-white` : `hover:bg-white hover:text-black`} rounded-full p-2 cursor-pointer ${isLoginOpen ? c_backgroundColor === "white" ? `bg-black text-white` : `bg-white text-black` : ``}`}
                                    key={index}>{item.name}</motion.li>
                            )
                        return <motion.li
                            key={index}
                            animate={{
                                y: 0
                            }}
                            initial={{y: -100}}
                            transition={{
                                ease: [0.85, 0, 0.15, 1],
                                duration: 1.75,
                                delay: 0.15 * index,
                            }}
                            className={`${c_backgroundColor === "white" ? `hover:bg-black hover:text-white` : `hover:bg-white hover:text-black`} p-2 rounded-full cursor-pointer ${window.location.pathname === item.link ? `${c_backgroundColor === "white" ? `bg-black` : `bg-white`} ${c_color === "white" ? "text-black" : "text-white"}` : ``}`}
                            onClick={() => window.location.assign(item.link)}
                        >{item.name}</motion.li>
                    })}

                    <AnimatePresence>
                        <motion.li
                            animate={{x: 0}}
                            initial={{x: "100vw"}}
                            transition={{duration: 1.75, ease: [0.85, 0, 0.15, 1]}}
                            className={`border-[0.5px] ${c_color !== "white" ? `border-black text-black bg-white ` : `border-white text-white bg-black`}  cursor-pointer  rounded-full p-2`}
                            onClick={(): void => {
                                if (c_backgroundColor === "black" && c_color === "white") {
                                    set_background_color("white");
                                    set_color("black");
                                } else {
                                    set_background_color("black");
                                    set_color("white");
                                }

                            }}>
                            {c_backgroundColor === "white" ?
                                <motion.div
                                    animate={{opacity: 1}}
                                    initial={{opacity: 0}}
                                    exit={{opacity: 1}}
                                    className={`flex justify-center items-center`}>
                                    <FaMoon size={25}/>
                                    Nigga Mode
                                </motion.div> :
                                <motion.div
                                    animate={{opacity: 1}}
                                    initial={{opacity: 0}}
                                    exit={{opacity: 1}}
                                    className={`flex gap-[0.5rem] justify-center items-center`}>
                                    <motion.span animate={{rotate: "360deg"}}
                                                 transition={{rotate: {repeat: Infinity, ease: "linear", duration: 5}}}>
                                        <CiSun size={25}/>
                                    </motion.span>
                                    Racist Mode
                                </motion.div>}
                        </motion.li>
                    </AnimatePresence>
                </ul>
            </motion.nav>

            <div
                ref={ref}
                className={`absolute h-1 aspect-square bg-white bottom-[370vh] rounded-full`}>

            </div>
        </React.Fragment>
    )
}


export default HomePageNavbar;