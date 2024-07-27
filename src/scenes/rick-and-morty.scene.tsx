import React from 'react';

import { AppLayout } from '@/layouts';
import { RickAndMortyListContainer } from '@/pods/rick-and-morty-list';
import { RickAndMortyDetail } from '@/pods/rick-and-morty-detail';

import { Character } from '@/pods/rick-and-morty-list/rick-and-morty-list.vw';

export const RickAndMortyScene: React.FC = () => {
  const [selectedCharacter, setSelectedCharacter] =
    React.useState<Character>(null);

  const handleSelect = (character: Character) => {
    setSelectedCharacter(character);
  };

  return (
    <AppLayout>
      <div className="rick-and-morty-container">
        <div>
          <RickAndMortyListContainer onSelect={handleSelect} />
        </div>
        <div>
          {selectedCharacter && (
            <RickAndMortyDetail
              character={selectedCharacter}
              onSelect={handleSelect}
            />
          )}
        </div>
      </div>
    </AppLayout>
  );
};
