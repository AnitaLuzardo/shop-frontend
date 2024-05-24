import { configureStore } from "@reduxjs/toolkit";
import usersReduce from "./reducers/users";
import productsReduce from "./reducers/products";

export default configureStore({
	reducer: {
		users: usersReduce,
    products: productsReduce
	}
})