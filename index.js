const { Component } = require('@serverless-devs/s-core');
const getHelp = require('./utils/help');
const Logger = require('./utils/logger');
const check = require('./utils/check');
const logsUtils = require('./utils/logs-utils');

class FcComponent extends Component {
  constructor() {
    super();
    this.logger = new Logger();
  }

  async logs (inputs) {
    this.help(inputs, getHelp(inputs).logs);

    const {
      Properties: properties = {},
      Credentials: credentials = {}
    } = inputs;

    const {
      Region: region,
      Service: serviceProp = {},
      Function: functionProp = {}
    } = properties;
    const serviceName = serviceProp.Name;
    const logConfig = serviceProp.Log;
    const functionName = functionProp.Name;

    check.checkLogsCommands(region, serviceName, functionName, logConfig);
    const { projectName, logStoreName } = logsUtils.processLogAutoIfNeed(logConfig, credentials.AccountID, region);
    const fcLogs = await this.load('fc-logs-alibaba-component', 'Component');
    await fcLogs.logs({
      ...inputs,
      Properties: {
        Region: region,
        LogConfig: {
          ProjectName: projectName,
          LogStoreName: logStoreName,
        },
        Topic: serviceName,
        Query: functionName
      }
    });
  }

  async sync (inputs) {
    const fcLogs = await this.load('fc-sync-alibaba-component', 'Component');
    await fcLogs.sync(inputs);
  }
  
  async metrics (inputs) {
    const fcMetrics = await this.load('fc-metrics-alibaba-component', 'Component');
    await fcMetrics.metrics(inputs);
  }

  async deploy (inputs) {
    const fcDeploy = await this.load('fc-deploy-alibaba-component', 'Component');
    return await fcDeploy.deploy(inputs);
  }

  async remove (inputs) {
    const fcRemove = await this.load('fc-remove-alibaba-component', 'Component');
    return await fcRemove.remove(inputs);
  }

  async publish (inputs) {
    const fcQualifier = await this.load('fc-qualifier-alibaba-component', 'Component');
    return await fcQualifier.publish(inputs);
  }

  async unpublish (inputs) {
    const fcQualifier = await this.load('fc-qualifier-alibaba-component', 'Component');
    return await fcQualifier.unpublish(inputs);
  }

  async invoke (inputs) {

  }

  async install (inputs) {

  }

  async build (inputs) {

  }
}

module.exports = FcComponent;