import { Component, Fragment } from 'react';
import React from 'react';
import { Accordion, Container, Dimmer, Header, Loader } from 'semantic-ui-react';
import { connect } from 'react-redux';
import { Phone } from '../../../../model';
import PhoneDetailComponent from '../../components/phoneDetailComponent/phoneDetailComponent';
import PhoneSummaryComponent from '../../components/phoneSummaryComponent/phoneSummaryComponent';
import { IMappedPhoneListActions, IMappedPhoneListProps, mapDispatchToProps, mapStateToProps } from './phoneListMapper';

interface IPhoneListContainerProps extends IMappedPhoneListProps, IMappedPhoneListActions {}
interface IPhoneListContainerState {
  selectedPhone: Phone['id'] | null;
}

class PhoneListContainer extends Component<IPhoneListContainerProps, IPhoneListContainerState> {
  public state: IPhoneListContainerState = {
    selectedPhone: null,
  };

  public async componentDidMount() {
    this.props.fetchPhones();
  }

  public render() {
    const { phones, isPhonesLoading } = this.props;
    const { selectedPhone } = this.state;
    return (
      <Dimmer.Dimmable dimmed={isPhonesLoading}>
        {phones.length > 0 &&
          <Container className="main">
            <Header as="h1">Most popular phones</Header>
            <Accordion className="phone" fluid styled>
              {phones.map(phone => (
                <Fragment key={phone.id}>
                  <Accordion.Title
                    active={selectedPhone === phone.id}
                    index={phone.id}
                    onClick={() => this.toggleSelectPhone(phone.id)}>
                    <PhoneSummaryComponent phone={phone} />
                  </Accordion.Title>
                  <Accordion.Content active={selectedPhone === phone.id}>
                    <PhoneDetailComponent phone={phone} />
                  </Accordion.Content>
                </Fragment>
              ))}
            </Accordion>
          </Container>
        }
        <Dimmer inverted active={isPhonesLoading}><Loader /></Dimmer>
      </Dimmer.Dimmable>
    );
  }

  private toggleSelectPhone(phoneId: Phone['id']): void {
    const selectedPhone = this.state.selectedPhone === phoneId ? null : phoneId;
    this.setState({ selectedPhone });
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(PhoneListContainer);
