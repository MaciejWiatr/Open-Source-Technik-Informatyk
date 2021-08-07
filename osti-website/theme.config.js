/* eslint-disable import/no-anonymous-default-export */
export default {
	github: "https://github.com/MaciejWiatr/Open-Source-Technik-Informatyk", // GitHub link in the navbar
	docsRepositoryBase:
		"https://github.com/MaciejWiatr/Open-Source-Technik-Informatyk/", // base URL for the docs repository
	nextLinks: true,
	prevLinks: true,
	search: true,
	customSearch: null,
	darkMode: true,
	footer: true,
	footerText: (
		<p>
			OSTI powered by <a href="https://github.com/">Nextra</a>
		</p>
	),
	footerEditLink: `Edit this page on GitHub`,
	logo: (
		<>
			<span style={{ fontWeight: "bold" }}>OSTI</span>
		</>
	),
	head: (
		<>
			<meta
				name="viewport"
				content="width=device-width, initial-scale=1.0"
			/>
			<meta name="description" content="Nextra: the next docs builder" />
			<meta name="og:title" content="Nextra: the next docs builder" />
		</>
	),
};
