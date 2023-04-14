import React from "react";
import ScrollContainer from "react-indiana-drag-scroll";
import MovieCard from "./MovieCard";

const names = [
  "New York",
  "Kuala Lumpur",
  "Bangkok",
  "London",
  "Doha",
  "Paris",
  "Texas",
  "Moscow",
  "Delhi",
  "Mecca",
];

const Movies = ({ onLocationSelect, title }: any) => {
  const handleClick = (name: string) => {
    onLocationSelect(name);
  };

  return (
    <>
    <h2 className="text-white">
      {title}
    </h2>
      <ScrollContainer>
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            overflowX: "hidden",
            width: "200%",
            scrollbarWidth: "none",
            scrollBehavior:'smooth'
          }}
        >
          {names.map((name, index) => (
            <MovieCard
              key={index}
              name={name}
              onLocationSelect={() => handleClick(name)}
            />
          ))}
        </div>
      </ScrollContainer>
    </>
  );
};

export default Movies;