export const charactersCheck = (value: string): boolean => {
  const isLettersCheck = /^[A-Za-z]\S*$/.test(value);

  return isLettersCheck;
};
