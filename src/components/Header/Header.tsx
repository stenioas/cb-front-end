// IMPLEMENTAR
// Menu expansível
// Funcionalidade da SearchBar

import useStore from "../../hooks/useStore";

import imgLogo from "../../assets/logo.svg";
import imgMenu from "../../assets/menu.svg";
import imgMag from "../../assets/mag-glass.svg";
import imgAvatar from "../../assets/avatar.svg";
import imgCart from "../../assets/cart.svg";

import styles from "./Header.module.scss";

export default function Header() {
	const { cartCounter } = useStore();

	return (
		<header className={styles.container}>
			<div className={styles.wrapper}>
				<div className={styles.menu}>
					<img src={imgMenu} alt="Menu" />
				</div>
				<div className={styles.logo}>
					<a href="/">
						<img src={imgLogo} alt="Logo" />
					</a>
				</div>
				<div className={styles.searchBox}>
					<label>
						<input type="text" placeholder="O que está procurando?" />
					</label>
					<img src={imgMag} alt="Ícone de busca" />
				</div>
				<div className={styles.accountBox}>
					<img src={imgAvatar} alt="Avatar do usuário" />
					<span>Minha Conta</span>
				</div>
				<div className={styles.cartBox}>
					<img src={imgCart} alt="Carrinho" />
					<div className={styles.cartCounter}>{cartCounter}</div>
				</div>
			</div>
		</header>
	);
}
