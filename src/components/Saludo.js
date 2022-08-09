import React, { useState } from "react";
import Button from "react-bootstrap/Button";

const Saludo = (props) => {
  const [claveMsje, setClaveMsje] = useState("");
  return (
    <div className="p-4">
      <h1 className="display-4">
        Hello {props.nombreSaludo}
        {claveMsje}!
      </h1>
      <Button
        variant="warning"
        onClick={() => setClaveMsje(" (from changed state)")}
      >
        Click me
      </Button>
    </div>
  );
};

export default Saludo;
