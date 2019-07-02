import React from "react";

function RequestAQuote() {
  return (
    <div className="container mx-auto pt-24 pb-12">
      <div className="text-center">
        <h3 className="text-2xl uppercase after-border-grey mb-4 inline-block">
          Reach out for a free demo
        </h3>
        <p className="my-2">
          We offer a no obligation demo. Just fill out the form on the next page
          and a representative will be in touch.
        </p>
        <p className="mt-12">
          <a
            className="py-2 px-4 text-xl border-grey-400 border uppercase"
            href="/contact"
          >
            Request a Demo
          </a>
        </p>
      </div>
    </div>
  );
}
export default RequestAQuote;
