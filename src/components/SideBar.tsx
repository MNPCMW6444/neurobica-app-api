import NeurobicaColors from "../util/NeurobicaColors";
import Body from "./Body";
const { Sidebar, SidebarItem } = require("react-responsive-sidebar");

export default function SideBar() {
  const pages = [
    <SidebarItem
      href="/
    "
    >
      user
    </SidebarItem>,
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
