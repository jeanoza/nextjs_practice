import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import Seo from "../../components/Seo";

export default function Detail() {
	const router = useRouter();

	const [title, id] = router.query.params || [];
	// const [movie, setMovie] = useState();


	useEffect(() => {
		(async function () {
			let data = await (await fetch(`/api/movies/${id}`)).json();

			//with this i can make this page prettier.
			//but not interesting => i won't do this.
			console.log(data)
		})();
	}, [])

	return <>
		<Seo title={title} />
		<h4>{title || "Loading..."}</h4>
	</>
}