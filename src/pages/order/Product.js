import React from "react";

const Product = ({ name, imagePath, updateItemCount }) => {
  const handleChange = (e) => {
    const count = e.target.value;
    updateItemCount(name, count);
  };

  return (
    <div style={{ textAlgin: "center" }}>
      <img
        style={{
          width: "75%",
        }}
        src={`http://localhost:5000/${imagePath}`}
        alt={`${name} product`}
      />

      <form style={{ marginTop: 10 }}>
        <label htmlFor={name} style={{ textAlign: "right" }}>
          {name}
        </label>
        <input
          id={name}
          style={{ marginLeft: 7 }}
          type="number"
          name="quantity"
          min="0"
          defaultValue={0}
          onChange={handleChange}
        />
      </form>
    </div>
  );
};

export default Product;
