import React from "react";
import { useEffect } from "react";

const DynamicPageTitle = ({ title }) => {
  useEffect(() => {
    document.title = `${title} | Eventero`;
  }, [title]);
  return null;
};

export default DynamicPageTitle;
