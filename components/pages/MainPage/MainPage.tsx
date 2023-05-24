import { memo } from "react";

import Slider from "@components/ui-kit/Slider/Slider";
import Button from "@components/ui-kit/Button/Button";
import Accordeon from "@components/ui-kit/Accordeon/Accordeon";

import { MainPageType } from "./types";

const MainPage: MainPageType = () => {
    return (
        <div className="flex min-h-screen flex-col items-center justify-between p-24">
            <h1>Hello Suefa</h1>
            <p className=" w-96 flex-wrap">
                Добро пожаловать на нашу игровую платформу! Здесь вы найдете
                огромное количество различных игр, которые помогут вам скоротать
                время с удовольствием. Желаем вам приятного времяпровождения!
            </p>
            <Button>Играть прямо сейчас</Button>
            <Accordeon
                question="На каких телефонах можно играть?"
                answer="На всех каких пожелаете. Главное, чтобы они были сенсорными, а также, поддерживало приложение "
            />

            <Slider />
        </div>
    );
};
export default memo(MainPage);
