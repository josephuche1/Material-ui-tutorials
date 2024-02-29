import React from 'react'
import BasicModal from '../../common/BasicModal/BasicModal';
import { TBasicModalProps } from '../../common/Types/Modaltype';
import Box from '@mui/material/Box';
import Input from '@mui/material/Input';
import { modalStyles } from '../../common/BasicModal/styles';
import CommonButton from '../../common/CommonButton/CommonButton';
import TextField from '@mui/material/TextField';



const NewUserModal:React.FC<TBasicModalProps> = (props) => {
  const validate = (): void => {
    console.log('Validating')
  }

  const getContent = (): React.ReactNode => {
    return (
      <Box sx={modalStyles.form.formContainer}>
          <TextField 
            placeholder="Name" 
            sx={modalStyles.form.inputFields} 
            type="text" 
            label="Name"
            required
            error
            helperText="Name is required"
          />
          <TextField 
           placeholder="Email" 
           sx={modalStyles.form.inputFields} 
           type="email"
           label="Email"
           required
          />
          <TextField 
            placeholder="Phone Number" 
            sx={modalStyles.form.inputFields} 
            type="tel"
            label="Phone Number" 
          />
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
    );
  }

  return (
    <BasicModal
      open={props.open}
      onClose={props.onClose}
      title={props.title}
      subtitle={props.subtitle}
      content={getContent()}
    />
  )
}

export default NewUserModal;
