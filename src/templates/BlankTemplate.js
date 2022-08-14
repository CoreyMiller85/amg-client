import React, { useRef, useEffect } from "react";

const BlankTemplate = ({
  name,
  address,
  community,
  issue,
  templateContent,
}) => {
  const ref = useRef();

  useEffect(() => {
    templateContent(ref.current);
  }, []);

  return (
    <div className="email-content" ref={ref}>
      <h3 className="name">{name}</h3>
      <h4 className="address">{address}</h4>
      <h4 className="community">{community}</h4>
      <br />
      <h4 className="greeting">Dear {name},</h4>

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

export default BlankTemplate;
