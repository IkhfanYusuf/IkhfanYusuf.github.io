import React from "react";
import 'materialize-css/dist/css/materialize.min.css';
import M from 'materialize-css';

function Contact() {

	const open = () => {
		const elems = document.querySelectorAll('.modal');
    	M.Modal.init(elems[0]).open();
	}

	const getValue = () => {
		let name= 'Nama : ' + document.getElementById('name').value;
		let email= document.getElementById('email').value;
		let textarea1=document.getElementById('textarea1').value;

		name = encodeURIComponent(name.trim());
		// email = encodeURIComponent(email.trim());
		textarea1 = encodeURIComponent(textarea1.trim());

		console.log(name, email, textarea1);

		window.open(`https://api.whatsapp.com/send?phone=6281215160190&text=${name}%0AEmail%20:%20${email}%0A%0A${textarea1}`);

	}

  return (
    <div>

    <div className="fixed-action-btn">
    	<button onClick={open} data-target="modal1" className="waves-effect waves-light btn btn-floating modal-trigger"><i className="material-icons">message</i></button>
    	
    </div>

  
	  <div id="modal1" className="modal">
	      <form method="post" className="col s12">
	    <div className="modal-content">
	      <h4>Contact me</h4>
		  	<div className="row">
	  			<div className="col s12">
	  				<p>For bussiness, you can contact me via the form below.</p>
	  			</div>
	  		</div>
		    <div className="row">
		      <div className="input-field col s12 l6">
		      	<i className="material-icons prefix">account_circle</i>
		        <input id="name" type="text" className="validate" />
		        <label htmlFor="name">Name</label>
		      </div>
		      <div className="input-field col s12 l6">
		      	<i className="material-icons prefix">email</i>
		        <input id="email" type="email" className="validate" />
		        <label htmlFor="email">* Email</label>
		      </div>
		    </div>

		    <div className="row">
		      <div className="input-field col s12">
		      	<i className="material-icons prefix">mode_edit</i>
		        <textarea id="textarea1" className="materialize-textarea" defaultValue={""} />
		        <label htmlFor="textarea1">* Message</label>
		      </div>
			</div>

	    </div>
	    <div className="modal-footer">
	      <a onClick={getValue} className="btn waves-effect waves-light btn-small" type="submit" name="action">Send
		    <i className="material-icons right">send</i>
		  </a>
	    </div>
		  </form>
	  </div>

          
    
    </div>
  );
}

export default Contact;
