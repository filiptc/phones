import React, { SFC } from 'react';
import { Grid } from 'semantic-ui-react';
import { Phone } from '../../../../model';

import './phoneSummaryComponent.less';


interface IPhoneSummaryComponentProps {
  phone: Phone;
}

const PhoneSummaryComponent: SFC<IPhoneSummaryComponentProps> = ({ phone }: IPhoneSummaryComponentProps) => (
  <Grid className="summary">
    <Grid.Column mobile={8} computer={4}>Title: {phone.title}</Grid.Column>
    <Grid.Column mobile={8} computer={4}>Units sold (M): {phone.soldUnits}</Grid.Column>
    <Grid.Column mobile={8} computer={4}>Price: ${phone.price}</Grid.Column>
    <Grid.Column textAlign="right" mobile={8} computer={4}>
      <span className="colorBox" style={{ backgroundColor: phone.color }} title={phone.color}/>
    </Grid.Column>
  </Grid>
);
export default PhoneSummaryComponent;
