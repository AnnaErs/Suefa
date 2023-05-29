import MainPage from "@components/pages/MainPage/MainPage";
import DeviceInfo from "@components/pages/DeviceInfo/DeviceInfo";

export default function Home() {
    return (
        <main className="flex flex-col items-center">
            <MainPage />
            <DeviceInfo />
        </main>
    );
}
