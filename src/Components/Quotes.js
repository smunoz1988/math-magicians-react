import { useEffect, useState } from 'react';

const Quotes = () => {
  const [quotesReceived, setQuote] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const category = 'funny';
      const res = await fetch(`https://api.api-ninjas.com/v1/quotes?category=${category}`, {
        headers: {
          'X-Api-Key': '6GbkZeAqM5BjI03ACdq/Ig==y1NOsmUqa5LXYEbO',
        },
      });
      const json = await res.json();
      setQuote(json);
    };
    fetchData();
  }, []);

  return (
    <div className="quoteContainer">
      {quotesReceived.map((quote) => (
        <div key={quote} className="quotes">
          <p>
            {`"${quote.quote}"`}
          </p>
          <p className="quoteAuthor">
            {quote.author}
          </p>
        </div>
      ))}
    </div>
  );
};

export default Quotes;
