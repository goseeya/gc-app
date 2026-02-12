"use client";
import { GraftConfig } from "@graft/nuget-RandomNumber";
GraftConfig.host = `ws://localhost/ws`;
import { RandomNumberGenerator } from "@graft/nuget-RandomNumber";
import { useEffect, useState } from "react";

export default function Home() {
	const [data, setData] = useState(0);

	useEffect(() => {
		RandomNumberGenerator.GetRandomNumber().then(setData);
	}, []);

	return (
		<div>
			<h1>Hello world</h1>
			<p>Random number is: {data}</p>
		</div>
	);
}
