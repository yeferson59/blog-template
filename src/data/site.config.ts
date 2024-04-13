interface SiteConfig {
	author: string
	title: string
	description: string
	lang: string
	ogLocale: string
	shareMessage: string
	paginationSize: number
}

export const siteConfig: SiteConfig = {
	author: 'Yeferson T', // Site author
	title: 'Tecnofinanzas: dónde la innovación se encuentra con la economía', // Site title.
	description:
		'Mantente a la vanguardia de la tecnología y las finanzas con nuestro blog. Te traermos todo sobre tendencias que te afectan el bolsillo. Descubre como la tecnología está transformando el mundo.', // Description to display in the meta tags
	lang: 'es-la',
	ogLocale: 'es_co',
	shareMessage: 'Compartir este post', // Message to share a post on social media
	paginationSize: 10 // Number of posts per page
}
