import CompanyCard from "../components/CompanyCard";

function HomePage({ companies }) {
	return (
		<div>
			<h1>StackTracker: Discover Tech Stacks Used by Top Companies</h1>
			<main id="companies-list">
				{companies.map((company) => {
					const { id, slug, name, description, logo, website } = company;
					const data = { slug, name, description, logo, website };
					return <CompanyCard {...data} key={id} />;
				})}
			</main>
		</div>
	);
}

export default HomePage;
