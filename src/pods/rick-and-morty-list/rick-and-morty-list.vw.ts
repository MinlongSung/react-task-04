export interface RickAndMortyAPI {
  paginationInfo: PaginationInfo;
  characters: Character[];
}

export interface PaginationInfo {
  count: number;
  pages: number;
  next: string;
  prev: null;
}

export interface Character {
  id: number;
  name: string;
  status: string;
  species: string;
  gender: string;
  origin: string;
  location: string;
  image: string;
}
