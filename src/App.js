import React from "react";
import './App.css';
import Contact from './contact/contact-form.js';
import Expertise from './section/expertise.js';
import Nav from './section/nav.js';
import Float from './section/floating.js';
import Footer from './section/footer.js';
import Jumbotron from './section/header.js';
import 'materialize-css/dist/css/materialize.min.css';
import M from 'materialize-css';

function App(){

	document.addEventListener('DOMContentLoaded', () => {
	    const sidenav = document.querySelectorAll('.sidenav');
	    const fixActBtn = document.querySelectorAll('.fixed-action-btn');
	    M.Sidenav.init(sidenav);
	    M.FloatingActionButton.init(fixActBtn);


	 });

	const hideFace = () =>{
		document.querySelector('.avatar').classList.toggle('hideFace');
	} 

	// const cobaKlik = () => {
		
	// 	instances[0].open();
		
	// } 

	//<a  href="#modal1" onClick={open} className="waves-effect waves-light btn btn-floating" ><i className="material-icons">message</i></a>
	

  return (
    <div>

    	<Float />

		<Contact />
  
    	<div className="container">

    		

		    {/*NAV START*/ } 

			<Nav />

			{/*NAV END*/}    

		  	<div className="section hide-on-small-only"></div>

		    {/*HEADER START*/} 

			<Jumbotron />
		  	
			{/*HEADER END*/}  

		  	<div className="content">
		  	
		  		{/*EXPERTISE START*/} 

		  		<Expertise />

		  		{/*EXPERTISE END*/} 

		  		{/*<h4 className="Portfolio center-align blue-grey-text text-lighten-1"><i className="fas fa-laptop-code"></i>&nbsp;&nbsp;Portfolio</h4>*/}
		  		<div className="section"/>

		  	</div>

		  	{/*FOOTER START*/} 

				<div className="hide-on-med-and-down">
					<Footer />
				</div>

			{/*FOOTER END*/}

		</div>
		{/*FOOTER START*/} 

		<div className="hide-on-large-only">
			<Footer />
		</div>

		{/*FOOTER END*/}

    </div>
  );
}

export default App;
