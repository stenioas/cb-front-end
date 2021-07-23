// PENDENTE
// Implementar validações de inputs com o hook useForm
// Implementar mensagens de erro para o usuário
// Implementar mensagem após o cadastro com sucesso

import { useState } from "react";

import { registerUser } from "../../services/api";

import styles from "./Newsletter.module.scss";

export default function Newsletter() {
	const [name, setName] = useState("");
	const [email, setEmail] = useState("");

	return (
		<section className={styles.container}>
			<div className={styles.wrapper}>
				<p className={styles.title}>
					Participe de nossas news com promoções e novidades!
				</p>
				<form
					className={styles.form}
					onSubmit={() => registerUser(name, email)} // Teste de funcionalidade não concluido
				>
					<label>
						<input
							type="text"
							placeholder="Digite seu nome"
							value={name}
							required
							onChange={(e) => setName(e.target.value)}
						/>
					</label>
					<label>
						<input
							type="email"
							placeholder="Digite seu email"
							value={email}
							required
							onChange={(e) => setEmail(e.target.value)}
						/>
					</label>
					<button type="submit">Eu quero!</button>
				</form>
			</div>
		</section>
	);
}
