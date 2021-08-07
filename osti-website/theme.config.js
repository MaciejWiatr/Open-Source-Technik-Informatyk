/* eslint-disable import/no-anonymous-default-export */
export default {
	github: "https://github.com/MaciejWiatr/Open-Source-Technik-Informatyk", // GitHub link in the navbar
	docsRepositoryBase:
		"https://github.com/MaciejWiatr/Open-Source-Technik-Informatyk/", // base URL for the docs repository
	nextLinks: true,
	prevLinks: true,
	titleSuffix: " - Technik Informatyk",
	search: true,
	customSearch: null,
	darkMode: true,
	footer: true,
	footerText: (
		<p>
			OSTI created by{" "}
			<a
				href="https://github.com/MaciejWiatr"
				target="_blank"
				rel="noreferrer"
			>
				Maciej Wiatr
			</a>{" "}
			<br /> powered by{" "}
			<a
				href="https://github.com/shuding/nextra/"
				target="_blank"
				rel="noreferrer"
			>
				Nextra
			</a>
		</p>
	),
	footerEditLink: `Edytuj tą stronę na GitHub`,
	logo: (
		<>
			<span style={{ fontWeight: "bold" }}>Technik Informatyk</span>
		</>
	),
	head: (
		<>
			<link rel="icon" type="image/png" href="/favicon.png" />
			<meta
				name="viewport"
				content="width=device-width, initial-scale=1.0"
			/>
			<meta
				name="description"
				content="Open source technik informatyk to projekt zainspirowany przez Open Source CS Degree,
				ma on na celu zebranie najlepszych darmowych materiałów
				umożliwiających zdobycie wiedzy na poziomie kwalifikacji Technik Informatyk"
			/>
			<meta name="og:title" content="Open source technik informatyk" />
		</>
	),
};
