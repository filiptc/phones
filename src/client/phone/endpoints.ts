import { AxiosResponse } from 'axios';
import { Phone } from '../../model';
import httpClient from '../httpClient';

export async function getPhones(): Promise<Phone[]> {
  const result: AxiosResponse<Phone[]> = await httpClient.get<Phone[]>('/phones');
  return result.data;
}

// Proof of concept
export async function getPhone(phoneId: Phone['id']): Promise<Phone> {
  const result: AxiosResponse<Phone> = await httpClient.get<Phone>(`/phones/${phoneId}`);
  return result.data;
}
