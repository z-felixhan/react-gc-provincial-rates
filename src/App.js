import "./App.css";
import { AppBar } from "@mui/material";
import { useEffect, useState } from "react";
import CanadaMap from "react-canada-map";

function App() {
  const url = "https://orient.onrender.com/gc/gstrate";
  const [loading, setLoading] = useState(true);
  const [rates, setRates] = useState([]);

  const mapClickHandler = (province, event) => {
    console.log("province clicked: ", province);
  };

  const customizeProvince = () => {
    return {
      AB: {
        onHoverColor: "#23427f",
      },
      BC: {
        onHoverColor: "#c2b2b2",
      },
      MB: {
        onHoverColor: "#239b56",
      },
      NB: {
        onHoverColor: "#ff5733",
      },
      NL: {
        onHoverColor: "#7986cb",
      },
      NS: {
        onHoverColor: "#b71c1c",
      },
      NT: {
        onHoverColor: "#ff80ed",
      },
      NU: {
        onHoverColor: "#f7347a",
      },
      ON: {
        onHoverColor: "#f4d03f",
      },
      PE: {
        onHoverColor: "#00c853",
      },
      QC: {
        onHoverColor: "#85c1e9",
      },
      SK: {
        onHoverColor: "#ff9800",
      },
      YT: {
        onHoverColor: "#7e51a5",
      },
    };
  };

  useEffect(async () => {
    try {
      const response = await fetch(url, { method: "GET" });
      const data = await response.json();

      setRates(data);
      setLoading(false);
    } catch (err) {
      console.log(err);
    }
  }, []);

  return (
    <div className="container">
      <CanadaMap
        className="map"
        customize={customizeProvince()}
        fillColor="lightgrey"
        onClick={mapClickHandler}
        onHover="Gold"
        height="100%"
      />
    </div>
  );
}

export default App;
