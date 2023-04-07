import React from "react";

const SearchBar = () => {
  return (
    <div>
      <input
        type="text"
        placeholder="Search for a movie, drama or genre ..."
        style={{width: '350px', borderRadius:'20px', padding:'3px'}}
      />

      
    </div>
  );
};

export default SearchBar;
