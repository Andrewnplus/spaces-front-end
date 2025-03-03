import { useEffect, useState } from "react";
import { fetchQuotes } from "../src/lib/api";

export default function Quotes() {
  const [quotes, setQuotes] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchQuotes()
      .then(setQuotes)
      .catch((err) => setError(err.message));
  }, []);

  return (
    <div>
      <h1>Quotes</h1>
      {error && <p style={{ color: "red" }}>Error: {error}</p>}
      <ul>
        {quotes.map((q) => (
          <li key={q.id}>{q.text}</li>
        ))}
      </ul>
    </div>
  );
}
