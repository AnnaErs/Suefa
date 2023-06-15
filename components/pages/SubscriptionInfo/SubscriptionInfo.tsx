import { memo } from "react";

import { SubscriptionInfoType } from "./types";

const SubcriptionInfo: SubscriptionInfoType = () => {
    return (
        <div
            id="sub"
            className="flex flex-col items-center justify-center gap-6 w-full h-full px-28 bg-black pb-10 pt-32 snap-start scroll-smooth"
        >
            <h2 className="text-white text-7xl text-center">
                Информация о подписке
            </h2>
            <h3 className="text-light-gray text-3xl ">
                Купи подписку и играй без ограничений!
            </h3>

            <div className="flex items-center justify-center gap-32 w-full">
                <div>
                    <h2 className="text-white text-5xl text-center mb-12">
                        Бесплатная версия
                    </h2>
                    <img
                        src="https://storage.yandexcloud.net/suefa-backet/free-version.png"
                        alt="hmmm"
                        className="flex h-[410px] w-360px items-center justify-center"
                    />
                    <ul className="text-base text-light-gray list-inside flex flex-col gap-3 mt-10">
                        <li className="text-white flex items-center">
                            <img
                                src="https://storage.yandexcloud.net/suefa-backet/one.svg"
                                className="mr-2"
                            />
                            Играйте в бесплатные игры недели
                        </li>
                        <li className="text-white flex items-center">
                            <img
                                src="https://storage.yandexcloud.net/suefa-backet/two.svg"
                                className="mr-2"
                            />
                            Кол-во людей в лобби до 4
                        </li>
                        <li className="flex items-center">
                            <img
                                src="https://storage.yandexcloud.net/suefa-backet/three-dis.svg"
                                className="mr-2"
                            />
                            Без рекламы
                        </li>
                        <li className="flex items-center">
                            <img
                                src="https://storage.yandexcloud.net/suefa-backet/four-dis.svg"
                                className="mr-2"
                            />
                            Неограниченное кол-во игроков
                        </li>
                        <li className="flex items-center">
                            <img
                                src="https://storage.yandexcloud.net/suefa-backet/five-dis.svg"
                                className="mr-2"
                            />
                            Кастомизация вашего профиля
                        </li>
                    </ul>
                </div>
                <div>
                    <h2 className="text-white text-5xl text-center mb-12">
                        Premium
                    </h2>
                    <img
                        src="https://storage.yandexcloud.net/suefa-backet/premium.png"
                        alt="hurrey!"
                        className="flex h-[410px] w-360px items-center justify-center"
                    />
                    <ul className="text-base text-white list-inside flex flex-col gap-3 mt-10">
                        <li className="flex items-center">
                            <img
                                src="https://storage.yandexcloud.net/suefa-backet/one.svg"
                                alt="first"
                                className="mr-2"
                            />
                            Играйте в бесплатные игры недели
                        </li>
                        <li className="flex items-center">
                            <img
                                src="https://storage.yandexcloud.net/suefa-backet/two.svg"
                                className="mr-2"
                            />
                            Кол-во людей в лобби до 4
                        </li>
                        <li className="flex items-center">
                            <img
                                src="https://storage.yandexcloud.net/suefa-backet/three.svg"
                                className="mr-2"
                            />
                            Без рекламы
                        </li>
                        <li className="flex items-center">
                            <img
                                src="https://storage.yandexcloud.net/suefa-backet/four.svg"
                                className="mr-2"
                            />
                            Неограниченное кол-во игроков
                        </li>
                        <li className="flex items-center">
                            <img
                                src="https://storage.yandexcloud.net/suefa-backet/five.svg"
                                className="mr-2"
                            />
                            Кастомизация вашего профиля
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default memo(SubcriptionInfo);
