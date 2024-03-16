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
	author: 'Yeferson Toloza', // Site author
	title: 'Tecnofinanzas', // Site title.
	description: 'Blog sobre tecnologia y finanzas', // Description to display in the meta tags
	lang: 'es-la',
	ogLocale: 'es_co',
	shareMessage: 'Share this post', // Message to share a post on social media
	paginationSize: 10 // Number of posts per page
}
