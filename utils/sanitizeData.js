export function sanitizeData(
  data,
  fieldsToRemove = ["password", "__v"],
  options = { stringify: false }
) {
  const sanitized = Array.isArray(data)
    ? data.map((obj) => sanitizeObject(obj, fieldsToRemove))
    : sanitizeObject(data, fieldsToRemove);

  return options.stringify ? JSON.stringify(sanitized) : sanitized;
}

function sanitizeObject(obj, fieldsToRemove) {
  const plain = obj.toObject?.() || obj; // handles Mongoose documents
  const sanitized = {};

  for (const key in plain) {
    if (fieldsToRemove.includes(key)) continue;

    if (key === "_id") {
      sanitized._id = plain._id.toString(); // convert ObjectId to string
    } else {
      sanitized[key] = plain[key];
    }
  }

  return sanitized;
}
