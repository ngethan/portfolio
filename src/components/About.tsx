import { motion, useAnimation } from "framer-motion";
import React, { useEffect } from "react";
import { useInView } from "react-intersection-observer";

const About = () => {
    const controls = useAnimation();
    const [ref, inView] = useInView({ threshold: 0.3 });
    useEffect(() => {
        if (inView) {
            controls.start("visible");
        }
    }, [controls, inView]);

    const list = {
        visible: {
            opacity: 1,
            transition: {
                when: "beforeChildren",
                staggerChildren: 0.05,
            },
        },
        hidden: {
            opacity: 0,
            transition: {
                when: "afterChildren",
            },
        },
    };

    const itemY = {
        hidden: { y: -10, opacity: 0 },
        visible: {
            y: 0,
            opacity: 1,
        },
    };

    return (
        <motion.div
            id="about"
            className="py-[100px] w-full max-w-[950px] mx-auto flex flex-col px-4"
            initial="hidden"
            animate={controls}
            variants={list}
            ref={ref}
        >
            <motion.div
                className="name text-7xl sm:text-8xl flex font-bold"
                variants={itemY}
            >
                <h1>
                    {["A", "b", "o", "u", "t"].map((letter, index) => {
                        return (
                            <span
                                className="transparent-text text-4xl mb-[40px] duration-300 inline-block align-top hover:text-red-500 border-b-[2px] border-red-500"
                                key={index}
                            >
                                {letter}
                            </span>
                        );
                    })}
                </h1>
            </motion.div>

            <motion.div className="text-[17px]" variants={itemY}>
                <p>
                    Hey, I&apos;m Ethan! I&apos;ve been playing around with
                    computers ever since I was young and my love for them has
                    only grown since. When I was nine, I was introduced to
                    Scratch, and from that age forward, I&apos;ve spent
                    innumerable days and nights building upon my passion for the
                    astounding cyber world. From writing my first &quot;Hello,
                    World&quot; project to programming full-stack MERN apps into
                    fruition, I use CS to explore realms of limitless
                    creativity.
                    <br />
                    <br />I value being able to make a difference in the world.
                    My work with Muddy Paws Rescue illustrates the impact I
                    strive to have on the world. Being a teacher too, not only
                    gives me the opportunity to impart knowledge, but it also
                    requires me to undergo constant learning as well. There is
                    an art to teaching, learning students, and finding ways to
                    reach and help them that is extremely gratifying.
                </p>
            </motion.div>
        </motion.div>
    );
};

export default About;
