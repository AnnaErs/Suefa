import { memo } from "react";
import { UserIcon } from "@heroicons/react/20/solid";

import Button from "../Button/Button";

import { GameCardType } from "./types";

const GameCard: GameCardType = ({ userName, userAmount, connectionCode }) => {
    return (
        <div className="flex items-center justify-center w-[770px] h-[366px] bg-dark-gray rounded-[20px]">
            <div className=" flex text-white text-2xl gap-8 flex-col">
                <div className="flex flex-row gap-9">
                    <div className="flex gap-5 flex-col">
                        <UserIcon className="h-36 w-36" />
                        <p>{userName}</p>
                    </div>
                    <div className="flex gap-5 flex-col justify-end">
                        <div className="flex flex-row gap-3">
                            <p>Владелец:</p>
                            <p>{userName}</p>
                        </div>
                        <div className="flex flex-row gap-3">
                            <p>Количество пользователей:</p>
                            <p>{userAmount}</p>
                        </div>
                        <div className="flex flex-row gap-3">
                            <p>Код подключения:</p>
                            <p>{connectionCode}</p>
                        </div>
                    </div>
                </div>
                <div className="flex flex-row justify-between">
                    <button className="text-white bg-dark-gray text-xl border-2 border-blue px-7 py-4 rounded-[20px]">
                        Назад
                    </button>
                    <Button>Начать прямо сейчас</Button>
                </div>
            </div>
        </div>
    );
};

export default memo(GameCard);
