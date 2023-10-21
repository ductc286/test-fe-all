import React from "react";
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import dynamic from "next/dynamic";

const DynamicComponent = dynamic(
  () =>
    import("@fortawesome/react-fontawesome").then((mod) => mod.FontAwesomeIcon),
  {
    ssr: false,
  }
);

export default function Mailroom() {

  const className = "col-span-12 sm:col-span-6 md:col-span-4 lg:col-span-3";
  return (
    <div>
  {/* Your <FontAwesomeIcon icon="face-angry" /> is hot! */}
  <i className="fa-solid fa-house" />
  abc
  <i className="fa-regular fa-user" />
  abc
  <i className="fa-solid fa-envelope"></i>
  <DynamicComponent icon={"fa-brands fa-apple" as any} />
  <DynamicComponent icon="fa-solid fa-house" />
  <DynamicComponent icon="fa-brands fa-apple" />
  <DynamicComponent icon="fa-regular fa-user" />
</div>
  );
}


