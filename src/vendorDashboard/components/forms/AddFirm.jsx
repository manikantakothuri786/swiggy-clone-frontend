import React, { useState } from "react";
import { API_URL } from "../../data/ApiPath";

const AddFirm = () => {
  const [firmName, setFirmName] = useState("");
  const [area, setArea] = useState("");
  const [category, setCategory] = useState([]);
  const [region, setRegion] = useState([]);
  const [offer, setOffer] = useState("");
  const [file, setFile] = useState(null);

  const handleFirmSubmit = async (e) => {
    e.preventDefault();
    try {
      const loginToken = localStorage.getItem("loginToken");
      if (!loginToken) console.error("User not authenticated");

      const formData = new FormData();
      formData.append("firmName", firmName);
      formData.append("area", area);
      formData.append("offer", offer);
      category.forEach((value) => {
        formData.append("category", value);
      });
      region.forEach((value) => {
        formData.append("region", value);
      });

      if (file) {
        formData.append("image", file);
      }

      const response = await fetch(`${API_URL}/firm/add-firm`, {
        method: "POST",
        /* prettier-ignore */
        headers: {
          'token': loginToken,
        },
        body: formData,
      });

      const data = await response;
      if (response.ok) {
        console.log(data);
        alert("Firm added sucessfully");
        setFirmName("");
        setArea("");
        setCategory([]);
        setRegion([]);
        setOffer("");
        setFile("");
      }
    } catch (error) {
      console.log(error);
      console.log("Unable to add Firm");
    }
  };

  const handleCategoryChange = (event) => {
    const value = event.target.value;
    if (category.includes(value)) {
      setCategory(category.filter((item) => item !== value));
    } else {
      setCategory([...category, value]);
    }
  };

  const handleRegionChange = (event) => {
    const value = event.target.value;
    if (region.includes(value)) {
      setRegion(region.filter((item) => item !== value));
    } else {
      setRegion([...region, value]);
    }
  };

  const handleImageUpload = (event) => {
    const selectedImage = event.target.files[0];
    setFile(selectedImage);
  };

  return (
    <div className="firmSection">
      <form className="tableForm" onSubmit={handleFirmSubmit}>
        <h2>Add Firm</h2>
        <label>Firm Name</label>
        <input
          type="text"
          name="firmName"
          onChange={(e) => setFirmName(e.target.value)}
          value={firmName}
        />

        <label>Area</label>
        <input
          type="text"
          name="area"
          onChange={(e) => setArea(e.target.value)}
          value={area}
        />
        {/* 
        <label>Category</label>
        <input type="text" /> */}

        <div className="check-inp">
          <label>Category</label>
          <div className="inputsContainer">
            <div className="checkboxContainer">
              <label>Veg</label>
              <input
                type="checkbox"
                value="veg"
                checked={category.includes("veg")}
                onChange={handleCategoryChange}
              />
            </div>
            <div className="checkboxContainer">
              <label>Non-Veg</label>
              <input
                type="checkbox"
                value="non-veg"
                checked={category.includes("non-veg")}
                onChange={handleCategoryChange}
              />
            </div>
          </div>
        </div>

        <div className="check-inp">
          <label>Region</label>
          <div className="regInputsContainer">
            <div className="regBoxContainer">
              <label>South-Indian</label>
              <input
                type="checkbox"
                value="south-indian"
                checked={region.includes("south-indian")}
                onChange={handleRegionChange}
              />
            </div>
            <div className="regBoxContainer">
              <label>North-Indian</label>
              <input
                type="checkbox"
                value="north-indian"
                checked={region.includes("north-indian")}
                onChange={handleRegionChange}
              />
            </div>
            <div className="regBoxContainer">
              <label>Chinese</label>
              <input
                type="checkbox"
                value="chinese"
                checked={region.includes("chinese")}
                onChange={handleRegionChange}
              />
            </div>
            <div className="regBoxContainer">
              <label>Bakery</label>
              <input
                type="checkbox"
                value="bakery"
                checked={region.includes("bakery")}
                onChange={handleRegionChange}
              />
            </div>
          </div>
        </div>

        {/* <label>Region</label>
        <input type="text" /> */}

        <label>Offer</label>
        <input
          type="text"
          name="offer"
          onChange={(e) => setOffer(e.target.value)}
          value={offer}
        />

        <label>Firm Image</label>
        <input type="file" onChange={handleImageUpload} />
        <br />
        <div className="btnSubmit">
          <button type="submit">Submit</button>
        </div>
      </form>
    </div>
  );
};

export default AddFirm;
