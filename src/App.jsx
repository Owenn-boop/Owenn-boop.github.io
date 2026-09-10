import "./App.css";
import nasaLogo from "./assets/NASA-Meatball-Transparent.png";
import deereLogo from "./assets/Deere.png";
import workivaLogo from "./assets/Workiva.png";
import headshot from "./assets/owenn.jpg";

const jobs = [
	{
		company: "Workiva",
		title: "Software Engineering Intern",
		dates: "May 2026 - Present",
		location: "Ames, IA",
		logo: workivaLogo,
	},
	{
		company: "John Deere",
		title: "Part-Time Software Engineer",
		dates: "Sep 2025 - May 2026",
		location: "Ankeny, IA",
		logo: deereLogo,
	},
	{
		company: "NASA, Langley Research Center",
		title: "AI Software Engineering Intern",
		dates: "Jun 2025 - Aug 2025",
		location: "Hampton, VA",
		logo: nasaLogo,
	},
	{
		company: "NASA, Kennedy Space Center",
		title: "Software Engineering Intern",
		dates: "Jan 2025 - May 2025",
		location: "Cape Canaveral, FL",
		logo: nasaLogo,
	},
];

const projects = [
	{
		name: "Blockchain Automatic DEX Trading",
		tech: "Python · Linux · Google Sheets and other APIs",
		dates: "2021 - 2023",
		points: [
			"Developed a fully autonomous cryptocurrency trading algorithm deployed on a Raspberry Pi running Ubuntu for 24/7 continuous operation.",
			"Integrated CoinGecko, Hive Engine, and Hive Blockchain APIs for real-time pricing and trade execution, logging live metrics to Google Sheets.",
		],
	},
	{
		name: "WoolToString and FleshToLeather",
		tech: "Java · Maven · Forge API · Git",
		dates: "Feb 2019 - Apr 2021",
		points: [
			"Designed and developed Minecraft Forge mods in Java, amassing 100k+ downloads on a public repository.",
			"Collaborated with active players to gather feedback, managing community feature requests and version updates.",
		],
	},
];

const contactLinks = [
	{
		label: "Email",
		value: "owenn@owenn.dev",
		href: "mailto:owenn@owenn.dev",
	},
	{
		label: "LinkedIn",
		value: "in/owennherrmann",
		href: "https://www.linkedin.com/in/owennherrmann/",
	},
	{
		label: "GitHub",
		value: "Owenn-boop",
		href: "https://github.com/Owenn-boop",
	},
];

function App() {
	return (
		<>
			<header>
				<nav>
					<a href="#home">
						<div>Home</div>
					</a>
					<a href="#work">
						<div>Work History</div>
					</a>
					<a href="#projects">
						<div>Projects</div>
					</a>
					<a href="#contact">
						<div>Contact</div>
					</a>
				</nav>
			</header>
			<section id="home">
				<img
					src={headshot}
					alt="Owenn Herrmann"
					className="headshot"
					width="480"
					height="480"
				/>
				<h1>Owenn Herrmann</h1>
				<p className="tagline">
					CS Major at Iowa State University. Previously NASA Kennedy
					Space Center, NASA Langley, and John Deere, currently
					interning at Workiva.
				</p>
				<div className="hero-links">
					{contactLinks.map((link) => (
						<a
							key={link.label}
							href={link.href}
							target={
								link.href.startsWith("mailto:")
									? undefined
									: "_blank"
							}
							rel="noreferrer"
							className="button-link"
						>
							{link.label}
						</a>
					))}
				</div>
			</section>
			<section id="work">
				<h2>Work History</h2>
				<ul>
					{jobs.map((job) => (
						<li key={`${job.company}-${job.dates}`}>
							<img
								src={job.logo}
								alt={`${job.company} logo`}
								className="company-logo"
							/>
							<div className="job-details">
								<h3>{job.company}</h3>
								<p className="job-title">{job.title}</p>
								<p className="job-meta">
									{job.dates} · {job.location}
								</p>
							</div>
							<img
								src={job.logo}
								alt=""
								aria-hidden="true"
								className="company-logo"
							/>
						</li>
					))}
				</ul>
			</section>
			<section id="projects">
				<h2>Projects</h2>
				<ul className="project-list">
					{projects.map((project) => (
						<li key={project.name} className="project">
							<h3>{project.name}</h3>
							<p className="project-tech">{project.tech}</p>
							<p className="project-dates">{project.dates}</p>
							<ul className="project-points">
								{project.points.map((point) => (
									<li key={point}>{point}</li>
								))}
							</ul>
						</li>
					))}
				</ul>
			</section>
			<section id="contact">
				<h2>Contact</h2>
				<p className="tagline">
					The fastest way to reach me is email or LinkedIn.
				</p>
				<ul className="contact-list">
					{contactLinks.map((link) => (
						<li key={link.label} className="contact-item">
							<span className="contact-label">{link.label}</span>
							<a
								href={link.href}
								target={
									link.href.startsWith("mailto:")
										? undefined
										: "_blank"
								}
								rel="noreferrer"
							>
								{link.value}
							</a>
						</li>
					))}
				</ul>
			</section>
			<footer>
				<p>© {new Date().getFullYear()} Owenn Herrmann</p>
			</footer>
		</>
	);
}

export default App;
