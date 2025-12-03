import React from "react";
import { Link  } from "react-router-dom";

// install react-router-dom

export default function Home() {
    return (
        <>
        <div className="flex flex-row content-center gap-8 sm:flex-col md:flex-col md:gap-4">
            <div className="p-20 border border-blue-500 rounded-xl flex flex-col gap-4 md:p-10">
            <h3 className="font-bold text-xl">Want to find out if you're pregnant? </h3>
            <p>You can now use simple Mathematics to determine if you're pregnant or not.</p>
            <p>Things to know:</p>
            <ul className="list-disc list-inside flex flex-col content-normal">
                <li>Ovulation is between day 13 & 15 from the first day of menstruation(bleeding)</li>
                <li>Fertilization happens within 24 hours after ovulation</li>
                <li>Healthy sperm cells can last up to 5 days waiting to fertalize.</li>
            </ul>
            <p>Thus the fertility window(period) starts 5 days before ovulation.</p>
            <Link to='/are-we-pregnant' className=" font-bold text-white bg-blue-600 rounded py-2 px-5 ">  Pregnancy Calculator </Link>
        </div>

        <div className="p-20 border border-blue-500 rounded-xl flex flex-col gap-4">
            <h3 className="font-bold text-xl">Want to plan to be pregnant? </h3>
            <p>You can now use simple Mathematics to schedule for sex if you want to concieve.</p>
            <p>Things to know:</p>
            <ul className="list-disc list-inside flex flex-col content-normal">
                <li>Ovulation is between day 13 & 15 from the first day of menstruation(bleeding)</li>
                <li>Fertilization happens within 24 hours after ovulation</li>
                <li>Healthy sperm cells can last up to 5 days waiting to fertalize.</li>
            </ul>
            <p>Thus the fertility window(period) starts 5 days before ovulation.</p>
            <Link to='/when-should-we-have-sex' className="font-bold text-white bg-blue-600 rounded py-2 px-5"> When To Sex </Link> 
        </div>
        </div>

            
        </>
    );
}
