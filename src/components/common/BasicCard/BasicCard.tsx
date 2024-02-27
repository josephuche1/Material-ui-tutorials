import React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Box from '@mui/material/Box';

interface IBasicCardProps {
    header: () => JSX.Element;
    sx?: object;
    children?: React.ReactNode;
    childrenStyles?: object;
}

const BasicCard: React.FC<IBasicCardProps> = (props) => {
  return (
    <Card sx={props.sx}>
        {props.header()}
        <CardContent sx={props.childrenStyles}>
          <Box >
            {props.children}
          </Box>
        </CardContent>
    </Card>
  )
}

export default BasicCard
