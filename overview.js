// a js file, yay

const e = React.createElement;

class OverviewNav extends React.Component {
	render() {
		if (this.props.selectedOverviewSection === "Contact") {
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
		}

		if (this.props.selectedOverviewSection === "Current Project") {
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
		}

		if (this.props.selectedOverviewSection === "Resume") {
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
		}
	}
}

class OverviewContactSection extends React.Component {
	render() {
		return(
			<div className="contact">
				<h2 className="overview-section-heading">Contact</h2>
				<div className="overview-section-content">
					<p>e-mail: mark.oconnor14@gmail.com</p>
					<p>phone: +886 (0) 905 255 247</p>
					<p>104</p>
					<p>cake resume</p>
					<p>github</p>
				</div>
			</div>
		);
	}
}

class OverviewCurrentProjectSection extends React.Component {
	render() {
		return(
			<div className="current">
				<h2 className="overview-section-heading">Current Project</h2>
				<div className="project-container">
					<div className="overview-section-content">
						<div>
							<h3>Covid Taichung Google Map API</h3>
							<p>description goes here</p>
							<button className="link-button"><a href="https://www.covid-taichung.com/">See live</a></button>
							<button className="link-button">View code</button>
						</div>
						<div>
							<p>The image will go here</p>
							<img src="covid_image.jpg" className="portfolio-preview"></img>
						</div>
						<p><a href="projects.html">Click here to see the full list of my projects.</a></p>
					</div>
				</div>
			</div>
		);
	}
}

class OverviewResumeSection extends React.Component {
	constructor(props) {
		super(props);
		this.state = ({
			selectedResumeSection: "Coding Experience",
		});
		this.handleChangeResumeSection = this.handleChangeResumeSection.bind(this);
		// this.handleDisplayWorkExperience = this.handleDisplayWorkExperience.bind(this);
		// this.handleDisplayEducation = this.handleDisplayEducation.bind(this);
	}

	handleChangeResumeSection(e) {
		console.log(`You've selected the ${e.target.textContent} section!`)
		console.log(e.target.textContent)
		this.setState({
			selectedResumeSection: e.target.textContent
		})
	}

	// handleDisplayWorkExperience(e) {
	// 	console.log("You've selected the Work Experience section!")
	// 	this.setState({
	// 		selectedResumeSection: e.target.textContent
	// 	})
	// }

	// handleDisplayEducation(e) {
	// 	console.log("You've selected the Education section!")
	// 	this.setState({
	// 		selectedResumeSection: e.target.textContent
	// 	})
	// }
	render() {
		if (this.state.selectedResumeSection === "Coding Experience") {
			return(
				<div className="resume">
					<h2 className="overview-section-heading">Resume</h2>
					<div className="coding-experience overview-section-content">
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
						<div className="resume-sections">
							<div className="coding-experience">
								<p>coding experiences goes here</p>
								<p>Dialogue Writer App</p>
								<p>Covid Taichung</p>
								<p>Taiwan Tax Calculator</p>
								<p>Whiteboard Website</p>
							</div>
						</div>

					</div>
				</div>
			);
		} 

		if (this.state.selectedResumeSection === "Work Experience") {
			return(
				<div className="resume">
					<h2 className="overview-section-heading">Resume</h2>
					<div className="coding-experience overview-section-content">
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
						<div className="resume-sections">
							<div className="work-experience">
								<p>
									Junior Class Teacher. Wagor Kindergarten. I'm a full-time teacher of 20 juniors. I show them everything from the ABC's, to reading. From math to science. I get the joy of watching as they make the connections and have ideas of their own. July 2020 - Present
								</p>
								<p>
									English Teacher  •  Joy English Buxiban
									I was a full-time teacher of classes ranging from introductory English to GEPT preparation. I taught grammar, pronunciation, and critical thinking in fast, interactive speaking classes.

									June 2019 - June 2020
								</p>
								<p>
									Literature Class Teacher   •  Wagor International School (WISE)
									I taught literature junior and senior high school students.

									March 2018 - June 2019
								</p>
							</div>
						</div>
					</div>
				</div>
			);	
		} 

		if (this.state.selectedResumeSection === "Education") {
			return(
				<div className="resume">
					<h2 className="overview-section-heading">Resume</h2>
					<div className="coding-experience overview-section-content">
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
						<div className="resume-sections">
							<div className="education-experience">
								<p>
									2008 - 2014 Simon Fraser University Business Administration
								</p>
								<p>
									Programming tutorials. MDN React To-do App. ReactJS tic-tac-toe app. MDN Javascript. Kahn Academy HTML, CSS, and Javascript
								</p>
							</div>
						</div>
					</div>
				</div>
			);
		} 
	}
}

class MainOverviewSection extends React.Component {
	constructor(props){
		super(props);
		this.state = ({
			selectedOverviewSection: "Contact"
		});				
		this.handleChangeOverviewSection = this.handleChangeOverviewSection.bind(this)
		// this.handleDisplayCurrentProjectSection = this.handleDisplayCurrentProjectSection.bind(this)
		// this.handleDisplayResumeSection	= this.handleDisplayResumeSection.bind(this)

	}

	handleChangeOverviewSection(e) {
		console.log(`You've selected the ${e.target.textContent} section!`)
		this.setState({
			selectedOverviewSection: e.target.textContent
		})
	}

	// handleDisplayCurrentProjectSection() {
	// 	console.log("You've selected the current project section!")
	// 	this.setState({
	// 		selectedOverviewSection: "Current Project"
	// 	})
	// }

	// handleDisplayResumeSection() {
	// 	console.log("You've selected the resume section!")
	// 	this.setState({
	// 		selectedOverviewSection: "Resume"
	// 	})
	// }

	render(){
		if (this.state.selectedOverviewSection === "Contact") {
			return(
				<div className="options-container">
					<OverviewNav
						selectedOverviewSection={this.state.selectedOverviewSection} 
						onHandleChangeOverviewSection={this.handleChangeOverviewSection} 
						// onHandleDisplayCurrentProjectSection={this.handleDisplayCurrentProjectSection}
						// onHandleDisplayResumeSection={this.handleDisplayResumeSection}
					/>
					<OverviewContactSection 
					/>
				</div>
			);
		}

		if (this.state.selectedOverviewSection === "Current Project") {
			return(
				<div className="options-container">
					<OverviewNav 
						selectedOverviewSection={this.state.selectedOverviewSection} 
						onHandleChangeOverviewSection={this.handleChangeOverviewSection} 
						// onHandleDisplayCurrentProjectSection={this.handleDisplayCurrentProjectSection}
						// onHandleDisplayResumeSection={this.handleDisplayResumeSection}
					/>
					<OverviewCurrentProjectSection 
					/>
				</div>
			);
		}

		if (this.state.selectedOverviewSection === "Resume") {
			return(
				<div className="options-container">
					<OverviewNav
						selectedOverviewSection={this.state.selectedOverviewSection} 
						onHandleChangeOverviewSection={this.handleChangeOverviewSection} 
						// onHandleDisplayCurrentProjectSection={this.handleDisplayCurrentProjectSection}
						// onHandleDisplayResumeSection={this.handleDisplayResumeSection}
					/>
					<OverviewResumeSection 
					/>
				</div>
			);
		}
		
	}
}



const domContainer = document.querySelector('#main-overview');
ReactDOM.render(e(MainOverviewSection), domContainer);