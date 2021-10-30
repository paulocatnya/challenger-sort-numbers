import axios from 'axios';

export class ChallengerApi {
  private axiosLoad() {
    return axios.create({
      baseURL: 'http://challenge.dienekes.com.br/api/numbers',
    });
  }

  async getAllTicketsByFilter(page: string) {
    const numbers = await this.axiosLoad().get(`?page=${page}`);
    return numbers.data.numbers;
  }
}
