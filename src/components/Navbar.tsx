import { motion, useAnimation } from "framer-motion";
import React, { useEffect } from "react";
import { useInView } from "react-intersection-observer";

const Navbar = () => {
    // const [nav, setNav] = useState(false);
    // const handleClick = () => setNav(!nav);

    // const [top, setTop] = useState(true);

    // let prevPos = 0;

    // const onScroll = (): void => {
    //     const currPos = window.pageYOffset;
    //     if (currPos === 0) setTop(true);
    //     else setTop(false);
    //     if (prevPos > currPos)
    //         document.getElementById("navbar")!.style.top = "0";
    //     else document.getElementById("navbar")!.style.top = "-80px";
    //     prevPos = currPos;
    // };

    // useEffect(() => {
    //     window.addEventListener("scroll", onScroll);

    //     return () => {
    //         window.removeEventListener("scroll", onScroll);
    //     };
    // });

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
                delay: 0.1,
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

    const item = {
        hidden: { y: -20, opacity: 0 },
        visible: {
            y: 0,
            opacity: 1,
        },
    };

    return (
        <motion.div
            id="navbar"
            className="right-0 duration-300 fixed flex pt-[80px] z-[999] text-right pr-[60px]"
            initial="hidden"
            animate={controls}
            variants={list}
            ref={ref}
        >
            <ul className="flex-col hidden md:flex text-lg">
                <motion.li variants={item}>
                    <a href="#home" className="group sub-animation w-fit">
                        <span className="hover-animation-dark pr-[3px] font-medium group-hover:text-red-400">
                            HOME
                        </span>
                        <span className="nav-sup font-medium align-super text-[10px] duration-300 group-hover:text-red-400">
                            01
                        </span>
                    </a>
                </motion.li>
                <motion.li variants={item}>
                    <a href="#about" className="group sub-animation w-fit">
                        <span className="hover-animation-dark pr-[3px] font-medium group-hover:text-red-400">
                            ABOUT
                        </span>
                        <span className="nav-sup font-medium align-super text-[10px] duration-300 group-hover:text-red-400">
                            02
                        </span>
                    </a>
                </motion.li>
                <motion.li variants={item}>
                    <a href="#skills" className="group sub-animation w-fit">
                        <span className="hover-animation-dark pr-[3px] font-medium group-hover:text-red-400">
                            SKILLS
                        </span>
                        <span className="nav-sup font-medium align-super text-[10px] duration-300 group-hover:text-red-400">
                            03
                        </span>
                    </a>
                </motion.li>
                <motion.li variants={item}>
                    <a href="#work" className="group sub-animation w-fit">
                        <span className="hover-animation-dark pr-[3px] font-medium group-hover:text-red-400">
                            WORK
                        </span>
                        <span className="nav-sup font-medium align-super text-[10px] duration-300 group-hover:text-red-400">
                            04
                        </span>
                    </a>
                </motion.li>
                <motion.li variants={item}>
                    <a href="#contact" className="group sub-animation w-fit">
                        <span className="hover-animation-dark pr-[3px] font-medium group-hover:text-red-400">
                            CONTACT
                        </span>
                        <span className="nav-sup font-medium align-super text-[10px] duration-300 group-hover:text-red-400">
                            05
                        </span>
                    </a>
                </motion.li>
            </ul>

            {/* <motion.ul
                className={
                    !nav
                        ? "hidden"
                        : "font-code fixed top-0 left-0 w-full h-full overflow-y-hidden bg-gray-800 flex flex-col justify-center items-center text-lg z-10"
                }
                variants={variants}
            >
                <li>
                    <a
                        href="#about"
                        className="hover-animation-dark py-6 text-4xl duration-300 hover:text-red-400"
                    >
                        ABOUT
                    </a>
                </li>
                <li>
                    <a
                        href="#skills"
                        className="hover-animation-dark py-6 text-4xl duration-300 hover:text-red-400"
                    >
                        SKILLS
                    </a>
                </li>
                <li>
                    <a
                        href="#work"
                        className="hover-animation-dark py-6 text-4xl duration-300 hover:text-red-400"
                    >
                        WORK
                    </a>
                </li>
                <li>
                    <a
                        href="#contact"
                        className="hover-animation-dark py-6 text-4xl duration-300 hover:text-red-400"
                    >
                        CONTACT
                    </a>
                </li>
            </motion.ul> */}
        </motion.div>
    );
};

export default Navbar;
