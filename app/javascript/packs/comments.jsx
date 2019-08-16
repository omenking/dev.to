import { h, render } from 'preact';
import CommentsList from '../comments/list';

document.ready.then(function() {
  load();
});

function load() {
  const el = document.getElementById('comments');
  render(<CommentsList />, el, el.firstElementChild);
}
