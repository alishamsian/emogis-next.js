import type { NextPage } from "next";
import EmojiCard from "../components/EmojiCard";
import Layout from "../components/Layout";
import List from "../components/List";
import emojisData from "../data/emojis";

const Home: NextPage = () => {
  return (
    <Layout>
      <h1 className="text-2xl md:text-5xl font-bold text-gray-600 text-center tracking-wide">خوش اومدین به اموجی لند</h1>
     <List emojis={emojisData.slice(0, 100)} />
    </Layout>
  );
};

export default Home;
