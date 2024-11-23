import { ZodError } from 'zod';

const handleZodError = (err: ZodError) => {
  const statusCode = 400;
  const errorSources = err.issues.map((issue) => ({
    path: issue.path[issue.path.length - 1],
    message: issue.message,
  }));
  return {
    success: false,
    statusCode,
    message: err.issues.map((issue) => issue.message),
    errorSources,
  };
};
exports.default = handleZodError;
