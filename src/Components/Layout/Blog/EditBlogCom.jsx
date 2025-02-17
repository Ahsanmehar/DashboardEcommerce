import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { updateblog } from "../../../ReduxToolkit/BlogSlice";

function EditBlogCom() {
  let [images, setImages] = useState([]);
  let [blog, setblog] = useState({
    blogTitle: "",
    aurthor: "",
    category: "",
    description: "",
    productDate: "",
    image: [],
  });

  let editdatablog = useSelector((state) => state.blog.editdatablog);
  let dispatch = useDispatch();
  useEffect(() => {
    if (editdatablog) {
      setblog(editdatablog);
    }
  }, [editdatablog]);

  function handleChange(e) {
    setblog({ ...blog, [e.target.name]: e.target.value });
  }

  function handleSubmit(e) {
    e.preventDefault();
    dispatch(updateblog(blog));
  }

  function handleImage(e) {
    let file = Array.from(e.target.files);
    let imagesurl = file.map((file) => URL.createObjectURL(file));

    if (images.length + file.length > 2) {
      alert("Maximum 2 images allowed");
      return;
    }

    setblog((predata) => ({
      ...predata,
      image: [...predata.image, ...imagesurl],
    }));

    setImages([...images, ...imagesurl]);
  }

  return (
    <div className="w-[100%] px-[28px] max-sd:px-[10px] my-[25px] text-text1">
      <h1 className="text-[28px] font-medium mb-[10px]">Edit Blog</h1>

      <form
        className="w-[100%] flex justify-between max-xxxl:flex-col max-xxxl:gap-[20px]"
        onSubmit={handleSubmit}
      >
        <div className="w-[49.5%] max-xxxl:w-[100%] h-[100%] bg-secondary p-[16px] border-[1px] border-border rounded-[9px]">
          <div className="flex flex-col gap-[15px]">
            <div className="flex flex-col gap-[10px]">
              <h4 className="text-[14px] font-medium">
                Blog Title <span className="text-red-500 text-[17px]">*</span>
              </h4>
              <input
                type="text"
                placeholder="Enter product name"
                name="blogTitle"
                value={blog.blogTitle}
                onChange={handleChange}
                className="w-[100%] h-[50px] bg-transparent border-[1px] border-border px-[15px] rounded-[8px] placeholder:text-[13px] focus:border-blue focus:ring-1 focus:ring-blue outline-none"
                required
              />
              <h5 className="text-[12px] text-text2 font-light">
                Do not exceed 20 characters when entering the product name.
              </h5>
            </div>
            <div className="flex flex-col gap-[10px]">
              <h4 className="text-[14px] font-medium">
                Aurthor Name <span className="text-red-500 text-[17px]">*</span>
              </h4>
              <input
                type="text"
                placeholder="Enter product name"
                name="aurthor"
                value={blog.aurthor}
                onChange={handleChange}
                className="w-[100%] h-[50px] bg-transparent border-[1px] border-border px-[15px] rounded-[8px] placeholder:text-[13px] focus:border-blue focus:ring-1 focus:ring-blue outline-none"
                required
              />
            </div>

            <div className="flex justify-between gap-[10px]">
              <div className="flex flex-col gap-[10px] w-[48%]">
                <h4 className="text-[14px] font-medium">
                  Category <span className="text-red-500 text-[17px]">*</span>
                </h4>
                <select
                  name="category"
                  value={blog.category}
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
                  Product Date
                  <span className="text-red-500 text-[17px]">*</span>
                </h4>
                <input
                  type="date"
                  name="productDate"
                  value={blog.productDate}
                  onChange={handleChange}
                  className="text-text2 text-[13px] py-[14px] px-[22px] rounded-[8px] border-[1px] border-border bg-transparent focus:outline-none"
                />
              </div>
            </div>

            <div className="flex flex-col gap-[10px]">
              <h4 className="text-[14px] font-medium">
                Description <span className="text-red-500 text-[17px]">*</span>
              </h4>

              <textarea
                name="description"
                value={blog.description}
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
        <div className="w-[49.5%] max-xxxl:w-[100%] h-[100%] bg-secondary p-[16px] border-[1px] border-border rounded-[9px] flex flex-col gap-[20px]">
          <h4 className="text-[14px] font-medium">Upload images</h4>
          <div className="flex justify-between w-[100%] h-[25vh] max-sd:h-[21vh]">
            {images.map((image, index) => (
              <>
                <div
                  className="w-[32%] h-full border-[1px] border-border rounded-[8px] flex items-center"
                  key={index}
                >
                  <img src={image} alt="Error-Image" key={index} />
                </div>
              </>
            ))}
            <label className="w-[32%] h-full border-[1px] border-blue border-dashed rounded-[8px] flex flex-col items-center justify-center cursor-pointer px-[15px]">
              <i className="bi bi-cloud-arrow-up text-[50px] max-sd:text-[35px] text-blue"></i>
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

          <button className="py-[15px] px-[22px] bg-blue text-white rounded-[8px] w-fit">
            Save Blog
          </button>
        </div>
      </form>
    </div>
  );
}

export default EditBlogCom;
