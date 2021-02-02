import React from "react";
import 'materialize-css/dist/css/materialize.min.css';
import M from 'materialize-css';

const Nav = ()=>{

	let dark;
	document.addEventListener('DOMContentLoaded', () => {
		dark = sessionStorage.getItem('dark');
	    const sidenav = document.querySelectorAll('.sidenav');
	    M.Sidenav.init(sidenav);
	    if(dark !==null){
	    	document.getElementById('darkMode').checked=true;
	    	darkMode();
	    }
	 });

	const darkMode = () => {
		const darkMode = document.getElementById('darkMode').checked;
		const nav = document.querySelector('nav').classList;
		const avatar = document.querySelector('.avatar').style;
		const body = document.querySelector('body').classList;
		const card = document.querySelectorAll('.card');

		let i = 0;
		while(i<card.length){
			document.getElementsByClassName('card')[i].classList.toggle('teal');
			document.getElementsByClassName('link-portfolio')[i].classList.toggle('teal-text');
			document.getElementsByClassName('link-portfolio')[i].classList.toggle('text-teal');
			document.getElementsByClassName('bold-expertise')[i].classList.toggle('blue-grey-text');
			i++;
		}

		
		if(darkMode === true){
			body.add('darkMode');
			avatar.background="#009688";
			nav.remove('nav');
			nav.add('navDark');
			sessionStorage.setItem('dark', 'on');
		}else if(darkMode === false){
			body.remove('darkMode');
			avatar.background="none";
			nav.remove('navDark');
			nav.add('nav');
			sessionStorage.removeItem('dark');
		}
	}

  return (
  	<div>
	    <nav className="z-depth-0 transparent nav">
		  <div className="nav-wrapper">
		    <a href="#" data-target="mobile-demo" className="sidenav-trigger show-on-medium-and-up"><i className="material-icons blue-grey-text text-lighten-1">menu</i></a>
		    <ul className="right hide-on-med-and-down blue-grey-text text-lighten-1">
				<li><a href="https://instagram.com/ikhfan_yusuf" className="valign-wrapper blue-grey-text text-lighten-2"><i className="fab fa-instagram"></i> &nbsp;Instagram</a></li>
		    	<li><a href="https://twitter.com/myname_iye" className="valign-wrapper blue-grey-text text-lighten-2"><i className="fab fa-twitter"></i> &nbsp;Twiter</a></li>
		    	<li><a href="https://youtube.com/ikhfanyusuf" className="valign-wrapper blue-grey-text text-lighten-2"><i className="fab fa-youtube"></i> &nbsp;Youtube</a></li>
		    	<li><a href="https://github.com/ikhfanyusuf" className="valign-wrapper blue-grey-text text-lighten-2"><i className="fab fa-github"></i> &nbsp;GitHub</a></li>
		    </ul>
		    <ul className="right blue-grey-text text-lighten-1">
		    	<div className="switch">
				    <label>
				      Light
				      <input onClick={darkMode} id="darkMode" type="checkbox"/>
				      <span className="lever"></span>
				      Dark
				    </label>
				  </div>
		    </ul>
		  </div>
		</nav>
		<ul className="sidenav" id="mobile-demo">
		    <li>Still blank.</li>
		    
		</ul>
	</div>
  );
}

export default Nav;
