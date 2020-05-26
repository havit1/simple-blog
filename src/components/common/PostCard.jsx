import React from 'react';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import styled from 'styled-components';

export default function SimpleCard({ title, body }) {
  return (
    <CustomCard>
      <CardContent>
        <CutomTitle component='h1'>{title.toUpperCase()}</CutomTitle>
        {/* Like we have short body from API */}
        <Typography>{`${body.substring(0, 100)}...`}</Typography>
      </CardContent>
    </CustomCard>
  );
}

const CustomCard = styled(Card)`
  width: 100%;
`;

const CutomTitle = styled(Typography)`
  $$ {
    text-decoration: none;
  }
`;
