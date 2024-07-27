import React from 'react';
import { Member } from '../member-list.vm';
import { Avatar } from '@/common/components/avatar.component';
import { Skeleton } from '@/common/components/skeleton.component';

interface Props {
  member: Member;
  onClick: () => void;
}

export const MemberRow: React.FC<Props> = (props) => {
  const { member, onClick } = props;

  return (
    <div className="default-row member-row">
      <div className="default-row-text">{member.id}</div>
      <div className="default-row-text clickable-item">
        <div onClick={onClick}>{member.login}</div>
      </div>
      <Avatar
        src={member.avatar_url}
        alt={`${member.login}_avatar`}
        sx={{ width: 56, height: 56 }}
      />
    </div>
  );
};

export const MemberRowSkeleton: React.FC = () => {
  return (
    <div className="default-row member-row">
      <div className="default-row-text">
        <Skeleton variant="text" />
      </div>
      <div className="default-row-text">
        <div>
          <Skeleton variant="text" />
        </div>
      </div>
      <Skeleton variant="circular" sx={{ width: 56, height: 56 }} />
    </div>
  );
};
