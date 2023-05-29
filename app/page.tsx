import MainPage from "@components/pages/MainPage/MainPage";
import DeviceInfo from "@components/pages/DeviceInfo/DeviceInfo";
import PhonePlusConsole from "@components/pages/PhonePlusConsole/PhonePlusConsole";
import GamesInfo from "@components/pages/GamesInfo/GamesInfo";

export default function Home() {
    return (
        <main className="flex flex-col items-center">
            <MainPage />
            <DeviceInfo />
            <PhonePlusConsole />
            <GamesInfo />
        </main>
    );
}
