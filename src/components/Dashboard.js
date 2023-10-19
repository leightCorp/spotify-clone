import Library from "./dashboard/Library";
import Nav from "./dashboard/Nav";

function Dashboard() {
  return (
    <div className="flex flex-col w-dashboard h-full">
      <Nav />
      <Library />
    </div>
  );
}

export default Dashboard;
