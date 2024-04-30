import React, { useState, useEffect } from "react"
import Card from '../components/Card.jsx'
import Filter from "./Filter.jsx";


export default function Products() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [filter, setFilter] = useState(1)

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://raw.githubusercontent.com/devchallenges-io/web-project-ideas/main/front-end-projects/data/simple-coffee-listing-data.json'); // Replace with your API endpoint
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const jsonData = await response.json();
        setData(jsonData);
        console.log(jsonData)
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Error: {error}</p>;
  }
  // Render your data here
  const filteredData = filter === 1 ? data : data.filter(card => card.available === true);

  return (
    <>
    <Filter filter={filter} setFilter={setFilter}/>
      <div className="cards">
        {filteredData.map((card) => (
          <Card
            key={card.id}
            {...card} />
        ))}
      </div>
    </>
  );
}