import React, { useContext, useEffect } from "react";

import Layout from "../../components/Layout";
import BlogRoll from "../../components/BlogRoll";
import ThemeContext from "../../context/theme-context";

export default function BlogIndexPage() {
  const theme = useContext(ThemeContext);

  const themeColor = 'sea';

  useEffect(() => {
    theme.setColor(themeColor);
  }, []);

  return (
    <Layout>
      <div className={`bg-${themeColor}-600 text-white-100 shadow`}>
        <div className="container m-auto">
          <h1 className="p-4 font-bold">Latest Posts</h1>
        </div>
      </div>
      <section className="section py-12">
        <div className="container m-auto">
          <div className="content py-6">
            <BlogRoll className="w-full md:w-1/2" />
          </div>
        </div>
      </section>
    </Layout>
  );
}
