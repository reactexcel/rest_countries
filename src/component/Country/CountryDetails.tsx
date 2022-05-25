import React from "react";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { makeStyles } from "@mui/styles";

const useCountryDetailsStyles = makeStyles({
  country_details: {
    margin: "15px auto 0",
    padding: "15px",
    maxWidth: 1400,
    minHeight: "100vh",
  },

  back: {
    backgroundColor: "#fff",
    border: 0,
    outline: 0,
    boxShadow: "0px 3px 15px rgba(0,0,0,0.2)",
    width: "150px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    gap: "10px",
    padding: 10,
    fontWeight: "bold",
    cursor: "pointer",
  },
  country_details_body: {
    margin: "15px auto 0",
    padding: "15px",
    maxWidth: 1400,
    display: "flex",
    justifyContent: "center",
    alignItmes: "center",
    gap: "40px",
  },

  img_container: {
    flex: 0.5,
  },
  img_container_images: {
    width: "100%",
    objectFit: "cover",
  },
  info: {
    flex: 0.5,
  },
  info_h2: {
    marginBottom: 15,
  },
  info_container: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: "45px",
  },
  info_values: {
    color: "#808080",
  },
  border_country: {
    padding: "5px 10px",
    backgroundColor: "#fff",
    display: "inline-block",
    margin: 10,
    cusror: "pointer",
    boxShadow: "0px 3px 15px rgba(0,0,0,0.2)",
  },
});
export const CountryDetails = () => {
  const CountryDetailsClasses = useCountryDetailsStyles();

  return (
    <div className={CountryDetailsClasses.country_details}>
      <button className={CountryDetailsClasses.back}>
        <ArrowBackIcon />
        <p>Go to Back</p>
      </button>

      <div className={CountryDetailsClasses.country_details_body}>
        <div className={CountryDetailsClasses.img_container}>
          <img className={CountryDetailsClasses.img_container_images} />
        </div>

        <div className={CountryDetailsClasses.info}>
          <h2 className={CountryDetailsClasses.info_h2}>name</h2>
          <div className={CountryDetailsClasses.info_container}>
            <div className="left_info">
              <p>
                Native Name:
                <span className={CountryDetailsClasses.info_values}>Test</span>
              </p>
              <p>
                Population:
                <span className={CountryDetailsClasses.info_values}>Test</span>
              </p>
              <p>
                Region:
                <span className={CountryDetailsClasses.info_values}>Test</span>
              </p>
              <p>
                Sub Region:
                <span className={CountryDetailsClasses.info_values}>Test</span>
              </p>
            </div>
            <div className="right_info">
              <p>
                Capital:
                <span className={CountryDetailsClasses.info_values}>Test</span>
              </p>
              <p>
                Top-level Domain:
                <span className={CountryDetailsClasses.info_values}>Test</span>
              </p>
              <p>
                Currencies:
                <span className={CountryDetailsClasses.info_values}>Test</span>
              </p>
              <p>
                Languages:
                <span className={CountryDetailsClasses.info_values}>Test</span>
              </p>
            </div>
          </div>
          Border Countries :
          <div className={CountryDetailsClasses.border_country}>
            <p>Test</p>
          </div>
          <div className={CountryDetailsClasses.border_country}>
            <p>Test</p>
          </div>
          <div className={CountryDetailsClasses.border_country}>
            <p>Test</p>
          </div>
          <div className={CountryDetailsClasses.border_country}>
            <p>Test</p>
          </div>
        </div>
      </div>
    </div>
  );
};
