import React, { SFC } from 'react';
import { Grid, Image } from 'semantic-ui-react';
import { Phone } from '../../../../model';

interface IPhoneDetailComponentProps {
  phone: Phone;
}

const PhoneDetailComponent: SFC<IPhoneDetailComponentProps> = ({ phone }: IPhoneDetailComponentProps) => (
    <Grid className="detail">
      <Grid.Column mobile={8} computer={4}><Image src={phone.imageUrl} size="small"/></Grid.Column>
      <Grid.Column mobile={8} computer={4}>Description: {phone.description}</Grid.Column>
      <Grid.Column mobile={8} computer={4}>Years in production: {phone.years.join(' - ')}</Grid.Column>
    </Grid>
);
export default PhoneDetailComponent;
