import { motion, useAnimation } from "framer-motion";
import React, { useEffect } from "react";
import { useInView } from "react-intersection-observer";

const Inspirations = () => {
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
            id="inspirations"
            className="py-[100px] w-full max-w-[950px] mx-auto flex flex-col px-4"
            initial="hidden "
            animate={controls}
            variants={list}
            ref={ref}
        >
            <motion.div
                className="name text-7xl sm:text-8xl flex font-bold"
                variants={itemY}
            >
                <h1>
                    {[
                        "I",
                        "n",
                        "s",
                        "p",
                        "i",
                        "r",
                        "a",
                        "t",
                        "i",
                        "o",
                        "n",
                        "s",
                    ].map((letter, index) => {
                        return (
                            <span
                                className="text-4xl mb-[40px] duration-300 inline-block align-top hover:text-red-500 border-b-[2px] border-red-500"
                                key={index}
                            >
                                {letter}
                            </span>
                        );
                    })}
                </h1>
            </motion.div>

            <motion.div className="text-[17px]" variants={itemY}>
                <p className="font-code text-[24px] underline">Onions</p>
                <p>
                    My life is unequivocally epitomized by onions. When I’m
                    cutting onions, I cry. Yet, I proceed. I understand the
                    lasting value of the onion transcends the momentary sadness
                    it evokes. The french onion soup or onion rings I’ll have
                    the pleasure of tasting later will be filled with so much
                    more flavor. This could not be more applicable to me. The
                    long hours I’ve spent toiling over physics or calculus are
                    all made worth it when I open up that email and it begins
                    with “Congratulations!”.
                </p>
                <br />
                <br />
                <p className="font-code text-[24px] underline">Billy Joel</p>
                <p>
                    My creative side has taken much inspiration from Billy Joel.
                    I absolutely adore his music and have rekindled my love for
                    piano through learning his songs. Billy Joel&apos;s songs
                    have encouraged me to experiment outside of the classical
                    genre and explore pop, rock, and jazz. Because of Joel, my
                    piano repertoire has expanded to utilize the piano’s
                    versatile nature to the fullest extent.
                </p>
                <br />
                <br />
                <p className="font-code text-[24px] underline">Steve Jobs</p>
                <p>
                    Would I be a proper software engineer if I didn’t look up to
                    Steve Jobs? He embodies everything that I strive to be and I
                    have a great deal to learn from him. His leadership,
                    creativity, motivation, and entrepreneurship have all
                    contributed to the lasting impact that he achieved.
                </p>
            </motion.div>
        </motion.div>
    );
};

export default Inspirations;
