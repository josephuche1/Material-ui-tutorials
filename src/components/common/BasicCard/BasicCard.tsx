import React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';

interface IBasicCardProps {
    header: () => JSX.Element;
}

const BasicCard: React.FC<IBasicCardProps> = (props) => {
  return (
    <Card>
        {props.header()}
        <CardContent>
            
        </CardContent>
    </Card>
  )
}

export default BasicCard
