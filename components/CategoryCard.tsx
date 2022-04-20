import * as React from "react";

interface categoryProps {
  emoji: string;
  group: string;
  handleFilter: (group: string) => void;
}

const CategoryCard: React.FunctionComponent<categoryProps> = ({
  emoji,
  group,
  handleFilter,
}) => {
  return (
    <>
      <button
        onClick={() => handleFilter(group)}
        className="flex items-baseline justify-end pr-7 rounded-md bg-gray-50 py-2 hover:bg-gray-100 text-left"
      >
        <p>{group}</p>
        <span className="text-xl ml-2" role={"img"} aria-label={emoji}>
          {emoji}
        </span>
      </button>
    </>
  );
};

export default CategoryCard;
