import { useParams, Link } from "react-router-dom";

function CompanyPage({ companies }) {
	const { companySlug } = useParams();

	const company = companies.find((company) => company.slug === companySlug);
	return (
		<div>
			{company ? (
				<>
					<h2>Company Profile</h2>
					<section className="company-profile">
						<article className="company-profile-logo">
							<div className="card">
								<img
									className="logo"
									src={company.logo}
									alt={`${company.name} logo`}
								/>
							</div>
						</article>
						<article className="company-profile-details">
							<h1>{company.name}</h1>
							<p>
								<strong>About</strong>
							</p>
							<p>{company.description}</p>
						</article>
					</section>
					<div id="company-tech-stack">
						{company.techStack.map((tech) => {
							return (
								<div className="company-tech-stack-item">
									<Link
										key={tech.slug}
										to={{
											pathname: `/tech/${tech.slug}`,
											search: `?prevCompany=${companySlug}`,
										}}
										className="card company-tech-stack-logo"
										style={{
											backgroundImage: `url(${tech.image})`,
										}}
									/>
									<h3>{tech.name}</h3>
								</div>
							);
						})}
					</div>
				</>
			) : (
				<h1>Couldn't find company</h1>
			)}
		</div>
	);
}

export default CompanyPage;
