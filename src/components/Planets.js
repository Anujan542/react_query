import React, { useState } from "react";
import { useQuery } from "react-query";
import Planet from "./Planet";

const fetchPlanetdata = async (key, page) => {
  const res = await fetch(`https://swapi.dev/api/planets/?page=${page}`);
  return res.json();
};

const Planets = () => {
  const [page, setPage] = useState(1);
  const { data, status } = useQuery(["planets", "anujan", 2], fetchPlanetdata);
  //console.log(data);

  return (
    <div>
      <h2>Planets</h2>

      {status === "loading" && <div>Loading...</div>}
      {status === "error" && <div>Error</div>}
      {status === "success" && (
        <div>
          {data.results &&
            data.results.map((planet) => (
              <Planet key={planet.name} planet={planet} />
            ))}
        </div>
      )}
    </div>
  );
};

export default Planets;
