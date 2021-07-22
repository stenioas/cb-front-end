import imgLogo from "../../assets/logo.svg";
import imgMenu from "../../assets/menu.svg";
import imgMag from "../../assets/mag-glass.svg";
import imgAvatar from "../../assets/avatar.svg";
import imgCart from "../../assets/cart.svg";

import styles from "./Header.module.scss";

export default function Header() {
	return (
		<header>
			<div className={styles.wrapper}>
				<div className={styles.menu}>
					<img src={imgMenu} alt="Menu" />
				</div>
				<div className={styles.logo}>
					<img src={imgLogo} alt="Logo" />
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
					<div className={styles.cartCounter}>1</div>
				</div>
			</div>
		</header>
	);
}
