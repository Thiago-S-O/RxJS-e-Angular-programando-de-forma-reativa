export interface Book { // livro
  title?: string;
  authors?: string[];
  publisher?: string;
  publishedDate?: Date;
  description?: string;
  previewLink?: string;
  tumbnail?: string;
}

export interface VolumeInfo {
  title: string;
  authors: string[];
  publisher: string;
  publishedDate: Date;
  description: string;
  pageCount: number;
  printType: string;
  mainCategory: string;
  categories: string[];
  averageRating: number;
  ratingsCount: number;
  contentVersion: string;
  imageLinks: ImageLinks;
  language: string;
  infoLink: string;
  canonicalVolumeLink: string;
}

export interface ImageLinks {
  smallThumbnail: string;
  thumbnail: string;
  small: string;
  medium: string;
  large: string;
  extraLarge: string;
}
// utilizando o https://app.quicktype.io/ é possível pegar um objeto .json e
// criar uma interface com os objetos e seus tipos

export interface Item {
  volumeInfo: VolumeInfo;
}

export interface ResultsBooks { // livroResultado
  items: Item[];
  totalItems: number;
}
