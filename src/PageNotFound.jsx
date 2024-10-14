import { useLocation } from 'react-router-dom';

export default function PageNotFound() {
    const loco = useLocation();

    return (
        <>
            <h1>404!</h1>
            <p>Angiven sida <strong>{loco.pathname}</strong> finns inte.</p>
        </>
    );
}