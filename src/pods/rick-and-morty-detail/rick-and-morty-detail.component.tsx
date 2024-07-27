import React from 'react';

import { Dialog } from '@/common/components/dialog/dialog.component';
import { DialogTitle } from '@/common/components/dialog/dialog-title.component';
import { DialogContent } from '@/common/components/dialog/dialog-content.component';
import { CloseIcon, IconButton } from '@/common/components/material-icons';

import { CircularProgress } from '@/common/components/circular-progress.component';

import { Character } from '../rick-and-morty-list/rick-and-morty-list.vw';
import { Typography } from '@/common/components/typography.component';

interface Props {
  character: Character;
  onSelect: (character: Character) => void;
}

export const RickAndMortyDetail: React.FC<Props> = (props) => {
  const { character, onSelect } = props;

  const [open, setOpen] = React.useState(false);

  React.useEffect(() => {
    setOpen(character ? true : false);
  }, [character]);

  const handleClose = () => {
    onSelect(null);
  };

  return (
    <>
      {character ? (
        <Dialog
          onClose={handleClose}
          aria-labelledby="customized-dialog-title"
          open={open}
        >
          
          <div style={{ display: 'flex', alignItems: 'center' }}>
            <DialogTitle sx={{ m: 0, p: 2, }}>{character.name}</DialogTitle>

            <IconButton
              aria-label="close"
              onClick={handleClose}
              sx={{
                marginLeft: 'auto'
              }}
            >
              <CloseIcon />
            </IconButton>
          </div>

          <DialogContent dividers>
            <img
              src={character.image}
              alt={`${character.name}-image`}
              style={{ height: '150px', width: 'fit-content' }}
            />

            <Typography gutterBottom>Gender: {character.gender}</Typography>
            <Typography gutterBottom>Status: {character.status}</Typography>
            <Typography gutterBottom>Specie: {character.species}</Typography>
            <Typography gutterBottom>Origin: {character.origin}</Typography>
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
