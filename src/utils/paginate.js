import _ from "lodash";

export function paginate(items, pageNumber, pageSize) {
  const startIndex = (pageNumber - 1) * pageSize;
  //paginates data from the clientside
  return _(items)
    .slice(startIndex)
    .take(pageSize)
    .value();
}
