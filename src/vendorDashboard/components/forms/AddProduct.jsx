import React from "react";

const AddProduct = () => {
  return (
    <div className="productSection">
      <form className="tableForm">
        <h2>Add Product</h2>
        <label>Product Name</label>
        <input type="text" />

        <label>Price</label>
        <input type="text" />

        {/* <label>Category</label>
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

        {/* <label>Bestseller</label>
        <input type="text" /> */}
        <div className="check-inp">
          <label>Category</label>
          <div className="inputsContainer">
            <div className="checkboxContainer">
              <label>Yes</label>
              <input type="checkbox" value="Yes" />
            </div>
            <div className="checkboxContainer">
              <label>No</label>
              <input type="checkbox" value="No" />
            </div>
          </div>
        </div>

        <label>Product Image</label>
        <input type="file" />

        <label>Description</label>
        <input type="text" />

        <br />
        <div className="btnSubmit">
          <button>Submit</button>
        </div>
      </form>
    </div>
  );
};

export default AddProduct;
