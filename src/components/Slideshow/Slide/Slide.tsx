import imgSlide from "../../../assets/slideshow.png";

import styles from "./Slide.module.scss";

// Componente feito de forma estática
export default function Slide() {
	return (
		<div className={styles.container}>
			<img src={imgSlide} alt="Imagem de slide" />
			<div className={styles.wrapper}>
				<p>
					Olá, o que está buscando?
					<br />
					<span>
						Criar ou Migrar
						<br />
						seu e-commerce?
					</span>
				</p>
			</div>
		</div>
	);
}
