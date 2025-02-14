import { useDispatch, useSelector } from "react-redux";
import {
  removeproduct,
  toggleeditproduct,
} from "../../../ReduxToolkit/ProductSlice";
import EditProductCom from "./EditProductCom";

function ProductListCom() {
  let products = useSelector((state) => state.product.products);
  let editproduct = useSelector((state) => state.product.editproduct);
  let dispatch = useDispatch();

  return (
    <>
      <EditProductCom />

      <div className="px-[25px] my-[20px]">
        <h1 className="text-[28px] font-medium mb-[15px] text-text1">
          Product List
        </h1>
        <div className="w-[100%] h-[82vh] bg-secondary border-[1px] border-border rounded-[8px] p-[16px] text-text1 flex flex-col gap-[30px]">
          <h5 className="text-[16px]">Top Orders</h5>
          <div className="flex justify-between bg-[#1E293B] py-[16px] pl-[16px] pr-[35px]">
            <div className="flex gap-[50px]">
              <h4 className="text-[14px] font-medm">#</h4>
              <h4 className="text-[15px] font-medium">Product</h4>
            </div>
            <div className="flex justify-between w-[38%]">
              <div className="flex gap-[80px]">
                <h4 className="text-[15px] font-medium">Price</h4>
                <h4 className="text-[15px] font-medium">Status</h4>
              </div>
              <div className="flex gap-[55px]">
                <h4 className="text-[15px] font-medium">Category</h4>
                <h4 className="text-[15px] font-medium">Actions</h4>
              </div>
            </div>
          </div>

          <div
            className="flex flex-col gap-[10px] overflow-y-auto"
            style={{
              scrollbarWidth: "thin",
              scrollbarColor: "#4b5563 transparent",
            }}
          >
            {products.map((data, index) => {
              return (
                <div
                  className="p-[16px] flex justify-between items-center border-b-[1px] border-border"
                  key={index}
                >
                  <div className="flex items-center gap-[50px]">
                    <h4 className="text-[14px] font-medium">{index}</h4>
                    <div className="flex items-center gap-[15px]">
                      <img
                        src={data.image[0]}
                        alt="Error-Image"
                        className="w-[57px] h-[57px] object-cover rounded-[8px]"
                      />
                      <div className="flex flex-col gap-[2px]">
                        <h4 className="text-[15px] font-medium">
                          {data.productName}
                        </h4>
                        <h5 className="text-[15px] text-text2">
                          {data.description}
                        </h5>
                      </div>
                    </div>
                  </div>
                  <div className="flex justify-between w-[39%]">
                    <div className="flex gap-[80px]">
                      <h4 className="text-[15px] font-medium">{`$${data.price}`}</h4>
                      <h4 className="text-[15px] font-medium text-center">
                        {data.status}
                      </h4>
                    </div>
                    <div className="flex gap-[85px]">
                      <h4 className="text-[15px] font-medium flex items-center gap-[8px]">
                        {data.category}
                      </h4>
                      <div className="flex gap-[20px]">
                        <i
                          className="bi bi-pencil-square text-blue text-[18px] cursor-pointer"
                          onClick={() => dispatch(toggleeditproduct({ index }))}
                        ></i>
                        <i
                          className="bi bi-trash text-red-400 text-[18px] cursor-pointer"
                          onClick={() => dispatch(removeproduct(index))}
                        ></i>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
}

export default ProductListCom;
