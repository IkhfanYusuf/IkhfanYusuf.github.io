import React from "react";

const Jumbotron = ()=>{

	const hideFace = () =>{
		
	}

	const hideShow = () => {

	   	let hideShow = document.getElementById('hideShow').checked;
	   	
	   	if(hideShow !== true){
	   		document.querySelector('.avatar').classList.add('hideFace');
	   	}else{
	   		document.querySelector('.avatar').classList.remove('hideFace');
	   	}
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
	  					<div className="switch">
						    <label>
						      Hide
						      <input onClick={hideShow} id="hideShow" type="checkbox" defaultChecked/>
						      <span className="lever"></span>
						      Show
						    </label>
						  </div>
	  					<p style={{display: "inline-block"}}>Switch the button above if you want to hide my face.</p>
	  				</div>
	  				
	  			</div>
	  			
	  		</div>
	  	</div>
  		
  		</div>
  	</div>
  );
}

export default Jumbotron;
