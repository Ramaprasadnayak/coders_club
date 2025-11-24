import { useState, useEffect } from "react";
import Dropdown from "react-bootstrap/Dropdown";
import axios from "axios";
import "./components_css/country.css"
export default function CountryListDropdown() {
  const [selected, setSelected] = useState("Select Country");

  const countries = [
    "India",
    "USA",
    "Canada",
    "Australia",
    "Germany",
    "France",
    "Brazil",
    "Japan",
    "South Korea",
    "South Africa",
  ];

  useEffect(() => {
    const storedLocation = localStorage.getItem("location");
    if (storedLocation) {
      setSelected(storedLocation);
    }
  }, []);

  const handleSelect = async (country) => {
    setSelected(country);
    try {
      const res = await axios.post("http://localhost:5000/location", {
        userid: localStorage.getItem("userId"),
        location: country,
      });
      localStorage.setItem("location", res.data.location);
      console.log("Location saved:", res.data.location);
    } catch (err) {
      console.error("Error saving location:", err);
    }
  };

  return (
      <Dropdown className="country-dropdown">
        <Dropdown.Toggle variant="secondary" className="dropdown-basic">
          {selected}
        </Dropdown.Toggle>

        <Dropdown.Menu>
          {countries.map((country) => (
            <Dropdown.Item key={country} onClick={() => handleSelect(country)}>
              {country}
            </Dropdown.Item>
          ))}
        </Dropdown.Menu>
      </Dropdown>
  );
}
