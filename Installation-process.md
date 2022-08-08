Installation process of Contact Manager App:

After creating the project with: npx create-react-app <project name>

1. Installed Bootstrap:
		> npm install bootstrap
	
2. Installed fontawesome icons:
		> npm i @fortawesome/fontawesome-free

3. Connect fontawesome cdn link to html page:
	Link is found from:
		> https://cdnjs.com/libraries/font-awesome/5.15.4
		
4. Configure fontawesome icons and bootstrap to the project:
	 In index.js
	 Write:
	 /* Fontawesome icons */
		> import '../node_modules/@fortawesome/fontawesome-free/css/all.css';

	/* Bootstrap 5.1 */
		> import '../node_modules/bootstrap/dist/css/bootstrap.css';
		> import '../node_modules/bootstrap/dist/js/bootstrap.bundle';
	
5. Install axios, react-router-dom
	axios: 
		> npm install axios
	react-router-dom 
		> npm install react-router-dom
		
		
PROJECT STRUCTURE:

components: 
	- navbar
	- contact-list
	- view-contact
	- edit-contact
	- add-contact
	
services: 
	- ContactService
