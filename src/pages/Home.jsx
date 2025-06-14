import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { ThemeContext } from "../App";
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
	const { theme } = useContext(ThemeContext);

	const handleTellMeMore = () => {
		const section = document.getElementById("what-is-ted");
		if (section) section.scrollIntoView({ behavior: "smooth" });
	};

	return (
		<div className={`page home home-centered modern-home ${theme}-theme`} style={{ padding: 0, minHeight: 0 }}>
			<div className="home-hero-bg" style={{ minHeight: "92vh", height: "92vh", maxHeight: "none" }}>
				<img
					className="home-bg-img"
					src="R.jpeg"
					alt="UPES Dehradun"
				/>
				<div className="home-hero-glass">
					<div className="home-hero-content">
						<div className="home-hero-left">
							<h1 className="home-hero-title">"IDEAS WORTH SPREADING"</h1>
							<div className="home-hero-btns">
								<button className="home-red-btn modern-btn" onClick={handleTellMeMore}>
									TELL ME MORE
								</button>
								<button
									className="home-red-btn modern-btn"
									onClick={() => navigate("/registration")}
								>
									Register Now
								</button>
							</div>
						</div>
					</div>
				</div>
			</div>
			{/* Gradient bar below hero */}
			<div className="upes-gradient-bar" />
			<section
				className="tedx-sections"
				id="what-is-ted"
				style={{
					color: theme === "light" ? "#181818" : "#fff",
					background: "none"
				}}
			>
				<div className="tedx-section" style={{
					background: theme === "light" ? "#fff" : "#181818",
					color: theme === "light" ? "#181818" : "#fff"
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
					background: theme === "light" ? "#fff" : "#181818",
					color: theme === "light" ? "#181818" : "#fff"
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
					background: theme === "light" ? "#fff" : "#181818",
					color: theme === "light" ? "#181818" : "#fff"
				}}>
					<h2>
						What is <span style={{ color: "#e62b1e" }}>TEDxUPES</span>?
					</h2>
					<div className="upes-gradient-bar section-bar" />
					<p>
						TEDxUPES is an independently organized TED event at the University of
						Petroleum and Energy Studies, Dehradun. Our mission is to share ideas
						worth spreading and foster a culture of innovation and inspiration.
					</p>
					<div className="tedx-theme">
						<strong>2025 Theme:</strong>{" "}
						<span style={{ color: "#e62b1e" }}>Bridging Realities</span>
						<div
							style={{
								fontSize: "1rem",
								color: theme === "light" ? "#444" : "#ccc",
								marginTop: "0.5rem",
							}}
						>
							Exploring how technology, culture, and human experience intersect to
							create new possibilities for our world.
						</div>
					</div>
				</div>
			</section>
			<div
				className="carousel-container"
				style={{ margin: "2.5rem 0" }}
			>
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
	);
}
