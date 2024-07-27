import React from 'react';

import { Dialog } from '@/common/components/dialog/dialog.component';
import { DialogTitle } from '@/common/components/dialog/dialog-title.component';
import { DialogContent } from '@/common/components/dialog/dialog-content.component';
import { CloseIcon, IconButton } from '@/common/components/material-icons';
import { Typography } from '@/common/components/typography.component';

import { CircularProgress } from '@/common/components/circular-progress.component';

import { MemberDetailEntity } from './member-detail.vm';

interface Props {
  member: MemberDetailEntity;
  onSelect: (login: string) => void;
}

export const MemberDetail: React.FC<Props> = (props) => {
  const { member, onSelect } = props;

  const [open, setOpen] = React.useState(false);

  React.useEffect(() => {
    setOpen(member ? true : false);
  }, [member]);

  const handleClose = () => {
    onSelect('');
  };

  return (
    <>
      {member ? (
        <Dialog
          onClose={handleClose}
          aria-labelledby="customized-dialog-title"
          open={open}
        >
          <div style={{ display: 'flex', alignItems: 'center' }}>
            <DialogTitle sx={{ m: 0, p: 2 }}>{member.login}</DialogTitle>

            <IconButton
              aria-label="close"
              onClick={handleClose}
              sx={{
                marginLeft: 'auto',
              }}
            >
              <CloseIcon />
            </IconButton>
          </div>

          <DialogContent dividers>
            <img
              src={member.avatar_url}
              alt={`${member.login}-image`}
              style={{ height: '150px', width: 'fit-content' }}
            />

            <Typography gutterBottom>ID: {member.id}</Typography>
            {member.company && (
              <Typography gutterBottom>Company: {member.company}</Typography>
            )}
            <Typography gutterBottom>{member.bio}</Typography>
          </DialogContent>
        </Dialog>
      ) : (
        <CircularProgress
          style={{ position: 'absolute', top: '50%', left: '50%' }}
        />
      )}
    </>
  );
};
