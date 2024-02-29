import React from 'react'
import BasicModal from '../../common/BasicModal/BasicModal';
import { TBasicModalProps } from '../../common/Types/Modaltype';
import Box from '@mui/material/Box';
import { modalStyles } from '../../common/BasicModal/styles';
import CommonButton from '../../common/CommonButton/CommonButton';
import TextField from '@mui/material/TextField';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as Yup from 'yup';



const NewUserModal:React.FC<TBasicModalProps> = (props) => {
 const validationSchema = Yup.object().shape({
    name: Yup.string().required('Name is required'),
    email: Yup.string().email('Email is invalid').required('Email is required'),
    phone: Yup.string()
     // .matches(phoneRegex, "Phone number is not valid")
 });


  const {
    register, 
    handleSubmit, 
    formState: { errors }
  } = useForm({
    resolver: yupResolver(validationSchema)
  });

  
 const onSubmit = (data: object): void => {
  addUser(data);
 }

  const addUser = (data: object): void => {
    console.log(data);
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
            {...register('name')} // register the input
            error={errors.name ? true : false} // apply an error state if there is an error
            helperText={errors.name?.message} // display the error message
          />
          <TextField 
           placeholder="Email" 
           sx={modalStyles.form.inputFields} 
           type="email"
           label="Email"
           required
           {...register('email')} // register the input
           error={errors.email ? true : false} // apply an error state if there is an error
           helperText={errors.email?.message} // display the error message
          />
          <TextField 
            placeholder="Phone Number" 
            sx={modalStyles.form.inputFields} 
            type="tel"
            label="Phone Number" 
            {...register('phone')} // register the input
            error={errors.phone ? true : false} // apply an error state if there is an error
            helperText={errors.phone?.message} // display the error message
          />
          <Box sx={modalStyles.form.buttonContainer}>
            <CommonButton
              variant="contained"
              color="primary"
              onClick={onSubmit}
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
