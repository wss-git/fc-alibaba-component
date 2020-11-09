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

function checkLogsCommands (region, serviceName, functionName, logConfig) {
  checkRegion(region);
  checkServiceName(serviceName);
  checkFunctionName(functionName);

  if (!logConfig) {
    new ServerlessError({
      code: 'LogNotFount',
      message: 'Log config is empty.'
    });
  }

  const checkAuto = typeof logConfig === 'string' && !isConfigAuto(logConfig);
  const checkObj = typeof logConfig !== 'string' && !(logConfig.Project && logConfig.LogStore);
  if (checkAuto || checkObj) {
    new ServerlessError({
      code: 'LogConfigError',
      message: 'Missing Log definition in template.yml.\nRefer to https://github.com/Serverless-Devs-Awesome/fc-alibaba-component#log'
    });
  }
}

module.exports = {
  checkLogsCommands
}
