import axios from 'axios';
import { environment } from './environments/environments';
import { IAgency } from './interfaces/IAgency.interface';

export default {
  getAgencies() {
    return axios.get(`${environment.HOST_API}/agencies`)
  },

  getAgency(agencyId: number) {
    return axios.get(`${environment.HOST_API}/agency/${agencyId}`)
  },

  createAgency(newAgency: IAgency){
    return axios.post(`${environment.HOST_API}/agency`, newAgency)
  }
}
