import { useState, useEffect, useDebugValue } from "react";

export default function useMyClock() {
    const [currTime, setCurrTime] = useState(new Date);

    useEffect(() => {
        const timeTimer = setInterval(() => setCurrTime(new Date), 1000);
        return () => clearInterval(timeTimer);
    }, []);

    useDebugValue(currTime, dateToString);

    function dateToString(dateObj) {
        return new Intl.DateTimeFormat("sv-SE", { hour: "numeric", minute: "numeric", second: "numeric" }).format(dateObj);
    }

    return dateToString(currTime);
}