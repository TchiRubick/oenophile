import React from "react";

type MasonryProps = {
  children: React.ReactNode;
};

const Masonry: React.FC<MasonryProps> = ({ children }) => {
  return (
    <div
      className="columns-1 md:columns-2 lg:columns-3 xl:columns-4"
    >
      {children}
    </div>
  );
};

export default Masonry;
