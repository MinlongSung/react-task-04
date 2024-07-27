import * as AM from './api/api.model';
import * as VM from './rick-and-morty-list.vw';

export const mapCharacterListToVM = (
  data: AM.RickAndMortyAPI
): VM.RickAndMortyAPI => {
  try {
    const { info, results } = data;
    const characters = results.map((item) => mapCharacterToVM(item));
    return {
      paginationInfo: info,
      characters,
    };
  } catch (e) {
    console.log(e, 'characters not found');
    return {
      paginationInfo: {
        count: 1,
        pages: 1,
        next: null,
        prev: null,
      },
      characters: [],
    };
  }
};

const mapCharacterToVM = (data: AM.Character): VM.Character => ({
  id: data.id,
  name: data.name,
  status: data.status,
  species: data.species,
  gender: data.gender,
  origin: data.location.name,
  location: data.location.name,
  image: data.image,
});
