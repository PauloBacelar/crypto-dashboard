import LoaderSpinner from "react-loader-spinner";

const Loader = (props) => {
  return (
    <div style={props.styles}>
      <LoaderSpinner
        type="TailSpin"
        color="#fff"
        height={100}
        width={100}
        timeout={0}
      />
    </div>
  );
};

export default Loader;
