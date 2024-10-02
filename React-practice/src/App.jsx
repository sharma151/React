import "./App.css";
import { getPosts } from "./Api/Api";
import { useState, useEffect } from "react";

function App() {
  const [data, setData] = useState(null);

  useEffect(() => {
    getPosts()
      .then((posts) => setData(posts.meals)) // Access the "meals" array from the response
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  return (
    <>
      <div>
        {data ? (
          data.map((e) => <li key={e.idMeal}>{e.strMeal}</li>)
        ) : (
          <p>No data</p>
        )}
      </div>
    </>
  );
}

export default App;
