import React from "react";
import "./organisation.css";
import "./shared.css"; // Import the shared CSS file

const organisationdetails = [
  {
    total: "95%",
    details: "Succeeded Students"
  },
  {
    total: "2132",
    details: "New Enrollments"
  },
  {
    total: "100",
    details: "Current Teachers"
  },
  {
    total: "20",
    details: "Awards"
  }
];

const Organisation = () => {
  
  return (
    <div className="org-container background-container">
      <h1 className="org-header">A Few Facts About Our Organization</h1>
      <div className="row">
        <div className="col-md-6">
          <div className="row row-cols-1 row-cols-md-2 g-4">
            {organisationdetails.map((data, index) => (
              <div key={index}>
                <div className="org-card h-100">
                  <div className="card-body">
                    <h3 className="org-total">{data.total}</h3>
                    <p className="org-para">{data.details}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="col-md-6">
          <div className="cardimg">
            <img src="carrer.jpg" alt="orgimg" className="card-img-top img-fluid" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Organisation;
