import 'preact/devtools';
import { h, Component } from 'preact';

export default class CommentsForm extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <form className="comments_form">
        <textarea placeholder="Add to the discussion..." />
        <div className="drag_zone">
          Attach files by dragging &amp; dropping, selecting or pasting them.
        </div>
        <button type="submit">Comment</button>
        <div className="clear" />
      </form>
    );
  }
}
