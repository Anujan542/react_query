import React from "react";
import { useQuery } from "react-query";
import People from "./People";

const fetchPeople = async (page) => {
  const res = await fetch(`https://swapi.dev/api/people/`);
  return res.json();
};

const Peoples = () => {
  const { data, status } = useQuery("people", fetchPeople);

  return (
    <div>
      <h2>Peoples</h2>
      {status === "loading" && <div>Loading...</div>}
      {status === "error" && <div>Error</div>}
      {status === "success" && (
        <div>
          {data.results.map((people) => (
            <People key={people.name} people={people} />
          ))}
        </div>
      )}
    </div>
  );
};

export default Peoples;
