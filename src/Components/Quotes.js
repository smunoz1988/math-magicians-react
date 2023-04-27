import { useEffect, useState } from 'react';

const Quotes = () => {
  const [quote, setQuote] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch('https://api.api-ninjas.com/v1/quotes?category=');
      const json = await res.json();
      setQuote(json);
      console.log(json);
    };
    fetchData();
  }, [setQuote]);

  return (
    <>
      <div className="quoteContainer">
        <p className="quote">
          { quote.quote }
        </p>
        <button type="button">Get Quote!</button>
      </div>
    </>
  );
};

export default Quotes;
