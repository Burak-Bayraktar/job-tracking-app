import React from "react";
import PropTypes from "prop-types";
import Header from "./Header";
import Footer from "./Footer";
import './style.scss'

const Layout = ({ children }) => {
  return (
    <>
      <Header />
        <div className="content-container">
          {children}
        </div>
      <Footer />
    </>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};
export default Layout;
