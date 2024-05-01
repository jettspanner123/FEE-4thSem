"use client";
import React from "react";
import {useTheme} from "../store/Theme"
import {AnimatePresence, motion} from "framer-motion";
import {FaArrowRight, FaBookMedical, FaEye, FaFacebook, FaGithub, FaGoogle, FaMoon, FaSun} from "react-icons/fa6";
import {SubmitHandler, useForm} from "react-hook-form";
import {useAuthUser} from "@/app/store/UserAuth";
import axios from "axios";

const RegistrationPage = (key: string) => {

    const {c_backgroundColor, c_color, set_background_color, set_color} = useTheme();
    const [MousePosition, setMousePosition] = React.useState({x: 0, y: 0})
    React.useEffect(() => {
        window.addEventListener("mousemove", (e) => {
            setMousePosition({x: e.clientX, y: e.clientY});
        })

        return () => window.removeEventListener("mousemove", () => {
        });
    }, [])

    const NavbarOptions: { name: string, link: string }[] = [
        {name: "Home", link: "/"},
        {name: "Community", link: "/community"},
        {name: "About Us", link: "/about"},
        {name: "Contact Us", link: "/contacts"}
    ]

    const [pageChange, setPageChange] = React.useState(false);
    const [isFirst, setFirst] = React.useState(true);
    const [isSecond, setSecond] = React.useState(true);
    const [isThird, setThird] = React.useState(true);
    const [isFourth, setFourth] = React.useState(true);


    type FormType = {
        username?: string;
        password?: string;
    }

    type FormSignUpType = {
        username?: string;
        password?: string;
        passworrd_r?: string;
    }

    const {register, handleSubmit} = useForm<FormType>();
    const [registrationMode, setRegistrationMode] = React.useState("login");
    const [loginProcess, setLoginProcess] = React.useState({success: false, error: false, isLoading: false});
    const [passwordMode, setPasswordMode] = React.useState(true);

    const SubmitFunction: SubmitHandler<FormType> = async (data) => {
        setLoginProcess({success: false, error: false, isLoading: true});
        const all_users = await axios.get("http://localhost:3000/get_users");
        const res = await all_users.data;
        res.forEach((item: { username: string | undefined; password: string | undefined; }) => {
            if (item.username === data.username && item.password === data.password) {
                setLoginProcess({success: true, error: false, isLoading: false})
                window.localStorage.setItem("user_name", item.username);
            }
        })

    }

    const SubmitFunctionSignUp: SubmitHandler<FormSignUpType> = async (data: FormSignUpType) => {
        console.log("buttonclicke");
    }
    React.useEffect(() => {
        if (loginProcess.success) {
            setPageChange(true);
            setTimeout(() => {
                window.location.assign("/dashboard")
            }, 1000)
        }
    }, [loginProcess.success])



    return <React.Fragment>
        {pageChange && <div className={`absolute top-0 left-0 bg-black h-screen w-screen`}></div>}
        <motion.main
            animate={{opacity: pageChange ? 0 : 1}}
            transition={{
                duration: 1.25
            }}
            className={`relative bg-black w-screen h-screen ${c_backgroundColor === "black" ? `bg-black` : `bg-white`}`}>
            <motion.div
                animate={{scale: 1}}
                initial={{scale: 0}}
                transition={{duration: 1.25}}
                style={{left: `${MousePosition.x / 10}px`, top: `${MousePosition.y / 10}px`}}
                className={`${c_backgroundColor === "black" ? `h-[25rem]` : `h-[30rem]`} bg-green-300 rounded-full aspect-square absolute z-[1]`}/>
            <motion.div
                animate={{backgroundColor: "rgba(255,255,255, 0.09)"}}
                initial={{backgroundColor: "rgba(255,255,255, 0)"}}
                className={`w-screen flex z-[3] h-screen absolute ${c_backgroundColor === "black" ? `blur_it` : `blur_it1`} left-0 top-0`}>
                <nav
                    className={`absolute flex w-full justify-between items-center ${c_color === "white" ? `text-white` : `text-black`} top-0 p-12`}>
                    <motion.h1
                        animate={{x: 0}}
                        initial={{x: -300}}
                        transition={{x: {ease: [0.85, 0, 0.15, 1], duration: 1.25, delay: 1.25}}}
                        className={`text-[1.75rem] flex justify-center items-center gap-[0.5rem] transition-none uppercase font-bold`}>
                            <span className={`text-green-400`}>
                                <FaBookMedical size={25}/>
                            </span>
                        MedicMate
                    </motion.h1>

                    <ul className={`flex gap-[0.5rem]`}>

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
                            className={` p-2 rounded-full border-[0.25px] ${c_backgroundColor === "black" ? `border-white` : `border-black`}`}>
                            {c_backgroundColor === "black" ? <FaSun size={25}/> : <FaMoon size={25}/>}
                        </motion.li>
                        {NavbarOptions.map((item: { name: string, link: string }, index: number) => {
                            return <motion.li
                                animate={{y: 0}}
                                initial={{y: -100}}
                                transition={{y: {duration: 1.25, delay: index * 0.15, ease: [0.85, 0, 0.15, 1]}}}
                                onClick={() => {
                                    setPageChange(true);
                                    setTimeout(() => {
                                        window.location.assign(item.link);
                                    }, 2000)
                                }}
                                key={index}
                                className={`p-2 border-[0.25px] ${c_backgroundColor === "black" ? `border-white` : `border-black`} rounded-full ${c_backgroundColor === "black" ? `hover:bg-white hover:text-black` : `hover:bg-black hover:text-white`} cursor-pointer`}>{item.name}</motion.li>
                        })}
                    </ul>
                </nav>
                <div
                    className={`flex-1 ${c_backgroundColor === "black" ? `text-white` : `text-gray-900`} h-full p-[3rem] pt-[10rem]`}>
                    <motion.h1
                        animate={{y: 0}}
                        initial={{y: -400}}
                        transition={{duration: 2, delay: 0.25, ease: [0.85, 0, 0.15, 1]}}
                        className={`font-bold text-[4rem] inline-block `}>
                        Healing, Connected
                    </motion.h1>
                    <motion.h1
                        animate={{y: 0}}
                        initial={{y: -400}}
                        transition={{duration: 2, delay: 0.5, ease: [0.85, 0, 0.15, 1]}}
                        className={`font-bold text-[4rem] inline-block `}>
                        Everywhere, Always
                    </motion.h1>

                    <motion.div
                        animate={{y: 0}}
                        initial={{y: "100vh"}}
                        transition={{duration: 1.75, delay: 2.8, ease: [0.85, 0, 0.15, 1]}}
                        className={`w-full flex justify-center items-center h-[calc(60%)] mt-10 ${c_backgroundColor === "black" ? `bg-white/30` : `bg-black/30`} rounded-2xl relative`}>
                        <div
                            onClick={() => {
                                console.log("hello world");
                            }}
                            className={`z-[10] ${c_backgroundColor === "black" ? `bg-white text-black border-black` : `bg-black text-white border-white`} p-2 h-[3rem] w-[3rem] rounded-full right-0 top-1/2 -translate-y-1/2 translate-x-1/2 flex justify-center items-center absolute border-4 `}>
                            <FaArrowRight size={25}/>
                        </div>

                        <div
                            onClick={() => {
                            }}
                            className={`z-[10] ${c_backgroundColor === "black" ? `bg-white text-black border-black` : `bg-black text-white border-white`} p-2 h-[3rem] w-[3rem] rounded-full left-0 top-1/2 -translate-y-1/2 rotate-180 -translate-x-1/2 absolute border-4 flex justify-center items-center`}>
                            <FaArrowRight size={25}/>
                        </div>

                        {/*fdlkajfl;kdsajfl;kdasj;flkdasjlkfdjsal;kfjdl;skfjdslk;*/}

                        <div className={`h-[90%] w-[94%]  overflow-hidden rounded-2xl`}>
                            <AnimatePresence>
                                {isFirst && <motion.div
                                    animate={{y: "0", scale: 1}}
                                    initial={{y: "150%", scale: 0.8}}
                                    exit={{
                                        y: "-150%",
                                        scale: 0.8
                                    }}
                                    transition={{
                                        y: {duration: 1.25, ease: [0.85, 0, 0.15, 1]},
                                        scale: {duration: 1, ease: [0.85, 0, 0.15, 1], delay: 1.5},
                                    }}
                                    className={`bg-white h-full w-full`}>

                                </motion.div>}
                            </AnimatePresence>

                            <AnimatePresence>
                                {isSecond && <motion.div
                                    animate={{y: "0", scale: 1}}
                                    initial={{y: "150%", scale: 0.8}}
                                    exit={{
                                        y: "-150%",
                                        scale: 0.8
                                    }}
                                    transition={{
                                        y: {duration: 1.25, ease: [0.85, 0, 0.15, 1]},
                                        scale: {duration: 1, ease: [0.85, 0, 0.15, 1], delay: 1.5},
                                    }}
                                    className={`bg-green-300 h-full w-full`}>

                                </motion.div>}
                            </AnimatePresence>

                            <AnimatePresence>
                                {isThird && <motion.div
                                    animate={{y: "0", scale: 1}}
                                    initial={{y: "150%", scale: 0.8}}
                                    exit={{
                                        y: "-150%",
                                        scale: 0.8
                                    }}
                                    transition={{
                                        y: {duration: 1.25, ease: [0.85, 0, 0.15, 1]},
                                        scale: {duration: 1, ease: [0.85, 0, 0.15, 1], delay: 1.5},
                                    }}
                                    className={`bg-red-300 h-full w-full`}>

                                </motion.div>}
                            </AnimatePresence>

                            <AnimatePresence>
                                {isFourth && <motion.div
                                    animate={{y: "0", scale: 1}}
                                    initial={{y: "150%", scale: 0.8}}
                                    exit={{
                                        y: "-150%",
                                        scale: 0.8
                                    }}
                                    transition={{
                                        y: {duration: 1.25, ease: [0.85, 0, 0.15, 1]},
                                        scale: {duration: 1, ease: [0.85, 0, 0.15, 1], delay: 1.5},
                                    }}
                                    className={`bg-blue-300 h-full w-full`}>

                                </motion.div>}
                            </AnimatePresence>
                        </div>
                    </motion.div>
                </div>
                {registrationMode === "login" ?
                    <div className={`flex-1 h-full p-[3rem] pt-[10rem] flex justify-center`}>
                        <form
                            onSubmit={handleSubmit(SubmitFunction)}
                            className={`w-full ${c_color === "white" ? `text-white` : `text-black`} relative py-6`}>
                            <motion.label
                                animate={{opacity: 1}}
                                initial={{opacity: 0}}
                                transition={{duration: 1.25, delay: 1.9}}
                                className={`text-[1.25rem] `}>Username:
                            </motion.label>
                            <motion.input
                                animate={{opacity: 1}}
                                initial={{opacity: 0}}
                                transition={{duration: 1.25, delay: 1.9}}
                                placeholder={`Enter username here: `}
                                {...register("username", {
                                    required: true,
                                })}
                                className={`border-[0.25px] my-3 ${c_backgroundColor === "black" ? `border-white` : `border-black`} bg-transparent p-3 rounded-full w-full`}/>

                            <motion.label
                                animate={{opacity: 1}}
                                initial={{opacity: 0}}
                                transition={{duration: 1.25, delay: 2.2}}
                                className={`text-[1.25rem] `}>Password:
                            </motion.label>
                            <span className={`relative`}>
                            <motion.input
                                animate={{opacity: 1}}
                                initial={{opacity: 0}}
                                transition={{duration: 1.5, delay: 1.9}}
                                placeholder={`Enter password here: `}
                                type={passwordMode ? "password" : "text"}
                                {...register("password", {
                                    required: true,
                                    minLength: 8
                                })}
                                className={`border-[0.25px] my-3 ${c_backgroundColor === "black" ? `border-white` : `border-black`}  bg-transparent p-3 rounded-full w-full`}/>
                            <motion.div
                                animate={{opacity: 1}}
                                initial={{opacity: 0}}
                                transition={{duration: 1.5, delay: 1.9}}
                                className={`absolute  right-4 top-0`}
                                onClick={() => setPasswordMode(!passwordMode)}>
                                <FaEye size={25}/>
                            </motion.div>
                        </span>
                            <motion.button
                                animate={{y: 0}}
                                initial={{y: `100vh`}}
                                transition={{duration: 1.5, delay: 2, ease: [0.85, 0, 0.15, 1]}}
                                className={`w-full ${c_backgroundColor === "black" ? `bg-white text-black` : `bg-black text-white`} flex justify-center items-center p-3 rounded-full my-2 font-semibold`}>
                                {loginProcess.error ? <span className={`text-red-500`}>User not found!</span> :
                                    <span>Submit</span>}

                            </motion.button>

                            <div className={`w-full flex gap-[0.5rem]`}>
                                <motion.div
                                    animate={{y: 0}}
                                    initial={{y: `100vh`}}
                                    transition={{duration: 1.5, delay: 2.15, ease: [0.85, 0, 0.15, 1]}}
                                    onClick={() => setRegistrationMode("signup")}
                                    className={`border-[0.25px]  ${c_backgroundColor === "black" ? `border-white hover:bg-white/10 ` : `border-black hover:scale-110 `} cursor-pointer flex-1 rounded-full p-3 flex justify-center items-center `}>New
                                    User
                                </motion.div>

                                <motion.div
                                    animate={{y: 0}}
                                    initial={{y: `100vh`}}
                                    transition={{duration: 1.5, delay: 2.25, ease: [0.85, 0, 0.15, 1]}}
                                    className={`border-[0.25px]  ${c_backgroundColor === "black" ? `border-white hover:bg-white/10 ` : `border-black hover:scale-110 `} cursor-pointer flex-1 rounded-full p-3 flex justify-center items-center `}>
                                    Forgot Password
                                </motion.div>
                            </div>

                            <div className={`flex gap-[0.5rem]`}>
                                <motion.button
                                    animate={{y: 0}}
                                    initial={{y: `100vh`}}
                                    transition={{duration: 1.5, delay: 2.35, ease: [0.85, 0, 0.15, 1]}}
                                    className={`w-full flex-1 ${c_backgroundColor === "black" ? `bg-white text-black` : `bg-black text-white`} p-3 flex justify-center items-center rounded-full my-2 font-semibold`}>
                                    <FaGithub size={25}/>
                                </motion.button>

                                <motion.button
                                    animate={{y: 0}}
                                    initial={{y: `100vh`}}
                                    transition={{duration: 1.5, delay: 2.5, ease: [0.85, 0, 0.15, 1]}}
                                    className={`w-full flex-1 ${c_backgroundColor === "black" ? `bg-white text-black` : `bg-black text-white`} p-3 flex justify-center items-center rounded-full my-2 font-semibold`}>
                                    <FaGoogle size={25}/>
                                </motion.button>

                                <motion.button
                                    animate={{y: 0}}
                                    initial={{y: `100vh`}}
                                    transition={{duration: 1.5, delay: 2.65, ease: [0.85, 0, 0.15, 1]}}
                                    className={`w-full flex-1 ${c_backgroundColor === "black" ? `bg-white text-black` : `bg-black text-white`} p-3 flex justify-center items-center rounded-full my-2 font-semibold`}>
                                    <FaFacebook size={25}/>
                                </motion.button>
                            </div>

                        </form>
                    </div> : <div className={`flex-1 h-full p-[3rem] pt-[10rem] flex justify-center`}>
                        <form
                            onSubmit={handleSubmit(SubmitFunctionSignUp)}
                            className={`w-full ${c_color === "white" ? `text-white` : `text-black`} relative py-6`}>
                            <motion.label
                                className={`text-[1.25rem] `}>Username:
                            </motion.label>
                            <motion.input
                                placeholder={`Enter username here: `}
                                {...register("username", {
                                    required: true,
                                })}
                                className={`border-[0.25px] my-3 ${c_backgroundColor === "black" ? `border-white` : `border-black`} bg-transparent p-3 rounded-full w-full`}/>

                            <motion.label
                                className={`text-[1.25rem] `}>Password:
                            </motion.label>
                            <span className={`relative`}>
                            <motion.input
                                placeholder={`Enter password here: `}
                                type={passwordMode ? "password" : "text"}
                                {...register("password", {
                                    required: true,
                                    minLength: 8
                                })}
                                className={`border-[0.25px] my-3 ${c_backgroundColor === "black" ? `border-white` : `border-black`}  bg-transparent p-3 rounded-full w-full`}/>
                            <motion.div
                                className={`absolute  right-4 top-0`}
                                onClick={() => setPasswordMode(!passwordMode)}>
                                <FaEye size={25}/>
                            </motion.div>
                        </span>

                            <motion.label
                                className={`text-[1.25rem] `}>Confirm Password:
                            </motion.label>
                            <span className={`relative`}>
                            <motion.input
                                placeholder={`Enter password again, here: `}
                                type={passwordMode ? "password_r" : "text"}
                                {...register("password", {
                                    required: true,
                                    minLength: 8
                                })}
                                className={`border-[0.25px] my-3 ${c_backgroundColor === "black" ? `border-white` : `border-black`}  bg-transparent p-3 rounded-full w-full`}/>
                            <motion.div
                                className={`absolute  right-4 top-0`}
                                onClick={() => setPasswordMode(!passwordMode)}>
                                <FaEye size={25}/>
                            </motion.div>
                        </span>
                            <motion.button
                                className={`w-full ${c_backgroundColor === "black" ? `bg-white text-black` : `bg-black text-white`} flex justify-center items-center p-3 rounded-full my-2 font-semibold`}>
                                <span>Submit</span>
                            </motion.button>

                            <div className={`w-full flex gap-[0.5rem]`}>
                                <motion.div
                                    onClick={() => setRegistrationMode("login")}
                                    className={`border-[0.25px]  ${c_backgroundColor === "black" ? `border-white hover:bg-white/10 ` : `border-black hover:scale-110 `} my-3 cursor-pointer flex-1 rounded-full p-3 flex justify-center items-center `}>
                                    Login Instead ?
                                </motion.div>
                            </div>


                        </form>
                    </div>}
            </motion.div>
        </motion.main>
    </React.Fragment>
}


const RegistrationPageNavbar = () => {
    return <nav></nav>
}

export default RegistrationPage;