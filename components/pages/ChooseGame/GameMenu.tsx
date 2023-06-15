"use client";
import { memo, useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { io } from "socket.io-client";
import { UserIcon } from "@heroicons/react/20/solid";

import GamePreview from "./gamesPreview/GamePreview";

import { GameMenuType } from "./types";
import Modal from "@components/ui-kit/Modal";

function clickOnCurrentBlock() {
    const currentBlock = document.querySelector(
        ".current-block"
    ) as HTMLElement;
    currentBlock && currentBlock.click();
}

const GameMenu: GameMenuType = () => {
    const socket = io("localhost:8080/mobile");
    let [selectedButton, setSelectingButton] = useState(1);
    const [isOpen, setIsOpen] = useState(false);
    const router = useRouter();
    const handleClickSnake = (e: any) => {
        e.preventDefault();
        socket.emit("joinSnakeRoom");
        router.push("/games/snake");
    };
    const handleClickPingPong = (e: any) => {
        e.preventDefault();
        socket.emit("joinPingPongRoom");
        router.push("/games/pingpong");
    };
    const handleClickThrowModal = () => {
        setIsOpen(true);
    };

    useEffect(() => {
        function moveToRightBlock() {
            setSelectingButton((selectedButton += 1));
        }
        function moveToLeftBlock() {
            setSelectingButton((selectedButton -= 1));
        }
        function moveToDownBlock() {
            setSelectingButton((selectedButton += 1));
        }
        function moveToUpBlock() {
            setSelectingButton((selectedButton -= 1));
        }
        const socket = io("localhost:8080/mobile");
        socket.on("rightButtonClickOnMobile", () => {
            moveToRightBlock();
        });
        socket.on("leftButtonClickOnMobile", () => {
            moveToLeftBlock();
        });
        socket.on("downButtonClickOnMobile", () => {
            moveToDownBlock();
        });
        socket.on("upButtonClickOnMobile", () => {
            moveToUpBlock();
        });
        socket.on("enterButtonClickOnMobile", () => {
            clickOnCurrentBlock();
        });
    }, [router]);
    return (
        <>
            <div className="w-full h-screen bg-dark-gray">
                {selectedButton === 1 && (
                    <GamePreview
                        title="Snake"
                        description="Snake - игра, созданая в 1976 году. Игрок управляет змейкой при помощи кнопок направления — вверх, вниз, влево, вправо. Ползая, змейка должна собирать еду, за которую начисляются очки. Цель игры — набрать как можно больше очков. Игра заканчивается, если змейка врезается в стену или в себя."
                        amountOfUsers="1"
                        picture="bg-[url(https://storage.yandexcloud.net/suefa-backet/snake-image.png)]"
                    />
                )}
                {selectedButton === 2 && (
                    <GamePreview
                        title="Ping Pong"
                        description="Ping Pong - это игра, которая имитирует настольный теннис. Игроки используют контроллеры, для отбивания мяча и отправки его в сторону противника. Цель игры - набрать больше очков, чем противник, за счет того, что мяч не будет удерживаться на своей стороне поля."
                        amountOfUsers="2"
                        picture="bg-[url(https://storage.yandexcloud.net/suefa-backet/pingpong.png)]"
                    />
                )}
                {selectedButton === 3 && (
                    <GamePreview
                        title="Tetris"
                        description="Tetris - классическая игра, созданная в 1984 году в Советском Союзе. Игроку нужно заполнить горизонтальные линии без пропусков, получая очки. С каждым уровнем игра становится сложнее. Tetris стал одной из самых успешных и любимых игр в мире, и ее простой, но захватывающий геймплей продолжает привлекать игроков всех возрастов."
                        amountOfUsers="1"
                        picture="bg-[url(https://storage.yandexcloud.net/suefa-backet/tetris.jpg)]"
                    />
                )}
                {selectedButton === 4 && (
                    <GamePreview
                        title="Pacman"
                        description="Pacman - это еще одна классическая игра, созданная в 1980 году. Игрок управляет персонажем, который должен собирать точки на лабиринте, при этом избегая контакта с привидениями. Есть также большие точки, которые дают возможность на короткое время съесть привидений. Цель игры - собрать все точки на уровне и получить максимальное количество очков."
                        amountOfUsers="1"
                        picture="bg-[url(https://storage.yandexcloud.net/suefa-backet/pacman-game-card.png)]"
                    />
                )}

                <div className="flex flex-row px-28 pt-14 gap-10">
                    <button
                        className={`${
                            selectedButton === 1 ? "current-block" : ""
                        } w-[250px] h-[150px] text-sm`}
                        onClick={handleClickSnake}
                    >
                        <div
                            className={`${
                                selectedButton === 1
                                    ? "border-4 border-purple"
                                    : ""
                            }"w-[250px] h-[110px] bg-[url(https://storage.yandexcloud.net/suefa-backet/snake-image.png)] bg-cover rounded-[20px] border border-purple`}
                        />
                        <div className="flex flex-row justify-between items-center px-1 text-white">
                            Змейка
                            <div className="flex flex-row items-center">
                                <p className="text-base">1</p>
                                <UserIcon className="h-4 w-4" />
                            </div>
                        </div>
                    </button>
                    <button
                        className={`${
                            selectedButton === 2 ? "current-block" : ""
                        } w-[250px] h-[150px] text-sm`}
                        onClick={handleClickPingPong}
                    >
                        <div
                            className={`${
                                selectedButton === 2
                                    ? "border-4 border-purple"
                                    : ""
                            }"w-[250px] h-[110px] bg-[url(https://storage.yandexcloud.net/suefa-backet/pingpong.png)] bg-cover rounded-[20px] border border-purple`}
                        />
                        <div className="flex flex-row justify-between items-center px-1 text-white">
                            Пинг-понг
                            <div className="flex flex-row items-center">
                                <p className="text-base">2</p>
                                <UserIcon className="h-4 w-4" />
                            </div>
                        </div>
                    </button>
                    <button
                        className={`${
                            selectedButton === 3 ? "current-block" : ""
                        } w-[250px] h-[150px] text-sm`}
                        onClick={handleClickThrowModal}
                    >
                        <div
                            className={`${
                                selectedButton === 3
                                    ? "border-4 border-purple"
                                    : ""
                            }w-[250px] h-[110px] bg-[url(https://storage.yandexcloud.net/suefa-backet/tetris.jpg)] bg-cover rounded-[20px] border border-purple`}
                        />
                        <div className="flex flex-row justify-between items-center px-1 text-white">
                            Тетрис
                            <div className="flex flex-row items-center">
                                <p className="text-base">1</p>
                                <UserIcon className="h-4 w-4" />
                            </div>
                        </div>
                    </button>
                    <button
                        className={`${
                            selectedButton === 4 ? "current-block" : ""
                        } w-[250px] h-[150px] text-sm`}
                        onClick={handleClickThrowModal}
                    >
                        <div
                            className={`${
                                selectedButton === 4
                                    ? "border-4 border-purple"
                                    : ""
                            }w-[250px] h-[110px] bg-[url(https://storage.yandexcloud.net/suefa-backet/pacman-game-card.png)] bg-cover rounded-[20px] border border-purple`}
                        />
                        <div className="flex flex-row justify-between items-center px-1 text-white">
                            Pacman
                            <div className="flex flex-row items-center">
                                <p className="text-base">1</p>
                                <UserIcon className="h-4 w-4" />
                            </div>
                        </div>
                    </button>
                </div>
                {isOpen ? (
                    <Modal
                        header="Ой!"
                        message="Извините, но игра в настоящее время находится в разработке и не доступна для игры. Мы работаем над улучшением игрового процесса и добавлением новых функций, чтобы сделать игру еще более увлекательной и интересной для всех наших пользователей. Следите за обновлениями и скоро вы сможете наслаждаться игрой в полной мере!"
                        submitButtonText="Хорошо :("
                    />
                ) : (
                    ""
                )}
            </div>
        </>
    );
};

export default memo(GameMenu);
