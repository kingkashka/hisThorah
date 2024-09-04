import React from "react";

function Footer() {
  // You can add JavaScript functionality here, for example, displaying the current year dynamically.

  // Get the footer element
  const footer = document.getElementById("footer");

  // Get the current year
  const currentYear = new Date().getFullYear();
  return (
    <>
      <div className="footer">
        <p>&copy; {currentYear} Understanding YHWH - יהוה. All rights reserved..</p>
      </div>
    </>
  );
}
export default Footer;
