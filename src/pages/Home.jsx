import React from "react";

export default function Home() {
	const curr=window.location.href;
	return (
		<div className="page home">
			<h1>Gently Used NFTs Looking For A new Home</h1>
			<p>Click the "Connect Wallet" {curr} Button above to access the minting page.</p>
			<img src="hero.png" alt="Hero" width="100%" />
		</div>
	);
}
