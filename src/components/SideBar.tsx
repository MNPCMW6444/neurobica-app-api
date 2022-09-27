import NeurobicaColors from "../util/NeurobicaColors";
import Body from "./Body";
import "../App.css";
const { Sidebar, SidebarItem } = require("react-responsive-sidebar");

export default function SideBar() {
  const pages = [
    <SidebarItem href="/isalive">areyoualive</SidebarItem>,
    <SidebarItem href="/user">
      user:
      {
        <ul>
          <li>
            <a className="notlink" href="/user/signin">
              signin
            </a>
          </li>
          <li>
            <a className="notlink" href="/user/signupreq">
              signupreq
            </a>
          </li>
          <li>
            <a className="notlink" href="/user/signupfin">
              signupfin
            </a>
          </li>
          <li>
            <a className="notlink" href="/user/signedin">
              signedin
            </a>
          </li>
          <li>
            <a className="notlink" href="/user/signeout">
              signeout
            </a>
          </li>
        </ul>
      }
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
