import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import Input from '@mui/material/Input';
import { modalStyles } from './styles';
import CommonButton from '../CommonButton/CommonButton';
import { TBasicModalProps } from '../Types/Modaltype';



const BasicModal:React.FC<TBasicModalProps> = (props) => {

      
  function validate(): void {
    throw new Error('Function not implemented.');
  }

  return (
    <Modal open={props.open} onClose={props.onClose}>
        <Box sx={modalStyles.modalContainer}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            {props.title}
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            {props.subtitle}
          </Typography>
          <Box sx={modalStyles.form.formContainer}>
            <Input placeholder="Name" sx={modalStyles.form.inputFields} type="text" disableUnderline/>
            <Input placeholder="Email" sx={modalStyles.form.inputFields} type="text" disableUnderline/>
            <Input placeholder="Phone Number" sx={modalStyles.form.inputFields} type="text" disableUnderline/>
            <Box sx={modalStyles.form.buttonContainer}>
              <CommonButton
                variant="contained"
                color="primary"
                onClick={validate}
              >
                Submit
              </CommonButton>
              <CommonButton onClick={props.onClose}> Cancel </CommonButton>
            </Box>
          </Box>
        </Box>
    </Modal>
  )
}

export default BasicModal
