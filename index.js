const { Component } = require('@serverless-devs/s-core');
const ServerlessError = require('./utils/error');

class FcComponent extends Component {
  constructor() {
    super();
  }

  async logs (inputs) {
    const fcLogs = await this.load('fc-logs-alibaba-component', 'Component');
    await fcLogs.logs(inputs);
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