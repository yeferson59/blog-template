// List of categories for blog posts
export const CATEGORIES = [
	'Programacion',
	'Inversion',
	'Tecnologia financiera',
	'Educacion',
	'Experiencia'
] as const

export const categorias = [
	'Programación',
	'Inversión',
	'Tecnología financiera',
	'Educación',
	'Experiencia'
] as const

export const lookingForCategory = async (x: string, lx: Readonly<string[]>) => {
	x.toLocaleLowerCase()
	let i: number
	for (i = 0; i < lx.length; i++) {
		if (x == lx[i].toLocaleLowerCase()) {
			return i
		}
	}
	return -1
}
export const lookingForCategoryNormal = async (x: string, lx: Readonly<string[]>) => {
	let i: number
	for (i = 0; i < lx.length; i++) {
		if (x == lx[i]) {
			return i
		}
	}
	return -1
}
