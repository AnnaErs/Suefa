import { memo } from "react";

import Snake from "@components/pages/Snake/Snake";

import { GameType } from "./types";

const SnakePageGame: GameType = () => {
    return (
        <div className="w-full h-screen bg-dark-gray">
            <div className="flex justify-center items-end p-40">
                <Snake />
            </div>
        </div>
    );
};

export default memo(SnakePageGame);
