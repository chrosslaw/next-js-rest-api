import Image from "next/image";

export default function Header({ setSearchTerm }) {
  return (
    <header className="w-full h-56 bg-black rounded-md flex flex-col justify-center items-center">
      <div className="h-44 w-44 ">
        <Image src="/logo.png" width={175} height={175} />
      </div>
      <form>
        <input
          id="search"
          type="text"
          // value={searchInput}
          // onChange={onSearchChangeHandler}
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
