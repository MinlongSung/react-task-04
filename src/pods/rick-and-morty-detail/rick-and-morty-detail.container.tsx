import React from 'react';

import { Character } from '../rick-and-morty-list/rick-and-morty-list.vw';
import { RickAndMortyDetail } from './rick-and-morty-detail.component';

interface Props {
  character: Character;
  onSelect: (character: Character) => void;
}

export const RickAndMortyDetailContainer: React.FC<Props> = (props) => {
  const { character, onSelect } = props;

  return <RickAndMortyDetail character={character} onSelect={onSelect} />;
};
