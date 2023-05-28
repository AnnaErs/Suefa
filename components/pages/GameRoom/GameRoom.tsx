import { memo } from "react";

import GameCard from "@components/ui-kit/GameCard/GameCard";

import { GameRoomType } from "./types";

const GameRoom: GameRoomType = () => {
    return (
        <>
            <div className="h-screen w-full bg-[url(https://storage.yandexcloud.net/suefa-backet/Backgroung-svg.svg)] bg-cover bg-center p-24 bg-fixed overflow-hidden contrast-50 absolute top-0 -z-10"></div>
            <div className="flex min-h-screen justify-center items-center">
                <GameCard
                    userName="Анна Ершова"
                    userAmount="1"
                    connectionCode="8235876"
                />
            </div>
        </>
    );
};

export default memo(GameRoom);
