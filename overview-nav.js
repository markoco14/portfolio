// a js file, yay

const e = React.createElement;

class OverviewNav extends React.Component {
	constructor(props){
		super(props)
	}
	render(){
		return(
			<div  
				className="main-overview-nav"
			>
				<li>Contact</li>
				<li>Current Project</li>
				<li>Resume</li>
			</div>
		);
	}
}



const domContainer = document.querySelector('#overview-container');
ReactDOM.render(e(OverviewNav), domContainer);