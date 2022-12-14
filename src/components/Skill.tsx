import { motion } from "framer-motion";
import type { IconType } from "react-icons";

interface Props {
    name: string;
    icon: IconType;
    noName?: boolean;
}

const Skill = ({ name, icon, noName }: Props) => {
    const Icon = icon as React.ElementType;

    const itemY = {
        hidden: { y: -10, opacity: 0 },
        visible: {
            y: 0,
            opacity: 1,
        },
    };

    return (
        <motion.div variants={itemY}>
            <div
                className={
                    !noName
                        ? "group rounded px-[10px] mb-[20px] h-[75px] bg-[#1b1c1b] shadow-lg shadow-gray-100/[.4] hover:shadow-red-200/[.8] duration-300 hover:scale-[1.12] transform-gpu mr-[50px] justify-center"
                        : "group rounded px-[10px] mb-[20px] h-[60px] bg-[#1b1c1b] shadow-lg shadow-gray-100/[.4] hover:shadow-red-200/[.8] duration-300 hover:scale-[1.12] transform-gpu mr-[20px] justify-center z-0"
                }
            >
                <p
                    className={
                        noName
                            ? "invisible opacity-0 px-[10px] fixed group-hover:visible group-hover:opacity-100 text-gray-200 w-fit h-[20] bg-gray-700 rounded duration-300 left-[50%] bottom-[60px] -translate-x-1/2 z-[100]"
                            : "invisible fixed"
                    }
                >
                    {name}
                </p>
                <div
                    className={
                        !noName
                            ? "skill font-code text-gray-200 h-[75px] items-center w-fit flex flex-row"
                            : "skill font-code text-gray-200 h-[60px] items-center w-fit flex flex-row"
                    }
                >
                    <Icon
                        size={!noName ? 50 : 30}
                        className="duration-300 group-hover:text-red-300"
                    />
                    {!noName ? (
                        <h1 className="ml-[20px] float-right text-[20px] duration-300 group-hover:text-red-300">
                            {name}
                        </h1>
                    ) : (
                        ""
                    )}
                </div>
            </div>
        </motion.div>
    );
};

export default Skill;
