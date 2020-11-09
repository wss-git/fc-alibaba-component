const getUuid = require('uuid-by-string');


const isConfigAuto = config => config === 'Auto';

const generateDefaultLogConfig = (accountId, region) => ({
  project: `aliyun-fc-${region}-${getUuid(accountId)}`,
  logStore: 'function-log'
})

// 计算日志仓库名称
function processLogAutoIfNeed (logConfig, accountId, region) {
  let projectName;
  let logStoreName;

  if (isConfigAuto(logConfig)) {
    const defaultLogConfig = generateDefaultLogConfig(accountId, region);

    projectName = defaultLogConfig.project;
    logStoreName = defaultLogConfig.logStore;
  } else {
    projectName = logConfig.Project;
    logStoreName = logConfig.LogStore;
  }

  return { projectName, logStoreName };
}

module.exports = {
  isConfigAuto,
  processLogAutoIfNeed
}