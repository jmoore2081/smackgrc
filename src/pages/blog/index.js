import React, { useContext, useEffect } from "react";

import Layout from "../../components/Layout";
import BlogRoll from "../../components/BlogRoll";
import ThemeContext from "../../context/theme-context";

export default function BlogIndexPage() {
  const theme = useContext(ThemeContext);

  useEffect(() => {
    theme.setColor("green");
  }, []);

  return (
    <Layout>
      <div className="bg-green-600 text-white-100 shadow">
        <div className="container m-auto">
          <h1 className="p-4 font-bold">Latest Posts</h1>
        </div>
      </div>
      <section className="section">
        <div className="container m-auto">
          <div className="content py-6">
            <BlogRoll className="w-full md:w-1/2" />
          </div>
        </div>
      </section>
    </Layout>
  );
}
