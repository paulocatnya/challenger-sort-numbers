import { Injectable } from '@nestjs/common';
import { ChallengerApi } from 'src/api/';

@Injectable()
export class AppService {
  constructor(private readonly challengerApi: ChallengerApi) {}

  async getAllAndFilter() {
    const totalNumbersArray = [];
    const arrayPagesWithError = [];
    let page = 9990;
    let hasNumbers = true;
    let arrayNumbers = [];
    let numberOfCalls = 0;

    while (hasNumbers) {
      try {
        arrayNumbers = await this.challengerApi.getAllTicketsByFilter(
          page.toString(),
        );

        if (arrayNumbers.length === 0) {
          hasNumbers = false;
        }

        totalNumbersArray.push(...arrayNumbers);
        page++;
        numberOfCalls++;
      } catch (error) {
        arrayPagesWithError.push(page.toString());
        console.log(`\nError in called of page: ${page}.`);
      }
    }

    const arrayNumbersOrdenated = this.bubbleSort(totalNumbersArray);

    return {
      arrayNumbersOrdenated: arrayNumbersOrdenated,
      arrayNumbersOrdenatedLength: arrayNumbersOrdenated.length,
      pagesCalledWithError: arrayPagesWithError,
      numberOfCalls,
    };
  }

  bubbleSort(array: number[]) {
    let done = false;
    while (!done) {
      done = true;
      for (let i = 1; i < array.length; i += 1) {
        if (array[i - 1] > array[i]) {
          done = false;
          const tmp = array[i - 1];
          array[i - 1] = array[i];
          array[i] = tmp;
        }
      }
    }

    return array;
  }
}
