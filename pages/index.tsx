import Seo from "../components/Seo"
import { useEffect, useState } from "react"
import Link from "next/link";
import { useRouter } from "next/router";

type IMovie = {
	id: number;
	title: string;
	original_title: string;
	poster_path: string;
};

export default function Home() {
	const [movies, setMovies] = useState<IMovie[] | undefined>();
	useEffect(() => {
		// function getData() {
		// 	fetch(`https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}`)
		// 		.then(res => res.json())
		// 		.then(({ results }) => {
		// 			//here to do qqch
		// 			setMovies(results)
		// 		});
		// }
		// getData();
		(async () => {
			const { results } = await (await fetch(`/api/movies`)).json();
			setMovies(results);
		})();

	}, []);

	const router = useRouter();
	const onClick = (id: number, title: string) => {
		// to mask query
		// router.push({
		// 	pathname: `/movies/${id}`,
		// 	query: {
		// 		title
		// 	}
		// }, `/movies/${id}`);

		router.push({ pathname: `/movies/${title}/${id}` })
	}
	return (
		<div className="container">
			<Seo title="Home" />
			{!movies && <h4>Loading...</h4>}
			{movies?.map((movie) => (
				<div onClick={() => onClick(movie.id, movie.original_title)} className="movie" key={movie.id}>
					<img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} />
					<h4>{movie.original_title}</h4>
				</div>
			))}
			<style jsx>{`
				.container {
					display: grid;
					grid-template-columns: 1fr 1fr;
					padding: 20px;
					gap: 20px;
				}
				.movie {
					cursor:pointer;
				}
				.movie img {
					max-width: 100%;
					border-radius: 12px;
					transition: transform 0.2s ease-in-out;
					box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 12px;
				}
				.movie:hover img {
					transform: scale(1.05) translateY(-10px);
				}
				.movie h4 {
					font-size: 18px;
					text-align: center;
				}
 	     `}</style>
		</div>
	)
}