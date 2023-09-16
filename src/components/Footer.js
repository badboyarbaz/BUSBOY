

const Footer = () => {

  return (
    <footer
      className="relative bg-royalblue-100 w-full h-[287px] flex flex-col md:p-4 box-border items-start justify-start text-left text-5xl text-white font-poppins lg:flex lg:flex-col lg:items-center lg:justify-center"
    >
    <div className="sm:block md:block lg:hidden">
      {/* Logo */}
      <div>
        <a className="relative top-3 inset-x-32 gap-y-10 md:top-0 md:left-0  font-semibold text-[inherit] md:text-center lg:text-left">
          <span>BUS</span>
          <span className="text-gray-200">BOY</span>
        </a>
      </div>

      {/* Links */}
      <div className="relative flex px-4 pt-3">
        <div className="relative top-5 flex flex-col lg:flex-row inset-x-10 justify-center items-center gap-3 text-base">
          <a className="relative font-medium text-[inherit]">About us</a>
          <a className="relative font-medium text-[inherit]">Mobile</a>
          <a className="relative font-medium text-[inherit]">Privacy</a>
        </div>
        <div className="relative top-5 flex flex-col lg:flex-row inset-x-20  justify-center items-center gap-3 text-base">
          <a className="relative font-medium text-[inherit]">Terms of use</a>
          <a className="relative font-medium text-[inherit]">Career</a>
          <a className="relative font-medium text-[inherit]">Customer Service</a>
        </div>
      </div>


      {/* Social Links */}
      <div className="relative top-20 px-12 space-x-20 w-1/2 flex flex-row items-center justify-between z-[0]">
        <img
            className=""
            alt=""
            src="/vector.svg"
        />
        <img className="" alt="" src="/vector1.svg" />
        <img
            className=""
            alt=""
            src="/vector2.svg"
        />
      </div>
    </div>

      {/* New Grid layout for lg and bigger devices */}
      <div className="hidden lg:grid lg:grid-rows-2  lg:grid-cols-2 lg:gap-y-10 lg:gap-x-72 inset-0">
        {/* 1st row, 1st col: Logo */}
        <div className="flex items-center justify-start">
          <a className="font-semibold">
            <span>BUS</span>
            <span className="text-gray-200">BOY</span>
          </a>
        </div>
        {/* 1st row, 2nd col: Social Links */}
        <div className="flex items-center justify-end">
          <div className="flex items-center justify-between w-1/2">
            <img className="w-[27.5px] h-[32.5px]" alt="" src="/vector.svg" />
            <img className="w-[30px] h-[30px]" alt="" src="/vector1.svg" />
            <img className="w-[32.5px] h-[32.5px]" alt="" src="/vector2.svg" />
          </div>
        </div>
        {/* 2nd row, 1st col: Newsletter */}
        <div className="flex items-center justify-start ">
          <div>
            <div className="font-semibold">Planning your next trip?</div>
            <div className="text-sm font-medium">Subscribe to our newsletter. Get the latest travel trends & deals!</div>
          </div>
        </div>
        {/* 2nd row, 2nd col: Input box and img */}
        <div className="flex items-center justify-center">
          <input
              className="border-none font-medium font-poppins text-sm text-center bg-whitesmoke text-black rounded-3xl w-full h-14"
              type="email"
              placeholder="Enter Email ID"
              required
          />
          <img className="px-2" alt="" src="/vector4.svg" />
        </div>
      </div>
      {/* Bottom row: Links */}
      <div className="relative lg:block hidden flex-row justify-between space-x-10 pt-10 text-base">
        <a className="font-medium gap-2">About us</a>
        <a className="font-medium gap-2">Mobile</a>
        <a className="font-medium">Privacy</a>
        <a className="font-medium">Terms of use</a>
        <a className="font-medium">Career</a>
        <a className="font-medium">Customer Service</a>
      </div>
    </footer>
  );
};

export default Footer;
