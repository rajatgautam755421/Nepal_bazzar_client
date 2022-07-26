import React from "react";
import "./Steps.css";
const Steps1 = ({
  productName,
  setproductName,
  productCategory,
  setproductCategory,
  productSubCategory,
  setproductSubCategory,
  productDescription,
  setproductDescription,
  productBrand,
  setproductBrand,
}) => {
  console.log(
    productName,
    productCategory,
    productDescription,
    productSubCategory,
    productBrand
  );
  return (
    <>
      <h1 style={{ color: "black", fontSize: "18px" }} className="pt-3">
        General Information About Your Product
      </h1>
      <div className="container mt-4" style={{ height: "45%" }}>
        <div
          className="post__main__app"
          style={{ width: "60%", margin: "0px auto" }}
        >
          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium text-neutral-600"
              style={{ textAlign: "left" }}
            >
              {" "}
              Product Name{" "}
              <span
                style={{
                  color: "red",
                  fontSize: "15px",
                }}
              >
                *
              </span>{" "}
            </label>
            <div className="mt-2">
              <input
                id="Name"
                name="Name"
                type="text"
                required
                placeholder="Product Name"
                className="block w-full px-5 py-3 text-base text-neutral-600 placeholder-gray-300 transition duration-500 ease-in-out transform border border-transparent rounded-lg bg-gray-50 focus:outline-none focus:border-transparent focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-300"
                value={productName}
                onChange={(e) => setproductName(e.target.value)}
              />
            </div>
          </div>
          <div className="space-y-2 mt-2">
            <label
              htmlFor="email"
              className="block text-sm font-medium text-neutral-600"
              style={{ textAlign: "left" }}
            >
              {" "}
              Product Category{" "}
              <span
                style={{
                  color: "red",
                  fontSize: "15px",
                }}
              >
                *
              </span>{" "}
            </label>
            <select
              id="countries"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:outline-none focus:border-transparent transition duration-500 ease-in-out transform border border-transparent rounded-lg bg-gray-50 focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-300 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white "
              style={{ height: "60px" }}
              onChange={(e) => setproductCategory(e.target.value)}
            >
              <option>Choose A Category</option>
              <option value="US" selected={productCategory === "US" && true}>
                A
              </option>
              <option value="CA" selected={productCategory === "CA" && true}>
                B
              </option>
              <option value="FR" selected={productCategory === "FR" && true}>
                C
              </option>
              <option value="DE" selected={productCategory === "DE" && true}>
                D
              </option>
            </select>
          </div>

          <div className="space-y-2 mt-2">
            <label
              htmlFor="email"
              className="block text-sm font-medium text-neutral-600"
              style={{ textAlign: "left" }}
            >
              {" "}
              Sub-Category{" "}
              <span
                style={{
                  color: "red",
                  fontSize: "15px",
                }}
              >
                *
              </span>{" "}
            </label>
            <select
              id="countries"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:outline-none focus:border-transparent transition duration-500 ease-in-out transform border border-transparent rounded-lg bg-gray-50 focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-300 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white "
              style={{ height: "60px" }}
              onChange={(e) => setproductSubCategory(e.target.value)}
            >
              <option>Choose A Sub-Category</option>
              <option value="US" selected={productSubCategory === "US" && true}>
                A
              </option>
              <option value="CA" selected={productSubCategory === "CA" && true}>
                B
              </option>
              <option value="FR" selected={productSubCategory === "FR" && true}>
                C
              </option>
              <option value="DE" selected={productSubCategory === "DE" && true}>
                D
              </option>
            </select>
          </div>
          <div className="space-y-2 mt-2">
            <label
              htmlFor="password"
              className="block text-sm font-medium text-neutral-600"
              style={{ textAlign: "left" }}
            >
              {" "}
              Brand Of The Product{" "}
            </label>
            <div className="mt-1">
              <input
                id="Product Description"
                name="Product Description"
                type="text"
                required
                placeholder="Brand Of The Product"
                className="block w-full px-5 py-3 text-base text-neutral-600 placeholder-gray-300 transition duration-500 ease-in-out transform border border-transparent rounded-lg bg-gray-50 focus:outline-none focus:border-transparent focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-300"
                value={productBrand}
                onChange={(e) => setproductBrand(e.target.value)}
              />
            </div>
          </div>
          <div className="space-y-2 mt-2">
            <label
              htmlFor="password"
              className="block text-sm font-medium text-neutral-600"
              style={{ textAlign: "left" }}
            >
              {" "}
              Product Description{" "}
              <span
                style={{
                  color: "red",
                  fontSize: "15px",
                }}
              >
                *
              </span>{" "}
            </label>
            <div className="mt-1">
              <textarea
                id="Product Description"
                name="Product Description"
                type="text"
                required
                placeholder="Product Description"
                className="block w-full px-5 py-3 text-base text-neutral-600 placeholder-gray-300 transition duration-500 ease-in-out transform border border-transparent rounded-lg bg-gray-50 focus:outline-none focus:border-transparent focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-300"
                value={productDescription}
                onChange={(e) => setproductDescription(e.target.value)}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Steps1;
