const ServerlessError = require('./error');
const { isConfigAuto } = require('./logs-utils');

const checkRegion = region => {
  if (!region) {
    new ServerlessError({ code: 'RegionNotFount', message: 'Region is empty.' })
  }
}

const checkServiceName = serviceName => {
  if (!serviceName) {
    new ServerlessError({
      code: 'ServiceNameNotFount',
      message: 'Service Name is empty.'
    });
  }
}

const checkFunctionName = functionName => {
  if (!functionName) {
    new ServerlessError({
      code: 'FunctionNameNotFount',
      message: 'Function Name is empty.'
    });
  }
}

const checkLogConfig = logConfig => {
  if (!logConfig) {
    new ServerlessError({
      code: 'LogNotFount',
      message: 'Log config is empty.'
    });
  }
}

function checkLogsCommands (region, serviceName, functionName, logConfig) {
  checkRegion(region);
  checkServiceName(serviceName);
  checkFunctionName(functionName);
  checkLogConfig(logConfig);

  const isObj = typeof logConfig !== 'string' && !(logConfig.Project && logConfig.LogStore);
  if (!isConfigAuto(logConfig) || isObj) {
    new ServerlessError({
      code: 'LogConfigError',
      message: 'Missing Log definition in template.yml.\nRefer to https://github.com/Serverless-Devs-Awesome/fc-alibaba-component#log'
    });
  }
}

module.exports = {
  checkLogsCommands
}
