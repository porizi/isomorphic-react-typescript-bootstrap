import * as React from 'react';
import {addComponentCSS} from '../../utils/css_styler';

addComponentCSS({
  //language=CSS
  default: `
  .pr-hello-world__title {
    margin: 10px 15px;
  }
  `
});

interface IHelloWorldProps {
  helloString: string
}

export class HelloWorld extends React.Component<IHelloWorldProps, any> {
  public render(): JSX.Element {
    const {helloString} = this.props;
    return (
      <h1 className="pr-hello-world__title">
        {helloString}
      </h1>
    );
  }
}
