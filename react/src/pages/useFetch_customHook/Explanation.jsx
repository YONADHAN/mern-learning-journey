import React, { use } from "react";
import TopicFrame from '../../components/TopicFrame'

const ExplanationUseFetch = () => {
    const code = `import { useState, useEffect } from "react";

const useFetch = (url) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const res = await fetch(url);

        if (!res.ok) {
          throw new Error("Something went wrong");
        }

        const result = await res.json();
        setData(result);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [url]);

  return { data, loading, error };
};

export default useFetch;`
    const usingUseFetchCode = `import React from "react";
import useFetch from "./useFetch";

function Users() {
  const { data, loading, error } = useFetch(
    "https://jsonplaceholder.typicode.com/users"
  );

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <div>
      {data.map((user) => (
        <p key={user.id}>{user.name}</p>
      ))}
    </div>
  );
}

export default Users;`
    return (
        <div>
            <h1>Explanation of useFetch Custom Hook</h1>
            <p>useFetch is a custom React hook used to fetch API data and manage state (loading, error, data) in a reusable way.It abstracts the complexity of making HTTP requests and managing asynchronous operations.</p>
            <TopicFrame
                name="useFetch"
                description="useFetch is a custom React hook used to fetch API data and manage state (loading, error, data) in a reusable way."
                code={code}
            />
            <TopicFrame
                name="How to Use useFetch"
                description="To use the useFetch custom hook, you simply need to import it into your React component and call it with the desired API endpoint as an argument. The hook will return an object containing the fetched data, a loading state, and any error that may have occurred during the fetch operation. You can then use these values to conditionally render your component based on the loading state or display any errors that may have occurred."
                code={usingUseFetchCode}
            />
        </div>
    )
}

export default ExplanationUseFetch;