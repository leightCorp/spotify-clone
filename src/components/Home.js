import HomeNav from "./home/HomeNav";
import Playlists from "./home/Playlists";
import About from "./home/About";

function Home() {
  return (
    <div className=" bg-customGrey m-1 rounded-lg w-full">
      <HomeNav />
      <Playlists />
      <About />
    </div>
  );
}

export default Home;
