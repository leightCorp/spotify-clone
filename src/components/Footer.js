function Footer() {
  return (
    <div className=" h-footer p-4 bg-blue-600 m-1 flex justify-between items-center bg-gradient-to-r from-footer_start to-footer_end">
      <div className="flex flex-col justify-center h-full">
        <span className="text-white text-xs font-bold">PREVIEW OF SPOTIFY</span>
        <span className="text-white text-xs font-bold">
          Sign up to get unlimited songs and podcasts with occassional ads. No
          credit card needed
        </span>
      </div>
      <div>
        <button className=" bg-white p-4 rounded-full flex items-center">
          <span className=" text-xs font-bold"> sign up for free</span>
        </button>
      </div>
    </div>
  );
}

export default Footer;
