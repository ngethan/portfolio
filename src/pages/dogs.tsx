import React from "react";

const Dogs = () => {
    return (
        <div className="py-[100px] w-full max-w-[950px] mx-auto flex flex-col px-4">
            <div className="text-7xl sm:text-8xl flex font-bold">
                <h1>
                    {["D", "o", "g", "s"].map((letter, index) => {
                        return (
                            <span
                                className="text-4xl duration-300 inline-block align-top hover:text-red-500 border-b-[2px] border-red-500"
                                key={index}
                            >
                                {letter}
                            </span>
                        );
                    })}
                </h1>
            </div>
            <p>
                I was never the biggest proponent of getting a dog. The one
                pushing to get one was my sister, Hannah. But after we stumbled
                across a stray dog on Baxter Street in NYC, my attitude was
                forever changed. We adopted him and fittingly named him Baxter.
                Three years later in the midst of the pandemic, we adopted
                another dog: Benji. These bundles of joy brought company and
                unconditional love into my family. They accompany me in every
                aspect of my life, whether it’s waking up with to them at the
                end of my bed, playing fetch outside, swimming in the pool, or
                studying with one fast asleep in my lap. It’s crazy to think how
                different everything would be if my parents parked at a
                different garage that day or if Baxter had decided to journey in
                the opposite direction.
            </p>
        </div>
    );
};

export default Dogs;
