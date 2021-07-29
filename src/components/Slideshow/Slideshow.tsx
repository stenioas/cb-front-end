// IMPLEMENTAR
// Slides diferentes

import Slider from "react-slick";

import Slide from "./Slide";

import styles from "./Slideshow.module.scss";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function Slideshow() {
	const settings = {
		dots: true,
		infinite: true,
		speed: 1000,
		slidesToShow: 1,
		slidesToScroll: 1,
		autoplay: true,
		autoplaySpeed: 5000,
		cssEase: "linear",
		pauseOnHover: true,
		arrows: false,
	};

	return (
		<section className={styles.container}>
			<Slider {...settings}>
				<Slide />
				<Slide />
				<Slide />
				<Slide />
			</Slider>
		</section>
	);
}
