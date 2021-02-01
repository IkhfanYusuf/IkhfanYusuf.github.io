import React from "react";
import 'materialize-css/dist/css/materialize.min.css';
import M from 'materialize-css';

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
	  <a className="btn btn-floating red">
	    <i className="large material-icons">mode_edit</i>
	  </a>
	  <ul>
	    <li><button onClick={open} data-target="modal1" className="btn-floating green modal-trigger"><i className="material-icons">message</i></button></li>
	    <li><a className="btn-floating yellow darken-1"><i className="material-icons">format_quote</i></a></li>
	    <li><a href="https://instagram.com/ikhfan_yusuf" className="social btn-floating yellow darken-1"><i className="fa fa-google"></i></a></li>
    	<li><a href="https://twitter.com/myname_iye" className="btn-floating"><img alt="socmed-icons" src={require('../icons/twitter.svg').default}/></a></li>
    	<li><a href="https://youtube.com/ikhfanyusuf" className="btn-floating"><img alt="socmed-icons" src={require('../icons/play-2935460.svg').default}/></a></li>
    	<li><a href="https://github.com/ikhfanyusuf" className="btn-floating"><img alt="socmed-icons" src={require('../icons/github.svg').default}/></a></li>
	  </ul>
	</div>
  );
}

export default Float;
