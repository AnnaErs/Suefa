import { memo } from "react";

import { DeviceInfoType } from "./types";

const DeviceInfo: DeviceInfoType = () => {
    return (
        <div
            id="devices"
            className="flex flex-col items-center justify-center gap-10 w-full h-screen bg-dark-gray px-28 snap-center"
        >
            <div className="flex flex-row items-center justify-center gap-[50px]">
                <img
                    className=" h-72 w-72"
                    src="https://storage.yandexcloud.net/suefa-backet/firefox.svg"
                    alt="firefox"
                />
                <img src="https://storage.yandexcloud.net/suefa-backet/Line.svg" />
                <img
                    className=" h-72 w-72"
                    src="https://storage.yandexcloud.net/suefa-backet/opera.svg"
                    alt="opera"
                />
                <img src="https://storage.yandexcloud.net/suefa-backet/Line.svg" />

                <img
                    className=" h-72 w-72"
                    src="https://storage.yandexcloud.net/suefa-backet/chrome.svg"
                    alt="chrome"
                />
            </div>
            <div className="text-white text-7xl">Информация об устройствах</div>
            <div className="px-4">
                <p className=" text-light-gray text-3xl text-center">
                    Все игры на нашей платформе оптимизированы под различные
                    устройства, чтобы вы могли наслаждаться игровым процессом
                    без задержек и проблем с производительностью. Наша платформа
                    также совместима с большинством браузеров, включая Google
                    Chrome, Mozilla Firefox и Opera. Независимо от того, какое
                    устройство вы используете, мы гарантируем интересное
                    времяпровождение, а также безопасность вашей личной
                    информации.
                </p>
            </div>
        </div>
    );
};

export default memo(DeviceInfo);
