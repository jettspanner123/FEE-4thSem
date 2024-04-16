"use client";
import React from "react";
import {motion, useMotionValue} from "framer-motion";

export default function ColorChanger(): React.JSX.Element {

    React.useEffect(() => {
        (
            async () => {
                //@ts-ignore
                const locomotiveScroll = (await import("locomotive-scroll")).default;
                const LocomotiveScroll = new locomotiveScroll();
            }
        )()
    }, [])


    const backgroundColor = useMotionValue("black");
    const color = useMotionValue("white");

    const ColorChanger: {
        SetBackgroundColor: (some_color: string) => void,
        SetTextColor: (some_color: string) => void
    } = {
        SetBackgroundColor: (some_color: string): void => {
            backgroundColor.set(some_color);
        },
        SetTextColor: (some_color: string): void => {
            color.set(some_color);
        }
    }

    const InputRef = React.useRef<HTMLInputElement>(null);
    // @ts-ignore
    return (
        <React.Fragment>
            <motion.main
                style={{color, backgroundColor}}
                className={`bg-black flex-col transition-color duration-700 text-white min-w-screen h-screen text-[10rem] uppercase flex justify-center items-center`}>
                <motion.h1 style={{textShadow: "2px 2px black"}}>Hello world</motion.h1>
                <input
                    ref={InputRef}
                    className={`text-[1.5rem] text-white m-[3rem] outline-none border-2 border-white bg-transparent p-2 rounded-xl w-[40%]`}/>
                <div className={`flex justify-between w-[40%]`}>
                    <motion.button
                        //@ts-ignore
                        onClick={() => ColorChanger.SetBackgroundColor(InputRef.current.value)}
                        initial={{boxShadow: "5px 5px black"}}
                        whileHover={{transform: `translate(0, -0.5rem)`, boxShadow: "0px 5px black"}}
                        className={`text-[1.5rem] bg-white text-black p-3 rounded-xl`}>Background Color
                    </motion.button>

                    <motion.button
                        //@ts-ignore
                        onClick={() => ColorChanger.SetTextColor(InputRef.current.value)}
                        initial={{boxShadow: "5px 5px black"}}
                        whileHover={{transform: `translate(0, -0.5rem)`, boxShadow: "0px 5px black"}}
                        className={`text-[1.5rem]  bg-white text-black p-3 rounded-xl`}>Text Color
                    </motion.button>
                </div>
            </motion.main>
        </React.Fragment>
    );
}