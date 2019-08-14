import React, { useState, useEffect } from "react";

import { callQuoteApi } from "../utils";

const Quote = () => {
  const [quote, setQuote] = useState("");
  const [quoteAuthor, setQuoteAuthor] = useState("");
  useEffect(() => {
    async function getQuote() {
      let quoteText = localStorage.getItem("qod");
      let quoteAuthor = localStorage.getItem("quoteAuthor");
      // Check if quote can be retrieved from storage
      if (!quoteText || quoteText.length === 0) {
        let quoteResponse = await callQuoteApi();

        let quoteText = quoteResponse.contents.quotes[0].quote.trim();
        let quoteAuthor = quoteResponse.contents.quotes[0].author.trim();

        setQuote(quoteText);
        setQuoteAuthor(quoteAuthor);
        localStorage.setItem("qod", quoteText);
        localStorage.setItem("quoteAuthor", quoteAuthor);
      } else {
        setQuote(quoteText);
        setQuoteAuthor(quoteAuthor);
      }
    }
    getQuote();
  }, []);

  return (
    <section className="quote mt-5">
      <p className="quote-text text-white text-justify mb-0">{quote}</p>
      <p className="quote-author white">
        -{quoteAuthor}
        <span className="quote-attr mb-0 white">
          <img
            src="https://theysaidso.com/branding/theysaidso.png"
            height="20"
            width="20"
            alt="theysaidso.com"
          />
          <a
            href="https://theysaidso.com"
            title="Powered by quotes from theysaidso.com">
            theysaidso.com
          </a>
        </span>
      </p>
    </section>
  );
};

export default Quote;
