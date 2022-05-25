import React, { useEffect, useState } from "react";

const Country = () => {
  const [countries, setCountries] = useState<any>();
  const fetchData = async () => {
    const response = await fetch("https://restcountries.com/v3.1/all");
    const data = await response.json();
    setCountries(data);
  };

  useEffect(() => {
    try {
      fetchData();
    } catch (error) {
      console.log(error);
    }
  }, []);

  console.log(countries, "countries");

  return (
    <>
      {countries?.map((data: any) => {
        return (
          <>
            <div className="country">
              <img src="" />
            </div>
            <div className="details">
              <h3 className="name">Name</h3>
              <p>
                Population:<span className="values">Test</span>
              </p>
              <p>
                Region:<span className="values">Test</span>
              </p>
              <p>
                Capital:<span className="values">Test</span>
              </p>
            </div>
          </>
        );
      })}
    </>
  );
};

export default Country;
