import React from "react";
import { usePageContextDashboad } from "./context/PageContextDashboard";

const PageDashboard = () => {
const {formData} = usePageContextDashboad()

  return (
    <div>
        {JSON.stringify(formData)}
      <h1>Nicolas Flores</h1>
    </div>
  );
};

export default PageDashboard;
