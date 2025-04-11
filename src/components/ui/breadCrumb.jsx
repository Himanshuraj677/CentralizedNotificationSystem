import React from "react";
import { useLocation, Link } from "react-router-dom";

const BreadCrumb = () => {
  const currentLocation = useLocation().pathname;
  const segment = currentLocation.split("/").filter(Boolean);
  return (
    <>
      <div className="flex flex-row gap-2 p-4">
        <Link to="/">Home</Link>
        {segment.map((value, index) => {
          const path = "/" + segment.slice(0, index + 1).join("/");
          const label = value.charAt(0).toUpperCase() + value.slice(1);
          return (
            <React.Fragment key={value}>
              <span>&gt;</span>
              <Link to={path}>{label}</Link>
            </React.Fragment>
          );
        })}
      </div>
    </>
  );
};

export default BreadCrumb;
