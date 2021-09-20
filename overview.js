// a js file, yay

const e = React.createElement;

class OverviewNav extends React.Component {
	render() {
		switch (this.props.selectedOverviewSection) {
			case "Contact":
				console.log("Contact");
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
				console.log("Current Project");
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

class OverviewContactSection extends React.Component {
	render() {
		return(
			<div className="contact">
				<h2 className="overview-section-heading">Contact</h2>
				<div className="overview-section-content">
					<label for="name">
						Name:
						<input id="name" type="text" placeholder="John"></input>
					</label>
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
				<div className="overview-section-content project-container">
					<div>
						<h3>Covid Taichung Google Maps API</h3>
						<button className="link-button">
							<a href="https://covid-taichung.github.io/cfiw/map-v3.html">
								See live
							</a>
						</button>
						<button className="link-button">
							<a href="https://github.com/Covid-Taichung/cfiw/blob/main/map/map-marker-toggles.js">
								View code
							</a>
						</button>
						<p>
							The Google Maps API gives users of covid-taichung.com
							more control over what they see on the map. Users can
							choose to view public covid-19 data to view daily 
							footprints of confirmed cases, locations of disinfections,
							and locations of health facilities in Taichung that offer
							covid-19 testing and vaccinations. 
						</p>
					</div>
					<div>
						<img src="cfiw_site_1.JPG" className="profile-preview"></img>
					</div>
					<p><a href="projects.html">Click here to see the full list of my projects.</a></p>
				</div>
				{/*<div className="project-container">
				</div>*/}
			</div>
		);
	}
}

class OverviewResumeSection extends React.Component {
	constructor(props) {
		super(props);
		this.state = ({
			selectedResumeSection: "Education",
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

	render() {

		switch(this.state.selectedResumeSection) {
			case "Coding Experience":
				console.log("Coding Experience")
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
									<div className="experience-item">
										<div className="experience-header">
											<h3>
												Dialogue Writer Web App
											</h3>
										</div>
										<p className="experience-position-title">
											ReactJS 
										</p>
										<p>
											Write 2 person dialogues for your language classes.
											The text you write is automatically formatted into
											a dialogue so you can focus on what counts - writing. Write fun
											and engaging dialogues so your students can learn to
											speak naturally in any situation you can imagine.
										</p>
										
									</div>
									<div className="experience-item">
										
										<div className="experience-header">
											<h3>
												Covid Taichung
											</h3>
										</div>
										<p className="experience-position-title">
											Javascript, Google Maps API
										</p>
										<p>
											Covid-19 information website for foreigners living in Taichung,
											Taiwan. Local and imported cases are updated daily. The FAQ contains
											extensive information on lockdown restrictions, social distancing 
											policies, and Taiwan's vaccination schedule. Our Google Maps API shows 
											covid case footprints, scheduled disinfection locations, and health facility
											locations for testing and vaccinations.
										</p>
									</div>
									<div className="experience-item">
										
										<div className="experience-header">
											<h3>
												Taiwan Tax Calculator
											</h3>
										</div>
										<p className="experience-position-title">
											Javascript, Currency Exchange API
										</p>
										<p>
											Calculate your income and taxes in Taiwan.
											Input your desired income in NTD and see the breakdown
											of your net income and how much you pay in taxes. 
										</p>
									</div>

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
				console.log("Work Experience")
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
				console.log("Education")
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

class MainOverviewSection extends React.Component {
	constructor(props){
		super(props);
		this.state = ({
			selectedOverviewSection: "Resume"
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

	render(){
		switch (this.state.selectedOverviewSection) {
			case "Contact":
				console.log('Contact')
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
				break;
			case "Current Project":
				console.log('Current Project')
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
				break;
			case "Resume":
				console.log('Resume')
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
				break;
		}
	}
}



const domContainer = document.querySelector('#main-overview');
ReactDOM.render(e(MainOverviewSection), domContainer);