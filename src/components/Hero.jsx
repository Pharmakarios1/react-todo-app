const Hero = (props) => {
  const { count } = props;
  return (
    <div>
      <h4>
        <span className="counter-var">{count} </span>todo(s)
      </h4>
    </div>
  );
};

export default Hero;
