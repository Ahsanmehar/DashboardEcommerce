import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { updateproduct } from "../../../ReduxToolkit/ProductSlice";

function EditProductCom() {
  let dispatch = useState();
  let editdata = useSelector((state) => state.product.editdata);
  let editproduct = useSelector((state) => state.product.editProduct);
  let [editImages, setEditImages] = useState([]);
  let [editProduct, setProduct] = useState({
    productName: "",
    category: "",
    gender: "",
    brand: "",
    description: "",
    size: "",
    status: "",
    price: "",
    productDate: "",
    image: [],
  });

  useEffect(() => {
    if (editdata) {
      setProduct(editdata);
    }
  }, [editdata]);

  function handleChange(e) {
    setProduct({ ...editProduct, [e.target.name]: e.target.value });
  }

  function handleSubmit(e) {
    e.preventDefault();
    dispatch(updateproduct(editProduct));
  }

  if (!editProduct) return null;
  function handleImage(e) {
    let file = Array.from(e.target.files);
    let imagesurl = file.map((file) => URL.createObjectURL(file));

    if (file.length + editImages.length > 2) {
      alert("Maximum 2 images allowed");
      return;
    }
    setProduct((predata) => ({
      ...predata,
      image: [...predata.image, ...imagesurl],
    }));
    setEditImages([...editImages, ...imagesurl]);
  }
  return (
    <div className="w-[100%] px-[28px] my-[25px] text-text1">
      <h1 className="text-[28px] font-medium mb-[10px]">Edit Product</h1>

      <form
        className="w-[100%] h-[80vh] flex justify-between"
        onSubmit={handleSubmit}
      >
        <div className="w-[49.5%] h-[100%] bg-secondary p-[16px] border-[1px] border-border rounded-[9px]">
          <div className="flex flex-col gap-[15px]">
            <div className="flex flex-col gap-[10px]">
              <h4 className="text-[14px] font-medium">
                Product name <span className="text-red-500 text-[17px]">*</span>
              </h4>
              <input
                type="text"
                placeholder="Enter product name"
                name="productName"
                value={editProduct.productName}
                onChange={handleChange}
                className="w-[100%] h-[50px] bg-transparent border-[1px] border-border px-[15px] rounded-[8px] placeholder:text-[13px] focus:border-blue focus:ring-1 focus:ring-blue outline-none"
                required
              />
              <h5 className="text-[12px] text-text2 font-light">
                Do not exceed 20 characters when entering the product name.
              </h5>
            </div>

            <div className="flex justify-between gap-[10px]">
              <div className="flex flex-col gap-[10px] w-[48%]">
                <h4 className="text-[14px] font-medium">
                  Category <span className="text-red-500 text-[17px]">*</span>
                </h4>
                <select
                  name="category"
                  value={editProduct.category}
                  onChange={handleChange}
                  className="text-text2 text-[13px] py-[14px] px-[22px] rounded-[8px] border-[1px] border-border bg-transparent focus:outline-none"
                >
                  <option value="">Choose Category</option>
                  <option value="Product">Product</option>
                  <option value="Shop">Shop</option>
                </select>
              </div>
              <div className="flex flex-col gap-[10px] w-[48%]">
                <h4 className="text-[14px] font-medium">
                  Gender <span className="text-red-500 text-[17px]">*</span>
                </h4>
                <select
                  name="gender"
                  value={editProduct.gender}
                  onChange={handleChange}
                  className="text-text2 text-[13px] py-[14px] px-[22px] rounded-[8px] border-[1px] border-border bg-transparent focus:outline-none"
                >
                  <option value="">Choose Gender</option>
                  <option value="Male">Male</option>
                  <option value="Product">Female</option>
                  <option value="Shop">Other</option>
                </select>
              </div>
            </div>

            <div className="flex flex-col gap-[10px]">
              <h4 className="text-[14px] font-medium">
                Brand <span className="text-red-500 text-[17px]">*</span>
              </h4>
              <select
                name="brand"
                value={editProduct.brand}
                onChange={handleChange}
                className="text-text2 text-[13px] w-[100%] py-[14px] px-[22px] rounded-[8px] border-[1px] border-border bg-transparent focus:outline-none"
              >
                <option value="">Choose Category</option>
                <option value="Product">Product</option>
                <option value="Shop">Shop</option>
              </select>
            </div>

            <div className="flex flex-col gap-[10px]">
              <h4 className="text-[14px] font-medium">
                Description <span className="text-red-500 text-[17px]">*</span>
              </h4>

              <textarea
                name="description"
                value={editProduct.description}
                onChange={handleChange}
                placeholder="Description"
                rows={10}
                required
                className="p-[16px] bg-transparent border-[1px] border-border rounded-[8px] focus:border-blue focus:ring-1 focus:ring-blue outline-none placeholder:text-[14px] resize-none"
              ></textarea>
              <h5 className="text-[12px] text-text2 font-light">
                Do not exceed 100 characters when entering the product name.
              </h5>
            </div>
          </div>
        </div>
        <div className="w-[49.5%] h-[100%] bg-secondary p-[16px] border-[1px] border-border rounded-[9px] flex flex-col gap-[20px]">
          <h4 className="text-[14px] font-medium">Upload images</h4>

          <div className="flex justify-between w-[100%] h-[25vh] bg-pink-00">
            {editImages.map((image, index) => (
              <>
                <div
                  className="w-[32%] h-full border-[1px] border-border rounded-[8px] flex items-center"
                  key={index}
                >
                  <img src={image} alt="Error-Image" />
                </div>
              </>
            ))}
            <label className="w-[32%] h-full border-[1px] border-blue border-dashed rounded-[8px] flex flex-col items-center justify-center cursor-pointer">
              <i className="bi bi-cloud-arrow-up text-[50px] text-blue"></i>
              <h4 className="text-[12px] text-text2 text-center">
                Drop your images here or select
                <span className="text-blue ml-[3px]">click to browse</span>
                <input
                  type="file"
                  className="hidden"
                  multiple
                  onChange={handleImage}
                />
              </h4>
            </label>
          </div>
          <h4 className="text-[14px]">
            You need to add at least 2 images. Pay attention to the quality of
            the pictures you add, comply with the background color standards.
            Pictures must be in certain dimensions. Notice that the product
            shows all the details
          </h4>

          <div className="flex justify-between gap-[10px]">
            <div className="flex flex-col gap-[10px] w-[48%]">
              <h4 className="text-[14px] font-medium">Add size</h4>
              <select
                name="size"
                value={editProduct.size}
                onChange={handleChange}
                className="text-text2 text-[13px] py-[14px] px-[22px] rounded-[8px] border-[1px] border-border bg-transparent focus:outline-none"
              >
                <option value="">Choose Size</option>
                <option value="EU-45">EU-45</option>
                <option value="EU-44">EU-44</option>
                <option value="EU-49">EU-49</option>
              </select>
            </div>
            <div className="flex flex-col gap-[10px] w-[48%]">
              <h4 className="text-[14px] font-medium">Product date</h4>
              <input
                type="date"
                name="productDate"
                value={editProduct.productDate}
                onChange={handleChange}
                className="text-text2 text-[13px] py-[14px] px-[22px] rounded-[8px] border-[1px] border-border bg-transparent focus:outline-none"
              />
            </div>
          </div>

          <div className="flex justify-between gap-[10px]">
            <div className="flex flex-col gap-[10px] w-[48%]">
              <h4 className="text-[14px] font-medium">Price</h4>
              <input
                type="number"
                name="price"
                value={editProduct.price}
                onChange={handleChange}
                className="text-text2 text-[13px] py-[14px] px-[22px] rounded-[8px] border-[1px] border-border bg-transparent focus:outline-none"
              />
            </div>
            <div className="flex flex-col gap-[10px] w-[48%]">
              <h4 className="text-[14px] font-medium">Status</h4>
              <select
                name="status"
                value={editProduct.status}
                onChange={handleChange}
                className="text-text2 text-[13px] py-[14px] px-[22px] rounded-[8px] border-[1px] border-border bg-transparent focus:outline-none"
              >
                <option value="">Choose Status</option>
                <option value="In Stock">In Stock</option>
                <option value="Limited Stock">Limited Stock</option>
                <option value="Out of Stock">Out of Stock</option>
              </select>
            </div>
          </div>

          <button
            className="py-[15px] px-[22px] bg-blue text-white rounded-[8px] w-fit"
            type="submit"
          >
            Save Product
          </button>
        </div>
      </form>
    </div>
  );
}

export default EditProductCom;
