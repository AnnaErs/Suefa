import Slider from "@components/ui-kit/Slider/Slider";

export default function Home() {
    return (
        <main className="flex min-h-screen flex-col items-center justify-between p-24">
            <h1>Hello Suefa</h1>
            <p className=" w-96 flex-wrap">
                Добро пожаловать на нашу игровую платформу! Здесь вы найдете
                огромное количество различных игр, которые помогут вам скоротать
                время с удовольствием. Желаем вам приятного времяпровождения!
            </p>

            <Slider />
        </main>
    );
}
