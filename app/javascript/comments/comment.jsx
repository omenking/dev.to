import 'preact/devtools';
import { h, Component } from 'preact';

export default class CommentsComment extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return <div className="comment">I am a comment hurray!</div>;
  }
}
