import { Path, GET, PathParam } from 'typescript-rest';
import { Phone } from '../../model';
import phonesMock from '../phonesMock.json';

const phones = phonesMock as Phone[];

@Path('/phones')
export class PhonesController {
  @GET
  public getPhones(): Phone[] {
    return phones;
  }

  // Proof of concept
  @Path(':phoneId')
  @GET
  public getPhone( @PathParam('phoneId') phoneId: Phone['id']): Phone {
    return phones.find(({ id }) => id === phoneId);
  }
}
