import qs from "query-string";

export default function (query: { [key: string]: any }, page: number) {
  const stringQuery = qs.stringify({
    ...query,
    page: page,
  });
  return stringQuery;
}
