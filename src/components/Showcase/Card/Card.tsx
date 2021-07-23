// PENDENTE
// Implementar campos faltantes do produto
// Implementar tarja de produto em oferta
// Implementar estilos do card

import useCart from "../../../hooks/useCart";

import styles from "./Card.module.scss";

type InstallmentsType = {
	quantity: number;
	value: number;
};

interface CardProps {
	productId: number;
	productName: string;
	stars: number;
	imageUrl: string;
	listPrice: number | null;
	price: number;
	installments: Array<InstallmentsType> | Array<null>;
}

export default function Card(props: CardProps) {
	const { cartCounter, setCartCounter } = useCart();

	return (
		<div className={styles.card}>
			<img src={props.imageUrl} alt="Produto" />
			<h4>{props.productName}</h4>
			<div className={styles.price}>
				<p className={styles.listPrice}>R$ {props.listPrice}</p>
				<p className={styles.price}>R$ {props.price}</p>
				<p className={styles.installments}>{props.installments}</p>
			</div>
			<button type="button" onClick={() => setCartCounter(cartCounter + 1)}>
				COMPRAR
			</button>
		</div>
	);
}
