"use client";
import React from "react";
import {create} from "zustand";
import {motion} from "framer-motion";
import {useTheme} from "@/app/store/Theme";
import {FaBookMedical, FaCheck, FaMoon, FaSun} from "react-icons/fa6";
import {TiArrowBack} from "react-icons/ti";
import {MdDelete} from "react-icons/md";
import AppointmentData from "../store/appointments.json";


const Dashboard = () => {

    React.useEffect(() => {
        (
            async () => {
                //@ts-ignore
                const locomotiveScroll = (await import("locomotive-scroll")).default;
                const LocomotiveScroll = new locomotiveScroll();
            }
        )()
    }, [])

    const {c_backgroundColor, c_color, set_background_color, set_color} = useTheme();
    const [current_user_name, set_current_user_name] = React.useState<string | null>("");
    React.useEffect(() => {
        set_current_user_name(localStorage.getItem("user_name"));
    }, [])
    const {pageChange, set_page_change} = useDashboardState();
    const NavbarOptions: { name: string, link: string }[] = [
        {name: "Home", link: "/"},
        {name: "Community", link: "/community"},
        {name: "Work With Us", link: "/work"},
    ];
    return <React.Fragment>
        <DashboardNavbar/>
        {pageChange && <div className={`absolute top-0 left-0 bg-black h-screen w-screen`}></div>}
        <motion.main
            animate={{opacity: pageChange ? 0 : 1}}
            transition={{opacity: {duration: 1.75}}}
            className={`${c_backgroundColor === "black" ? `bg-black text-white` : `bg-white text-black`} p-6 w-screen min-h-[300vh]`}>
            <div className={`flex items-center gap-[2rem]`}>
                <motion.h1
                    animate={{y: 0}}
                    initial={{y: -600}}
                    transition={{duration: 1, delay: 0.25, ease: [0.85, 0, 0.15, 1]}}
                    className={`text-[2rem] flex items-center gap-[0.5rem] leading-[0.5rem]`}>
                <span className={`text-green-300`}>
                <FaBookMedical size={25}/>
                </span>
                    MedicMate
                </motion.h1>

            </div>
            <div className={`flex justify-between items-center`}>
                <motion.h1
                    animate={{y: 0}}
                    initial={{y: -600}}
                    transition={{duration: 1, delay: 0.8, ease: [0.85, 0, 0.15, 1]}}
                    className={`text-[4rem] inline-block uppercase`}>
                    {current_user_name}
                    <motion.div
                        animate={{width: "100%"}}
                        initial={{width: "0%"}}
                        transition={{
                            duration: 1.25, delay: 1.25, ease: [0.85, 0, 0.15, 1]
                        }}
                        className={`bg-green-300 h-[10px] w-full rounded-full`}/>
                </motion.h1>

                <div>
                    <ul className={`flex gap-[0.5rem]`}>
                        {NavbarOptions.map((item: { name: string, link: string }, index: number) => {
                            return <motion.li
                                animate={{x: 0}}
                                initial={{x: 600}}
                                transition={{duration: 1.25, delay: 0.1 * index, ease: [0.85, 0, 0.15, 1]}}
                                className={`border-[0.25px] cursor-pointer ${c_backgroundColor === "black" ? `border-white hover:bg-white hover:text-black` : `border-black hover:bg-black hover:text-white`} p-4 rounded-full`}
                                key={index}
                                onClick={() => {
                                    set_page_change(true);
                                    setTimeout(() => {
                                        window.location.assign(item.link);
                                    }, 1000)
                                }}
                            >{item.name}</motion.li>
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
                            className={`border-[0.25px] ${c_backgroundColor === "black" ? `border-white hover:bg-white hover:text-black` : `border-black hover:bg-black hover:text-white`} flex justify-center items-center p-4 rounded-full`}
                        >
                            {c_backgroundColor === "black" ? <FaSun size={25}/> : <FaMoon size={25}/>}
                        </motion.li>
                        <motion.li
                            animate={{x: 0}}
                            initial={{x: 500}}
                            transition={{duration: 1.25, delay: 0.1 * 4, ease: [0.85, 0, 0.15, 1]}}
                            onClick={() => {
                                set_page_change(true);
                                setTimeout(() => {
                                    window.location.assign("/registration")
                                }, 1000)
                            }}
                            className={`p-4 rounded-full border-[0.25px] ${c_backgroundColor === "black" ? `border-white hover:bg-white hover:text-black` : `border-black hover:bg-black hover:text-white`} flex justify-center items-center`}>
                            <TiArrowBack size={25}/>
                        </motion.li>
                    </ul>
                </div>
            </div>

            <motion.div
                animate={{x: 0}}
                initial={{x: 700}}
                transition={{duration: 1.25, delay: 1.75, ease: [0.85, 0, 0.15, 1]}}
            >
                <motion.h1
                    data-scroll
                    data-scroll-speed={"0.2"}
                    className={`text-[3.5rem] mt-10 text-right`}>
                    User's Dashboard
                </motion.h1>
            </motion.div>

            <div className={`w-full  grid grid-flow-dense grid-rows-12 gap-[0.5rem] grid-cols-12`}>
                <motion.div
                    data-scroll
                    animate={{opacity: 1}}
                    initial={{opacity: 0}}
                    transition={{duration: 1.25, delay: 2.75}}
                    data-scroll-speed={"0.15"}
                    className={`col-span-8 bg-green-300 p-8 rounded-[1rem]`}>
                    <h1 className={`text-black font-bold text-[3rem] uppercase inline-block`}>
                        Upcoming Appointments
                        <div className={`bg-black w-full h-[10px] rounded-full`}/>
                    </h1>

                    {AppointmentData.length === 0 ? <div className={`text-center p-2 text-black pt-[4rem] text-[1.25rem] `}>
                        No Current Appointments.
                    </div> : <Appointments text={AppointmentData[0].name} />}
                </motion.div>

                <motion.div
                    data-scroll
                    data-scroll-speed={"0.3"}
                    className={`col-span-4 ${c_backgroundColor === "black" ? `bg-white text-black` : `bg-black text-white`} p-4 rounded-[1rem]`}>

                </motion.div>
            </div>

        </motion.main>
    </React.Fragment>
}

const Appointments = ({text}: { text: string }) => {
    const { c_backgroundColor } = useTheme();
    return <div
        className={`p-4 flex justify-between ${c_backgroundColor === "black" ? `bg-black text-white` : `text-black bg-white`} items-center gap-[1.5rem] rounded-xl mt-5`}>
        <span>{text}</span>
        <div className={`flex gap-[0.5rem]`}>
            <motion.button
                whileHover={{scale: 1.1}}
                className={`bg-green-400 p-3 text-white rounded-xl`}><FaCheck/></motion.button>
            <motion.button
                whileHover={{scale: 1.1}}
                className={`bg-red-400 p-3 text-white rounded-xl`}><MdDelete/></motion.button>
        </div>
    </div>
}

const DashboardNavbar = () => {


    const {c_backgroundColor, c_color} = useTheme();
    return <nav>

    </nav>
}

const useDashboardState = create((set): { pageChange: boolean, set_page_change: (something: boolean) => any } => ({
    pageChange: false,
    set_page_change: (something: boolean) => set({pageChange: something})
}))

export default Dashboard;