import React from "react";
import 'materialize-css/dist/css/materialize.min.css';
import M from 'materialize-css';
import '@fortawesome/fontawesome-free/css/all.min.css';

const Float = ()=>{

	document.addEventListener('DOMContentLoaded', function() {
	    const elems = document.querySelectorAll('.fixed-action-btn');
	    M.FloatingActionButton.init(elems);
	});

	const open = () => {
		const elems = document.querySelectorAll('.modal');
    	M.Modal.init(elems[0]).open();
	}

  return (
  	<div className="fixed-action-btn">
	  <a className="btn-floating btn-large red">
	    <i className="large material-icons">message</i>
	  </a>
	  <ul>
	    <li><button onClick={open} data-target="modal1" className="btn-floating green modal-trigger"><i className="fab fa-whatsapp"></i></button></li>
	    <li><a href="https://instagram.com/ikhfan_yusuf" className="social btn-floating yellow darken-2"><i className="fab fa-instagram"></i></a></li>
    	<li><a href="https://twitter.com/myname_iye" className="btn-floating light-blue lighten-2"><i className="fab fa-twitter"></i></a></li>
    	<li><a href="https://youtube.com/ikhfanyusuf" className="btn-floating red"><i className="fab fa-youtube"></i></a></li>
    	<li><a href="https://github.com/ikhfanyusuf" className="btn-floating black"><i className="fab fa-github"></i></a></li>
	  </ul>
	</div>
  );
}

export default Float;
