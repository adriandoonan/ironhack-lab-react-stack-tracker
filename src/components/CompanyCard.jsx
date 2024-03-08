import { Link } from "react-router-dom";

const CompanyCard = ({ slug, name, website, description, logo }) => {
	return (
		<Link className="card" to={`/company/${slug}`}>
			<img className="logo" src={logo} alt={`${name} logo`} />
			<h2>{name}</h2>
		</Link>
	);
};
export default CompanyCard;
