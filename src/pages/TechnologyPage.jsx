import { useParams, useSearchParams, Link } from "react-router-dom";
import Technology from "../components/Technology";

function TechnologyPage({ technologies }) {
	const { slug } = useParams();

	const thisTech = technologies.find((tech) => tech.slug === slug);
	const [searchParams, setSearchParams] = useSearchParams();
	const prevCompany = searchParams.get("prevCompany");
	console.log("query", prevCompany);
	return (
		<div>
			{thisTech ? (
				<>
					<h3>Technology Details</h3>
					<Technology technology={thisTech} />
					<Link to={`/company/${prevCompany}`}>
						<button type="button">Back</button>
					</Link>
				</>
			) : (
				<h1>Don't know about that tech, is it from the future?</h1>
			)}
		</div>
	);
}

export default TechnologyPage;
