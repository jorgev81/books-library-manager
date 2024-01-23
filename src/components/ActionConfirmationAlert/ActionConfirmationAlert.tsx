import React, { FC } from 'react';
import './ActionConfirmationAlert.scss';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogActions from '@mui/material/DialogActions';
import Button from '../Button';
import Grid from '@mui/material/Grid';
import LinearProgress from '@mui/material/LinearProgress';

interface ActionConfirmationAlertProps {
  open: boolean;
  title?: string;
  content?: string;
  loading?: boolean;
  onConfirm?: () => void;
  onCancel?: () => void;
}

const ActionConfirmationAlert: FC<ActionConfirmationAlertProps> = (props) => (
  <Dialog
    aria-describedby="alert-dialog-description"
    aria-labelledby="alert-dialog-title"
    open={props.open}
    onClose={props.onCancel}
  >
    {props.title && <DialogTitle id="alert-dialog-title">{props.title}</DialogTitle>}
    {props?.loading && <LinearProgress />}
    <DialogContent>
      <DialogContentText className='ModalContent' id="alert-dialog-description">
        {props.content}
      </DialogContentText>
    </DialogContent>
    <DialogActions>
      <Grid container item justifyContent='space-between'>
        <Button autoFocus size='large' variant="outlined" onClick={props.onCancel}>
          Cancel
        </Button>
        <Button color='error' size='large' disabled={props.loading} onClick={props.onConfirm}>
          Yes
        </Button>
      </Grid>
    </DialogActions>
  </Dialog>
);

export default ActionConfirmationAlert;
