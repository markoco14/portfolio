const e = React.createElement;

/*
	OverviewNav might need to be renamed to OverviewSectionSelector.
	It does function as a navbar but it is too easy to confuse it with the true navbar.
	The OverviewNav component allows users to toggle views in the overview section at
	the bottom of the homepage.
		1) Contact
		2) Current Project
		3) Resume
*/

class HomepageOverviewSectionSelector extends React.Component {
	render() {
		switch (this.props.selectedOverviewSection) {
			case "Contact":
				return(
					<div className="main-overview-nav">
						<button
							className="main-overview-nav-button-selected"
							onClick={this.props.onHandleChangeOverviewSection}
						>
							Contact
						</button>
						<button
							className="main-overview-nav-button"
							onClick={this.props.onHandleChangeOverviewSection}
						>
							Current Project
						</button>
						<button
							className="main-overview-nav-button"
							onClick={this.props.onHandleChangeOverviewSection}
						>
							Resume
						</button>
					</div>
				);
				break;
			case "Current Project":
				return(
					<div className="main-overview-nav">
						<button
							className="main-overview-nav-button"
							onClick={this.props.onHandleChangeOverviewSection}
						>
							Contact
						</button>
						<button
							className="main-overview-nav-button-selected"
							onClick={this.props.onHandleChangeOverviewSection}
						>
							Current Project
						</button>
						<button
							className="main-overview-nav-button"
							onClick={this.props.onHandleChangeOverviewSection}
						>
							Resume
						</button>
					</div>
				);
				break;
			case "Resume":
				return(
					<div className="main-overview-nav">
						<button
							className="main-overview-nav-button"
							onClick={this.props.onHandleChangeOverviewSection}
						>
							Contact
						</button>
						<button
							className="main-overview-nav-button"
							onClick={this.props.onHandleChangeOverviewSection}
						>
							Current Project
						</button>
						<button
							className="main-overview-nav-button-selected"
							onClick={this.props.onHandleChangeOverviewSection}
						>
							Resume
						</button>
					</div>
				);
				break;
		}
	}
}

/*
	The OverviewContactSection can keep the same name. This component
	is the view where users can see my contact information on the homepage.
	I may want to add a contact form to this section. I think it would look better
	and I can still provide the other contact information below.

	Another option is to just turn this into an About section. But a more detailed
	"About" page might be better. It would give me more space to write briefly about myself,
	place a picture, and provide more detailed info about what I'm doing and what I'm looking
	for.
*/

class OverviewContactSection extends React.Component {
	render() {
		return(
			<div className="contact">
				<h2 className="overview-section-heading">Contact</h2>
				<div className="overview-section-content">
					<div className="contact-container">
						<div className="contact-row" >
							<a href="https://github.com/markoco14?tab=repositories"
								target="_blank"
							>
								<div className="contact-icon-box"><i className="fa fa-github"></i></div>
							</a>
							<a href="https://github.com/markoco14?tab=repositories"
								target="_blank"
							>
								<p>
									 View Github
								</p>
							</a>
						</div>
						<div className="contact-row">
							<a href="https://www.cakeresume.com/mark-o-connor"
								target="_blank"
							>
								<div className="contact-icon-box"><i className="fa fa-file-alt"></i></div>
							</a>
							<a href="https://www.cakeresume.com/mark-o-connor"
								target="_blank"
							>
								<p>
									View resume
								</p>
							</a>
						</div>
						<div className="contact-row">
							<a href="mailto:mark.oconnor14@gmail.com">
								<div className="contact-icon-box"><i className="fa fa-envelope"></i></div>
							</a>
							<a href="mailto:mark.oconnor14@gmail.com">
								<p>
									mark.oconnor14@gmail.com
								</p>
							</a>
						</div>
						<div className="contact-row">
							<a href="tel:+886905255247">
								<div className="contact-icon-box"><i className="fa fa-phone"></i></div>
							</a>
							<a href="tel:+886905255247">
								<p>
									+886 (0) 905 255 247
								</p>
							</a>
						</div>
					</div>	
				</div>
			</div>
		);
	}
}

/*
	The OverviewCurrentProjectSection can keep its name. This component is the 
	view where users can find out what I'm currently doing. There is also a link to 
	my projects page so people can see the rest of my work.
*/

class OverviewCurrentProjectSection extends React.Component {
	render() {
		return(
			<div className="current">
				<h2 className="overview-section-heading">Current Project: Covid Taichung Google Maps API</h2>
				<p><a href="projects.html">(Click here to see the full list of my projects)</a></p>
				<div className="overview-section-content project-container">
					<div>
						<img src="img/current_project_googlemap.JPG" className="profile-preview"></img>
					</div>
						<ul className="current-project-links">
							<a href="https://covid-taichung.github.io/cfiw/map-v3.html" 
								target="_blank" 
								rel="noreferrer noopener"
							>
								<li>view site</li>
							</a>
							<a href="https://github.com/markoco14/covid-taichung-map-repo"
								target="_blank" 
								rel="noreferrer noopener"
							>
								<li>view code</li>
							</a>
						</ul>
						<p className="current-project-description">
							Developed a website to give COVID-19 information to English speakers living in 
							Taichung City, Taiwan. Created a map using the Google Maps API. Designed the 
							interface and wrote the functions that allow users to filter search results. 
							Users can choose between Covid footprints, city disinfection locations, and 
							health facilities for testing and vaccinations.
						</p>
						
				</div>
			</div>
		);
	}
}

/*
	The OverviewResumeSection lets users see a short version of my resume. 
	The resume is divided into 3 sections: Coding Experience, Work Experience, 
	and Education. These are also toggled by a navbar. 

	This navbar should also be turned into a separate component.
	It would allow me to shorten the code. I will make the component over the weekend,
	or early next week.
*/

class OverviewResumeSection extends React.Component {
	constructor(props) {
		super(props);
		this.state = ({
			selectedResumeSection: "Coding Experience",
		});
		this.handleChangeResumeSection = this.handleChangeResumeSection.bind(this);
	}

	handleChangeResumeSection(e) {
		this.setState({
			selectedResumeSection: e.target.textContent
		})
	}

	render() {

		switch(this.state.selectedResumeSection) {
			case "Coding Experience":
				return(
					<div className="resume">
						<h2 className="overview-section-heading">Resume</h2>
						<div className="coding-experience overview-section-content">
							{/*this is the resume nav selector, make it into a component.*/}
							<div className="main-overview-nav">
								<button
									className="main-overview-nav-button-selected"
									onClick={this.handleChangeResumeSection}
								>
									Coding Experience
								</button>
								<button
									className="main-overview-nav-button"
									onClick={this.handleChangeResumeSection}
								>
									Work Experience
								</button>
								<button
									className="main-overview-nav-button"
									onClick={this.handleChangeResumeSection}
								>
									Education
								</button>
							</div>
							{/*resume nav ends here*/}
							<div className="resume-sections">
								<div className="coding-experience">
									<div className="experience-item">
										<div className="experience-header">
											<h3>
												Dialogue Writer Web App
											</h3>
										</div>
										<p className="experience-position-title">
											HTML, CSS, ReactJS 
										</p>
										<p>
											Developed a web application for English teachers who want to 
											create practice materials for their students. Created an interface 
											which automatically formats the user's text into a 2 person dialogue. 
											Wrote functions that allow users to save dialogues to local storage, 
											delete dialogues from local store, and edit dialogues to work on 
											them anytime. <a href="https://markoco14.github.io/dialogue-writer-app"
												target="_blank"
												rel="noreferrer noopener"
											> View site</a>.
										</p>
										
									</div>
									<div className="experience-item">
										<div className="experience-header">
											<h3>
												Covid Taichung FAQ and Search Engine
											</h3>
										</div>
										<p className="experience-position-title">
											HTML, CSS, Javascript
										</p>
										<p>
											Developed a website to give COVID-19 information to English speakers living 
											in Taichung City, Taiwan. Created a collapsible FAQ page that lets users 
											read a list of questions and click to expand for more information. Made a 
											functioning search bar that allows users to input their search questions and 
											see a list of related results. Results are filtered and ordered with the most 
											relevant results shown at the top of the list. <a href="https://www.covid-taichung.com/frequently-asked-questions"
												target="_blank"
												rel="noreferrer noopener"
											> View site</a>.
										</p>
									</div>
									<div className="experience-item">
										<div className="experience-header">
											<h3>
												Covid Taichung Information Website
											</h3>
										</div>
										<p className="experience-position-title">
											Webnode CMS, Plugins, Javascript
										</p>
										<p>
											Developed a website to give COVID-19 information to English speakers living 
											in Taichung City, Taiwan.  Created pages for tracking Covid footprints, 
											daily infection statistics, and recent government announcements. <a href="https://www.covid-taichung.com"
												target="_blank"
												rel="noreferrer noopener"
											> View site</a>.
										</p>
									</div>
									<div className="experience-item">
										
										<div className="experience-header">
											<h3>
												Taiwan Tax Calculator
											</h3>
										</div>
										<p className="experience-position-title">
											HTML, CSS, Javascript, Currency Exchange API
										</p>
										<p>
											Created a website that calculates income and taxes for foreigners
											living in Taiwan. In step 1, users can input a desired income level 
											and automatically see the breakdown of taxes and net income. In 
											step 2, users can convert their salary into 6 foreign currencies 
											to see how much their salary is worth back home. <a href="https://markoco14.github.io/tiss"
												target="_blank"
												rel="noreferrer noopener"
											>View site</a>. 
										</p>
									</div>
								{/*
									Keep the whiteboard website in case 
									I add it back to the porfolio
								*/}
									{/*<div className="experience-header">
										<h3>
											Whiteboard Website
										</h3>
									</div>
									<p className="experience-position-title">
										Javascript, Canvas API
									</p>
									<p>
										 
									</p>*/}
								</div>
							</div>

						</div>
					</div>
				);
				break;
			case "Work Experience":
				return(
					<div className="resume">
						<h2 className="overview-section-heading">Resume</h2>
						<div className="coding-experience overview-section-content">
							{/*this is the resume nav selector, make it into a component.*/}
							<div className="main-overview-nav">
								<button
									className="main-overview-nav-button"
									onClick={this.handleChangeResumeSection}
								>
									Coding Experience
								</button>
								<button
									className="main-overview-nav-button-selected"
									onClick={this.handleChangeResumeSection}
								>
									Work Experience
								</button>
								<button
									className="main-overview-nav-button"
									onClick={this.handleChangeResumeSection}
								>
									Education
								</button>
							</div>
							{/*resume nav ends here*/}
							<div className="resume-sections">
								<div className="work-experience">
									<div className="experience-item">
										
										<div className="experience-header">
											<h3>
												Wagor Kindergarten Taichung
											</h3>
											<div>
												August 2020 - July 2021
											</div>
										</div>
										<p className="experience-position-title"> Junior Class Teacher </p>
										<p>
											I was a full-time teacher of 20 juniors. 
											I taught everything from the ABC's to reading. 
											From math to science. The students grew from zero English to
											spending every day completely immersed in English.
										</p>
									</div>
									<div className="experience-item">
										<div className="experience-header">
											<h3>
												Joy English Buxiban Taichung
											</h3>
											<div>
												June 2019 - June 2020
											</div>
										</div>
										<p className="experience-position-title"> English Teacher </p>
										<p>
											I was a full-time teacher of classes ranging from 
											introductory English to GEPT preparation. I taught grammar, 
											pronunciation, and critical thinking in fast-paced, 
											interactive speaking classes.
										</p>
										
									</div>
									<div className="experience-item">
										
										<div className="experience-header">
											<h3>
												Wagor International School (WISE)
											</h3>
											<div>
												March 2018 - June 2019
											</div>
										</div>
										<p className="experience-position-title">
											Literature Class Teacher
										</p>
										<p>
											I taught English literature to students ranging from 
											grade 8 - 12. I taught according to the <a 
												href="http://www.corestandards.org/" 
												target="_blank"
												rel="noreferrer noopener"
											>
												 US Common Core State Standards Initiative
											</a>. These standards follow guidelines
											laid out by the US Department of Education and provide
											students with a foundation in English literacy and critical
											thinking to guarantee success in their university and professional
											lives.
										</p>
									</div>
								</div>
							</div>
						</div>
					</div>
				);	
				break;
			case "Education":
				return(
					<div className="resume">
						<h2 className="overview-section-heading">Resume</h2>
						<div className="coding-experience overview-section-content">
							{/*this is the resume nav selector, make it into a component.*/}
							<div className="main-overview-nav">
								<button
									className="main-overview-nav-button"
									onClick={this.handleChangeResumeSection}
								>
									Coding Experience
								</button>
								<button
									className="main-overview-nav-button"
									onClick={this.handleChangeResumeSection}
								>
									Work Experience
								</button>
								<button
									className="main-overview-nav-button-selected"
									onClick={this.handleChangeResumeSection}
								>
									Education
								</button>
							</div>
							{/*resume nav ends here*/}
							<div className="resume-sections">
								<div className="education-experience">
									<div className="experience-header">
										<h3>
											Simon Fraser University
										</h3>
										<div>
											2008 - 2014
										</div>
									</div>
									<p className="experience-position-title">
										Bachelor of Business Administration
									</p>
									<p>
										Graduated with honors. 
										Major in International Marketing.
										Minor in Product Development.
									</p>
				
								</div>
							</div>
						</div>
					</div>
				);
				break;
		}
	}
}

/*
	MainOverviewSection can keep its name for now, but it might be better
	named HomePageOverviewSection, it would just be more clear for anyone 
	else viewing the code.
*/

class HomePageOverviewSection extends React.Component {
	constructor(props){
		super(props);
		this.state = ({
			selectedOverviewSection: "Contact"
		});				
		this.handleChangeOverviewSection = this.handleChangeOverviewSection.bind(this)
	}

	handleChangeOverviewSection(e) {
		console.log(`You've selected the ${e.target.textContent} section!`)
		this.setState({
			selectedOverviewSection: e.target.textContent
		})
	}

	render(){
		switch (this.state.selectedOverviewSection) {
			case "Contact":
				return(
					<div className="main-overview">
					<div className="options-container">
						<HomepageOverviewSectionSelector
							selectedOverviewSection={this.state.selectedOverviewSection} 
							onHandleChangeOverviewSection={this.handleChangeOverviewSection} 
						/>
						<OverviewContactSection 
						/>
					</div>
					</div>
				);
				break;
			case "Current Project":
				return(
					<div className="main-overview">
					<div className="options-container">
						<HomepageOverviewSectionSelector 
							selectedOverviewSection={this.state.selectedOverviewSection} 
							onHandleChangeOverviewSection={this.handleChangeOverviewSection} 
						/>
						<OverviewCurrentProjectSection 
						/>
					</div>
					</div>
				);
				break;
			case "Resume":
				return(
					<div className="main-overview">
					<div className="options-container">
						<HomepageOverviewSectionSelector
							selectedOverviewSection={this.state.selectedOverviewSection} 
							onHandleChangeOverviewSection={this.handleChangeOverviewSection} 
						/>
						<OverviewResumeSection 
						/>
					</div>
					</div>
				);
				break;
		}
	}
}





const overviewContainer = document.querySelector('#homepage-overview');
ReactDOM.render(e(HomePageOverviewSection), overviewContainer);