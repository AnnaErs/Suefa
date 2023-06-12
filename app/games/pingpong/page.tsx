import { memo } from "react";

import PingPong from "@components/pages/PingPong/PingPong";


const Game = () => {
    return (
        <div className="w-full h-screen bg-dark-gray">
            <div className="flex justify-center items-end ">
                <PingPong />
            </div>
        </div>
    );
};

export default memo(Game);
