import React from "react";
import { navigate } from "gatsby-link";
import Layout from "../../components/Layout";

function encode(data) {
  return Object.keys(data)
    .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
    .join("&");
}

export default class Index extends React.Component {
  constructor(props) {
    super(props);
    this.state = { isValidated: false };
  }

  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleSubmit = e => {
    e.preventDefault();
    const form = e.target;
    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: encode({
        "form-name": form.getAttribute("name"),
        ...this.state
      })
    })
      .then(() => navigate(form.getAttribute("action")))
      .catch(error => alert(error));
  };

  render() {
    return (
      <Layout>
        <section className="section py-12">
          <div className="container m-auto">
            <div className="content flex flex-wrap">
              <div className="w-full md:w-1/3">
                <h1>Schedule a Demo</h1>
                <p>
                  Thank you for your interest in SMACK GRC. Submit this form and
                  we'll get in touch very soon.
                </p>
              </div>
              <div className="w-full md:w-2/3">
                <form
                  name="schedule_a_demo"
                  method="post"
                  action="/contact/thanks/"
                  data-netlify="true"
                  data-netlify-honeypot="bot-field"
                  onSubmit={this.handleSubmit}
                  className="mt-4 py-4 px-8 shadow-lg rounded"
                >
                  {/* The `form-name` hidden field is required to support form submissions without JavaScript */}
                  <input type="hidden" name="form-name" value="contact" />
                  <div hidden>
                    <label>
                      Don’t fill this out:{" "}
                      <input name="bot-field" onChange={this.handleChange} />
                    </label>
                  </div>
                  <div className="md:flex md:items-center mb-6">
                    <div className="md:w-1/3">
                      <label
                        className="block text-gray-700 text-sm font-bold mb-2"
                        htmlFor={"name"}
                      >
                        Your name
                      </label>
                    </div>
                    <div className="md:w-2/3">
                      <input
                        className="shadow appearance-none border border-grey-300 rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        type={"text"}
                        name={"name"}
                        onChange={this.handleChange}
                        id={"name"}
                        placeholder={"John Doe"}
                        required={true}
                      />
                    </div>
                  </div>
                  <div className="md:flex md:items-center mb-6">
                    <div className="md:w-1/3">
                      <label
                        className="block text-gray-700 text-sm font-bold mb-2"
                        htmlFor={"email"}
                      >
                        Email
                      </label>
                    </div>
                    <div className="md:w-2/3">
                      <input
                        className="shadow appearance-none border border-grey-300 rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        type={"email"}
                        name={"email"}
                        onChange={this.handleChange}
                        id={"email"}
                        placeholder={"john@gmail.com"}
                        required={true}
                      />
                    </div>
                  </div>
                  <div className="md:flex md:items-center mb-6">
                    <div className="md:w-1/3">
                      <label
                        className="block text-gray-700 text-sm font-bold mb-2"
                        htmlFor={"phone"}
                      >
                        Phone Number
                      </label>
                    </div>
                    <div className="md:w-2/3">
                      <input
                        className="shadow appearance-none border border-grey-300 rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        type={"phone"}
                        name={"phone"}
                        onChange={this.handleChange}
                        id={"phone"}
                        placeholder={"111-222-3333"}
                        required={true}
                      />
                    </div>
                  </div>
                  <div className="md:flex md:items-center mb-6">
                    <div className="md:w-1/3">
                      <label
                        className="block text-gray-700 text-sm font-bold mb-2"
                        htmlFor={"contact_time"}
                      >
                        Best time of day to contact
                      </label>
                    </div>
                    <div className="md:w-2/3">
                      <textarea
                        className="shadow appearance-none border border-grey-300 rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        name={"contact_time"}
                        onChange={this.handleChange}
                        id={"contact_time"}
                        placeholder={"Morning/afternoon/evening"}
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
    );
  }
}
