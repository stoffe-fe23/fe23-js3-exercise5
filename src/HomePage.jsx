import { Link } from "react-router-dom";


export default function HomePage() {

    return (
        <>
            <img src="benji.jpg" className="floaty" />
            <h1>Home sweet home...</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur placeat officia consectetur voluptatem distinctio libero sit molestiae nihil dicta quos sapiente quis doloremque modi, ipsa beatae, praesentium cupiditate dolorem ad?</p>
            <p><Link to="/finns-inte">Trasig länk!</Link></p>
        </>
    );
}