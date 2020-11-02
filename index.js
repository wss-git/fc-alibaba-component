const { Component } = require('@serverless-devs/s-core');
const ServerlessError = require('./utils/error');

class FcComponent extends Component {
  constructor() {
    super();
  }
  
  async metrics(inputs) {
    const fcMetrics = await this.load('fc-metrics-alibaba-component', 'Component');
    await fcMetrics.metrics(inputs);
  }
}

module.exports = FcComponent;