const Technology = ({ technology }) => {
	return (
		<div>
			<section className="company-profile">
				<article className="company-profile-logo">
					<div className="card">
						<img
							className="logo"
							src={technology.image}
							alt={`${technology.name} logo`}
						/>
					</div>
				</article>
				<article className="company-profile-details">
					<h1>{technology.name}</h1>
					<p>
						<strong>About</strong>
					</p>
					<p>{technology.description}</p>
				</article>
			</section>
		</div>
	);
};
export default Technology;
