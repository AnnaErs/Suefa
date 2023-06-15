import Header from "@components/Header/Header";
import MainPage from "@components/pages/MainPage/MainPage";
import DeviceInfo from "@components/pages/DeviceInfo/DeviceInfo";
import PhonePlusConsole from "@components/pages/PhonePlusConsole/PhonePlusConsole";
import GamesInfo from "@components/pages/GamesInfo/GamesInfo";
import SubscriptionInfo from "@components/pages/SubscriptionInfo/SubscriptionInfo";

export default function Home() {
    return (
        <main className="flex flex-col h-full items-center snap-y snap-mandatory">
            <Header />
            <MainPage />
            <DeviceInfo />
            <PhonePlusConsole />
            <GamesInfo />
            <SubscriptionInfo />
        </main>
    );
}
