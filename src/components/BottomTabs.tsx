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
  const navigate = useNavigate()

  const tabs = [
    {
      key: "feed",
      defaultIcon: Feed,
      activeIcon: FeedActive,
      route: "/dashboard",
    },
    {
      key: "activity",
      defaultIcon: Activity,
      activeIcon: ActivityActive,
      route: "/activity",
    },
    {
      key: "workout",
      defaultIcon: Workout,
      activeIcon: WorkoutActive,
      route: "/workout",
    },
    {
      key: "setting",
      defaultIcon: Setting,
      activeIcon: SettingActive,
      route: "/setting",
    },
  ] as const;

  return (
    <div className="flex p-4 border border-gray-100 bg-gray-50 rounded-2xl justify-between md:hidden m-4 ">
      {tabs.map((tab) => (
        <img
          key={tab.key}
          src={isActive === tab.key ? tab.activeIcon : tab.defaultIcon}
          alt={tab.key}
          className="cursor-pointer"
          onClick={() => navigate(tab.route)}
        />
      ))}
    </div>
  )
}

export default BottomTabs