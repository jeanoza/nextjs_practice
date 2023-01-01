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
			<img src="/vercel.svg" />
			<div>
				<Link href="/">
					<span className={router.pathname === "/" ? "active" : ""}>Home</span>
				</Link >
				<Link href="/about">
					<span className={router.pathname === "/about" ? "active" : ""}>About</span>
				</Link>
			</div >
			<style jsx>{`
				nav {
					display: flex;
					gap: 10px;
					flex-direction: column;
					align-items: center;
					padding-top: 20px;
					padding-bottom: 10px;
					box-shadow: rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px;
				}
				img {
					max-width: 100px;
					margin-bottom: 5px;
				}
				nav a {
					font-weight: 600;
					font-size: 18px;
				}
				.active {
					color: tomato;
				}
				nav div {
					display: flex;
					gap: 10px;
				}
			`}</style>
		</nav >
	);
}