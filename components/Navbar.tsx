import Link from "next/link";
import { useRouter } from "next/router";

// import css from 'styled-jsx/css'
// const { className, styles } = css.resolve`
// 	nav {
// 		background-color:tomato;
// 	}
// 	a {
// 		text-decoration:none;
// 	}
// 	.active {
// 		color:black;
// 	}
// `;

// export default function Navbar() {
// 	const router = useRouter();


// 	// exceptional case because of Link and <a>
// 	console.log(className, styles)
// 	return (
// 		<nav className={className}>
// 			<Link href="/" className={((router.pathname === "/")
// 				? "active " : "") + className}>Home
// 			</Link>
// 			<Link href="/about" className={((router.pathname === "/about")
// 				? "active " : "") + className}>About
// 			</Link>
// 			{styles}
// 		</nav>
// 	);
// }

export default function Navbar() {
	const router = useRouter();

	//To simplify, i use <span> tag for styling
	return (
		<nav>
			<Link href="/">
				<span className={router.pathname === "/" ? "active" : ""}>
					home
				</span>
			</Link>
			<Link href="/about">
				<span className={router.pathname === "/about" ? "active" : ""}>
					about
				</span>
			</Link>
			<style jsx>{`
				.active {
					color:red;
				}
			`}</style>
		</nav>
	);
}