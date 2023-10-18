import Library from "./dashboard/Library";
import Nav from "./dashboard/Nav";

function Dashboard() {
  return (
    <div className="flex flex-col w-2/6 h-full">
      <Nav />
      <Library />
    </div>
  );
}

export default Dashboard;
