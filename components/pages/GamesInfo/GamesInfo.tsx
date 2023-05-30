import { memo } from "react";

import Slider from "@components/ui-kit/Slider/Slider";

import { GamesInfoType } from "./types";

const DeviceInfo: GamesInfoType = () => {
    return (
        <div
            id="games"
            className="flex flex-col items-center justify-center gap-10 w-full h-screen bg-dark-gray px-28 snap-start scroll-smooth"
        >
            <h2 className="text-white text-7xl text-center">
                На нашем сайте собраны более 100 уникальных игр
            </h2>

            <div>
                <Slider />
                <Slider />
                <Slider />
            </div>
        </div>
    );
};

export default memo(DeviceInfo);
