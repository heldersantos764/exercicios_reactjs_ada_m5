import { FC, useState } from "react";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";

const Tabs: FC = () => {
  const [activatedPage, setActivatedPage] = useState(<Home />);
  const [activeTab, setActiveTab] = useState("home");

  const pagesMap = {
    home: <Home />,
    about: <About />,
    contact: <Contact />,
  };

  const tabsData = [
    { name: "home", label: "Home" },
    { name: "about", label: "Sobre" },
    { name: "contact", label: "Contato" },
  ];

  const handleTabClick = (tab: string) => {
    setActivatedPage(pagesMap[tab]);
    setActiveTab(tab);
  };  

  return (
    <>
      <ul className="nav nav-tabs">
        {tabsData.map((tab, index) => (
          <li className="nav-item" key={index}>
            <button
              className={`nav-link ${activeTab === tab.name ? "active" : ""}`}
              onClick={() => handleTabClick(tab.name)}
            >
              {tab.label}
            </button>
          </li>
        ))}
      </ul>

      <div>{activatedPage}</div>
    </>
  );
};

export default Tabs;
