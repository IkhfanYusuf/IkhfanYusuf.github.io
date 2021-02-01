import React from "react";
import 'materialize-css/dist/css/materialize.min.css';
import M from 'materialize-css';

const Nav = ()=>{

	document.addEventListener('DOMContentLoaded', () => {
	    const sidenav = document.querySelectorAll('.sidenav');
	    M.Sidenav.init(sidenav);
	    
	 });

  return (
  	<div>
	    <nav className="z-depth-0 transparent">
		  <div className="nav-wrapper">
		    <a href="#" data-target="mobile-demo" className="sidenav-trigger show-on-medium-and-up"><i className="material-icons blue-grey-text text-lighten-1">menu</i></a>
		    <ul className="right hide-on-med-and-down blue-grey-text text-lighten-1">
				<li><a href="https://instagram.com/ikhfan_yusuf" className="valign-wrapper blue-grey-text text-lighten-2"><i className="fab fa-instagram"></i> &nbsp;Instagram</a></li>
		    	<li><a href="https://twitter.com/myname_iye" className="valign-wrapper blue-grey-text text-lighten-2"><i className="fab fa-twitter"></i> &nbsp;Twiter</a></li>
		    	<li><a href="https://youtube.com/ikhfanyusuf" className="valign-wrapper blue-grey-text text-lighten-2"><i className="fab fa-youtube"></i> &nbsp;Youtube</a></li>
		    	<li><a href="https://github.com/ikhfanyusuf" className="valign-wrapper blue-grey-text text-lighten-2"><i className="fab fa-github"></i> &nbsp;GitHub</a></li>
		    </ul>
		  </div>
		</nav>
		<ul className="sidenav" id="mobile-demo">
		    <li><a href="sass.html">Sass</a></li>
		    <li><a href="badges.html">Components</a></li>
		    <li><a href="collapsible.html">Javascript</a></li>
		    <li><a href="mobile.html">Mobile</a></li>
		    
		</ul>
	</div>
  );
}

export default Nav;
