import { memo } from "react";

import GameRoom from "@components/pages/GameRoom/GameRoom";

import { GameRoomPageType } from "./types";

const GameRoomPage: GameRoomPageType = () => {
    return <GameRoom />;
};

export default memo(GameRoomPage);
