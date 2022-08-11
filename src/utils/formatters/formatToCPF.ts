import mapToNumeric from "../helpers/mapToNumeric";

const formatToCPF = (value: string): string =>
  mapToNumeric(value)
    .replace(/(\d{3})(\d)/, "$1.$2")
    .replace(/(\d{3})(\d)/, "$1.$2")
    .replace(/(\d{3})(\d{1,2})$/, "$1-$2");

export default formatToCPF;
