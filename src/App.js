import React from "react";
import './App.css';
import Contact from './contact/contact-form.js';
import Expertise from './section/expertise.js';
import Nav from './section/nav.js';
import Footer from './section/footer.js';
import Jumbotron from './section/header.js';
import 'materialize-css/dist/css/materialize.min.css';
import M from 'materialize-css';

const App = ()=>{

	document.addEventListener('DOMContentLoaded', () => {
	    const sidenav = document.querySelectorAll('.sidenav');
	    const fixActBtn = document.querySelectorAll('.fixed-action-btn');
	    M.Sidenav.init(sidenav);
	    M.FloatingActionButton.init(fixActBtn);
	    
	 });

	const open = () => {
		const elems = document.querySelectorAll('.modal');
    	M.Modal.init(elems[0]).open();
	}

	const hideFace = () =>{
		document.querySelector('.avatar').classList.toggle('hideFace');
		console.log("click");
	} 


  return (
    <div>

	    <div className="fixed-action-btn">
	    	<a  href="#modal1" onClick={open} className="waves-effect waves-light btn btn-floating" ><i className="material-icons">message</i></a>
	    </div>

		<Contact />
  
    	<div className="container">
		    { 
		    //NAV START 
		    } 

			<Nav />

			{
			//NAV END
			}    

		  	<div className="section hide-on-small-only"></div>

		    {
			//HEADER START
			} 

			<Jumbotron />
		  	
			{
			//HEADER END
			}   
		  	<div className="content">
		  	
		  		{
		  		//EXPERTISE START
		  		} 

		  		<Expertise />

		  		{
		  		//EXPERTISE END
		  		} 

		  		<h4 className="Portfolio center-align blue-grey-text text-lighten-1"><i className="material-icons">laptop_mac</i>&nbsp;Portfolio</h4>
		  		<div className="section"/>

		  	</div>
		</div>
		{
		//FOOTER START
		} 

		<Footer />

		{
		//FOOTER END
		} 

    </div>
  );
}

export default App;
