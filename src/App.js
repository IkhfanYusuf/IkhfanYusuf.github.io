import React from "react";
import './App.css';
// import Content from "./content";
import 'materialize-css/dist/css/materialize.min.css';
import M from 'materialize-css';

function App() {

	document.addEventListener('DOMContentLoaded', () => {
	    const elems = document.querySelectorAll('.sidenav');
	    const instances = M.Sidenav.init(elems);
	 });

	const hideFace = () =>{
		document.querySelector('.avatar').classList.toggle('hideFace');
		console.log("click");
	} 

	document.addEventListener('DOMContentLoaded', function() {
	    var elems = document.querySelectorAll('.tooltipped');
	    var instances = M.Tooltip.init(elems);
	  });


  return (
    <div>
    <div className="container">
    <nav className="z-depth-0 transparent">
	  <div className="nav-wrapper">
	    <a href="#" data-target="mobile-demo" className="sidenav-trigger show-on-medium-and-up"><i className="material-icons blue-grey-text text-lighten-1">menu</i></a>
	    <ul className="right hide-on-med-and-down blue-grey-text text-lighten-1">
	    	<li><a href="https://instagram.com/ikhfan_yusuf" className="ig valign-wrapper blue-grey-text text-lighten-1"><img alt="socmed-icons" src={require('./icons/instagram.svg').default}/>Instagram</a></li>
	    	<li><a href="https://twitter.com/myname_iye" className="twitter valign-wrapper blue-grey-text text-lighten-1"><img alt="socmed-icons" src={require('./icons/twitter.svg').default}/>Twitter</a></li>
	    	<li><a href="https://youtube.com/ikhfanyusuf" className="yt valign-wrapper blue-grey-text text-lighten-1"><img alt="socmed-icons" src={require('./icons/play-2935460.svg').default}/>Youtube</a></li>
	    	<li><a href="https://github.com/ikhfanyusuf" className="github blue-grey-text text-lighten-1"><img alt="socmed-icons" src={require('./icons/github.svg').default}/></a></li>
	    </ul>
	  </div>
	</nav>
	    
	  <ul className="sidenav" id="mobile-demo">
	    <li><a href="sass.html">Sass</a></li>
	    <li><a href="badges.html">Components</a></li>
	    <li><a href="collapsible.html">Javascript</a></li>
	    <li><a href="mobile.html">Mobile</a></li>
	    
	  </ul>
	  <div className="section hide-on-small-only"></div>
	  	<div className="jumbotron">
		  <div className="row">
		  	<div className="col s12 l5 profile">
		  		<div className="row">
		  			<h2 className="profile1">Hello, I'm a Newbie <span className="blue-grey-text text-lighten-1">Front End</span> Developer.</h2>
		  		</div>
		  		<div className="row profile2">
		  			<p className="text1">I'm <b className="blue-grey-text text-lighten-1">Ikhfan Yusuf Arifin</b>, 21 years old. Now, I'm a Pamulang University student.</p>
		  			<div className="row button-hide-face">
		  				<div className="col s4">
		  					<a onClick={hideFace} className="waves-effect waves-light btn-small tooltipped" data-position="bottom" data-tooltip="Hit the button to hide my face."><i className="material-icons left">not_interested</i><b>Hide</b></a>
		  				</div>
		  				<div className="col s8">
		  					<p>Hit the button to hide my face.</p>
		  				</div>
		  			</div>
		  			
		  		</div>
		  	</div>
	  		<div className="col s12 l7 right-align">
	  			<div className="avatar right-align">
	  				<img className="" alt="avatar" src={require('./avatar.png').default}/>
	  			</div>
	  		</div>
	  		</div>
	  	</div>
	  	<div className="content">
	  		<div className="section"/>
	  		<h4 className="center-align blue-grey-text text-lighten-1"><i className="material-icons">check_circle</i>&nbsp;Expertise</h4>

	  		{
	  		//EXPERTISE START
	  		} 

	  		<div className="row row-expertise valign-wrapper">		
		  		<div className="col s12 l6 expertise right-align">
		  			<h5 className="valign-wrapper"><i className="material-icons">code</i>&nbsp;Web Developer</h5>
		  			<p className="text2">My first expertise is to be <b className="blue-grey-text text-lighten-1">Front End Web Developer</b>. I've build website with Vanilla Js, Jquery, Php, Bootstrap, Materialize css, Codeigniter, and React js.</p>
		  		</div>
		  		<div className="col s12 l6 expertise">
		  			<h5 className="valign-wrapper"><i className="material-icons">edit</i>&nbsp;Content Writer</h5>
		  			<p className="text2">I also a newbie <b className="blue-grey-text text-lighten-1">Content Writer</b>. Sometimes i write an ariticle in my blog fanyusuf.com and in my bad time i chose to write poems.</p>
		  		</div>
	  		</div>
	  		<div className="row valign-wrapper">		
		  		<div className="col s12 l6 expertise right-align">
		  			<h5 className="valign-wrapper"><i className="material-icons">play_circle_outline</i>&nbsp;Content Creator</h5>
		  			<p className="text2">Sometimes I make video tutorials, <b className="blue-grey-text text-lighten-1">especially basic blogger tutorials</b>. I'm not good at this, I just love sharing.</p>
		  		</div>
		  		<div className="col s12 l6 expertise">
		  			<h5 className="valign-wrapper"><i className="material-icons">edit</i>&nbsp;Content Writer</h5>
		  			<p className="text2">I also a newbie <b className="blue-grey-text text-lighten-1">Content Writer</b>. Sometimes i write an ariticle in my blog fanyusuf.com and in my bad time i chose to write poems.</p>
		  		</div>
	  		</div>

	  		{
	  		//EXPERTISE END
	  		} 

	  		<h4 className="Portfolio center-align blue-grey-text text-lighten-1"><i className="material-icons">laptop_mac</i>&nbsp;Portfolio</h4>
	  		<div className="section"/>

	  		<footer className="page-footer blue-grey lighten-3">
			  <div className="container">

			    	<div className="row">
					  <form className="col s12">
					  	<div className="row">
				  			<div className="col s12">
				  				<p>For bussiness, you can contact me via the form below.</p>
				  			</div>
				  		</div>
					    <div className="row">
					      <div className="input-field col s6">
					      	<i className="material-icons prefix">account_circle</i>
					        <input id="name" type="text" className="validate" />
					        <label htmlFor="name">Name</label>
					      </div>
					      <div className="input-field col s6">
					      	<i className="material-icons prefix">email</i>
					        <input id="email" type="email" className="validate" />
					        <label htmlFor="email">* Email</label>
					      </div>
					    </div>

					    <div className="row">
						  <form className="col s12">
						    <div className="row">
						      <div className="input-field col s12">
						      	<i className="material-icons prefix">mode_edit</i>
						        <textarea id="textarea1" className="materialize-textarea" defaultValue={""} />
						        <label htmlFor="textarea1">* Message</label>
						      </div>
						    </div>
						  </form>
						</div>

					  </form>
					  
					</div>

			  </div>
			  <div className="footer-copyright">
			    <div className="container">
			      © 2021 Ikhfan Yusuf
			      <a className="grey-text text-lighten-4 right" href="#!">Ikhfan Yusuf</a>
			    </div>
			  </div>
			</footer>


	  	</div>
	  </div>

    </div>
  );
}

export default App;
