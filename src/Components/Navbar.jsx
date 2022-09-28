import React, { useEffect, useState } from "react";
import styles from "./Navbar.module.css";

export default function Navbar() {
	const defaultTheme = window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
	const [theme, setTheme] = useState(localStorage.theme || defaultTheme);

	useEffect(() => {
		if (theme === "dark") {
			document.documentElement.classList.add("dark");
		} else {
			document.documentElement.classList.remove("dark");
		}
	}, []);

	function handleModeChange() {
		if (theme === "dark") {
			setTheme("light");
			localStorage.theme = "light";
			document.documentElement.classList.remove("dark");
		} else {
			setTheme("dark");
			localStorage.theme = "dark";
			document.documentElement.classList.add("dark");
		}
	}

	const scrollTop = () => {
		window.scrollTo({ top: 0, behavior: "smooth" });
	};

	return (
		<nav className={styles.navbar}>
			<div className={styles["logo-container"]} onClick={scrollTop}>
				<svg
					className={styles["logo-svg"]}
					viewBox="0 0 162 49"
					fill="none"
					xmlns="http://www.w3.org/2000/svg"
				>
					<path
						d="M85.5667 12.8576H105.177V15.6326L88.5267 35.1316L88.0457 34.1326H105.177V36.9076H85.5667V34.1326L102.291 14.6336L102.772 15.6326H85.5667V12.8576ZM122.914 30.9506H125.689C125.492 32.1593 125.048 33.2446 124.357 34.2066C123.691 35.1439 122.803 35.8963 121.693 36.4636C120.608 37.0063 119.35 37.2776 117.919 37.2776C116.192 37.2776 114.638 36.8706 113.257 36.0566C111.876 35.2179 110.778 34.0833 109.964 32.6526C109.175 31.1973 108.78 29.5446 108.78 27.6946C108.78 25.8446 109.162 24.1919 109.927 22.7366C110.716 21.2813 111.789 20.1343 113.146 19.2956C114.503 18.4569 116.032 18.0376 117.734 18.0376C119.535 18.0376 121.052 18.4446 122.285 19.2586C123.543 20.0479 124.468 21.2196 125.06 22.7736C125.677 24.3029 125.923 26.1899 125.8 28.4346H111.74C111.863 29.6433 112.196 30.7039 112.739 31.6166C113.282 32.5293 113.997 33.2446 114.885 33.7626C115.773 34.2559 116.784 34.5026 117.919 34.5026C119.177 34.5026 120.238 34.1819 121.101 33.5406C121.989 32.8746 122.593 32.0113 122.914 30.9506ZM117.845 20.8126C116.316 20.8126 115.033 21.2566 113.997 22.1446C112.961 23.0326 112.27 24.2413 111.925 25.7706H122.766C122.667 24.1426 122.137 22.9093 121.175 22.0706C120.238 21.2319 119.128 20.8126 117.845 20.8126ZM129.617 18.4076H132.577V36.9076H129.617V18.4076ZM138.497 21.1826C137.239 21.1826 136.178 21.5033 135.315 22.1446C134.476 22.7613 133.81 23.5259 133.317 24.4386C132.848 25.3266 132.54 26.1899 132.392 27.0286L132.355 24.8826C132.355 24.6606 132.404 24.2906 132.503 23.7726C132.602 23.2546 132.787 22.6749 133.058 22.0336C133.329 21.3676 133.687 20.7386 134.131 20.1466C134.6 19.5299 135.192 19.0243 135.907 18.6296C136.622 18.2349 137.486 18.0376 138.497 18.0376V21.1826ZM140.535 18.4076H151.413V21.1826H140.535V18.4076ZM144.494 13.5976H147.454V36.9076H144.494V13.5976ZM158.573 11.0076V14.5966H154.725V11.0076H158.573ZM155.169 18.4076H158.129V36.9076H155.169V18.4076Z"
						fill="currentColor"
					/>
					<path
						d="M56.1257 37.6698L56.792 39.3214C57.4656 39.0497 57.9066 38.3961 57.9066 37.6698H56.1257ZM33.2263 46.9076L32.5941 48.5726C33.0132 48.7317 33.4768 48.7269 33.8926 48.5592L33.2263 46.9076ZM8.89572 37.6698H7.11475C7.11475 38.4095 7.572 39.0722 8.26356 39.3348L8.89572 37.6698ZM10.6767 23.3576C10.6767 22.374 9.87933 21.5767 8.89572 21.5767C7.91212 21.5767 7.11475 22.374 7.11475 23.3576H10.6767ZM32.7927 2.09241L33.4223 3.75838C34.2269 3.4543 34.6992 2.61858 34.5446 1.7724C34.3901 0.926221 33.6528 0.311432 32.7927 0.311432V2.09241ZM2 13.7295L1.3704 12.0635C0.69374 12.3192 0.238972 12.9588 0.219659 13.682C0.200347 14.4051 0.620327 15.068 1.28237 15.3595L2 13.7295ZM32.6469 27.2223L31.9293 28.8522C32.3862 29.0534 32.9065 29.0536 33.3635 28.8527L32.6469 27.2223ZM32.6448 2.09241V0.311432C31.7849 0.311432 31.0478 0.925763 30.8929 1.77154C30.738 2.61732 31.2095 3.45301 32.0135 3.75777L32.6448 2.09241ZM63.3467 13.7295L64.0633 15.36C64.7254 15.0689 65.1458 14.4064 65.1271 13.6834C65.1084 12.9604 64.6543 12.3205 63.9779 12.0641L63.3467 13.7295ZM54.3447 17.3013V37.6698H57.9066V17.3013H54.3447ZM55.4594 36.0181L32.56 45.2559L33.8926 48.5592L56.792 39.3214L55.4594 36.0181ZM33.8584 45.2426L9.52789 36.0048L8.26356 39.3348L32.5941 48.5726L33.8584 45.2426ZM10.6767 37.6698V23.3576H7.11475V37.6698H10.6767ZM32.1631 0.426432L32.089 0.454418L33.3482 3.78637L33.4223 3.75838L32.1631 0.426432ZM32.089 0.454418L1.3704 12.0635L2.6296 15.3955L33.3482 3.78637L32.089 0.454418ZM1.28237 15.3595L31.9293 28.8522L33.3645 25.5923L2.71763 12.0995L1.28237 15.3595ZM32.0135 3.75777L32.0874 3.78575L33.3498 0.455034L33.276 0.427048L32.0135 3.75777ZM32.0874 3.78575L62.7155 15.3949L63.9779 12.0641L33.3498 0.455033L32.0874 3.78575ZM62.6301 12.0991L31.9303 25.5918L33.3635 28.8527L64.0633 15.36L62.6301 12.0991ZM33.3635 28.8527L34.052 28.5501L32.6188 25.2892L31.9303 25.5918L33.3635 28.8527ZM32.7927 0.311432H32.6448V3.87338H32.7927V0.311432Z"
						fill="currentColor"
					/>
				</svg>
			</div>
			<div className={styles.buttons}>
				<ThemeButton theme={theme} handleModeChange={handleModeChange} />
				<a
					className={styles.link}
					href="https://app.zerti.com.ar/"
					target="_blank"
					rel="noopener noreferrer"
				>
					Ir a la app
					<svg viewBox="0 0 14 15" fill="none" xmlns="http://www.w3.org/2000/svg">
						<path
							d="M13 1.5L1 13.5M13 11.5L13 1.5L3 1.5"
							stroke="currentColor"
							strokeWidth="1.5"
							strokeLinecap="round"
							strokeLinejoin="round"
						/>
					</svg>
				</a>
			</div>
		</nav>
	);
}

function ThemeButton({ theme, handleModeChange }) {
	return (
		<button
			className={styles.themeButton}
			/* className={`flex w-10 h-10 items-center justify-center p-2 text-sm text-gray-500 rounded-lg hover:bg-gray-100 focus:outline-none dark:text-gray-100 dark:hover:bg-gray-800`} */
			onClick={handleModeChange}
		>
			{theme === "light" && (
				<svg className={`w-5 h-5`} fill="currentColor" viewBox="0 0 20 20">
					<path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z"></path>
				</svg>
			)}
			{theme === "dark" && (
				<svg className={`w-5 h-5`} fill="currentColor" viewBox="0 0 20 20">
					<path
						d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z"
						fillRule="evenodd"
						clipRule="evenodd"
					></path>
				</svg>
			)}
		</button>
	);
}
