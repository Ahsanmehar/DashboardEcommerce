import { useDispatch, useSelector } from "react-redux";
import { removeblog, toggleeditblog } from "../../../ReduxToolkit/BlogSlice";
import EditBlogCom from "./EditBlogCom";

function BlogListCom() {
  let dispatch = useDispatch();
  let blogs = useSelector((state) => state.blog.blogs);
  let editblog = useSelector((state) => state.blog.editblog);

  console.log(blogs);

  return (
    <>
      {editblog ? (
        <EditBlogCom />
      ) : (
        <div className="px-[28px] max-sd:px-[10px] my-[20px]">
          <h1 className="text-[28px] font-medium mb-[15px] text-text1">
            Blog List
          </h1>
          <div className="w-[100%] h-[82vh] bg-secondary border-[1px] border-border rounded-[8px] p-[16px] text-text1 flex flex-col gap-[30px]">
            {blogs.length === 0 ? (
              <h1>No blog added yet.</h1>
            ) : (
              <>
                <h5 className="text-[16px]">Top blogs</h5>
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
                        <th className="py-[15px] font-medium text-left w-[45%]">
                          Blog
                        </th>
                        <th className="py-[15px] font-medium text-center w-[5%]">
                          Date
                        </th>
                        <th className="py-[15px] font-medium text-center w-[5%]">
                          Category
                        </th>
                        <th className="py-[15px] font-medium text-center w-[5%]">
                          Aurthor
                        </th>
                        <th className="py-[15px] font-medium text-center w-[5%]">
                          Actions
                        </th>
                      </tr>
                    </thead>

                    {/* Table Body */}
                    <tbody>
                      {blogs.map((data, index) => (
                        <tr
                          className="border-b-[1px] border-border"
                          key={index}
                        >
                          {/* Index */}
                          <td className="px-[16px] text-left w-[5%]">
                            {index + 1}
                          </td>

                          {/* Product Image & Name */}
                          <td className="py-[16px] flex items-center gap-[15px] w-[45%]">
                            <img
                              src={[...new Set(data.image)][0]}
                              alt="Error-Image"
                              className="w-[57px] h-[57px] object-cover rounded-[8px]"
                            />
                            <div className="flex flex-col gap-[2px]">
                              <h4 className="text-[15px] font-medium whitespace-nowrap">
                                {data.blogTitle}
                              </h4>
                              <h5 className="text-[15px] text-text2 whitespace-nowrap">
                                {data.description}
                              </h5>
                            </div>
                          </td>

                          {/* Price */}
                          <td className="p-[16px] text-center text-[15px] font-medium w-[5%] whitespace-nowrap">
                            {data.blogDate}
                          </td>

                          {/* Status */}
                          <td className="p-[16px] text-center text-[15px] font-medium w-[5%] whitespace-nowrap">
                            {data.category}
                          </td>

                          {/* Category */}
                          <td className="p-[16px] text-center text-[15px] font-medium w-[5%]">
                            {data.aurthor}
                          </td>

                          {/* Actions */}
                          <td className="p-[16px] text-center w-[5%]">
                            <div className="flex justify-center gap-[20px]">
                              <i
                                className="bi bi-pencil-square text-blue text-[18px] cursor-pointer"
                                onClick={() =>
                                  dispatch(toggleeditblog({ index }))
                                }
                              ></i>
                              <i
                                className="bi bi-trash text-red-400 text-[18px] cursor-pointer"
                                onClick={() => dispatch(removeblog(index))}
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

export default BlogListCom;
