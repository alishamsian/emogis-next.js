import type { NextPage } from "next";
import { useState } from "react";
import CategoryCard from "../components/CategoryCard";
import EmojiCard from "../components/EmojiCard";
import Layout from "../components/Layout";
import List from "../components/List";
import emojisData from "../data/emojis";

const Home: NextPage = () => {
  const [currentSearch, setCurrentSearch] = useState("");
  const [filteredEmojis, setFilteredEmojis] = useState(
    emojisData.slice(0, 200)
  );


  const handleFilterBySearch = (search: string) => {
    setCurrentSearch(search.trim());
    if (search.trim().length > 0) {
      setFilteredEmojis(
        emojisData.filter((emoji) =>
          emoji.name.toUpperCase().includes(search.toUpperCase().trim())
        )
      );
    } else {
      setFilteredEmojis(emojisData.slice(0, 200));
    }
  };

  const handleFilterByCategory = (category: string) => {
    
    setFilteredEmojis(
      emojisData.filter((emoji) =>
      // console.log(emoji.group.toUpperCase().includes(category))
        emoji.group.toUpperCase().includes(category.toUpperCase())
      )
    );
  };

  return (
    <Layout>
      <h1 className="text-2xl md:text-4xl font-bold text-gray-600 text-center tracking-wide">
        خوش اومدین به اموجی لند
      </h1>
      <div className="flex items-center justify-center">
        <input
          className="w-full placeholder:text-right max-w-xl border border-gray-300 p-3 rounded-md my-8 bg-white shadow-md focus:outline-none focus:border-cyan-500 focus:ring-1"
          type={"text"}
          id="name"
          placeholder="اموجی موردنظر را سرچ کنید"
          onChange={(e) => handleFilterBySearch(e.target.value)}
        />
      </div>
      {currentSearch.length === 0 && (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-3 mb-8">
          <CategoryCard
            handleFilter={handleFilterByCategory}
            emoji="😀"
            group={"شکلک ها و احساسات"}
          />
          <CategoryCard
            handleFilter={handleFilterByCategory}
            emoji="👨🏻"
            group={"مردم و اعضای بدن"}
          />
          <CategoryCard
            handleFilter={handleFilterByCategory}
            emoji="🐶"
            group={"حیوانات و طبیعت"}
          />
          <CategoryCard
            handleFilter={handleFilterByCategory}
            emoji="🍔"
            group={"غذا و نوشیدنی"}
          />
          <CategoryCard
            handleFilter={handleFilterByCategory}
            emoji="⚽️"
            group="فعالیت ها"
          />
          <CategoryCard
            handleFilter={handleFilterByCategory}
            emoji="🏨"
            group={"سفر و مکان ها"}
          />
          <CategoryCard
            handleFilter={handleFilterByCategory}
            emoji="💡"
            group="اشیاء"
          />
          <CategoryCard
            handleFilter={handleFilterByCategory}
            emoji="⚛️"
            group="نمادها"
          />
          <CategoryCard
            handleFilter={handleFilterByCategory}
            emoji="🚩"
            group="پرچم ها"
          />
        </div>
      )}
      {!filteredEmojis.length && (
          <p className="text-center text-xl text-gray-500">{`متأسفم، نتونستم ایموجی با این عنوان پیدا کنم: ${currentSearch}`}</p>
        )}
        <List emojis={filteredEmojis} />
    </Layout>
  );
};

export default Home;
