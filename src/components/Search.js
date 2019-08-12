import React, { useState, useEffect } from "react";
import { showDropdown } from "../utils";
import google from "../imgs/google.png";
import bing from "../imgs/bing.png";
import DuckDuckGo from "../imgs/duckduckgo.jpg";
const Search = () => {
  const [links, setLinks] = useState([
    {
      name: "Chrome Tab",
      link: "_blank",
      icon: "fab fa-chrome"
    },
    {
      name: "Apps",
      link: "chrome://apps/",
      icon: "fas fa-th"
    }
  ]);
  const [browsers] = useState([
    {
      name: "Google",
      link: "_blank",
      icon: google
    },
    {
      name: "Bing",
      link: "chrome://apps/",
      icon: bing
    },
    {
      name: "DuckDuckGo",
      link: "_blank",
      icon: DuckDuckGo
    }
  ]);
  const [newInputName, setNewInputName] = useState("");
  const [newLinkName, setNewLinkName] = useState("");

  const captureNameValue = e => {
    setNewInputName(e.target.value);
  };

  const captureLinkValue = e => {
    setNewLinkName(e.target.value);
  };

  const addItem = () => {
    setLinks([...links, { name: newInputName, link: newLinkName }]);
    showDropdown(0, "new-link-lightbox");
  };

  const keyPress = (e, url) => {
    if (e.which === 13) {
      window.open(`http://${url}.com/search?q=${newInputName}`);
    }
  };

  useEffect(() => {
    async function getAuthor() {
      const response = await fetch(
        "https://source.unsplash.com/daily?mountains",
        {
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json"
          }
        }
      );
      const json = await response.json();
      console.log(json);
    }
    getAuthor();
  }, []);

  return (
    <>
      <div className="search">
        <p
          className="white link-text"
          onClick={() => showDropdown(0, "search-dropdown-options")}>
          Links
        </p>

        <i className="fas fa-search white" />
        {/* <section>
          <input
            type="text"
            className="search-input-box"
            onChange={captureNameValue}
            onKeyPress={e => keyPress(e, "bing")}
          />
          <div className=" search-dropdown-browser-options">
            <select>
              <span className="white">Search with...</span>
              {browsers.map((browser, index) => (
                <option
                  key={index}
                  onClick={() => window.open(browser.link)}
                  value={browser.name}
                  className="dropdown-item white">
                  {browser.name}
                </option>
              ))}
            </select>
          </div>
        </section> */}

        {/* <section className="input-group"> */}
        <input
          type="text"
          className="form-control search-input-box"
          aria-label="Text input with dropdown button"
          onChange={captureNameValue}
          onKeyPress={e => keyPress(e, "bing")}
        />
        {/* <div className="input-group-append"> */}
        <button
          className="btn dropdown-toggle"
          type="button"
          data-toggle="dropdown"
          aria-haspopup="true"
          aria-expanded="false">
          Dropdown
        </button>
        <div className="dropdown-menu">
          <p>Search With</p>
          {browsers.map((browser, index) => (
            <a key={index} className="dropdown-item" href="#">
              <img width="15" src={browser.icon} alt={browser.name} />
              {browser.name}
            </a>
          ))}
        </div>
        {/* </div> */}
        {/* </section> */}
      </div>

      <div className="dropdown search-dropdown-options">
        {links.map((link, index) => (
          <p
            key={index}
            onClick={() => window.open(`http://${link.link}`, "_blank")}
            className="dropdown-item white"
            value={link.name}>
            <i className={link.icon ? link.icon : "fas fa-th"} /> {link.name}
          </p>
        ))}
        <p
          className="dropdown-item white"
          value="New Item..."
          onClick={() => showDropdown(0, "new-link-lightbox")}>
          <i className="fas fa-plus" /> New Item...
        </p>
      </div>

      <div className=" dropdown new-link-lightbox">
        <label htmlFor="name" className="white">
          Name
          <input
            type="text"
            name="name"
            className="input-box"
            onChange={e => captureNameValue(e)}
          />
        </label>
        <label htmlFor="links" className="white">
          Links
          <input
            type="text"
            className="input-box"
            placeholder="example.com"
            onChange={e => captureLinkValue(e)}
          />
        </label>
        <span className="white">
          <i className="fas fa-plus" /> Add Another Item
        </span>
        <button className="gray-button btn btn-default white" onClick={addItem}>
          Create
        </button>
      </div>
    </>
  );
};

export default Search;
