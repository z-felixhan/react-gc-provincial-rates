import "./App.css";
import { Card, CardContent, CircularProgress, Typography } from "@mui/material";
import { getProvinceName, initial } from "./components/Utility";
import { useEffect, useState } from "react";
import CanadaMap from "react-canada-map";

function App() {
  const url = "https://orient.onrender.com/gc/gstrate";
  const [loading, setLoading] = useState(true);
  const [display, setDisplay] = useState(false);
  const [rates, setRates] = useState([]);
  const [rate, setRate] = useState([]);
  const [province, setProvince] = useState([]);
  const [customization, setCustomization] = useState(() => initial);

  const mapClickHandler = (province) => {
    setRate(getRate(province));
    setProvince(getProvinceName(province));
    setCustomization(() => {
      const selectedColor = [initial[province]][0].onHoverColor.slice(0, -2);

      return {
        ...initial,
        [province]: {
          // ...[initial[province]][0],
          onHoverColor: selectedColor,
          fillColor: selectedColor,
        },
      };
    });
    setDisplay(true);
  };

  // Fetch and store data for GST/HST provincial rates
  const fetchData = async (url) => {
    try {
      const response = await fetch(url, { method: "GET" });
      const data = await response.json();

      setRates(data);
      setLoading(false);
    } catch (err) {
      console.log(err);
    }
  };

  // Return the rate for the specific province
  const getRate = (province) => {
    const pairList = rates.GstRateProvinceList.filter(
      (rate) => rate.ProvinceCode === province
    );

    const rate = pairList[0].GstRateDatePairList.filter(
      (pair) => !pair.ExpiryDate
    );

    return rate[0];
  };

  useEffect(() => {
    fetchData(url);
  }, []);

  return (
    <div className="container">
      {loading ? (
        <CircularProgress color="inherit" />
      ) : (
        <>
          <div className="map-container">
            <div className="map-container-inner">
              <CanadaMap className="map" fillColor="white" height="100%" />
            </div>
            <div className="map-container-inner">
              <CanadaMap
                className="map"
                customize={customization}
                fillColor="lightgrey"
                onClick={mapClickHandler}
                onMouseDown={() => console.log("Hi")}
                onHover="Gold"
                height="100%"
              />
            </div>
          </div>
          {display && (
            <Card className="rate-card" sx={{ minWidth: 275 }}>
              <CardContent>
                <Typography className="province">{province}</Typography>
                <Typography className="rate">{rate.GstRate * 100}%</Typography>
                <Typography className="effective-date">
                  Effective: {rate.EffectiveDate}
                </Typography>
              </CardContent>
            </Card>
          )}
          <Card className="title-card">
            <CardContent style={{ margin: 0, padding: 10 }}>
              <Typography className="title">
                GST/HST Provincial Rates
              </Typography>
            </CardContent>
          </Card>
        </>
      )}
    </div>
  );
}

export default App;
