import React, { PureComponent } from "react";

import { Progress } from 'semantic-ui-react'

class SkillWrap extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      percent: 0
    };
  }

  render() {
    const percent = this.props.percent;
    setTimeout(()=>{
      this.setState({percent});
    }, this.props.animationDelay + 1000);

    return (
      <div className="skill-wrap" style={this.props.style}>
        <div className="skill-title"><span>{this.props.title}</span></div>
        <Progress percent={this.state.percent} progress />
      </div>
    );
  }
}

export default SkillWrap;
