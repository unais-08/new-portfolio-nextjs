export function jsonToStringify(projects) {
  const jsonString = JSON.stringify(projects);
  const parsedData = JSON.parse(jsonString);
  return parsedData;
}
