import React from 'react'
import BasicModal from '../../common/BasicModal/BasicModal';
import { TBasicModalProps } from '../../common/Types/Modaltype';



const NewUserModal:React.FC<TBasicModalProps> = (props) => {
  return (
    <BasicModal
      open={props.open}
      onClose={props.onClose}
      title={props.title}
      subtitle={props.subtitle}
    />
  )
}

export default NewUserModal;
