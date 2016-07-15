import * as React from 'react';
import '../../node_modules/bootstrap/dist/css/bootstrap.css';
import '../styles.css';

export class App extends React.Component<any,any> {
  public render(): JSX.Element {
    return (
      <div>
        {this.props.children}
      </div>
    );
  }
}
