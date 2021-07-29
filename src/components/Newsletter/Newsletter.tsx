import { useState, FormEvent } from "react";

import useForm from "../../hooks/useForm";
import api from "../../services/api";

import styles from "./Newsletter.module.scss";

export default function Newsletter() {
	const useremail = useForm("email");
	const username = useForm("username");
	const [hasRegistered, setHasRegistered] = useState(false);

	const newRegister = async (event: FormEvent) => {
		event.preventDefault();
		if (useremail.validate() && username.validate()) {
			await api.post("newsletter", {
				email: useremail.value,
				name: username.value,
			});
		}

		setHasRegistered(true);
	};

	const handleRegister = () => {
		if (hasRegistered) {
			setHasRegistered(false);
			username.setvalue("");
			useremail.setvalue("");
		}
	};

	return (
		<section className={styles.container}>
			<div className={styles.wrapper}>
				{!hasRegistered ? (
					<>
						<p className={styles.title}>
							Participe de nossas news com promoções e novidades!
						</p>
						<form className={styles.form} onSubmit={newRegister} noValidate>
							<label>
								<input
									type="text"
									placeholder="Digite seu nome"
									required
									{...username}
								/>
								{username.error && (
									<span className={styles.error}>
										Preencha o seu nome completo
									</span>
								)}
							</label>
							<label>
								<input
									type="email"
									placeholder="Digite seu email"
									required
									{...useremail}
								/>
								{useremail.error && (
									<span className={styles.error}>
										Preencha com um e-mail válido
									</span>
								)}
							</label>
							{username.error || useremail.error ? (
								<button type="button">Eu quero!</button>
							) : (
								<button type="submit">Eu quero!</button>
							)}
						</form>
					</>
				) : (
					<div className={styles.registered}>
						<h3>Seu e-mail foi cadastrado com sucesso!</h3>
						<p>
							A partir de agora você receberá as novidades e ofertas exclusivas.
						</p>
						<button type="button" onClick={handleRegister}>
							Cadastrar novo e-mail
						</button>
					</div>
				)}
			</div>
		</section>
	);
}
