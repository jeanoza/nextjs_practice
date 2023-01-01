import Head from "next/head"
import React from "react";

type props = {
	title: string | undefined
};

export default function Seo({ title }: props) {
	return (
		<>
			<Head>
				<title>{title}</title>
			</Head>
		</>
	)
}