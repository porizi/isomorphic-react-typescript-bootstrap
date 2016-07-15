import * as React from 'react';
import { addCSSToHead } from '../../utils/css_styler';

addCSSToHead(
  //language=CSS
  `
  .pr-hello-world__title {
    margin: 10px 15px;
  }
  `
);

interface IHelloWorld {
  helloString: string
}

export class HelloWorld extends React.Component<IHelloWorld, any> {
  public render(): JSX.Element {
    const {helloString} = this.props;
    return (
      <h1 className="pr-hello-world__title">
        {helloString}
      </h1>
    );
  }
}
