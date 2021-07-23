import Header from "../../components/Header";
import Slideshow from "../../components/Slideshow";
import Showcase from "../../components/Showcase";
import Newsletter from "../../components/Newsletter";
import Footer from "../../components/Footer/Footer";

// import styles from "./Home.module.scss";

export default function Home() {
	return (
		<>
			<Header />
			<Slideshow />
			<Showcase />
			<Newsletter />
			<Footer />
		</>
	);
}
