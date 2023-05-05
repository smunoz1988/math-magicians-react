import { useEffect, useState } from 'react';

const Quotes = () => {
  const [loading, setLoading] = useState('not loading');
  const [error, setError] = useState('error');
  const [quotesReceived, setQuote] = useState([]);
  const category = 'funny';

  const fetchData = async () => {
    try {
      const res = await fetch(`https://api.api-ninjas.com/v1/quotes?category=${category}`, {
        headers: {
          'X-Api-Key': '6GbkZeAqM5BjI03ACdq/Ig==y1NOsmUqa5LXYEbO',
        },
      });
      const receiveData = await res.json();
      setQuote(receiveData);
      setError('not error');
    } catch (error) {
      setError('error');
    } finally {
      setLoading('Load');
    }
  };

  useEffect(() => {
    fetchData();
  }, [category]);

  if (loading === 'not loading') {
    return (
      <p className="quoteAuthor">
        Loading
      </p>
    );
  }

  if (error === 'error') {
    return (
      <p className="quoteAuthor">
        Error
      </p>
    );
  }

  return (
    <div role="main" className="quoteContainer">
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
