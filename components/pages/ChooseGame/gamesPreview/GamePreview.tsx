import { memo, useState } from "react";
import { UserIcon } from "@heroicons/react/20/solid";

import Button from "@components/ui-kit/Button/Button";
import Modal from "@components/ui-kit/Modal/Modal";

import { GamePreviewType } from "./types";

const GamePreview: GamePreviewType = ({
    title,
    description,
    amountOfUsers,
    picture,
}) => {
    const [isOpen, setIsOpen] = useState(false);
    return (
        <div>
            <div className="flex flex-row text-base text-white px-6 py-6 gap-14">
                <p className="flex flex-row items-center">
                    Мин - {amountOfUsers} <UserIcon className="h-3 w-3" />
                </p>
                <p className="flex flex-row items-center">
                    Макс - {amountOfUsers} <UserIcon className="h-3 w-3" />
                </p>
                <p>Жанры: аркада</p>
                <p>
                    Код комнаты:{" "}
                    {localStorage.getItem("roomCode") ||
                        "Не удалось получить код, попробуйте переподключиться"}
                </p>
            </div>
            <div
                className={`flex flex-col w-full h-[570px] ${picture} bg-cover p-6`}
            >
                <div className=" w-[650px] bg-dark-gray opacity-80 rounded-[20px]">
                    <div className="flex flex-col text-white opacity-100 gap-5 px-6 py-8">
                        <div className="flex flex-row items-center">
                            <h2 className="text-5xl mr-6">{title}</h2>
                            <p className="flex flex-row text-base">1</p>
                            <UserIcon className="h-4 w-4" />
                        </div>{" "}
                        <p className=" text-2xl">{description}</p>
                    </div>
                </div>
                <div className="flex justify-end items-end">
                    <Button onclick={setIsOpen} text="Начать играть сейчас" />
                </div>
                {isOpen ? (
                    <Modal
                        header="Начать играть сейчас!"
                        message="Чтобы начать, выберите игру на устройстве."
                        submitButtonText="Сейчас выберу!"
                    />
                ) : (
                    ""
                )}
            </div>
        </div>
    );
};

export default memo(GamePreview);
