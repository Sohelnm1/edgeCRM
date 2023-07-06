import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

function ActivityBar() {
  return (
    <>
      <div class="row d-flex justify-content-center align-items-center h-100">
        <div class="card mb-5">
          <div class="card-body p-4">
            <div className="row w-100">
              <div className="col-1">
                <img
                  width="36"
                  height="36"
                  src="https://testing.edgecrm.in/files/f71/771/63c/833/dff/4b3/8fc/8d2/872/f1e/f7177163c833dff4b38fc8d2872f1ec6.png"
                />
              </div>
              <div className="col">
                <div className="row">
                  <div className="col">
                    <h3 class="mb-3">Edge Consultant</h3>
                  </div>
                  <div className="col">
                    <span>03-Apr-2023 18:19</span>
                  </div>
                </div>
                <div className="row">
                  <p class="small mb-0">
                    Edge Consultant has created the Repository
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ActivityBar;
