import React from "react";
import { Navigate, useLocation } from "react-router-dom";
import "../main/completeProjectStyling.css";

export default function Thankyou() {
	const location = useLocation();

	if (!location.state) {
		return <Navigate to="/menu" />;
	} else {
		return (
			<div>
				<div class="thankyou-page">
					<div class="t_header">
						<div class="t_logo">
							{/* <img src="https://codexcourier.com/images/banner-logo.png" alt=""/> */}
						</div>
						<h1>Thank You {location.state.name}!</h1>
					</div>
					<div class="_body">
						<div class="_box">
							{/* <h2>
                    <strong>Please check your email</strong> for further instructions on how to complete your account setup.
                </h2> */}
							<h2>
								Thank you for your order. We hope that you enjoy your purchase
								today and everyday. Your order is on its way.
							</h2>
							<h2 style={{ textAlign: "center", color: "red" }}>
								Your order no is {location.state.orderId}
							</h2>
							<h2 style={{ textAlign: "center", color: "red" }}>
								Total Amount is ${location.state.cartTotal}
							</h2>
						</div>
					</div>
					<div class="_footer">
						<a class="t_btn" href="/menu">
							Back to Menupage
						</a>
					</div>
				</div>
			</div>
		);
	}
}
