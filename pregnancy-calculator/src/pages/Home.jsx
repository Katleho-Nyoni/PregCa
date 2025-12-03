import React from "react";
import { Link  } from "react-router-dom";

// install react-router-dom

export default function Home() {
    return (
        <>
            <h1>Home Page</h1>
        <div>
            <p></p>
            <button> <Link to="/are-we-pregnant">Pregnancy Calculator</Link> </button>
        </div>

        <div>
            <p></p>
            <button> <Link to="/when-should-we-have-sex">When To Sex</Link> </button>
        </div>

            
        </>
    );
}
