const Hidden = (props) => {
  if (props.show) {
    return props.children;
  }
  return '';
};

export default Hidden;
