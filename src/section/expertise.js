import React from "react";
import 'materialize-css/dist/css/materialize.min.css';
import M from 'materialize-css';

const Expertise = () => { 

  return (
    <div>


	  	<h4 className="center-align blue-grey-text text-lighten-1"><i className="far fa-check-square"></i>&nbsp;&nbsp;Expertise</h4>

  		<div className="row row-expertise valign-wrapper">		
	  		<div className="col s12 l6 expertise right-align">
	  			<div className="card">
	  				<div className="card-content">
	  					<span className="card-title valign-wrapper"><i className="fas fa-code"></i>&nbsp;&nbsp;Web Developer</span>
	  					<p className="text2">My first expertise is to be <b className="bold-expertise blue-grey-text text-lighten-1">Front End Web Developer</b>. I've build website with Vanilla Js, Jquery, Bootstrap, Materialize css, Codeigniter, and React js.</p>
	  				</div>
	  				<div className="card-action">
			          <a href="#" className="link-portfolio teal-text text-teal">See my porfolio.</a>
			        </div>
	  			</div>
	  		</div>
	  		<div className="col s12 l6 expertise">
	  			<div className="card">
	  				<div className="card-content">
	  					<span className="card-title valign-wrapper"><i className="fas fa-pen"></i>&nbsp;&nbsp;Content Writer</span>
	  					<p className="text2">I also a newbie <b className="bold-expertise blue-grey-text text-lighten-1">Content Writer</b>. Sometimes i write an ariticle in my blog fanyusuf.com and in my bad time i chose to write poems.</p>
	  				</div>
	  				<div className="card-action">
			          <a href="#" className="link-portfolio teal-text text-teal">See my porfolio.</a>
			        </div>
	  			</div>
	  		</div>
  		</div>
  		<div className="row row-expertise2 valign-wrapper">		
	  		<div className="col s12 l6 expertise right-align">
	  			<div className="card">
	  				<div className="card-content">
	  					<span className="card-title valign-wrapper"><i className="fab fa-youtube"></i>&nbsp;&nbsp;Content Creator</span>
	  					<p className="text2">Sometimes I create video, <b className="bold-expertise blue-grey-text text-lighten-1">especially basic blogger tutorials</b>. Not good at this, I just love sharing.</p>
	  				</div>
	  				<div className="card-action">
			          <a href="#" className="link-portfolio teal-text text-teal">See my porfolio.</a>
			        </div>
	  			</div>
	  		</div>
	  		<div className="col s12 l6 expertise">
	  			<div className="card">
	  				<div className="card-content">
	  					<span className="card-title valign-wrapper"><i className="fas fa-quote-right"></i>&nbsp;&nbsp;Quotes Maker</span>
	  					<p className="text2">In my free time, i like<b className="bold-expertise blue-grey-text text-lighten-1"> Write quotes</b>. It's just for fun, just for my instagram post.</p>
	  				</div>
	  				<div className="card-action">
			          <a href="#" className="link-portfolio teal-text text-teal">See my porfolio.</a>
			        </div>
	  			</div>
	  		</div>
  		</div>


    </div>
  );
}

export default Expertise;
