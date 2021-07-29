// IMPLEMENTAR
// Tarja de produto em oferta

import Rating from "react-star-rating-component";

import useStore from "../../../hooks/useStore";
import { Product } from "../../../utils/types";
import styles from "./Card.module.scss";

export default function Card(props: Product) {
	const { cartCounter, setCartCounter } = useStore();

	return (
		<div className={styles.card}>
			<img src={props.imageUrl} alt="Produto" />
			<div className={styles.details}>
				<h4>{props.productName}</h4>
				<Rating
					name="rate"
					starCount={5}
					value={props.stars}
					starColor="#F8475F"
				/>
				{props.listPrice && (
					<p className={styles.listPrice}>
						de
						{new Intl.NumberFormat("pt-BR", {
							style: "currency",
							currency: "BRL",
						}).format(props.listPrice / 100)}
					</p>
				)}
				<p className={styles.price}>
					por{" "}
					{new Intl.NumberFormat("pt-BR", {
						style: "currency",
						currency: "BRL",
					}).format(props.price / 100)}
				</p>
				{props.installments.length > 0 && (
					<p className={styles.installments}>
						ou em {props.installments[0]?.quantity}x de{" "}
						{new Intl.NumberFormat("pt-BR", {
							style: "currency",
							currency: "BRL",
						}).format(props.installments[0]?.value / 100)}
					</p>
				)}
				<button type="button" onClick={() => setCartCounter(cartCounter + 1)}>
					COMPRAR
				</button>
			</div>
		</div>
	);
}
