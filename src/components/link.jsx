const LinkAchor = ({ children }) => {
  return (
    <div>
      {" "}
      <ul className="ft-link tmp-link-animation ">
        <li>{children}</li>
      </ul>{" "}
    </div>
  );
};

export default LinkAchor;
