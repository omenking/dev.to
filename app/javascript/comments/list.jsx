import 'preact/devtools';
import { h, Component } from 'preact';
import CommentsComment from './comment';
import CommentsForm from './form';

export default class CommentsList extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div id="comments" className="comments">
        <CommentsForm />
        <CommentsComment />
      </div>
    );
  }
}
