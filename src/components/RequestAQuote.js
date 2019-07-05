import React from "react";
import { Link } from "gatsby";

function RequestAQuote() {
  return (
    <div className="container mx-auto pt-24 pb-12 px-4 md:px-0">
      <div className="text-center">
        <h3 className="text-2xl uppercase after-border-grey mb-4 inline-block">
          Reach out for a free demo
        </h3>
        <p className="my-2">
          We offer a no obligation demo. Just fill out the form on the next page
          and a representative will be in touch.
        </p>
        <p className="mt-12">
          <Link
            className="block md:inline-block mt-6 py-4 px-6 shadow-md rounded bg-yellow-500 hover:bg-yellow-600 text-yellow-100 font-semibold uppercase"
            to="/contact/"
          >
            Request a Demo
          </Link>
        </p>
      </div>
    </div>
  );
}
export default RequestAQuote;
