// Use the environment object to set or modify the application port

const environment = {
    serverPort: process.env.SERVER_PORT || '3001',
};

export {
    environment,
};
