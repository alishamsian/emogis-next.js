import * as React from "react";

export interface EmojiCardProps {
  code: string;
  emoji: string;
  name: string;
  category: string;
  group: string;
  subgroup: string;
}

const EmojiCard: React.FunctionComponent<EmojiCardProps> = ({
  code,
  emoji,
  name,
  category,
  group,
  subgroup,
}) => {
  return (
    <>
    <div className="p-2 bg-[#F7F6F3] rounded-xl shadow-md flex flex-col items-center">
      <span className="text-4xl md:text-5xl mb-2" role={'img'} aria-label={emoji}>{emoji}</span>
      <h3 className="font-bold text-gray-700">{name}</h3>
      <button className="text-blue-500 text-sm pt-3">
          more info
      </button>
    </div>
    </>
  );
};

export default EmojiCard;
