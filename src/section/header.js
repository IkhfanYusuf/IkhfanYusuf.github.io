import React from "react";
import 'materialize-css/dist/css/materialize.min.css';
import M from 'materialize-css';

const Jumbotron = ()=>{

	const hideFace = () =>{
		document.querySelector('.avatar').classList.toggle('hideFace');
		console.log("click");
	}

  return (
    <div className="jumbotron">
	  <div className="row">
	  	<div className="col col-avatar s12 push-l5 l7 right-align">
  			<div className="avatar right-align">
  				<img className="" alt="avatar" src={require('../avatar.png').default}/>
  			</div>
  		</div>
	  	<div className="col s12 pull-l7 l5 profile">
	  		<div className="row">
	  			<h2 className="profile1">Hello, I'm a Newbie <span className="blue-grey-text text-lighten-1">Front End</span> Developer.</h2>
	  		</div>
	  		<div className="row profile2">
	  			<p className="text1">I'm <b className="blue-grey-text text-lighten-1">Ikhfan Yusuf Arifin</b>, 21 years old. Now, I'm a Pamulang University student.</p>
	  			<div className="row button-hide-face">
	  				<div className="col s12">
	  					<a onClick={hideFace} className="waves-effect waves-light btn-small tooltipped" data-position="bottom" data-tooltip="Hit the button to hide my face."><i className="material-icons left">not_interested</i><b>Hide</b></a>
	  					<p style={{display: "inline-block"}}>&nbsp;Hit the button to hide my face.</p>
	  				</div>
	  				
	  			</div>
	  			
	  		</div>
	  	</div>
  		
  		</div>
  	</div>
  );
}

export default Jumbotron;
