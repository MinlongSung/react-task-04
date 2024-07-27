import React from 'react';

import { RickAndMortyRow, RickAndMortyRowSkeleton } from './components';
import { ListHeaderComponent } from '@/common/components/list-header.component';
import usePagination from '@/common/hooks/usePagination';
import { Character, PaginationInfo } from './rick-and-morty-list.vw';

interface Props {
  characters: Character[];
  paginationInfo: PaginationInfo;
  onSelect: (character: Character) => void;
  currentPage: number;
  onPagination: (currentPage: number) => void;
}

const defaultQuantity = 20;
export const RickAndMortyList: React.FC<Props> = (props) => {
  const { characters, paginationInfo, onSelect, currentPage, onPagination } =
    props;

  const handlePagination = (pageSelected: number) => {
    onPagination(pageSelected);
  };

  const { currentPageItems, PaginationComponent } = usePagination({
    initialPage: currentPage,
    items: characters,
    itemsPerPage: paginationInfo ? Math.ceil(paginationInfo.count / paginationInfo.pages) : defaultQuantity,
    onPageChange: handlePagination,
    paginateLocally: false,
    totalItems: paginationInfo?.count ?? 0,
  });

  return (
    <div className="rick-and-morty-list">
      <ListHeaderComponent
        sections={['Name', 'Image']}
        customStyles={{
          gridTemplateColumns: '1fr 80px',
        }}
      />

      {currentPageItems.length > 0
        ? currentPageItems.map((character) => (
            <RickAndMortyRow
              key={character.id}
              character={character}
              onClick={() => onSelect(character)}
            />
          ))
        : Array(defaultQuantity)
            .fill(1)
            .map((_, index) => <RickAndMortyRowSkeleton key={index} />)}

      {PaginationComponent}
    </div>
  );
};
