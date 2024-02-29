export const modalStyles = {
    modalContainer: {
      position: 'absolute' as 'absolute',
      top: '50%',
      left: '50%',
      transform: 'translate(-50%, -50%)',
      width: "20%",
      bgcolor: 'background.paper',
      border: '2px solid #000',
      boxShadow: 24,
      p: 4,
    },
    form: {
      formContainer: {
        marginTop: "20px",
      },
      inputFields: {
        width: "100%",
        marginTop: "10px",
        
      }, 
      buttonContainer: {
        display: "flex",
        justifyContent: "flex-end",
        gap: "10px",
        marginTop: "20px"
      }
    }
  };