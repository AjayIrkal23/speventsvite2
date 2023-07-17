const NavItem = ({ title }) => {
  return (
    <div className="flex justify-between hover:bg-[gold]  px-5  py-2 cursor-pointer rounded-sm  group">
      <p className="text-white font-[600] uppercase  group-hover:text-black">
        {title}
      </p>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
        className="w-6 h-6  font-bold text-white  group-hover:translate-x-3 transition-all duration-200 ease-in-out group-hover:animate-pulse  group-hover:text-black"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M11.25 4.5l7.5 7.5-7.5 7.5m-6-15l7.5 7.5-7.5 7.5"
        />
      </svg>
    </div>
  );
};

export { NavItem };
