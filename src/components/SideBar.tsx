import NeurobicaColors from "../util/NeurobicaColors";
import Body from "./Body";
const { Sidebar, SidebarItem } = require("react-responsive-sidebar");

export default function SideBar() {
  const pages = [
    <SidebarItem
      href="/
    "
    >
      Home
    </SidebarItem>,
    <SidebarItem href="/my-account">My Account</SidebarItem>,
    <SidebarItem href="/my-brain">My Brain</SidebarItem>,
    <SidebarItem href="/train-my-brain">Train My Brain</SidebarItem>,
  ];

  return (
    <div className="App">
      <Sidebar
        content={pages}
        background={NeurobicaColors.Main}
        color={NeurobicaColors.Second}
      >
        <Body />
      </Sidebar>
    </div>
  );
}
