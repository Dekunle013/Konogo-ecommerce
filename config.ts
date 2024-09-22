interface Config {
  baseUrl:string
}

const checkConfig = (server:string):Config | {} => {
  let config: Config | {} = {};
  switch (server) {
    case 'production':
      config = {
        baseUrl: '',
      };
      break;
      case 'development':
        config = {
          baseUrl: 'http://localhost:8000',
        };
        break;
    default:
      console.error(`Invalid server configuration: ${server}`);
      break;
  }
  return config;
};

export const selectServer = 'development'
export const config = checkConfig(selectServer) as Config;