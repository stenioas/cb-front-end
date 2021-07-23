// PENDENTES
// Corrigir bug de resposividade no colapso do endereço

import styles from "./Footer.module.scss";

import imgCorebiz from "../../assets/corebiz-logo.svg";
import imgVtex from "../../assets/vtex-logo.svg";
import imgEmail from "../../assets/email.svg";
import imgHeadset from "../../assets/headset.svg";

export default function Footer() {
	return (
		<footer className={styles.container}>
			<div className={styles.wrapper}>
				<div className={styles.localization}>
					<h2>Localização</h2>
					<div className={styles.line} />
					<p className={styles.address}>
						Avenida Andrômeda, 2000, Bloco 6 e 8<br />
						Alphavile SP
						<br />
						brasil@corebiz.ag
						<br />
						+55 11 3090 1039
					</p>
				</div>
				<div className={styles.contactUs}>
					<button type="button">
						<img className={styles.icon} src={imgEmail} alt="" />
						ENTRE EM CONTATO
					</button>
					<button type="button">
						<img className={styles.icon} src={imgHeadset} alt="" />
						FALE COM O NOSSO
						<br />
						CONSULTOR ONLINE
					</button>
				</div>
				<div className={styles.logos}>
					<img src={imgCorebiz} alt="" className={styles.logo} />
					<img src={imgVtex} alt="" className={styles.logo} />
				</div>
			</div>
		</footer>
	);
}
