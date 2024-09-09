import React from "react";
import './asso.css';
import "./shared.css"; // Import the shared CSS file

const associatedata=[
    
    {
        region: "Bihar & Jharkhand", 
         companyName:"Allicient Technologies Pvt. Ltd.",
         address: "Rajendera Nagar, Road no.13B, Patna, Bihar 800016",
          authorizedPerson: "Mr. Sandeep Kumar",
          contactNo: "82107 61990",
        },

        {
            region: "Delhi",
              companyName: "Balaji EduTech",
                 address: "1/5261, First Floor, Gali No. 10, Balbir Nagar, Delhi 110032",
                 authorizedPerson: "Smt. Monika Garg",
                contactNo: "85959 96420",
            },

            {
                region: "Ghaziabad",
                companyName: "Prakhar Foundation",
                address: "J-106, Patel Nagar 1st, Ghaziabad, UP 201001",
                authorizedPerson: "Smt. Namita Bhalla",
                contactNo: "78384 24819",
                },

                {
                    region: "Agra and Aligarh Zones",
                    companyName: "Krishti Consulting Services",
                    address: "FFF 02, Basera, Dayal Bagh, Agra, UP 282005",
                    authorizedPerson: "Mr. Bhoopendra Singh Yadav",
                    contactNo: "84106 72497",
                    },

];

const Associates =()=>{
    
    return(
         <div className="associates-container background-container mt-4">
            <h1 className="associates-heading">Our Associates in various states and zones</h1>
            {/* row row-cols-1 row-cols-md-2 this for 2 card at one page and also gape between them */}
            <div className="row row-cols-1 row-cols-md-2">
                {associatedata.map((associate,index)=>(
                   
                    <div key={index}>
                        <div className="associates-card">
                        <h2 className="associates-region">{associate.region}</h2> 
                        <p className="associates-company-name">{associate.companyName}</p>
                        <p className="associates-address">{associate.address}</p>
                        <p className="associates-ap">Authorized Person:{associate.authorizedPerson}</p> 
                        <p className="associates-cn">Contact No: {associate.contactNo}</p>
                    
                     </div>
                     </div>
                   

                ))}
            </div>
         </div>
    );
}

export default Associates;