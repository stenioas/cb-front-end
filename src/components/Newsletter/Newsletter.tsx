import styles from "./Newsletter.module.scss";

export default function Newsletter() {
	return (
		<section className={styles.container}>
			<div className={styles.wrapper}>
				<p className={styles.title}>
					Participe de nossas news com promoções e novidades!
				</p>
				{/* Falta implementar lógica do form */}
				<form className={styles.form}>
					<label>
						<input type="text" placeholder="Digite seu nome" />
					</label>
					<label>
						<input type="email" placeholder="Digite seu email" />
					</label>
					<button type="submit">Eu quero!</button>
				</form>
			</div>
		</section>
	);
}
