import React from "react";
import Img1 from "../../assets/women/woman-shopping1.jpg";
import Img2 from "../../assets/women/woman-shopping2.jpg";
import Img3 from "../../assets/women/woman-shopping3.avif";
import Img4 from "../../assets/women/woman-shopping4.jpg";
import Img5 from "../../assets/women/woman-shopping5.avif";

const ProductsData = [
  {
    id: 1,
    img: Img1,
    title: "Women Ethnic",
    rating: 5.0,
    author: "white",
    aoDelay: "0",
  },
  {
    id: 2,
    img: Img2,
    title: "Woman Western",
    rating: 4.5,
    author: "Red",
    aoDelay: "0",
  },
  {
    id: 3,
    img: Img3,
    title: "Goggles",
    rating: 4.7,
    author: "Brown",
    aoDelay: "0",
  },
  {
    id: 4,
    img: Img4,
    title: "Printed T-shirt",
    rating: 4.4,
    author: "Yellow",
    aoDelay: "600",
  },
  {
    id: 5,
    img: Img5,
    title: "Fashion T-shirt",
    rating: 4.5,
    author: "Pink",
    aoDelay: "800",
  },
];

const Products = () => {
  return (
    <div className="mt-14 mb-12">
      <div className="container">
        {/* Header section */}
        <div className="text-center mb-10 max-w-[600px] mx-auto">
          <p className="text-sm text-primary">Top Selling Products for you</p>
          <h1 className="text-3xl font-bold">Products</h1>
          <p className="text-xs">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Repellat
            in quasi debitis?
          </p>
        </div>
        {/* Body section */}
        <div>
          <div className="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 place-items-center gap-5">
            {/* Card section */}
            {ProductsData.map((data) => (
              <div>
                <img
                  src={data.img}
                  alt="Product-image"
                  className="h-[220px] w-[150px] object-cover rounded-md"
                />
                <div>
                    <h3 className="font-semibold">{data.title}</h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Products;
