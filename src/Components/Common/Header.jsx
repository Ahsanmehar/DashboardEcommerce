function Header() {
  return (
    <div className="w-[100%] bg-secondary flex justify-between items-center py-[12px] px-[28px] text-[#94a3b8]">
      <div className="flex items-center gap-[15px]">
        <i className="bi bi-arrow-bar-left text-[20px] cursor-pointer"></i>
        <form className="w-[320px] h-[40px]">
          <input
            type="text"
            placeholder="Search..."
            className="w-[100%] h-[100%] bg-transparent border-[1px] border-border px-[8px] rounded-[8px] placeholder:text-[15px] focus:border-blue focus:ring-1 focus:ring-blue outline-none"
          />
        </form>
      </div>

      <div className="flex items-center gap-[15px]">
        <i className="bi bi-moon text-[18px] cursor-pointer"></i>
        <i className="bi bi-bell text-[18px] cursor-pointer"></i>
        <img
          src="https://png.pngtree.com/png-vector/20220709/ourmid/pngtree-businessman-user-avatar-wearing-suit-with-red-tie-png-image_5809521.png"
          alt="Error-Image"
          className="w-[42px] h-[42px] border-blue border-[1px] rounded-[50%]"
        />
      </div>
    </div>
  );
}

export default Header;
