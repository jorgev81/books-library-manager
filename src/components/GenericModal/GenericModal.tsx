import React, { FC, ReactNode } from 'react';
import './GenericModal.scss';
import Container from '@mui/material/Container';
import LinearProgress from '@mui/material/LinearProgress';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import { ModalProps } from '@mui/material/Modal/Modal';
import Grid from '@mui/material/Grid';
import CloseIcon from '@mui/icons-material/Close';
import IconButton from '@mui/material/IconButton';
import Stack from '@mui/material/Stack';

export interface GenericModalProps extends ModalProps {
  loading?: boolean;
  title?: string;
  className?: string;
  containerClass?: string;
  onCloseModal?: () => void;
}

const GenericModal = (props: GenericModalProps, { ...restProps }) => {
  const { children, containerClass, loading, open, title, className} = props;

  return (
    <Modal className={`GenericModal ${className ?? ''}`} open={open} {...restProps}>
      <Container className={`modalContainer pretty-scrollbar ${containerClass ?? ''}`}>
        {loading && <LinearProgress />}
        <Grid className='modalHeader' container>
          <Grid item xs={12}>
            {title && <Typography variant='h6'>{title}</Typography>}
            <Stack direction='row' justifyContent='flex-end' spacing={1}>
                <IconButton
                  aria-label="delete"
                  color='primary'
                  sx={{
                    backgroundColor: 'rgba(0, 0, 0, 0.08)',
                    borderRadius: '5px'
                  }}
                  size="small"
                  onClick={props.onCloseModal}
                >
                  <CloseIcon fontSize="inherit" />
                </IconButton>
            </Stack>
          </Grid>
          <Grid className='modalBody' item xs={12}>
            {children}
          </Grid>
        </Grid>
      </Container>
    </Modal>
  );
};

export default GenericModal;
