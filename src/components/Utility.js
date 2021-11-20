export const initial = {
  AB: {
    onHoverColor: "#23427fbb",
  },
  BC: {
    onHoverColor: "#c2b2b2bb",
  },
  MB: {
    onHoverColor: "#239b56bb",
  },
  NB: {
    onHoverColor: "#ff5733bb",
  },
  NL: {
    onHoverColor: "#7986cbbb",
  },
  NS: {
    onHoverColor: "#b71c1cbb",
  },
  NT: {
    onHoverColor: "#ff80edbb",
  },
  NU: {
    onHoverColor: "#f7347abb",
  },
  ON: {
    onHoverColor: "#f4d03fbb",
  },
  PE: {
    onHoverColor: "#00c853bb",
  },
  QC: {
    onHoverColor: "#85c1e9bb",
  },
  SK: {
    onHoverColor: "#ff9800bb",
  },
  YT: {
    onHoverColor: "#7e51a5bb",
  },
};

// Return the province name given the abbreviation
export const getProvinceName = (province) => {
  if (province.toUpperCase() === "AB") {
    return "Alberta";
  } else if (province.toUpperCase() === "BC") {
    return "British Columbia";
  } else if (province.toUpperCase() === "MB") {
    return "Manitoba";
  } else if (province.toUpperCase() === "NB") {
    return "New Brunswick";
  } else if (province.toUpperCase() === "NL") {
    return "Newfoundland and Labrador";
  } else if (province.toUpperCase() === "NS") {
    return "Nova Scotia";
  } else if (province.toUpperCase() === "NT") {
    return "Northwest Territories";
  } else if (province.toUpperCase() === "NU") {
    return "Nunavut";
  } else if (province.toUpperCase() === "ON") {
    return "Ontario";
  } else if (province.toUpperCase() === "PE") {
    return "Prince Edward Island";
  } else if (province.toUpperCase() === "QC") {
    return "Quebec";
  } else if (province.toUpperCase() === "SK") {
    return "Saskatchewan";
  } else if (province.toUpperCase() === "YT") {
    return "Yukon";
  }
};
