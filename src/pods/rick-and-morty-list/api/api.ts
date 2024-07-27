import { RequestParams, RickAndMortyAPI } from './api.model';

export const getCharacters = async ({
  currentPage,
  name,
}: RequestParams): Promise<RickAndMortyAPI> => {
  let url = 'https://rickandmortyapi.com/api/character';
  url += `?page=${currentPage}`;
  if (name.length > 0) url += `&name=${name}`;
  const response = await fetch(url);
  const data = await response.json();
  return data;
};
