import { configureStore } from "@reduxjs/toolkit";
import productsReduce from "./reducers/products";
import sessionReduce from "./reducers/authentication"
// import usersReduce from "./reducers/users";

export default configureStore({
	reducer: {
		// users: usersReduce,
    products: productsReduce,
    session: sessionReduce
	}
})