import React, { useEffect, useContext } from "react";
import Layout from "../../components/Layout";
import ThemeContext from "../../context/theme-context";
import Thanks from "../../img/undraw_celebration_0jvk.svg"

export default () => {
  const theme = useContext(ThemeContext);

  useEffect(() => {
    theme.setColor('green');
  }, [])

  return (
    <Layout>
      <section className="section py-12 p-4 md:p-0">
        <div className="container m-auto">
          <div className="content py-24 text-center">
            <img src={Thanks} alt="thank you" className="w-3/4 md:w-1/3 m-auto mb-4" />
            <h1>Thank you!</h1>
            <p>Thank you for getting in touch. We will reach out soon!</p>
          </div>
        </div>
      </section>
    </Layout>
  );
};
