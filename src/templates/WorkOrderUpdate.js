import React from "react";
const WorkOrderUpdate = ({ name, address, community, issue }) => {
  return (
    <div className="email-content">
      <h3>{name}</h3>
      <h4>{address}</h4>
      <h4>{community}</h4>
      <br />
      <h4>Dear {name},</h4>
      <p>
        Thank you for reaching out to me today with concern for your work order
        request. I want to assure you that we will have someone out there to
        assist with {issue} soon as possible. I cannot at this time say what day
        that will be. We are working as diligently as possible to get to your
        issue as soon as we are able.
      </p>
      <p>
        If you have any questions, please contact me and/or your community
        manager, Danielle Rudisill. Danielle may be reached by phone or email
        Monday -Friday from 9:00 AM to 5:00 PM. Her direct line 704-897-8790, Or
        you may email her at danielle.rudisill@amgworld.com.
      </p>
      <p> Thank you,</p>
    </div>
  );
};

export default WorkOrderUpdate;
