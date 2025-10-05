import { useNavigate } from "react-router-dom";
import {
  Activity,
  ActivityActive,
  Feed,
  FeedActive,
  Setting,
  SettingActive,
  Workout,
  WorkoutActive
} from "../assets";

interface BottomTabsProps {
  isActive: "feed" | "activity" | "workout" | "setting";
}

const BottomTabs = (props: BottomTabsProps) => {
  const { isActive } = props;
  const navigate = useNavigate();

  const tabs = [
    {
      key: "dashboard",
      label: "Feed",
      defaultIcon: Feed,
      activeIcon: FeedActive,
      route: "/dashboard",
    },
    {
      key: "activity",
      label: "Activity",
      defaultIcon: Activity,
      activeIcon: ActivityActive,
      route: "/activity",
    },
    {
      key: "workout",
      label: "Workout",
      defaultIcon: Workout,
      activeIcon: WorkoutActive,
      route: "/workout",
    },
    {
      key: "setting",
      label: "Setting",
      defaultIcon: Setting,
      activeIcon: SettingActive,
      route: "/setting",
    },
  ] as const;

  return (
    <div className="flex p-4 border border-gray-100 bg-gray-50 rounded-2xl justify-between md:hidden m-4">
      {tabs.map((tab) => (
        <div
          key={tab.key}
          className="flex flex-col items-center cursor-pointer w-full"
          onClick={() => navigate(tab.route)}
        >
          <img
            src={isActive === tab.key ? tab.activeIcon : tab.defaultIcon}
            alt={tab.key}
            className="w-6 h-6"
          />
          <p className={`text-xs mt-1 ${isActive === tab.key ? 'text-blue-500 font-medium' : 'text-gray-500'}`}>
            {tab.label}
          </p>
        </div>
      ))}
    </div>
  );
};

export default BottomTabs;