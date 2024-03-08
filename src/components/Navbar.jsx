import { Link } from "react-router-dom";

function Navbar() {
	return (
		<nav>
			<ul>
				<Link to="/">
					<li style={{ listStyleType: "none" }}>StackTracker</li>
				</Link>
			</ul>
		</nav>
	);
}

export default Navbar;
