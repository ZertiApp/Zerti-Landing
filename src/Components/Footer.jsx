import React from "react";
import styles from "./Footer.module.css";

export default function Footer() {
	return (
		<footer className={styles.footer}>
			<div className={styles.column + " " + styles.maincolumn}>
				<h3 className={styles.logo}>
					<svg viewBox="0 0 162 49" fill="none" xmlns="http://www.w3.org/2000/svg">
						<path
							d="M85.5667 12.8576H105.177V15.6326L88.5267 35.1316L88.0457 34.1326H105.177V36.9076H85.5667V34.1326L102.291 14.6336L102.772 15.6326H85.5667V12.8576ZM122.914 30.9506H125.689C125.492 32.1593 125.048 33.2446 124.357 34.2066C123.691 35.1439 122.803 35.8963 121.693 36.4636C120.608 37.0063 119.35 37.2776 117.919 37.2776C116.192 37.2776 114.638 36.8706 113.257 36.0566C111.876 35.2179 110.778 34.0833 109.964 32.6526C109.175 31.1973 108.78 29.5446 108.78 27.6946C108.78 25.8446 109.162 24.1919 109.927 22.7366C110.716 21.2813 111.789 20.1343 113.146 19.2956C114.503 18.4569 116.032 18.0376 117.734 18.0376C119.535 18.0376 121.052 18.4446 122.285 19.2586C123.543 20.0479 124.468 21.2196 125.06 22.7736C125.677 24.3029 125.923 26.1899 125.8 28.4346H111.74C111.863 29.6433 112.196 30.7039 112.739 31.6166C113.282 32.5293 113.997 33.2446 114.885 33.7626C115.773 34.2559 116.784 34.5026 117.919 34.5026C119.177 34.5026 120.238 34.1819 121.101 33.5406C121.989 32.8746 122.593 32.0113 122.914 30.9506ZM117.845 20.8126C116.316 20.8126 115.033 21.2566 113.997 22.1446C112.961 23.0326 112.27 24.2413 111.925 25.7706H122.766C122.667 24.1426 122.137 22.9093 121.175 22.0706C120.238 21.2319 119.128 20.8126 117.845 20.8126ZM129.617 18.4076H132.577V36.9076H129.617V18.4076ZM138.497 21.1826C137.239 21.1826 136.178 21.5033 135.315 22.1446C134.476 22.7613 133.81 23.5259 133.317 24.4386C132.848 25.3266 132.54 26.1899 132.392 27.0286L132.355 24.8826C132.355 24.6606 132.404 24.2906 132.503 23.7726C132.602 23.2546 132.787 22.6749 133.058 22.0336C133.329 21.3676 133.687 20.7386 134.131 20.1466C134.6 19.5299 135.192 19.0243 135.907 18.6296C136.622 18.2349 137.486 18.0376 138.497 18.0376V21.1826ZM140.535 18.4076H151.413V21.1826H140.535V18.4076ZM144.494 13.5976H147.454V36.9076H144.494V13.5976ZM158.573 11.0076V14.5966H154.725V11.0076H158.573ZM155.169 18.4076H158.129V36.9076H155.169V18.4076Z"
							fill="currentColor"
						/>
						<path
							d="M56.1257 37.6698L56.792 39.3214C57.4656 39.0497 57.9066 38.3961 57.9066 37.6698H56.1257ZM33.2263 46.9076L32.5941 48.5726C33.0132 48.7317 33.4768 48.7269 33.8926 48.5592L33.2263 46.9076ZM8.89572 37.6698H7.11475C7.11475 38.4095 7.572 39.0722 8.26356 39.3348L8.89572 37.6698ZM10.6767 23.3576C10.6767 22.374 9.87933 21.5767 8.89572 21.5767C7.91212 21.5767 7.11475 22.374 7.11475 23.3576H10.6767ZM32.7927 2.09241L33.4223 3.75838C34.2269 3.4543 34.6992 2.61858 34.5446 1.7724C34.3901 0.926221 33.6528 0.311432 32.7927 0.311432V2.09241ZM2 13.7295L1.3704 12.0635C0.69374 12.3192 0.238972 12.9588 0.219659 13.682C0.200347 14.4051 0.620327 15.068 1.28237 15.3595L2 13.7295ZM32.6469 27.2223L31.9293 28.8522C32.3862 29.0534 32.9065 29.0536 33.3635 28.8527L32.6469 27.2223ZM32.6448 2.09241V0.311432C31.7849 0.311432 31.0478 0.925763 30.8929 1.77154C30.738 2.61732 31.2095 3.45301 32.0135 3.75777L32.6448 2.09241ZM63.3467 13.7295L64.0633 15.36C64.7254 15.0689 65.1458 14.4064 65.1271 13.6834C65.1084 12.9604 64.6543 12.3205 63.9779 12.0641L63.3467 13.7295ZM54.3447 17.3013V37.6698H57.9066V17.3013H54.3447ZM55.4594 36.0181L32.56 45.2559L33.8926 48.5592L56.792 39.3214L55.4594 36.0181ZM33.8584 45.2426L9.52789 36.0048L8.26356 39.3348L32.5941 48.5726L33.8584 45.2426ZM10.6767 37.6698V23.3576H7.11475V37.6698H10.6767ZM32.1631 0.426432L32.089 0.454418L33.3482 3.78637L33.4223 3.75838L32.1631 0.426432ZM32.089 0.454418L1.3704 12.0635L2.6296 15.3955L33.3482 3.78637L32.089 0.454418ZM1.28237 15.3595L31.9293 28.8522L33.3645 25.5923L2.71763 12.0995L1.28237 15.3595ZM32.0135 3.75777L32.0874 3.78575L33.3498 0.455034L33.276 0.427048L32.0135 3.75777ZM32.0874 3.78575L62.7155 15.3949L63.9779 12.0641L33.3498 0.455033L32.0874 3.78575ZM62.6301 12.0991L31.9303 25.5918L33.3635 28.8527L64.0633 15.36L62.6301 12.0991ZM33.3635 28.8527L34.052 28.5501L32.6188 25.2892L31.9303 25.5918L33.3635 28.8527ZM32.7927 0.311432H32.6448V3.87338H32.7927V0.311432Z"
							fill="currentColor"
						/>
					</svg>
				</h3>
				<p className={styles.slogan}>La seguridad de tu carrera profesional</p>
				<div className={styles.socials}>
					<a href="https://github.com/ZertiApp" target="_blank" rel="noreferrer" aria-label="github">
						<svg viewBox="0 0 22 23" fill="none" xmlns="http://www.w3.org/2000/svg">
							<path
								d="M15.6959 22.4173C15.4036 22.4173 15.1233 22.3012 14.9166 22.0945C14.7099 21.8878 14.5938 21.6075 14.5938 21.3152V18.4497C14.628 18.1201 14.5928 17.7869 14.4902 17.4718C14.3877 17.1567 14.2203 16.8666 13.9986 16.6202C13.8614 16.4714 13.7679 16.2876 13.7282 16.0892C13.6885 15.8907 13.7042 15.6851 13.7737 15.495C13.8431 15.3048 13.9636 15.1375 14.1219 15.0113C14.2801 14.8851 14.4701 14.805 14.6709 14.7797C17.3601 14.46 19.8398 13.6004 19.8398 8.93848C19.8407 8.0679 19.5837 7.21656 19.1014 6.4918C18.6563 5.82462 18.4938 5.00822 18.6495 4.22146C18.7489 3.70823 18.7489 3.18071 18.6495 2.66749C17.8243 2.94651 17.0473 3.35176 16.3461 3.86878C16.2136 3.96292 16.0618 4.02656 15.9018 4.05514C15.7417 4.08372 15.5773 4.07654 15.4204 4.0341C13.4314 3.47209 11.3257 3.47209 9.33673 4.0341C9.17978 4.07654 9.01538 4.08372 8.85532 4.05514C8.69527 4.02656 8.54352 3.96292 8.41096 3.86878C7.70554 3.34577 6.92028 2.94011 6.08551 2.66749C5.9807 3.18018 5.9807 3.70877 6.08551 4.22146C6.22998 5.01812 6.06012 5.83977 5.6116 6.51384C5.13137 7.24369 4.87473 8.09788 4.87319 8.97155C4.87319 13.2587 6.94515 14.4049 10.0531 14.8017C10.2565 14.8269 10.4488 14.9084 10.6084 15.0369C10.7681 15.1654 10.8887 15.3358 10.9568 15.5291C11.0209 15.7166 11.0332 15.918 10.9925 16.1119C10.9518 16.3059 10.8595 16.4853 10.7254 16.6312C10.511 16.8603 10.3465 17.1314 10.2422 17.4273C10.1378 17.7232 10.096 18.0376 10.1192 18.3505V21.3152C10.1192 21.6075 10.0031 21.8878 9.79643 22.0945C9.58974 22.3012 9.30941 22.4173 9.01712 22.4173C8.72482 22.4173 8.44449 22.3012 8.23781 22.0945C8.03112 21.8878 7.91501 21.6075 7.91501 21.3152V20.687C6.83204 20.8115 5.73507 20.6664 4.72174 20.2645C3.70841 19.8626 2.81015 19.2165 2.1069 18.3836C1.74541 17.9829 1.31171 17.6539 0.828453 17.4137C0.688064 17.3775 0.556177 17.314 0.440321 17.2269C0.324465 17.1397 0.226909 17.0306 0.153224 16.9058C0.0795393 16.7809 0.0311679 16.6428 0.0108718 16.4992C-0.00942426 16.3557 -0.00124735 16.2095 0.0349354 16.0691C0.0711181 15.9287 0.134598 15.7968 0.221751 15.681C0.308904 15.5651 0.418023 15.4676 0.542878 15.3939C0.667734 15.3202 0.805879 15.2718 0.949428 15.2515C1.09298 15.2312 1.23912 15.2394 1.37951 15.2756C2.2273 15.5845 2.98484 16.0996 3.58372 16.7745C4.68583 17.8766 5.78794 18.8464 7.88195 18.4497C7.84513 17.8579 7.93144 17.265 8.13543 16.7083C5.86509 16.1352 2.62489 14.5041 2.62489 8.99359C2.62198 7.68828 3.00546 6.41132 3.727 5.32357C3.86102 5.12277 3.91234 4.87798 3.87027 4.64026C3.64757 3.45062 3.77388 2.22194 4.23397 1.10249C4.29648 0.953228 4.3911 0.819561 4.5111 0.710989C4.6311 0.602417 4.77354 0.521604 4.9283 0.474291C5.30301 0.36408 6.64758 0.143658 9.19345 1.79682C11.2544 1.30088 13.4035 1.30088 15.4645 1.79682C18.0103 0.143658 19.3549 0.353059 19.7186 0.474291C19.8733 0.521604 20.0158 0.602417 20.1358 0.710989C20.2558 0.819561 20.3504 0.953228 20.4129 1.10249C20.8739 2.22558 21.0002 3.45803 20.7766 4.65128C20.7541 4.75879 20.7532 4.86972 20.774 4.97759C20.7948 5.08545 20.8369 5.18808 20.8978 5.27948C21.6215 6.37036 22.005 7.65147 22 8.96052C22 14.5482 18.7818 16.1683 16.4894 16.6753C16.6914 17.2667 16.7738 17.8923 16.7319 18.5158V21.3152C16.7324 21.5963 16.6254 21.8671 16.4328 22.072C16.2402 22.2769 15.9766 22.4004 15.6959 22.4173Z"
								fill="currentColor"
							/>
						</svg>
					</a>
					<a href="https://twitter.com/zertiapp" target="_blank" rel="noreferrer" aria-label="twitter">
						<svg viewBox="0 0 24 21" fill="none" xmlns="http://www.w3.org/2000/svg">
							<path
								d="M23 1.40556C22.0424 2.08104 20.9821 2.59767 19.86 2.93556C19.2577 2.24307 18.4573 1.75226 17.567 1.52949C16.6767 1.30672 15.7395 1.36276 14.8821 1.69002C14.0247 2.01727 13.2884 2.59996 12.773 3.35928C12.2575 4.1186 11.9877 5.0179 12 5.93556V6.93556C10.2426 6.98113 8.50127 6.59138 6.93101 5.80101C5.36074 5.01064 4.01032 3.8442 3 2.40556C3 2.40556 -1 11.4056 8 15.4056C5.94053 16.8035 3.48716 17.5045 1 17.4056C10 22.4056 21 17.4056 21 5.90556C20.9991 5.62702 20.9723 5.34916 20.92 5.07556C21.9406 4.06906 22.6608 2.79828 23 1.40556Z"
								stroke="currentColor"
								strokeWidth="2"
								strokeLinecap="round"
								strokeLinejoin="round"
							/>
						</svg>
					</a>
					<a href="https://www.instagram.com/zerti.app" target="_blank" rel="noreferrer" aria-label="instagram">
						<svg viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
							<path
								d="M17 2.40576H7C4.23858 2.40576 2 4.64434 2 7.40576V17.4058C2 20.1672 4.23858 22.4058 7 22.4058H17C19.7614 22.4058 22 20.1672 22 17.4058V7.40576C22 4.64434 19.7614 2.40576 17 2.40576Z"
								stroke="currentColor"
								strokeWidth="2"
								strokeLinecap="round"
								strokeLinejoin="round"
							/>
							<path
								d="M15.9997 11.7756C16.1231 12.6078 15.981 13.4578 15.5935 14.2046C15.206 14.9514 14.5929 15.557 13.8413 15.9352C13.0898 16.3135 12.2382 16.4452 11.4075 16.3115C10.5768 16.1778 9.80947 15.7857 9.21455 15.1907C8.61962 14.5958 8.22744 13.8284 8.09377 12.9978C7.96011 12.1671 8.09177 11.3155 8.47003 10.5639C8.84829 9.81243 9.45389 9.19932 10.2007 8.81182C10.9475 8.42432 11.7975 8.28216 12.6297 8.40557C13.4786 8.53146 14.2646 8.92704 14.8714 9.53388C15.4782 10.1407 15.8738 10.9267 15.9997 11.7756Z"
								stroke="currentColor"
								strokeWidth="2"
								strokeLinecap="round"
								strokeLinejoin="round"
							/>
							<path
								d="M17.5 6.90576H17.51"
								stroke="currentColor"
								strokeWidth="2"
								strokeLinecap="round"
								strokeLinejoin="round"
							/>
						</svg>
					</a>
				</div>
			</div>
			<div className={styles.column}>
				<h4 className={styles.title}>COMPANY</h4>
				<a href="#about" aria-label="about">About</a>
				<a href="https://twitter.com/zertiapp" aria-label="twitter">Twitter</a>
				<a href="https://github.com/ZertiApp" aria-label="github">Github</a>
			</div>
			<div className={styles.column}>
				<h4 className={styles.title}>PRODUCT</h4>
				<a href="#people" aria-label="people">For People</a>
				<a href="#enterprise" aria-label="enterprise">For Enterprise</a>
				<a href="#academy" aria-label="academy">For Academy</a>
			</div>
			{/* <div className={styles.column}>
				<h4 className={styles.title}>RESOURCES</h4>
				<a href="#team">Meet the team</a>
				<a href="#">Whitepaper</a>
				<a href="#">Terms and Privacy</a>
			</div> */}
		</footer>
	);
}
