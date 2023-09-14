import { useLoaderData } from "react-router-dom";
import {
    Button,
  } from "@material-tailwind/react";
import { MovieType } from "../Component/Card";


const CardDetails = () => {
    const showDetails = useLoaderData() as MovieType;
    console.log(showDetails)
     
    return (
        <div className="w-[90%] mx-auto text-center border-2 rounded mt-8">
            <div>
                <h3 className="text-2xl font-semibold mt-4">{showDetails?.name}</h3>
            </div>
            <p className="tracking-wide leading-6 m-4">{showDetails?.summary}</p>
            <Button className="mb-4">Buy Tickets</Button>
        </div>
    );
};

export default CardDetails;