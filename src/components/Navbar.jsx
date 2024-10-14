import React from 'react';

const Navbar = ({ setname }) => {
  const handleNameChange = (e) => {
    setname(e.target.value); 
  };

  return (
    <>
      <div className="container nav_bar">
        <div className="left nav_items">Portfolio</div>
        <div className="right">
          <a href="#home" className="nav_items">Home</a>
          <a href="#experience" className="nav_items">Experience</a>
          <a href="#skill" className="nav_items">Skills</a>
          <a href="#project" className="nav_items">Projects</a>
          <a href="#contact" className="nav_items">Contact</a>

          {/* Input to change the name */}
          <input
            type="text"
            placeholder="Enter your name"
            onChange={handleNameChange} 
            className="name-input"
          />
        </div>
      </div>
    </>
  );
};

export default Navbar;
