import { memo } from "react";

import { SliderType } from "./types";

const Slider: SliderType = () => {
    return (
        <div className="logos">
            <div className="logos-slide">
                <img
                    className="w-[400px] h-[200px]"
                    src="https://storage.yandexcloud.net/suefa-backet/pacman-game-card.png"
                />
                <img
                    className="w-[400px] h-[200px]"
                    src="https://storage.yandexcloud.net/suefa-backet/snake-image.png"
                />
                <img
                    className="w-[400px] h-[200px]"
                    src="https://storage.yandexcloud.net/suefa-backet/pacman-game-card.png"
                />
                <img
                    className="w-[400px] h-[200px]"
                    src="https://storage.yandexcloud.net/suefa-backet/tetris.jpg"
                />
                <img
                    className="w-[400px] h-[200px]"
                    src="https://storage.yandexcloud.net/suefa-backet/snake-image.png"
                />
                <img
                    className="w-[400px] h-[200px]"
                    src="https://storage.yandexcloud.net/suefa-backet/tetris.jpg"
                />
                <img
                    className="w-[400px] h-[200px]"
                    src="https://storage.yandexcloud.net/suefa-backet/snake-image.png"
                />
                <img
                    className="w-[400px] h-[200px]"
                    src="https://storage.yandexcloud.net/suefa-backet/pacman-game-card.png"
                />
                <img
                    className="w-[400px] h-[200px]"
                    src="https://storage.yandexcloud.net/suefa-backet/tetris.jpg"
                />
            </div>
        </div>
    );
};

export default memo(Slider);
