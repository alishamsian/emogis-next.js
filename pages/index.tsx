import type { NextPage } from "next";
import EmojiCard from "../components/EmojiCard";
import Layout from "../components/Layout";

const Home: NextPage = () => {
  return (
    <Layout>
      <EmojiCard
        emoji="😀"
        name="ali"
        code="1F600"
        category={"Smileys & Emotion (face-smiling)"}
        group={"Smileys & Emotion"}
        subgroup="face-smiling"
      />
    </Layout>
  );
};

export default Home;
