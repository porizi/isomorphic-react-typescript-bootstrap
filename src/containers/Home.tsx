import * as React from 'react';
import {HelloWorld} from '../components/home/HelloWorld';
import {Button} from '../components/shared/Button';

export class Home extends React.Component<any,any> {

  public constructor(props?: any, context?: any) {
    super(props, context);
    this.state = { helloString: '' };
    this.onClick = this.onClick.bind(this);
  }

  public onClick(): void {
    const helloString: string = (this.state.helloString) ? '' : 'Hello World!';
    this.setState({ helloString: helloString });
  }

  public render(): JSX.Element {
    return (
      <div>
        <Button onClick={this.onClick} />
        <HelloWorld helloString={this.state.helloString} />
      </div>
    );
  }
}
