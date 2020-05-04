import Link from "next/link";

const data = {
  Navbar: {
    config: [
      { bg: "white" },
      { color: "rgb(28, 30, 33)" },
      { "font-size": "17px" },
      { "font-weight": 500 },
    ],
    left: { logo: "34x32", text: "Create React App" },
    right: [
      { type: "text", value: "Docs" },
      { type: "text", value: "Help" },
      { type: "text", value: "Github" },
      { type: "button", whatitdoes: "switch the color of the website" },
      { type: "search", placeholder: "Search", icon: "iconurlhere" },
    ],
  },
};

export function Nav() {
  return (
    <nav>
      <div>
        <Link href="/">
          <a>Index</a>
        </Link>
      </div>
      <div>
        <Link href="/sidebar">
          <a>Sidebar</a>
        </Link>
      </div>
    </nav>
  );
}
