import { memo } from "react";

import GameMenu from "@components/pages/GameMenu/GameMenu";

import { GameMenuPageType } from "./types";

const GameMenuPage: GameMenuPageType = () => {
    return <GameMenu />;
};

export default memo(GameMenuPage);
