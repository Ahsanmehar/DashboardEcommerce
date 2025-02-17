import { useDispatch, useSelector } from "react-redux";
import {
  removeproduct,
  toggleeditproduct,
} from "../../../ReduxToolkit/ProductSlice";
import EditProductCom from "./EditProductCom";

function ProductListCom() {
  const { products, editproduct } = useSelector((state) => state.product);

  let dispatch = useDispatch();

  return (
    <>
      {editproduct ? (
        <EditProductCom />
      ) : (
        <div className="px-[28px] my-[20px]">
          <h1 className="text-[28px] font-medium mb-[15px] text-text1">
            Product List
          </h1>
          <div className="w-[100%] h-[82vh] bg-secondary border-[1px] border-border rounded-[8px] p-[16px] text-text1 flex flex-col gap-[30px]">
            {products.length === 0 ? (
              <h1>No products added yet.</h1>
            ) : (
              <>
                <h5 className="text-[16px]">Top Products</h5>
                <div
                  className="relative w-full overflow-y-auto"
                  style={{
                    scrollbarWidth: "thin",
                    scrollbarColor: "#4b5563 transparent",
                  }}
                >
                  <table className="w-full">
                    {/* Table Head */}
                    <thead className="bg-[#1E293B] text-text1 sticky top-[0]">
                      <tr>
                        <th className="py-[14px] font-medium px-[16px] text-left w-[5%]">
                          #
                        </th>
                        <th className="py-[15px] font-medium text-left w-[35%]">
                          Product
                        </th>
                        <th className="py-[15px] font-medium text-center w-[15%]">
                          Price
                        </th>
                        <th className="py-[15px] font-medium text-center w-[15%]">
                          Status
                        </th>
                        <th className="py-[15px] font-medium text-center w-[15%]">
                          Category
                        </th>
                        <th className="py-[15px] font-medium text-center w-[15%]">
                          Actions
                        </th>
                      </tr>
                    </thead>

                    {/* Table Body */}
                    <tbody className="min-w-[100px] w-full">
                      {products.map((data, index) => (
                        <tr
                          className="border-b-[1px] border-border"
                          key={index}
                        >
                          {/* Index */}
                          <td className="px-[16px] text-left w-[5%]">
                            {index + 1}
                          </td>

                          {/* Product Image & Name */}
                          <td className="py-[16px] flex items-center gap-[15px]">
                            <img
                              src={[...new Set(data.image)][0]}
                              alt="Error-Image"
                              className="w-[57px] h-[57px] object-cover rounded-[8px]"
                            />
                            <div className="flex flex-col gap-[2px]">
                              <h4 className="text-[15px] font-medium whitespace-nowrap">
                                {data.productName}
                              </h4>
                              <h5 className="text-[15px] text-text2 whitespace-nowrap">
                                {data.description}
                              </h5>
                            </div>
                          </td>

                          {/* Price */}
                          <td className="p-[16px] text-center text-[15px] font-medium w-[15%] whitespace-nowrap">
                            {`$${data.price}`}
                          </td>

                          {/* Status */}
                          <td className="p-[16px] text-center text-[15px] font-medium w-[15%] whitespace-nowrap">
                            {data.status}
                          </td>

                          {/* Category */}
                          <td className="p-[16px] text-center text-[15px] font-medium w-[15%]">
                            {data.category}
                          </td>

                          {/* Actions */}
                          <td className="p-[16px] text-center w-[15%]">
                            <div className="flex justify-center gap-[20px]">
                              <i
                                className="bi bi-pencil-square text-blue text-[18px] cursor-pointer"
                                onClick={() =>
                                  dispatch(toggleeditproduct({ index }))
                                }
                              ></i>
                              <i
                                className="bi bi-trash text-red-400 text-[18px] cursor-pointer"
                                onClick={() => dispatch(removeproduct(index))}
                              ></i>
                            </div>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </>
            )}
          </div>
        </div>
      )}
    </>
  );
}

export default ProductListCom;
