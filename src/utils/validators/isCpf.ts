import generateCheckSums from '../helpers/generateCheckSums';

// eslint-disable-next-line no-useless-escape
export const CPF_PATTERN = /^(\d{11}|\d{3}\.\d{3}\.\d{3}\-\d{2})$/;
const NonNumeric = /\D/g;

const getRemaining = (value: number): number =>
  value % 11 < 2 ? 0 : 11 - (value % 11);

const isRepeatedArray = <T>(items: Array<T>): boolean =>
  items.every((item) => items[0] === item);

const mapToNumeric = (value: string): string => value.replace(NonNumeric, '');

const mapToNumbers = (value: string): Array<number> =>
  mapToNumeric(value).split('').map(Number);

const isCPF = (value: string): boolean => {
  if (!CPF_PATTERN.test(value)) {
    return false;
  }
  const numbers = mapToNumbers(value);
  if (isRepeatedArray(numbers)) {
    return false;
  }
  const validators = [11, 10, 9, 8, 7, 6, 5, 4, 3, 2];
  const checkers = generateCheckSums(numbers, validators);
  return (
    numbers[9] === getRemaining(checkers[0]) &&
    numbers[10] === getRemaining(checkers[1])
  );
};

export default isCPF;
