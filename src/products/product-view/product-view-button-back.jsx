import React from 'react'
import {NavLink} from 'react-router-dom'
import './product-view.sass'

const ProductViewButtonBack= (props) => {
	const {name, price, description, category_name} = props

	return (
		<div className={"container-product-view-button-back"}>
			<NavLink to="/products-list"><button>Back</button></NavLink>
		</div>
	)
}

export default ProductViewButtonBack