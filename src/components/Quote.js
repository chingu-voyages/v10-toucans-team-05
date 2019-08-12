import React, { useState, useEffect } from "react";

import { callQuoteApi } from "../utils";

const Quote = () => {
    const [quote, setQuote] = useState("");

    useEffect(() => {
        async function getQuote() {
            //let quoteText = await callQuoteApi();
            let quoteText = "Wherever a man turns he can find someone who needs him.  ".trim();
            setQuote(quoteText); 
            let api_response = await callQuoteApi();
            console.log(api_response);
        }
        getQuote();
    }, []
    );

    return (
        <section className="quote mt-5">
            <p className="quote-text text-white text-justify font-italic">"{quote}"</p>
        </section>
    );
}

export default Quote;