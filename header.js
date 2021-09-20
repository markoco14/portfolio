const e = React.createElement;

class NavBar extends React.Component {
	constructor(props) {
		super(props)
		this.state = ({
			selectedPage: "Home"
		})
	}
	render() {
		return(
			<nav>
				<a href="index.html"><li>Home</li></a>
				<a href="projects.html"><li>Projects</li></a>
				<a href="about.html"><li>About</li></a>
			</nav>
		);
	}
}

const domContainer = document.querySelector('#header-nav');
ReactDOM.render(e(NavBar), domContainer);