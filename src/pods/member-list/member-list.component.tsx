import React from 'react';
import { Member } from './member-list.vm';
import { MemberRow, MemberRowSkeleton } from './components';
import usePagination from '@/common/hooks/usePagination';
import { ListHeaderComponent } from '@/common/components/list-header.component';

interface Props {
  members: Member[];
  onSelect: (login: string) => void;
  currentPage: number;
  onPagination: (currentPage: number) => void;
}

const defaultQuantity = 6;
export const MemberList: React.FC<Props> = (props) => {
  const { members, onSelect, currentPage, onPagination } = props;

  const handlePagination = (pageSelected: number) => {
    onPagination(pageSelected);
  };

  const { currentPageItems, PaginationComponent } = usePagination({
    initialPage: currentPage,
    items: members,
    totalItems: members.length,
    itemsPerPage: defaultQuantity,
    onPageChange: handlePagination,
  });

  return (
    <div className="member-list">
      <ListHeaderComponent
        sections={['ID', 'Name', 'Avatar']}
        customStyles={{
          gridTemplateColumns: '100px 1fr 80px',
        }}
      />

      {currentPageItems.length > 0
        ? currentPageItems.map((member) => (
            <MemberRow
              key={member.id}
              member={member}
              onClick={() => onSelect(member.login)}
            />
          ))
        : Array(defaultQuantity)
            .fill(1)
            .map((_, index) => <MemberRowSkeleton key={index} />)}

      {PaginationComponent}
    </div>
  );
};
