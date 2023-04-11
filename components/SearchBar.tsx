import React from "react";

const SearchBar = () => {
  return (
    <input
      type="text"
      placeholder="Search for a movie, drama or genre ..."
      className="w-80 sm:w-96 md:w-96 lg:w-96 xl:w-96 rounded-lg px-4 py-1 text-sm sm:text-base"
    />
  );
};

export default SearchBar;
