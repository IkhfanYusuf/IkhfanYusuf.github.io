import React from "react";


const Footer = ()=>{

  return (
    <footer className="page-footer blue-grey lighten-3">
	  <div className="container">
	  	<div className="row">
	  		<div className="col s12">
	  			<p className="center-align">This site build with &nbsp;
	      			<a href="https://materializecss.com/" className="grey-text text-lighten-5">materializecss</a>, &nbsp;
	      			<a href="https://fontawesome.com/" className="grey-text text-lighten-5">fontawesome</a>, &nbsp;
	      			<a href="https://reactjs.org/" className="grey-text text-lighten-5">react js.</a>
	      		</p>
	  		</div>
	  	</div>
	  </div>
	  <div className="footer-copyright">
	    <div className="container">
	      © 2021 Ikhfan Yusuf
	      <a href="https://instagram.com/ikhfan_yusuf" className="grey-text text-lighten-5 right">Ikhfan Yusuf</a>
	    </div>
	  </div>
	</footer>
  );
}

export default Footer;
