import React from 'react';
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

	const handleTellMeMore = () => {
		const section = document.getElementById("what-is-ted");
		if (section) section.scrollIntoView({ behavior: "smooth" });
	};

	return (
		<div className="page home home-centered modern-home light-theme" style={{ padding: 0, minHeight: 0 }}>
			<div className="home-hero-bg" style={{ minHeight: "92vh", height: "92vh", maxHeight: "none", position: "relative" }}>
				<img
					className="home-bg-img"
					src="R.jpeg"
					alt="SGNS Dwarka"
				/>
				{/* Gradient overlay for depth */}
				<div style={{
					position: "absolute",
					left: 0, top: 0, width: "100%", height: "100%",
					background: "linear-gradient(120deg, rgba(230,43,30,0.10) 0%, rgba(255,255,255,0.55) 100%)",
					zIndex: 2,
					pointerEvents: "none"
				}} />
				<div className="home-hero-glass" style={{ background: "rgba(24,24,24,0.10)", backdropFilter: "blur(2.5px) saturate(1.1)", zIndex: 3 }}>
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
								style={{
									fontSize: "3.5rem",
									marginBottom: "1.1rem",
									fontWeight: 900,
									letterSpacing: "-1px",
									fontFamily: "'Montserrat', 'Arial', sans-serif",
									textAlign: "left"
								}}
							>
								Reimagine <span style={{ color: "#e62b1e" }}>Diversity</span>
							</h1>
							<div style={{
								fontSize: "1.25rem",
								color: "#222",
								marginBottom: "2.2rem",
								fontWeight: 700,
								letterSpacing: ".5px",
								textAlign: "left",
								textShadow: "0 1px 8px #fff8"
							}}>
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
									boxShadow: "0 2px 8px #e62b1e22"
								}}
								onClick={e => { e.preventDefault(); navigate("/nomination"); }}
							>
								Nominate Yourself
							</a>
						</div>
					</div>
				</div>
			</div>
			<div className="upes-gradient-bar" />
			<section
				className="tedx-sections"
				id="what-is-ted"
				style={{
					color: "#181818",
					background: "none"
				}}
			>
				<div className="tedx-section" style={{
					background: "#fff",
					color: "#181818",
					boxShadow: "0 2px 16px #e62b1e11",
					border: "1px solid #f2f2f2",
					marginBottom: "2.5rem"
				}}>
					<h2>
						What is <span style={{ color: "#e62b1e" }}>TED</span>?
					</h2>
					<div className="upes-gradient-bar section-bar" />
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
					marginBottom: "2.5rem"
				}}>
					<h2>
						What is <span style={{ color: "#e62b1e" }}>TEDx</span>?
					</h2>
					<div className="upes-gradient-bar section-bar" />
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
					border: "1px solid #f2f2f2"
				}}>
					<h2>
						What is <span style={{ color: "#e62b1e" }}>TEDxSGNS Youth</span>?
					</h2>
					<div className="upes-gradient-bar section-bar" />
					<p>
						TEDxSGNS Youth is an independently organized TED event hosted by Shanti Gyan Niketan Sr. Sec. Public School (SGNS), Dwarka. The event brings together bright young minds, thought leaders, and changemakers to share powerful stories and fresh ideas that challenge perspectives and ignite curiosity. It is a celebration of ideas worth spreading, curated with the passion and purpose that SGNS has always stood for.
					</p>
					<div className="tedx-theme">
						<strong>2025 Theme:</strong>{" "}
						<span style={{ color: "#e62b1e" }}>Reimagine Diversity</span>
						<div
							style={{
								fontSize: "1rem",
								color: "#444",
								marginTop: "0.5rem",
							}}
						>
							At TEDxSGNS Youth, this year’s theme, "Reimagine Diversity," is not just a call to reflect — it's a challenge to rethink, reconstruct, and revolutionize how we understand inclusion and identity in a changing world. Diversity today goes far beyond checklists or superficial representation. It's about creating spaces where differences are not just accepted but celebrated as the very foundation of creativity, resilience, and growth.
						</div>
					</div>
				</div>
			</section>
			{/* Divider above speakers */}
			<div style={{
				width: "100%",
				maxWidth: "900px",
				margin: "2.5rem auto 0 auto",
				borderTop: "2px dashed #e62b1e33",
				opacity: 0.7
			}} />
			<div
				style={{
					background: "linear-gradient(90deg, #fff 0%, #f9f9f9 100%)",
					boxShadow: "0 4px 24px #e62b1e22",
					borderRadius: "18px",
					margin: "2.5rem auto 2.5rem auto",
					padding: "2.5rem 1.5rem 2.5rem 1.5rem",
					maxWidth: "92vw",
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
