"use client";
import React from "react";
import HomePageNavbar from "@/app/components/Navbar";
import {useTheme} from "@/app/store/Theme";
import {useHomePageStates} from "@/app/store/HomePageStore";
import {motion} from "framer-motion";
import {FaGithub, FaGoogle} from "react-icons/fa6";


export default function Home() {


    React.useEffect(() => {
        (
            async (): Promise<any> => {
                //@ts-ignore
                const locomotiveScroll = (await import("locomotive-scroll")).default;
                const LocomotiveScroll = new locomotiveScroll();
            }

        )()
    }, [])

    const EASING: number[] = [0.85, 0, 0.15, 1]
    const {c_color, c_backgroundColor} = useTheme();
    const {isLoginOpen} = useHomePageStates();
    const [MousePosition, setMousePosition] = React.useState({x: 0, y: 0});

    React.useEffect(() => {
        console.log(isLoginOpen);
    }, [isLoginOpen])

    React.useEffect(() => {
        window.addEventListener("mousemove", (e) => {
            setMousePosition({x: e.clientX, y: e.clientY});
        })

        return () => window.removeEventListener("mousemove", () => {
        })
    })

    const [method, setMethod] = React.useState("login");
    return (
        <React.Fragment>
            <HomePageNavbar/>
            <main className={`w-screen relative h-[400vh]`}>


                <motion.div
                    animate={{bottom: isLoginOpen ? "0vh" : "-60vh"}}
                    initial={false}
                    transition={{
                        ease: [0.85, 0, 0.15, 1],
                        duration: 1,
                    }}

                    className={`${c_backgroundColor === "black" ? `bg-white` : `border-[0.5px] text-black bg-gray-100 border-gray-400`} w-[95vw] p-[2rem] left-1/2  -translate-x-1/2 shadow-xl ${c_backgroundColor === "white" ? "shadow-black" : "shadow-white"} rounded-t-[3rem] fixed h-[55vh]`}>
                    <div className={`flex gap-[0.5rem]`}>
                        <h1
                            onClick={() => setMethod("login")}
                            className={`text-[1.5rem] font-bold p-3 rounded-xl uppercase ${method === "login" ? `bg-black text-white` : `bg-white text-black underline`}`}>Login</h1>
                        <h1
                            onClick={() => setMethod("signin")}
                            className={`text-[1.5rem] font-bold p-3 rounded-xl ${method === "signin" ? `bg-black text-white` : `bg-white text-black underline`}`}>Signup</h1>
                    </div>
                    {method === "login" ?
                        <div className={`w-full h-full  mt-10 text-black`}>
                            <form>
                                <input placeholder={`Enter username: `}
                                       className={`w-full text-[1.25rem] border-[0.25px] border-black p-2 rounded-xl`}/>
                                <input placeholder={`Enter password: `}
                                       type={"password"}
                                       className={`w-full my-2 text-[1.25rem] border-[0.25px] border-black p-2 rounded-xl`}/>
                                <button type={"submit"}
                                        className={`w-full bg-black p-2 rounded-xl text-white  text-[1.25rem]`}>Submit
                                </button>
                                <button type={"submit"}
                                        className={`w-full flex justify-center items-center my-2 bg-white border-[0.25px] hover:bg-black hover:text-white border-black p-2 rounded-xl text-[1.25rem]`}>
                                    <FaGoogle size={25}/>
                                </button>

                                <button type={"submit"}
                                        className={`w-full flex justify-center items-center hover:bg-white hover:text-black text-white bg-black p-2 border-[0.25px] border-black rounded-xl text-[1.25rem]`}>
                                    <FaGithub size={25}/>
                                </button>
                            </form>
                        </div> :
                        <div></div>
                    }

                </motion.div>

            </main>
        </React.Fragment>
    );
}
