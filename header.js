const f = React.createElement;

class NavBar extends React.Component {
	constructor(props) {
		super(props)
		this.state = ({
			selectedPage: "Home"
		})
		this.handleChangePage = this.handleChangePage.bind(this);
	}

	handleChangePage(e) {
		console.log("the button works")
		console.log(e.target.textContent)
		this.setState({
			selectedPage: e.target.textContent,
		})
	}
	render() {
		switch (this.state.selectedPage) {
			case "Home":
				return(
					<nav>
						<button 
							className="header-nav-selected"
							onClick={this.handleChangePage}
						>
							Home
						</button>
						<button 
							className="header-nav-not-selected"
							onClick={this.handleChangePage}
						>
							Projects
						</button>
						<button 
							className="header-nav-not-selected"
							onClick={this.handleChangePage}
						>
							About
						</button>
		{/*				<a href="projects.html"><li className="nav-bar-selected-not-selected">Projects</li></a>
						<a href="about.html"><li className="nav-bar-selected-not-selected">About</li></a>
		*/}			</nav>
				);
				break;
			case "Projects":
				return(
					<nav>
						<button 
							className="header-nav-not-selected"
							onClick={this.handleChangePage}
						>
							Home
						</button>
						<button 
							className="header-nav-selected"
							onClick={this.handleChangePage}
						>
							Projects
						</button>
						<button 
							className="header-nav-not-selected"
							onClick={this.handleChangePage}
						>
							About
						</button>
		{/*				<a href="projects.html"><li className="nav-bar-selected-not-selected">Projects</li></a>
						<a href="about.html"><li className="nav-bar-selected-not-selected">About</li></a>
		*/}			</nav>
				);
				break;
			case "About":
				return(
					<nav>
						<button 
							className="header-nav-not-selected"
							onClick={this.handleChangePage}
						>
							Home
						</button>
						<button 
							className="header-nav-not-selected"
							onClick={this.handleChangePage}
						>
							Projects
						</button>
						<button 
							className="header-nav-selected"
							onClick={this.handleChangePage}
						>
							About
						</button>
		{/*				<a href="projects.html"><li className="nav-bar-selected-not-selected">Projects</li></a>
						<a href="about.html"><li className="nav-bar-selected-not-selected">About</li></a>
		*/}			</nav>
				);
				break;

		}
	}
}

const header = document.querySelector('#header-nav');
ReactDOM.render(f(NavBar), header)