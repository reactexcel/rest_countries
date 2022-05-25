import React, { useEffect, useState } from "react";
import { makeStyles } from "@mui/styles";

const useountryStyles = makeStyles({
  country: {
    background: "#fff",
    width: "305px",
    boxShadow: "0px 3px 15px rgba(0,0,0,0.2)",
    borderRadius: 5,
    height: "370px",
    cursor: "pointer",
  },
  countryDiv: {
    display: "flex",
    justifyContent: "space-between",
  },
  country_details: {
    padding: 15,
  },
  country_values: {
    color: "gray",
  },
  flag_country: {
    height: "170px",
    width: "100%",
  },
  flag_country_img: {
    height: "100%",
    width: "100%",
    objectFit: "cover",
  },
});

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
  const Countryclasses = useountryStyles();
  return (
    <>
      <div className={Countryclasses.countryDiv}>
        {countries?.map((data: any) => {
          return (
            <>
              <div className={Countryclasses.country}>
                <div className={Countryclasses.flag_country}>
                  <img src="" className={Countryclasses.flag_country_img} />
                </div>
                <div className={Countryclasses.country_details}>
                  <h3 className="name">Name</h3>
                  <p>
                    Population:<span className="values">Test</span>
                  </p>
                  <p>
                    Region:
                    <span className={Countryclasses.country_values}>Test</span>
                  </p>
                  <p>
                    Capital:<span className="values">Test</span>
                  </p>
                </div>
              </div>
            </>
          );
        })}
      </div>
    </>
  );
};

export default Country;
