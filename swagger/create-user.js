module.exports = {
  tags: ['Create User'],
  description: 'Create a new user from MetaMask',
  operationId: 'createUser',
  security: [
    {
      bearerAuth: [],
    },
  ],
  requestBody: {
    content: {
      'application/x-www-form-urlencoded': {
        schema: {
          type: 'object',
          properties: {
            username: {
              description: 'username',
              type: 'string',
            },
            password: {
              description: 'password',
              type: 'string',
            },
            email: {
              description: 'email',
              type: 'string',
            },
            emailverified: {
              description: 'email Verified',
              type: 'string',
            },
            objectid: {
              description: 'objectId',
              type: 'string',
            },
            authdataobj: {
              description: 'MetaMask auth Data Obj',
              type: 'string',
            },
            signature: {
              description: 'MetaMask auth signature',
              type: 'string',
            },
            authtype: {
              description: 'MetaMask auth type',
              type: 'string',
            },
            ethaddress: {
              description: 'ethAddress',
              type: 'string',
            },
            acl: {
              description: 'Access Control list',
              type: 'string',
            },
            sessiontoken: {
              description: 'sessionToken',
              type: 'string',
            },
            createdat: {
              description: 'createdAt',
              type: 'string',
            },
            updatedat: {
              description: 'updatedAt',
              type: 'string',
            },
          },
        },
      },
    },
  },
  responses: {
    200: {
      description: 'User created successfully',
    },
    401: {
      description: 'user exist',
    },
  },
};
