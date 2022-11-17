import { FiGithub, FiInstagram, FiLinkedin, FiTwitter } from "react-icons/fi";

const Socials = () => {
    return (
        <ul className="hidden md:flex flex-col fixed bottom-12 right-7">
            <li className="group mb-[30px]">
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
            <li className="group mb-[30px]">
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
            <li className="group mb-[30px]">
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
            <li className="group mb-[30px]">
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
    );
};

export default Socials;
