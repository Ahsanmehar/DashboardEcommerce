import { NavLink } from "react-router-dom";
import { useDispatch } from "react-redux";
import { sidebarclick } from "../../ReduxToolkit/SidebarNavSlice";

function SidebarNav() {
  let dispatch = useDispatch();

  return (
    <div className="w-[240px] h-full bg-secondary fixed top-[0] left-[0] bottom-[0] z-40 border-r-[1px] border-border text-text1 p-[16px] flex flex-col gap-[30px]">
      <div className="w-[100%] flex justify-between">
        <div className="flex gap-[10px]">
          <i className="bi bi-amd text-[18px]"></i>
          <h2 className="text-[18px]">Logoipsum</h2>
        </div>
        <i
          className="bi bi-x-square cursor-pointer hidden max-xxl:block"
          onClick={() => dispatch(sidebarclick())}
        ></i>
      </div>

      <div className="w-[100%] flex flex-col gap-[15px]">
        <div className="flex flex-col gap-[10px]">
          <h4 className="text-[14px] text-text2 font-medium">Dashboard</h4>
          <div className="flex flex-col gap-[10px]">
            <NavLink
              to={"/"}
              className={({ isActive }) =>
                isActive ? "is-Active" : "is-Active-hover"
              }
            >
              <i className="bi bi-house-door text-[21px]"></i>
              <h2 className="text-[15px] font-medium">Dashboard</h2>
            </NavLink>
            <NavLink
              to={"/analytics"}
              className={({ isActive }) =>
                isActive ? "is-Active" : "is-Active-hover"
              }
            >
              <i className="bi bi-graph-up-arrow text-[21px]"></i>
              <h2 className="text-[15px] font-medium">Analytics</h2>
            </NavLink>
            <NavLink
              to={"/reports"}
              className={({ isActive }) =>
                isActive ? "is-Active" : "is-Active-hover"
              }
            >
              <i className="bi bi-clipboard-pulse text-[21px]"></i>
              <h2 className="text-[15px] font-medium">Reports</h2>
            </NavLink>
          </div>
        </div>

        <div className="flex flex-col gap-[10px]">
          <h4 className="text-[14px] text-text2 font-medium">Products</h4>
          <div className="flex flex-col gap-[10px]">
            <NavLink
              to={"/addproduct"}
              className={({ isActive }) =>
                isActive ? "is-Active" : "is-Active-hover"
              }
            >
              <i className="bi bi-bag-plus text-[21px]"></i>
              <h2 className="text-[15px] font-medium">Add Product</h2>
            </NavLink>
            <NavLink
              to={"/productlist"}
              className={({ isActive }) =>
                isActive ? "is-Active" : "is-Active-hover"
              }
            >
              <i className="bi bi-bag-check text-[21px]"></i>
              <h2 className="text-[15px] font-medium">Product list</h2>
            </NavLink>
          </div>
        </div>

        <div className="flex flex-col gap-[10px]">
          <h4 className="text-[14px] text-text2 font-medium">Blog</h4>
          <div className="flex flex-col gap-[10px]">
            <NavLink
              to={"/addblog"}
              className={({ isActive }) =>
                isActive ? "is-Active" : "is-Active-hover"
              }
            >
              <i className="bi bi-book text-[21px]"></i>
              <h2 className="text-[15px] font-medium">Add Blog</h2>
            </NavLink>
            <NavLink
              to={"/bloglist"}
              className={({ isActive }) =>
                isActive ? "is-Active" : "is-Active-hover"
              }
            >
              <i className="bi bi-book-half text-[21px]"></i>
              <h2 className="text-[15px] font-medium">Blog list</h2>
            </NavLink>
          </div>
        </div>

        <div className="flex flex-col gap-[10px]">
          <h4 className="text-[14px] text-text2 font-medium">Settings</h4>
          <div className="flex flex-col gap-[10px]">
            <NavLink
              to={"/g"}
              className={({ isActive }) =>
                isActive ? "is-Active" : "is-Active-hover"
              }
            >
              <i className="bi bi-gear text-[21px]"></i>
              <h2 className="text-[15px] font-medium">Settings</h2>
            </NavLink>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SidebarNav;
