import React from 'react';
import { useDebounce } from 'use-debounce';

import { getCharacters } from './rick-and-morty-list.repository';
import { Character, PaginationInfo } from './rick-and-morty-list.vw';

import { Alert } from '@/common/components/alert.component';
import { TextField } from '@/common/components/text-field.component';

import { RickAndMortyList } from './rick-and-morty-list.component';

interface Props {
  onSelect: (character: Character) => void;
}

export const RickAndMortyListContainer: React.FC<Props> = (props) => {
  const { onSelect } = props;
  const [currentPage, setCurrentPage] = React.useState<number>(1);
  const [characters, setCharacters] = React.useState<Character[]>([]);
  const [paginationInfo, setPaginationInfo] =
    React.useState<PaginationInfo>(null);
  const [characterFilter, setCharacterFilter] = React.useState('');
  const [debouncedFilter] = useDebounce(characterFilter, 800);
  const [isLoading, setIsLoading] = React.useState(false);

  React.useEffect(() => {
    setIsLoading(true);
    getCharacters({ currentPage, name: debouncedFilter }).then(
      ({ paginationInfo, characters }) => {
        setIsLoading(false);
        setPaginationInfo(paginationInfo);
        setCharacters(characters);
      }
    );
  }, [currentPage, debouncedFilter]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    handlePagination(1);
    setCharacterFilter(e.target.value);
  };

  const handlePagination = (pageSelected: number) => {
    setCurrentPage(pageSelected);
  };

  return (
    <>
      <h3>Rick And Morty Characters: </h3>
      <TextField
        name="character-filter"
        value={characterFilter}
        onChange={handleChange}
        id="outlined-basic"
        label="Character name"
        variant="outlined"
        size="small"
      />

      {(!isLoading && characters.length === 0) && (
        <Alert severity="info" sx={{ my: 1 }}>No hay concidencias.</Alert>
      )}
      
      {(isLoading || characters.length > 0) && (
        <RickAndMortyList
          characters={characters}
          paginationInfo={paginationInfo}
          onSelect={onSelect}
          currentPage={currentPage}
          onPagination={handlePagination}
        />
      )}
    </>
  );
};
