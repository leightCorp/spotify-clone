import spotify from "../../assets/svg/spotify.png";
import search from "../../assets/svg/search.svg";
import home from "../../assets/svg/home.svg";

function Nav() {
  return (
    <div className=" flex flex-col  h-52 bg-customGrey m-1 rounded-lg flex flex-row pl-6 pt-4">
      <div className="flex text-base  pb-4 ">
        <div className=" w-8">
          <img src={spotify} />
        </div>
        <h1 className="text-white font-semibold">Spotify</h1>
      </div>

      <div className="flex gap-4 mb-4 items-center">
        <div className="w-8">
          <img src={home} />
        </div>
        <h1 className="text-white font-semibold">Home</h1>
      </div>

      <div className=" flex gap-4 items-center">
        <div className=" w-8">
          <img src={search} />
        </div>
        <h1 className="text-gray-400 hover:text-white font-semibold">Search</h1>
      </div>
    </div>
  );
}

export default Nav;
