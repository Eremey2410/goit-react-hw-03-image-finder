import { Audio } from 'react-loader-spinner';
const audio = (
  <Audio
    height="80"
    width="80"
    radius="9"
    color="green"
    ariaLabel="loading"
    // wrapperStyle
    // wrapperClass
  />
);
const Loader = () => {
  return <div>{audio}</div>;
};

export default Loader;
