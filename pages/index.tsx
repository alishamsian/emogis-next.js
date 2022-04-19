import type { NextPage } from "next";
import { useState } from "react";
import EmojiCard from "../components/EmojiCard";
import Layout from "../components/Layout";
import List from "../components/List";
import emojisData from "../data/emojis";

const Home: NextPage = () => {
  const [filteredEmojis, setFilteredEmojis] = useState(
    emojisData.slice(0, 100)
  );

  const handleFilterSearch = (search: string) => {
    if (search.trim().length > 0) {
      setFilteredEmojis(
        emojisData.filter((emoji) => 
          emoji.name.toUpperCase().includes(search.toUpperCase().trim())
        )
      );
    } else {
      setFilteredEmojis(emojisData.slice(0, 100));
    }
  };

  return (
    <Layout>
      <h1 className="text-2xl md:text-4xl font-bold text-gray-600 text-center tracking-wide">
        خوش اومدین به اموجی لند
      </h1>
      <input
        className="w-full max-w-xl border border-gray-300 p-3 rounded-md my-8 bg-white shadow-md focus:outline-none focus:border-cyan-500 focus:ring-1"
        type={"text"}
        id="name"
        placeholder="اموجی موردنظر را سرچ کنید"
        onChange={(e) => handleFilterSearch(e.target.value)}
      />
      <List emojis={filteredEmojis.slice(0, 100)} />
    </Layout>
  );
};

export default Home;
