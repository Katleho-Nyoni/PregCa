import React from "react";
import { Link  } from "react-router-dom";

// install react-router-dom

export default function Home() {
    return (
        <>
        <div className="flex flex-row content-center gap-8">
            <div className="p-20 border border-blue-500 rounded-xl">
            <p></p>
            <button className=" font-bold text-white bg-blue-600 rounded py-2 px-5"> <Link to='/are-we-pregnant' className="text-white">Pregnancy Calculator</Link> </button>
        </div>

        <div className="p-20 border border-blue-500 rounded-xl">
            <p></p>
            <button className= "font-bold text-white bg-blue-600 rounded py-2 px-5"> <Link to='/when-should-we-have-sex'>When To Sex</Link> </button>
        </div>
        </div>

            
        </>
    );
}
