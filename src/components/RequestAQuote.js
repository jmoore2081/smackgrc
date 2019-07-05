import React from "react";
import { Link } from "gatsby";

function RequestAQuote() {
  return (
    <div className="bg-green-500 py-6 text-white-500">
      <div className="container mx-auto pt-12 pb-12 px-4 md:px-0">
        <div className="text-center">
          <h3 className="text-2xl uppercase after-border-white mb-4 inline-block">
            Reach out for a free demo
          </h3>
          <p className="my-2">
            We offer a no obligation demo. Just fill out the form on the next
            page and a representative will be in touch.
          </p>
          <p className="mt-6">
            <Link
              className="block md:inline-block mt-6 py-4 px-6 shadow-md rounded bg-white-500 hover:bg-white-600 text-grey-500 font-semibold uppercase no-underline"
              to="/contact/"
            >
              Request a Demo
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}
export default RequestAQuote;
