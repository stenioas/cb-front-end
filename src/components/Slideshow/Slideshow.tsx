// PENDENTE
// Implementar slides diferentes

import Slider from "react-slick";

import Slide from "./Slide";

import styles from "./Slideshow.module.scss";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function Slideshow() {
	const sliderSettings = {
		dots: true,
		infinite: true,
		speed: 500,
		slidesToShow: 1,
		slidesToScroll: 1,
	};

	return (
		<section className={styles.container}>
			<Slider {...sliderSettings}>
				<Slide />
				<Slide />
				<Slide />
				<Slide />
			</Slider>
		</section>
	);
}
