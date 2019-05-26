import React from 'react';

export default class Input extends React.Component {
  componentDidUpdate(prevProps) {
    if (!prevProps.meta.active && this.props.meta.active) {
      this.input.focus();
    }
  }

  render() {

    const Element = this.props.element || 'input';

    let error;
    if (this.props.meta.touched && this.props.meta.error) {
      error = <div 
                className="error-style"
                aria-live="polite"
              >
                {this.props.meta.error}
              </div>
    }
    let warning;
    if (this.props.meta.touched && this.props.meta.warning) {
      warning = (
        <div 
          className="error-style"
          aria-live="polite" 
        >
          {this.props.meta.warning}
        </div>
      )
    }

    return(
      <div>
        <label 
          htmlFor={this.props.input.name}
          className="label-style"
        >
          {this.props.label}
        </label>
        <Element
          className="textfield"
          {...this.props.input}
          id={this.props.input.name}
          type={this.props.type}
          ref={input => (this.input = input)}
        />
        
        {error}
        {warning}

      </div>
    )

  }
}