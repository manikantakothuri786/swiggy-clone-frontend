import React from "react";

const AddFirm = () => {
  return (
    <div className="firmSection">
      <form className="tableForm">
        <h2>Add Firm</h2>
        <label>Firm Name</label>
        <input type="text" />
        <label>Area</label>
        <input type="text" />
        {/* 
        <label>Category</label>
        <input type="text" /> */}
        <div className="check-inp">
          <label>Category</label>
          <div className="inputsContainer">
            <div className="checkboxContainer">
              <label>Veg</label>
              <input type="checkbox" value="Veg" />
            </div>
            <div className="checkboxContainer">
              <label>Non-Veg</label>
              <input type="checkbox" value="Non-Veg" />
            </div>
          </div>
        </div>

        <div className="check-inp">
          <label>Region</label>
          <div className="regInputsContainer">
            <div className="regBoxContainer">
              <label>South-Indian</label>
              <input type="checkbox" value="South-Indian" />
            </div>
            <div className="regBoxContainer">
              <label>North-Indian</label>
              <input type="checkbox" value="North-Indian" />
            </div>
            <div className="regBoxContainer">
              <label>Chinese</label>
              <input type="checkbox" value="Chinese" />
            </div>
            <div className="regBoxContainer">
              <label>Bakery</label>
              <input type="checkbox" value="Bakery" />
            </div>
          </div>
        </div>

        {/* <label>Region</label>
        <input type="text" /> */}

        <label>Offer</label>
        <input type="text" />
        <label>Firm Image</label>
        <input type="file" />
        <br />
        <div className="btnSubmit">
          <button>Submit</button>
        </div>
      </form>
    </div>
  );
};

export default AddFirm;
