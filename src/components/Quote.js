import React, { useState, useEffect } from "react";

import { callQuoteApi } from "../utils";

const Quote = () => {
    const [quote, setQuote] = useState("");

    useEffect(() => {
        async function getQuote() {
            let quoteText = localStorage.getItem("qod");
            if ((!quoteText) || (quoteText.length === 0)) {
                let quoteResponse = await callQuoteApi();
                let quoteText = quoteResponse.contents.quotes[0].quote.trim();
                
                setQuote(quoteText);
                localStorage.setItem("qod", quoteText);
            } else {
                setQuote(quoteText);
                console.log("Quote stored in local web storage");
            }
        }
        getQuote();
    }, []
    );

    return (
        <section className="quote mt-5">
            <p className="quote-text text-white text-justify">"{quote}"</p>
        </section>
    );
}

export default Quote;