// this is an example post request.

const postRequest = {
  headers: {
    "x-auth-token":
      "x-auth-token can be included here and forwarded or we can include it in the body.",
  },
  body: {
    action: "action for the service which the gateway will convert to url.",
    reqBody: "the body for the service",
  },
};

// currently no use for get requests.
const getRequest = {
  headers: {},
};
