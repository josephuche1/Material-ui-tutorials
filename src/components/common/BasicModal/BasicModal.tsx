import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import { modalStyles } from './styles';
import { TBasicModalProps } from '../Types/Modaltype';



const BasicModal:React.FC<TBasicModalProps> = (props) => {


  return (
    <Modal open={props.open} onClose={props.onClose}>
        <Box sx={modalStyles.modalContainer}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            {props.title}
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            {props.subtitle}
          </Typography>
          {props.content}
        </Box>
    </Modal>
  )
}

export default BasicModal
