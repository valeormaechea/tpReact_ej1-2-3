import React, { useState } from "react";
import Button from "react-bootstrap/Button";

const Saludo = (props) => {
  const [claveMsje, setClaveMsje] = useState("");
  return (
    <div className="p-4 text-center">
      <h1 className="display-4 p-3">
        Hello {props.nombreSaludo}
        {claveMsje}!
      </h1>
      <Button
        variant="warning"
        onClick={() => setClaveMsje(" (from changed state)")}
      >
        Hazme click
      </Button>
    </div>
  );
};

export default Saludo;
