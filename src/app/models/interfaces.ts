export interface Book { // Livro
  title?: string;
  authors?: string[];
  publisher?: string;
  publishedDate?: string;
  description?: string;
  previewLink?: string;
  thumbnail?: ImageLinks;
}

export interface VolumeInfo {
  title: string;
  authors: string[];
  publisher: string;
  publishedDate: string;
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

export interface ResultsBooks { // LivroResultado
  items: Item[];
  totalItems: number;
}
