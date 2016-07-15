import * as React from 'react';
import { addCSSToHead } from '../../utils/css_styler';

addCSSToHead(
  //language=CSS
  `
  .pr-button {
    background: dodgerblue;
    border: 1px solid dodgerblue;
    border-radius: 4px;
    color: whitesmoke;
    margin: 10px 15px;
  }
  `
);

interface IButton {
  onClick: (val: any) => void
}

export class Button extends React.Component<IButton, any> {
  public render(): JSX.Element {
    const {onClick} = this.props;
    return (
      <button onClick={onClick} className="pr-button">
        Click me!
      </button>
    );
  }
}
