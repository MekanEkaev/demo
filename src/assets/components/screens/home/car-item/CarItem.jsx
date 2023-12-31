import { Link } from "react-router-dom";
import s from "./../Home.module.css";
function CarItem({ car }) {
    return (
        <div key={car.id} className={s.item}>
            <div
                className={s.image}
                style={{
                    backgroundImage: `url(${car.image})`,
                }}
            />
            <div className={s.info}>
                <h2>{car.name}</h2>
                <p>
                    {new Intl.NumberFormat("en-US", {
                        style: "currency",
                        currency: "USD",
                        currencyDisplay: "narrowSymbol",
                    }).format(car.price)}
                </p>
                <Link className="btn" to={`car/${car.id}`}>
                    Read more
                </Link>
            </div>
        </div>
    );
}
export default CarItem;
