import { useLoaderData } from "react-router-dom";
import {
    Button,
  } from "@material-tailwind/react";
import { MovieType } from "./Card";


const CardDetails = () => {
    const showDetails = useLoaderData() as MovieType;
    console.log(showDetails)
    const cleanDescription = () => {
        const element = document.createElement('div');
        element.innerHTML = showDetails.summary
        return element.innerText || element.textContent
    }
    const summary = cleanDescription()
     
    return (
        <div className="w-[90%] mx-auto text-center border-2 rounded mt-8">
            <div>
                <h3 className="text-2xl font-semibold mt-4">{showDetails.name}</h3>
            </div>
            <p className="tracking-wide leading-6 m-4">{summary}</p>
            <Button className="mb-4">Buy Tickets</Button>
        </div>
    );
};

export default CardDetails;