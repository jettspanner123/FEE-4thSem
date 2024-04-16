"use client";
import React from "react";
import HomePageNavbar from "@/app/components/Navbar";
import {useTheme} from "@/app/store/Theme";
import {motion} from "framer-motion";

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

    const [MousePosition, setMousePosition] = React.useState({x: 0, y: 0});

    React.useEffect(() => {
        window.addEventListener("mousemove", (e) => {
            setMousePosition({x: e.clientX, y: e.clientY});
        })

        return () => window.removeEventListener("mousemove", () => {
        })
    })

    const MedicalIconRef = React.useRef<HTMLDivElement>(null);
    return (
        <React.Fragment>
            <HomePageNavbar/>
            <main
                className={`min-h-[400vh] ${c_backgroundColor === "black" ? `text-white` : `text-black`} p-[2rem]  w-screen`}>

                <section className={`min-h-screen min-w-screen`}>
                    
                </section>
            </main>
        </React.Fragment>
    );
}
