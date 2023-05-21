import { useState } from "react";
import Image from "next/image";

export default function Header({ setSearchTerm }) {
  const [searchInput, setSearchInput] = useState("");
  const onSearchChangeHandler = (e) => {
    setSearchInput(e.target.value);
  };

  const onSearchInputSubmit = (e) => {
    e.preventDefault();
    setSearchTerm(searchInput);
    setSearchInput("");
  };
  return (
    <header className="w-full h-56 bg-black rounded-md flex flex-col place-items-center ">
      <div className="h-44 w-44 ">
        <Image src="/logo.png" width={175} height={175} />
      </div>

      <form onSubmit={onSearchInputSubmit}>
        <input
          id="search"
          type="text"
          value={searchInput}
          onChange={onSearchChangeHandler}
          placeholder="Search"
          className="text-center rounded-md p-1"
        />

        <button
          type="submit"
          id="search-clear-button"
          className="search-button"
          aria-label="Search"
        ></button>
      </form>
    </header>
  );
}
