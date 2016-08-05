import * as React from 'react';
import {addComponentCSS} from '../../utils/css_styler';

addComponentCSS({
  //language=CSS
  default: `
  .pr-button {
    background: dodgerblue;
    border: 1px solid dodgerblue;
    border-radius: 4px;
    color: whitesmoke;
    margin: 10px 15px;
  }
  `
});

interface IButtonProps {
  onClick: (val: any) => void
}

export class Button extends React.Component<IButtonProps, any> {
  public render(): JSX.Element {
    const {onClick} = this.props;
    return (
      <button onClick={onClick} className="pr-button">
        Click me!
      </button>
    );
  }
}
