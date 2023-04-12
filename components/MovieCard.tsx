import React from "react";

const MovieCard = ({ name, onLocationSelect }: any) => {
  return (
    <div
      style={{
        width: "150px",
        height: "220px",
        backgroundColor: "whitesmoke",
        margin: "10px",
      }}
      onClick={() => onLocationSelect(name)}
      className="hover:scale-110 ease-in-out duration-300"
    >
      <div className="text-center">{name}</div>
    </div>
  );
};

export default MovieCard;
