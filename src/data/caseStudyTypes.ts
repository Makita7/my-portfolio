export type TextBlock = {
  type: 'text' | 'rich-text'
  content: string
}

export type ListBlock = {
  type: 'list'
  title: string
  items: string[]
}

export type DescriptionListBlock = {
  type: 'description-list'
  title?: string
  items: Array<{ label: string; text: string }>
}

export type ImageBlock = {
  type: 'img'
  img: string
  alt?: string
}

export type CaseStudyBlock =
  | TextBlock
  | ListBlock
  | DescriptionListBlock
  | ImageBlock
