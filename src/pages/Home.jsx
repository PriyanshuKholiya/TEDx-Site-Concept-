import React, { useEffect, useRef, useState } from 'react';
import { useNavigate } from "react-router-dom";
import "./HomeCarousel.css";

const speakers = [
	{
		name: "Dr. Asha Sharma",
		img: "https://images.pexels.com/photos/1181696/pexels-photo-1181696.jpeg?auto=compress&w=256&h=256&fit=facearea&facepad=2", // female professor
	},
	{
		name: "Rahul Verma",
		img: "https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&w=256&h=256&fit=facearea&facepad=2", // male professor
	},
	{
		name: "Priya Singh",
		img: "https://images.pexels.com/photos/733872/pexels-photo-733872.jpeg?auto=compress&w=256&h=256&fit=facearea&facepad=2", // female professor
	},
	{
		name: "Amitabh Joshi",
		img: "https://images.pexels.com/photos/1707828/pexels-photo-1707828.jpeg?auto=compress&w=256&h=256&fit=facearea&facepad=2", // updated to a formal male professor
	},
	{
		name: "Sunita Patel",
		img: "https://images.pexels.com/photos/1130626/pexels-photo-1130626.jpeg?auto=compress&w=256&h=256&fit=facearea&facepad=2", // female professor
	},
	{
		name: "Dr. Kavita Rao",
		img: "https://images.pexels.com/photos/733872/pexels-photo-733872.jpeg?auto=compress&w=256&h=256&fit=facearea&facepad=2", // female professor (repeat for diversity)
	},
	{
		name: "Manoj Nair",
		img: "https://images.pexels.com/photos/2379005/pexels-photo-2379005.jpeg?auto=compress&w=256&h=256&fit=facearea&facepad=2", // male professor
	},
	{
		name: "Meena Kumari",
		img: "https://images.pexels.com/photos/1130626/pexels-photo-1130626.jpeg?auto=compress&w=256&h=256&fit=facearea&facepad=2", // female professor (repeat for diversity)
	},
	{
		name: "Suresh Iyer",
		img: "https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&w=256&h=256&fit=facearea&facepad=2", // male professor (repeat for diversity)
	}
];

export default function Home() {
	const navigate = useNavigate();
	const heroRef = useRef(null);
	const [fixedHero, setFixedHero] = useState(false);

	// Fade-in animation for hero
	useEffect(() => {
		const el = heroRef.current;
		if (!el) return;
		const obs = new window.IntersectionObserver(
			([entry]) => {
				if (entry.isIntersecting) el.classList.add('fade-in');
			},
			{ threshold: 0.2 }
		);
		obs.observe(el);
		return () => obs.disconnect();
	}, []);

	// Sticky hero effect: fix hero image while text scrolls, then unfix when out of section
	useEffect(() => {
		const handleScroll = () => {
			const hero = heroRef.current;
			if (!hero) return;
			const rect = hero.getBoundingClientRect();
			const windowHeight = window.innerHeight;
			// When hero top is at 0 and bottom is below viewport, fix the hero
			if (rect.top <= 0 && rect.bottom > windowHeight + 60) {
				setFixedHero(true);
			} else {
				setFixedHero(false);
			}
		};
		window.addEventListener('scroll', handleScroll, { passive: true });
		return () => window.removeEventListener('scroll', handleScroll);
	}, []);

	const handleTellMeMore = () => {
		const section = document.getElementById("theme-section");
		if (section) section.scrollIntoView({ behavior: "smooth" });
	};

	return (
		<div className="page home home-centered modern-home light-theme" style={{ padding: 0, minHeight: 0 }}>
			<div
				className={`home-hero-bg${fixedHero ? " home-hero-fixed" : ""}`}
				ref={heroRef}
				style={{
					minHeight: "92vh",
					height: "92vh",
					maxHeight: "none",
					position: fixedHero ? "fixed" : "relative",
					top: fixedHero ? 0 : undefined,
					left: fixedHero ? 0 : undefined,
					width: fixedHero ? "100vw" : undefined,
					zIndex: fixedHero ? 20 : undefined,
					transition: "box-shadow 0.3s",
					boxShadow: fixedHero ? "0 8px 32px #0003" : undefined,
					overflow: "hidden"
				}}
			>
				<img
					className="home-bg-img"
					src="R.jpeg"
					alt="SGNS Dwarka"
					style={{
						width: "100vw",
						height: "100vh",
						objectFit: "cover",
						objectPosition: "center 30%", // Move image up a bit for better focus
						filter: "none",
						WebkitFilter: "none",
						zIndex: 1,
						position: "absolute",
						left: 0,
						top: 0
					}}
				/>
				{/* Light overlay for readability */}
				<div style={{
					position: "absolute",
					left: 0, top: 0, width: "100%", height: "100%",
					background: "linear-gradient(120deg, rgba(230,43,30,0.04) 0%, rgba(255,255,255,0.10) 100%)",
					zIndex: 2,
					pointerEvents: "none"
				}} />
				<div className="home-hero-glass" style={{
					background: "transparent",
					backdropFilter: "none",
					zIndex: 3
				}}>
					<div
						className="home-hero-content"
						style={{
							width: "100%",
							display: "flex",
							alignItems: "center",
							justifyContent: "space-between",
							gap: "2.5rem",
							maxWidth: "1200px",
							margin: "0 auto"
						}}
					>
						<div className="home-hero-left" style={{ flex: 1, minWidth: 0, display: "flex", flexDirection: "column", alignItems: "flex-start" }}>
							<h1
								className="home-hero-title"
							>
								<span style={{ color: "#fff" }}>Reimagine</span> <span className="highlight">Diversity</span>
							</h1>
							<div className="home-hero-subtitle">
								Where every difference is a new perspective.
							</div>
							<div className="home-hero-btns" style={{ gap: "1.5rem", display: "flex", flexWrap: "wrap" }}>
								<button className="home-red-btn modern-btn" onClick={handleTellMeMore}>
									TELL ME MORE
								</button>
								<button
									className="home-red-btn modern-btn"
									style={{
										background: "linear-gradient(90deg, #eb0028 60%, #ff5e3a 100%)",
										color: "#fff",
										border: "none",
										fontWeight: 700
									}}
									onClick={() => navigate("/about")}
								>
									About Us
								</button>
							</div>
						</div>
						{/* Centered Nomination Box, now right-aligned */}
						<div
							style={{
								background: "#fff",
								borderRadius: "20px",
								boxShadow: "0 6px 32px #e62b1e22",
								padding: "2.5rem 2.5rem 2rem 2.5rem",
								maxWidth: 400,
								width: "100%",
								border: "1.5px solid #e62b1e22",
								display: "flex",
								flexDirection: "column",
								alignItems: "center",
								justifyContent: "center",
								margin: "0 0 0 3vw"
							}}
						>
							<div style={{ fontWeight: 700, fontSize: "1.13rem", color: "#e62b1e", marginBottom: "0.5rem", letterSpacing: "1px" }}>
								TED<span style={{color:'#e62b1e'}}>x</span>SGNS Youth
							</div>
							<div style={{ fontSize: "1.55rem", fontWeight: 900, color: "#181818", marginBottom: "0.5rem", textAlign: "center", fontFamily: "'Montserrat', 'Arial', sans-serif" }}>
								Reimagine Diversity
							</div>
							<div style={{ fontSize: "1.08rem", color: "#444", marginBottom: "1.2rem", textAlign: "center" }}>
								<span style={{ fontWeight: 600 }}>Date:</span> 28 June 2025<br />
								<span style={{ fontWeight: 600 }}>Location:</span> New Delhi, India
							</div>
							<div style={{ fontSize: "1.01rem", color: "#888", marginBottom: "1.3rem", textAlign: "center" }}>
								Join us for a day of inspiring talks, new perspectives, and a celebration of diversity!
							</div>
							<a
								href="#"
								style={{
									display: "inline-block",
									background: "#e62b1e",
									color: "#fff",
									borderRadius: "6px",
									padding: "0.85rem 2.1rem",
									fontWeight: 700,
									fontSize: "1.13rem",
									textDecoration: "none",
									letterSpacing: ".5px",
									boxShadow: "0 2px 8px #e62b1e22",
									transition: "background 0.18s, transform 0.18s, box-shadow 0.18s",
									cursor: "pointer"
								}}
								onMouseOver={e => {
									e.currentTarget.style.background = "#fff";
									e.currentTarget.style.color = "#e62b1e";
									e.currentTarget.style.transform = "translateY(-2px) scale(1.04)";
									e.currentTarget.style.boxShadow = "0 4px 16px #e62b1e33";
									e.currentTarget.style.border = "2px solid #e62b1e";
								}}
								onMouseOut={e => {
									e.currentTarget.style.background = "#e62b1e";
									e.currentTarget.style.color = "#fff";
									e.currentTarget.style.transform = "none";
									e.currentTarget.style.boxShadow = "0 2px 8px #e62b1e22";
									e.currentTarget.style.border = "none";
								}}
								onClick={e => { e.preventDefault(); navigate("/nomination"); }}
							>
								Nominate Yourself
							</a>
						</div>
					</div>
				</div>
			</div>
			{/* Add a spacer div to prevent layout jump when hero is fixed */}
			{fixedHero && (
				<div style={{ height: "92vh", width: "100%" }} />
			)}
			<div className="animated-gradient-divider" />

			{/* TED/TEDx/TEDxSGNS Youth section */}
			<section
				className="tedx-sections"
				id="what-is-ted"
				style={{
					color: "#181818",
					background: "none",
					margin: "2.5rem auto",
					maxWidth: "900px",
					width: "100%",
					padding: 0
				}}
			>
				<div className="tedx-section" style={{
					background: "#fff",
					color: "#181818",
					boxShadow: "0 2px 16px #e62b1e11",
					border: "1px solid #f2f2f2",
					marginBottom: "2.5rem",
					borderRadius: "18px",
					padding: "2.5rem"
				}}>
					<h2>
						What is <span style={{ color: "#e62b1e" }}>TED</span>?
					</h2>
					<div className="animated-gradient-divider section-bar" />
					<p>
						TED is a nonprofit devoted to spreading ideas, usually in the form of
						short, powerful talks. TED began in 1984 as a conference where
						Technology, Entertainment and Design converged, and today covers
						almost all topics — from science to business to global issues — in
						more than 100 languages.
					</p>
				</div>
				<div className="tedx-section" style={{
					background: "#fff",
					color: "#181818",
					boxShadow: "0 2px 16px #e62b1e11",
					border: "1px solid #f2f2f2",
					marginBottom: "2.5rem",
					borderRadius: "18px",
					padding: "2.5rem"
				}}>
					<h2>
						What is <span style={{ color: "#e62b1e" }}>TEDx</span>?
					</h2>
					<div className="animated-gradient-divider section-bar" />
					<p>
						TEDx is a program of local, self-organized events that bring people
						together to share a TED-like experience. At a TEDx event, TED Talks
						video and live speakers combine to spark deep discussion and
						connection in a small group.
					</p>
				</div>
				<div className="tedx-section" style={{
					background: "#fff",
					color: "#181818",
					boxShadow: "0 2px 16px #e62b1e11",
					border: "1px solid #f2f2f2",
					marginBottom: 0,
					borderRadius: "18px",
					padding: "2.5rem"
				}}>
					<h2>
						What is <span style={{ color: "#e62b1e" }}>TEDxSGNS Youth</span>?
					</h2>
					<div className="animated-gradient-divider section-bar" />
					<p>
						TEDxSGNS Youth is an independently organized TED event hosted by Shanti Gyan Niketan Sr. Sec. Public School (SGNS), Dwarka. The event brings together bright young minds, thought leaders, and changemakers to share powerful stories and fresh ideas that challenge perspectives and ignite curiosity. It is a celebration of ideas worth spreading, curated with the passion and purpose that SGNS has always stood for.
					</p>
					<div className="tedx-theme">
						<strong>2025 Theme:</strong>{" "}
						<span style={{ color: "#e62b1e" }}>Reimagine Diversity</span>
						{/* You may remove or shorten the brief theme blurb here if desired, since the full section is above */}
					</div>
				</div>
			</section>

			{/* THEME SECTION MOVED HERE, margin matches above */}
			<section
				id="theme-section"
				style={{
					background: "#fff",
					color: "#181818",
					boxShadow: "0 2px 16px #e62b1e11",
					border: "1px solid #f2f2f2",
					margin: "2.5rem auto",
					maxWidth: "900px",
					borderRadius: "18px",
					padding: "2.5rem"
				}}
			>
				<h2>
					Theme: <span style={{ color: "#e62b1e" }}>Reimagine Diversity</span>
				</h2>
				<div className="animated-gradient-divider section-bar" />
				<p>
					At TEDxSGNS Youth, this year’s theme, "Reimagine Diversity," is not just a call to reflect — it's a challenge to rethink, reconstruct, and revolutionize how we understand inclusion and identity in a changing world. Diversity today goes far beyond checklists or superficial representation. It's about creating spaces where differences are not just accepted but celebrated as the very foundation of creativity, resilience, and growth.
				</p>
				<p>
					To "reimagine" is to move past inherited assumptions — about race, gender, ability, culture, orientation, socio-economic background, or learning style — and to embrace the possibility that true innovation emerges from the intersections of our varied experiences. Whether it's within classrooms, workplaces, homes, or communities, the theme encourages us to see diversity as a mindset — a lens through which we approach problem-solving, leadership, empathy, and storytelling.
				</p>
				<p>
					"Reimagine Diversity" dares us to look at what has been invisible: the quiet voices, the unconventional thinkers, the misfits, the unheard narratives — and bring them into the spotlight. It is a theme that opens the door to conversations about neurodiversity, intersectionality, global cultures, gender fluidity, differing abilities, and beyond. By doing so, we aim to foster environments where everyone has the right not just to participate but to thrive.
				</p>
				<p>
					This theme is especially timely in a world where the boundaries of identity are increasingly fluid and where the need for empathy, understanding, and equity has never been greater. At TEDxSGNS Youth, we envision a platform where young changemakers, innovators, creators, and dreamers come together to redefine what inclusion looks like — and to spark a movement that values differences not as obstacles, but as opportunities.
				</p>
				<p>
					Through talks that challenge norms, ideas that defy stereotypes, and stories that expand horizons, "Reimagine Diversity" becomes more than just a theme — it becomes a transformative experience. One that reshapes how we lead, learn, create, and connect.
				</p>
				<p>
					Let’s reimagine who gets to speak. Let’s reimagine who gets to lead.<br />
					Let’s reimagine diversity — together.
				</p>
			</section>
			{/* THEME SECTION END */}

			{/* Divider above speakers */}
			<div
				className="slim-animated-divider"
				style={{
					width: "100%",
					maxWidth: "900px",
					margin: "2.5rem auto 0 auto"
				}}
			/>
			<div
				style={{
					background: "linear-gradient(90deg, #fff 0%, #f9f9f9 100%)",
					boxShadow: "0 4px 24px #e62b1e22",
					borderRadius: "18px",
					margin: "2.5rem auto 2.5rem auto",
					padding: "2.5rem 1.5rem 2.5rem 1.5rem",
					maxWidth: "92vw", // restored to previous value for full carousel width
					width: "calc(100% - 4vw)",
					position: "relative"
				}}
			>
				<div
					style={{
						position: "absolute",
						top: "-1.6rem",
						left: "2.5rem",
						background: "#e62b1e",
						color: "#fff",
						padding: "0.4rem 1.2rem",
						borderRadius: "1rem",
						fontWeight: 700,
						fontSize: "1.1rem",
						boxShadow: "0 2px 8px #e62b1e33",
						letterSpacing: "1px"
					}}
				>
					Our Speakers
				</div>
				<div className="carousel-container" style={{ background: "transparent", margin: 0 }}>
					<div className="carousel-track">
						{[...speakers, ...speakers].map((sp, i) => (
							<div className="carousel-card" key={i}>
								<img src={sp.img} alt={sp.name} />
								<div className="carousel-overlay">
									<span>{sp.name}</span>
								</div>
							</div>
						))}
					</div>
				</div>
			</div>
		</div>
	);
}
