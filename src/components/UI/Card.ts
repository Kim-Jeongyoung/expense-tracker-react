import './Card';

function Card(props: { className: string; children: {} }) {
  const classes = 'card ' + props.className;

  return <div className={classes}>{props.children}</div>;
}

export default Card;
