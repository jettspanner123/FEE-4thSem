"use client";
import React from "react";
import {FaMoon, FaSun} from "react-icons/fa6";
import {useTheme} from "@/app/store/Theme";


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


    const PicOptions: { name: string, link: string }[] = [
        {name: "SignUp/LogIn", link: "/registration"},
        {name: "Community", link: "/community"},
        {name: "About Us", link: "/about"},
        {name: "Contact Us", link: "/contact"}
    ]

    const Options: { name: string, link: string }[] = [
        {name: "Home", link: "/"},
        {name: "LogIn/SignUp", link: "/registration"}
    ]

    const {c_color, c_backgroundColor, set_color, set_background_color} = useTheme();

    return (
        <React.Fragment>
            <main className={`w-screen flex relative h-[400vh]`}>
                <section className={`h-screen p-4 flex w-screen`}>
                    <div className={`flex-1 p-4`}>
                        <nav className={`flex justify-between items-center w-full`}>
                            <h1 className={`text-[1.75rem] uppercase font-bold`}>MedicMate</h1>
                            <ul className={`flex justify-between items-center gap-[0.5rem]`}>
                                {Options.map((item: { name: string, link: string }, index: number) => {
                                    return <li
                                        className={`p-2 rounded-full border-[0.25px] border-black cursor-pointer `}
                                        key={index}>{item.name}</li>
                                })}
                            </ul>
                        </nav>
                    </div>
                    <div className={`flex-1 relative bg-green-300 h-full rounded-[1.5rem] p-4`}>
                        <nav className={`absolute top-0 right-0 m-4`}>
                            <ul className={`flex  justify-end items-center gap-[0.5rem]`}>
                                <li
                                    onClick={() => {
                                        if(c_backgroundColor === "black") {
                                            set_color("black");
                                            set_background_color("white");
                                            handleTheme();
                                        } else {
                                            set_color("white");
                                            set_background_color("black");
                                        }
                                    }}
                                    className={`bg-white p-2 rounded-full`}>
                                    {c_backgroundColor === "black" ? <FaSun size={25}/> : <FaMoon size={25}/>}
                                </li>
                                {PicOptions.map((item: { name: string, link: string }, index: number) => {
                                    return <li
                                        onClick={() => window.location.assign(item.link)}
                                        className={`bg-white p-2 rounded-full cursor-pointer`}
                                        key={index}>{item.name}</li>
                                })}
                            </ul>
                        </nav>
                    </div>
                </section>

            </main>
        </React.Fragment>
    );
}
