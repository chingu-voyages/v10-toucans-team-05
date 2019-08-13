import React, { useState, useEffect } from "react";

import { callQuoteApi } from "../utils";

const Quote = () => {
    const [quote, setQuote] = useState("");

    useEffect(() => {
        async function getQuote() {
            let quoteText = localStorage.getItem("qod");
            // Check if quote can be retrieved from storage
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
            <p className="quote-text text-white text-justify mb-0">"{quote}"</p>
            <span className="quote-attr mb-0">
                <img src="https://theysaidso.com/branding/theysaidso.png" height="20" width="20" alt="theysaidso.com"/>
                <a href="https://theysaidso.com" title="Powered by quotes from theysaidso.com">theysaidso.com</a>
            </span>
        </section>
    );
}

export default Quote;