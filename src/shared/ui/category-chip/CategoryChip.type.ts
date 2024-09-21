import { CATEGORY_CHIPS } from './CategoryChip.constants'

export type Categories = (typeof CATEGORY_CHIPS)[number]

export type CategoryName = (typeof CATEGORY_CHIPS)[number]['name']

export type CategoryId = (typeof CATEGORY_CHIPS)[number]['id']
