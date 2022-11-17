import { FiGithub, FiInstagram, FiLinkedin, FiTwitter } from "react-icons/fi";

const Footer = () => {
    const handleViewSection = (
        e: React.MouseEvent<HTMLHeadingElement, MouseEvent>
    ) => {
        document
            .getElementById((e.target as any).dataset.section)!
            .scrollIntoView();
    };
    return (
        <footer className="flex flex-col justify-center items-center sticky top-full pb-[20px] w-full h-auto mb-[20px]">
            <h1 className="text-[20px] text-red-400 font-bold mb-[20px]">
                Ethan Ng&nbsp;&nbsp;
                <p className="inline-block font-normal">Portfolio</p>
            </h1>
            <ul className="flex flex-row text-[18px]">
                <li>
                    <h1
                        className="hover-animation-dark mb-[10px] md:mx-[20px] duration-300 hover:text-red-400"
                        data-section="home"
                        onClick={handleViewSection}
                    >
                        Home
                    </h1>
                </li>
                <li>
                    <h1
                        className="hover-animation-dark mb-[10px] md:mx-[20px] duration-300 hover:text-red-400"
                        data-section="about"
                        onClick={handleViewSection}
                    >
                        About
                    </h1>
                </li>
                <li>
                    <h1
                        className="hover-animation-dark mb-[10px] md:mx-[20px] duration-300 hover:text-red-400"
                        data-section="work"
                        onClick={handleViewSection}
                    >
                        Work
                    </h1>
                </li>
                <li>
                    <h1
                        className="hover-animation-dark mb-[10px] md:mx-[20px] duration-300 hover:text-red-400"
                        data-section="contact"
                        onClick={handleViewSection}
                    >
                        Contact
                    </h1>
                </li>
            </ul>

            <ul className="flex flex-row mb-[10px]">
                <li className="group mx-[15px] px-[5px] my-[20px]">
                    <a
                        href="https://github.com/ngethan"
                        target="_blank"
                        rel="noreferrer"
                        aria-label="GitHub"
                    >
                        <FiGithub
                            className="duration-300 group-hover:text-red-500 group-hover:translate-y-[-5px]"
                            size={25}
                        />
                    </a>
                </li>
                <li className="group mx-[15px] px-[5px] my-[20px]">
                    <a
                        href="https://www.linkedin.com/in/ethan-ng-007312235/"
                        target="_blank"
                        rel="noreferrer"
                        aria-label="Linkedin"
                    >
                        <FiLinkedin
                            className="duration-300 group-hover:text-red-500 group-hover:translate-y-[-5px]"
                            size={25}
                        />
                    </a>
                </li>
                <li className="group mx-[15px] px-[5px] my-[20px]">
                    <a
                        href="https://www.instagram.com/ethan.ng6/"
                        target="_blank"
                        rel="noreferrer"
                        aria-label="Instagram"
                    >
                        <FiInstagram
                            className="duration-300 group-hover:text-red-500 group-hover:translate-y-[-5px]"
                            size={25}
                        />
                    </a>
                </li>
                <li className="group mx-[15px] px-[5px] my-[20px]">
                    <a
                        href="https://twitter.com/ethn_ng/"
                        target="_blank"
                        rel="noreferrer"
                        aria-label="CodePen"
                    >
                        <FiTwitter
                            className="duration-300 group-hover:text-red-500 group-hover:translate-y-[-5px]"
                            size={25}
                        />
                    </a>
                </li>
            </ul>
            <a
                href="https://github.com/ngethan/portfolio"
                target="_blank"
                rel="noreferrer"
                className="hover-animation-dark font-code text-[16px] hover:text-red-500 duration-300"
                aria-label="Project Repository"
            >
                Designed and built by Ethan Ng
            </a>
        </footer>
    );
};

export default Footer;
