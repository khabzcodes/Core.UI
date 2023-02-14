interface BaseErrorResponse {
  response: ErrorResponse;
}

interface ErrorResponse {
  data: {
    status: string;
    title: string;
  };
}

export default BaseErrorResponse;
