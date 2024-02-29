import React from 'react'
import BasicModal from '../../common/BasicModal/BasicModal';
import { TBasicModalProps } from '../../common/Types/Modaltype';
import Box from '@mui/material/Box';
import Input from '@mui/material/Input';
import { modalStyles } from '../../common/BasicModal/styles';
import CommonButton from '../../common/CommonButton/CommonButton';



const NewUserModal:React.FC<TBasicModalProps> = (props) => {
  const validate = (): void => {
    console.log('Validating')
  }

  const getContent = (): React.ReactNode => {
    return (
      <Box sx={modalStyles.form.formContainer}>
          <Input placeholder="Name" sx={modalStyles.form.inputFields} type="text" disableUnderline/>
          <Input placeholder="Email" sx={modalStyles.form.inputFields} type="email" disableUnderline/>
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
