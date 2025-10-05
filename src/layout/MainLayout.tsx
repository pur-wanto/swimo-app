import { Outlet, useLocation } from "react-router-dom";
import BottomTabs from "../components/BottomTabs";

const MainLayout = () => {
  const location = useLocation();

  const allowedPaths = ["/dashboard", "/activity", "/workout", "/setting"];
  const showBottomTabs = allowedPaths.includes(location.pathname);

  const activeTab = location.pathname.replace("/", "") as
    | "feed"
    | "activity"
    | "workout"
    | "setting";

  return (
    <div className="flex flex-col min-h-screen bg-white relative">
      <div className="flex-1 overflow-y-auto pb-24">
        <Outlet />
      </div>

      {showBottomTabs && (
        <div className="fixed bottom-0 left-0 right-0 z-50">
          <BottomTabs isActive={activeTab} />
        </div>
      )}
    </div>
  );
};

export default MainLayout;