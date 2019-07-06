import React, { useState, useContext, useEffect } from "react";
import { navigate } from "gatsby-link";
import Layout from "../../components/Layout";
import ThemeContext from "../../context/theme-context";

function encode(data) {
  return Object.keys(data)
    .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
    .join("&");
}

export default function Index(){
  const [formData, setFormData] = useState({});
  const theme = useContext(ThemeContext);

  useEffect(() => {
    theme.setColor('green');
  }, [])

  function handleChange(e) {
    formData[e.target.name] = e.target.value;
    const newFormData = {...formData};
    setFormData(newFormData);
  }

  function handleSubmit(e){
    e.preventDefault();
    const form = e.target;
    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: encode({
        "form-name": form.getAttribute("name"),
        ...formData
      })
    })
      .then(() => navigate(form.getAttribute("action")))
      .catch(error => alert(error));
  }

  return (
    <Layout>
        <section className="section py-12">
          <div className="container m-auto p-4 md:p-0">
            <div className="content flex flex-wrap">
              <div className="w-full md:w-2/5 pr-8">
                <h1>Schedule a Demo</h1>
                <p>
                  Thank you for your interest in SMACK GRC. Submit this form and
                  we'll get in touch very soon.
                </p>
              </div>
              <div className="w-full md:w-3/5">
                <form
                  name="schedule_a_demo"
                  method="post"
                  action="/contact/thanks/"
                  data-netlify="true"
                  data-netlify-honeypot="bot-field"
                  onSubmit={handleSubmit}
                  className="mt-4 py-4 px-8 shadow-lg rounded-lg bg-white-100"
                >
                  {/* The `form-name` hidden field is required to support form submissions without JavaScript */}
                  <input type="hidden" name="form-name" value="contact" />
                  <div hidden>
                    <label>
                      Don’t fill this out:{" "}
                      <input name="bot-field" onChange={handleChange} />
                    </label>
                  </div>
                  <div className="md:flex md:items-center mb-6">
                    <div className="md:w-1/3 md:pr-6">
                      <label
                        className="block text-grey-400 font-bold md:text-right mb-1 md:mb-0 pr-4"
                        htmlFor={"name"}
                      >
                        Your name
                      </label>
                    </div>
                    <div className="md:w-2/3">
                      <input
                        className="bg-grey-100 appearance-none border-2 border-grey-100 rounded w-full py-2 px-4 text-grey-700 leading-tight focus:outline-none focus:bg-white focus:border-yellow-500"
                        type={"text"}
                        name={"name"}
                        onChange={handleChange}
                        id={"name"}
                        placeholder={"John Doe"}
                        required={true}
                      />
                    </div>
                  </div>
                  <div className="md:flex md:items-center mb-6">
                    <div className="md:w-1/3 md:pr-6">
                      <label
                        className="block text-grey-400 font-bold md:text-right mb-1 md:mb-0 pr-4"
                        htmlFor={"email"}
                      >
                        Email
                      </label>
                    </div>
                    <div className="md:w-2/3">
                      <input
                        className="bg-grey-100 appearance-none border-2 border-grey-100 rounded w-full py-2 px-4 text-grey-700 leading-tight focus:outline-none focus:bg-white focus:border-yellow-500"
                        type={"email"}
                        name={"email"}
                        onChange={handleChange}
                        id={"email"}
                        placeholder={"john@gmail.com"}
                        required={true}
                      />
                    </div>
                  </div>
                  <div className="md:flex md:items-center mb-6">
                    <div className="md:w-1/3 md:pr-6">
                      <label
                        className="block text-grey-400 font-bold md:text-right mb-1 md:mb-0 pr-4"
                        htmlFor={"phone"}
                      >
                        Phone Number
                      </label>
                    </div>
                    <div className="md:w-2/3">
                      <input
                        className="bg-grey-100 appearance-none border-2 border-grey-100 rounded w-full py-2 px-4 text-grey-700 leading-tight focus:outline-none focus:bg-white focus:border-yellow-500"
                        type={"phone"}
                        name={"phone"}
                        onChange={handleChange}
                        id={"phone"}
                        placeholder={"111-222-3333"}
                        required={true}
                      />
                    </div>
                  </div>
                  <div className="md:flex md:items-center mb-6">
                    <div className="md:w-1/3 md:pr-6">
                      <label
                        className="block text-grey-400 font-bold md:text-right mb-1 md:mb-0 pr-4"
                        htmlFor={"contact_time"}
                      >
                        Please list 3 options for contact times
                      </label>
                    </div>
                    <div className="md:w-2/3">
                      <textarea
                        className="bg-grey-100 appearance-none border-2 border-grey-100 rounded w-full py-2 px-4 text-grey-700 leading-tight focus:outline-none focus:bg-white focus:border-yellow-500"
                        name={"contact_time"}
                        onChange={handleChange}
                        rows="3"
                        id={"contact_time"}
                        placeholder={"Wednesday at 3PM PST\nThursday at 1PM PST\nFriday at 4PM PST"}
                        required={true}
                      />
                    </div>
                  </div>
                  <div className="md:flex md:items-center">
                    <div className="md:w-2/3">
                      <button
                        className="block md:inline-block py-4 px-6 shadow-md rounded bg-yellow-500 hover:bg-yellow-600 text-yellow-100 font-semibold uppercase"
                        type="submit"
                      >
                        Send
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </section>
      </Layout>
  )
}
