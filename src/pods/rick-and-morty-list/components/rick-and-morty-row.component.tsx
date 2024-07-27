import React from 'react';

import { Avatar } from '@/common/components/avatar.component';
import { Skeleton } from '@/common/components/skeleton.component';

import { Character } from '../rick-and-morty-list.vw';

interface Props {
  character: Character;
  onClick: () => void;
}

export const RickAndMortyRow: React.FC<Props> = (props) => {
  const { character, onClick } = props;

  return (
    <div className="default-row rick-and-morty-row">
      <div className="default-row-text clickable-item">
        <div onClick={onClick}>{character.name}</div>
      </div>
      <Avatar
        src={character.image}
        alt={`${character.name}_avatar`}
        sx={{ width: 56, height: 56 }}
      />
    </div>
  );
};

export const RickAndMortyRowSkeleton: React.FC = () => {
  return (
    <div className="default-row rick-and-morty-row">
      <div className="default-row-text">
        <Skeleton variant="text" />
      </div>
      <Skeleton variant="circular" sx={{ width: 56, height: 56 }} />
    </div>
  );
};
