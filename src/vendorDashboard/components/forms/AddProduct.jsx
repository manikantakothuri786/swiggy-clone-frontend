import { useState } from "react";
import React from "react";
import { API_URL } from "../../data/ApiPath";

const AddProduct = () => {
  const [productName, setProductName] = useState("");
  const [price, setPrice] = useState("");
  const [category, setCategory] = useState([]);
  const [bestseller, setBestseller] = useState(false);
  const [image, setImage] = useState(null);
  const [description, setDescription] = useState("");

  const handleCategoryChange = (event) => {
    const value = event.target.value;
    if (category.includes(value)) {
      setCategory(category.filter((item) => item !== value));
    } else {
      setCategory([...category, value]);
    }
  };

  const handleBestSeller = (event) => {
    const value = event.target.value === "true";
    setBestseller(value);
  };

  const handleImageUpload = (event) => {
    const selectedImage = event.target.files[0];
    setImage(selectedImage);
  };

  const handleAddProduct = async (e) => {
    e.preventDefault();
    try {
      const loginToken = localStorage.getItem("loginToken");
      const firmId = localStorage.getItem("FirmId");

      if (!loginToken || !firmId) console.error("User not authenticated");

      const formData = new FormData();
      formData.append("productName", productName);
      formData.append("price", price);
      formData.append("image", image);
      formData.append("description", description);

      category.forEach((value) => {
        formData.append("category", value);
      });

      const response = await fetch(`${API_URL}/product/add-product/${firmId}`, {
        method: "POST",
        body: formData,
      });

      const data = await response.json();
      if (response.ok) {
        console.log("product added sucessfully");
        alert("product added sucessfully");
        setProductName("");
        setPrice("");
        setCategory([]);
        setBestseller(false);
        setDescription("");
        setImage(null);
      }
    } catch (error) {
      console.error(error);
      alert("Failed to add product");
    }
  };

  return (
    <div className="productSection">
      <form className="tableForm" onSubmit={handleAddProduct}>
        <h2>Add Product</h2>
        <label>Product Name</label>
        <input
          type="text"
          name="productName"
          value={productName}
          onChange={(e) => setProductName(e.target.value)}
        />

        <label>Price</label>
        <input
          type="text"
          name="price"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
        />

        {/* <label>Category</label>
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

        {/* <label>Bestseller</label>
        <input type="text" /> */}
        <div className="check-inp">
          <label>Bestseller</label>
          <div className="inputsContainer">
            <div className="checkboxContainer">
              <label>Yes</label>
              <input
                type="radio"
                value="true"
                checked={bestseller === true}
                onChange={handleBestSeller}
              />
            </div>
            <div className="checkboxContainer">
              <label>No</label>
              <input
                type="radio"
                value="false"
                checked={bestseller === false}
                onChange={handleBestSeller}
              />
            </div>
          </div>
        </div>

        <label>Product Image</label>
        <input type="file" name="image" onChange={handleImageUpload} />

        <label>Description</label>
        <input
          type="text"
          placeholder="Enter your description"
          name="description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />

        <br />
        <div className="btnSubmit">
          <button type="submit">Submit</button>
        </div>
      </form>
    </div>
  );
};

export default AddProduct;
