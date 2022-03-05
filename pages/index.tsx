import type { NextPage } from "next";
import Layout from "../components/Layout";
import Main from "../components/Main";

const Home: NextPage = () => {
  return (
    <Layout
      general={{ name: "AmirBlog", description: "HHHH", logo: { url: "URL" } }}
    >
      <Main />
    </Layout>
  );
};

export default Home;
