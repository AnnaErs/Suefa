import { memo } from "react";

import { PhonePlusConsoleType } from "./types";

const DeviceInfo: PhonePlusConsoleType = () => {
    return (
        <div className="flex flex-col items-center justify-center gap-10 w-full h-screen bg-light-black px-28 snap-center">
            <div>
                <h1 className="text-white text-7xl">
                    Телефон + Экран = Консоль
                </h1>
            </div>
            <div>
                <p className="text-light-gray text-4xl px-[400px]">
                    У вас есть всё, что нужно. Начинайте играть сразу же.
                    Играйте вместе на одном экране.
                </p>
            </div>
            <div>
                <img
                    className="w-[1320px] h-[495px]"
                    src="https://storage.yandexcloud.net/suefa-backet/game-demonstration.svg"
                />
            </div>
        </div>
    );
};

export default memo(DeviceInfo);
