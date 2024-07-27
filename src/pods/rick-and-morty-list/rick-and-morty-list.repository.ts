import * as api from './api/api';
import * as VM from './rick-and-morty-list.vw';
import { mapCharacterListToVM } from './rick-and-morty-list.mapper';
import { RequestParams } from './api/api.model';

export const getCharacters = ({
  currentPage,
  name,
}: RequestParams): Promise<VM.RickAndMortyAPI> => {
  return api.getCharacters({ currentPage, name }).then(mapCharacterListToVM);
};
