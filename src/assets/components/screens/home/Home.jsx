import { cars as carsData } from "./cars.data";
import CarItem from "./car-item/CarItem";
import CreateCarForm from "./create-car-form/CreateCarForm";
import { useEffect, useState } from "react";
import axios from "axios";

function Home() {
    const [cars, setCars] = useState([]);

    async function getData() {
        await axios
            .get("http://localhost:3001/cars")
            .then((response) => {
                setCars(response.data);
            })
            .catch((err) => {});
    }

    useEffect(() => {
        getData();
    }, []);

    return (
        <div>
            <h1>Cars catalog</h1>
            <CreateCarForm setCars={setCars} />
            <div>
                {cars.length ? (
                    cars.map((car) => <CarItem key={car.id} car={car} />)
                ) : (
                    <p>there are not cars</p>
                )}
            </div>
        </div>
    );
}

export default Home;
// 30 minut

/* <div key={car.id} className={s.item}>
                    <div className={s.image}>
                        style={{ backgroundImage: "url(/bmw.m3.jpg)" }}
                    </div>
                    <div className={s.info}>
                        <h2>Car 1</h2>
                        <p>$100000</p>
                        <button>Read more</button>
                    </div>
                </div> 
           //      const filteredCars = useMemo(
        //() => cars.filter((car) => car.price > 20000),
        //[],
    );
                */
