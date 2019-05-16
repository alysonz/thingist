const Hidden = (props) => {
  if (props.hidden) {
    return '';
  }
  return props.children;
};

export default Hidden;
