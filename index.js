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

  }

  async publish (inputs) {

  }

  async unpublish (inputs) {

  }

  async invoke (inputs) {

  }

  async install (inputs) {

  }

  async build (inputs) {

  }
}

module.exports = FcComponent;