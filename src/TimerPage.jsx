import useMyClock from "./useMyClock";


export default function TimerPage() {

    const currentTime = useMyClock();

    return (
        <>
            <h1>Klockan</h1>
            <div>Klockan är: {currentTime}</div>
        </>
    );
}