import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Accordion from "../../css/Accordion.css";
import Label from "./Label";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function AccordionItem({ id = "", collapse = "", children, mainheading = "" }) {
  return (
    <div className="accordion accordion-flush" id="accordionFlushExample ">
      <div className="accordion-item">
        <Label headingsecond className="accordion-header" id={id}>
          <button
            class="accordion-button collapsed"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target={"#" + collapse}
            aria-expanded="false"
            aria-controls={collapse}
          >
            {mainheading}
          </button>
        </Label>
        <div
          id={collapse}
          class="accordion-collapse collapse"
          aria-labelledby={id}
          data-bs-parent="#accordionFlushExample"
        >
          <div class="accordion-body">{children}</div>
        </div>
      </div>
    </div>
  );
}

export default AccordionItem;
