function Footer() {
  return (
    <div className=" h-footer bg-blue-600 m-1 flex justify-between items-center bg-gradient-to-r from-footer_start to-footer_end">
      <div className="flex flex-col justify-between p-3 h-full">
        <span className="text-white text-xs font-bold">PREVIEW OF SPOTIFY</span>
        <span className="text-white text-xs font-bold">
          Sign up to get unlimited songs and podcasts with occassional ads. No
          credit card needed
        </span>
      </div>
      <div>
        <button className=" bg-white h-full rounded-full flex items-center me-4 ">
          <span className=" text-sm font-bold my-4 mx-9 hover:text-base">
            {" "}
            Sign up free
          </span>
        </button>
      </div>
    </div>
  );
}

export default Footer;
