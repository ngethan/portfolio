import { motion, useAnimation } from "framer-motion";
import React, { useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";

const Contact = () => {
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
                delay: 0.09,
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

    useEffect(() => {
        if (typeof document.getElementById("name") !== null) {
            document.getElementById("name")!.addEventListener("focus", () => {
                document.getElementById("name-label")!.style.top = "0px";
            });

            document.getElementById("name")!.addEventListener("blur", (e) => {
                if ((e.target as any).value?.trim().length === 0)
                    document.getElementById("name-label")!.style.top = "40px";
                document.getElementById("name-label")!.style.fontSize = "24px";
            });
        }

        if (typeof document.getElementById("email") !== null) {
            document.getElementById("email")!.addEventListener("focus", () => {
                document.getElementById("email-label")!.style.top = "0px";
            });

            document.getElementById("email")!.addEventListener("blur", (e) => {
                if ((e.target as any).value?.trim().length === 0)
                    document.getElementById("email-label")!.style.top = "40px";
            });
        }

        if (typeof document.getElementById("message") !== null) {
            document
                .getElementById("message")!
                .addEventListener("focus", () => {
                    document.getElementById("message-label")!.style.top = "0px";
                });

            document
                .getElementById("message")!
                .addEventListener("blur", (e) => {
                    if ((e.target as any).value?.trim().length === 0)
                        document.getElementById("message-label")!.style.top =
                            "40px";
                });
        }
    }, []);

    const [submitted, setSubmitted] = useState(false);
    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        const form = document.getElementById("contact_form") as HTMLFormElement;
        const data = new FormData(form);
        fetch("/", {
            method: "POST",
            headers: { "Content-Type": "application/x-www-form-urlencoded" },
            body: new URLSearchParams(data as any).toString(),
        })
            .then(() => setSubmitted(true))
            .catch();
        e.preventDefault();
    };

    if (submitted) {
        return (
            <div
                id="contact"
                className="py-[100px] bg-transparent w-full max-w-[1075px] mx-auto h-screen px-4 flex flex-col"
                ref={ref}
            >
                <div className="name text-7xl sm:text-8xl flex font-bold ">
                    <h1 className="text-4xl mb-[40px] duration-300 inline-block align-top hover:text-red-500">
                        Thanks for your message!
                    </h1>
                </div>
            </div>
        );
    }

    return (
        <motion.div
            id="contact"
            className="py-[100px] w-full max-w-[1075px] mx-auto h-screen px-4 flex flex-col"
            initial="hidden"
            animate={controls}
            variants={list}
            ref={ref}
        >
            <motion.div
                className="name text-7xl sm:text-8xl flex font-bold "
                variants={itemY}
            >
                <h1>
                    {["C", "o", "n", "t", "a", "c", "t"].map(
                        (letter, index) => {
                            return (
                                <span
                                    className="transparent-text text-4xl mb-[40px] duration-300 inline-block align-top hover:text-red-500 border-b-[2px] border-red-500"
                                    key={index}
                                >
                                    {letter}
                                </span>
                            );
                        }
                    )}
                </h1>
            </motion.div>

            <form
                id="contact_form"
                className="font-code inline-flex flex-wrap justify-between w-full"
                method="post"
                onSubmit={handleSubmit}
                name="contact"
                aria-label="Contact"
            >
                <input type="hidden" name="form-name" value="contact" />
                <motion.div
                    className="inline-block flex-[1_1_40%] mr-[3%] mb-[30px]"
                    variants={itemY}
                >
                    <label
                        id="name-label"
                        htmlFor="name"
                        className="label relative text-red-500 text-[24px] top-10 duration-300"
                    >
                        Name
                    </label>
                    <input
                        type="text"
                        id="name"
                        name="name"
                        className="input relative text-[18px]"
                        required
                    />
                </motion.div>
                <motion.div
                    className="inline-block flex-[1_1_40%] ml-[3%] mb-[30px]"
                    variants={itemY}
                >
                    <label
                        id="email-label"
                        htmlFor="email"
                        className="relative text-red-500 text-[24px] top-10 duration-300"
                    >
                        Email
                    </label>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        className="input relative text-[18px]"
                        required
                    />
                </motion.div>
                <motion.div
                    className="inline-block w-full mb-[40px]"
                    variants={itemY}
                >
                    <label
                        id="message-label"
                        htmlFor="message"
                        className="relative text-red-500 text-[24px] top-10 duration-300"
                    >
                        Message
                    </label>
                    <textarea
                        id="message"
                        name="message"
                        className="input relative h-[88px] py-[8px] text-[18px]"
                        required
                    ></textarea>
                </motion.div>

                <motion.button
                    id="submit"
                    className="font-code text-red-400 border-red-400 text-lg border-2 rounded-lg px-4 py-2 my-2 flex items-center duration-300 hover:bg-red-300/[.3]"
                    type="submit"
                    variants={itemY}
                    aria-label="Send message"
                >
                    Send message
                </motion.button>
            </form>
        </motion.div>
    );
};

export default Contact;
