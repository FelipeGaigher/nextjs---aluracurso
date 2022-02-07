const Title = ({ children, as }) => {
  const Tag = as
  return (
    <>
      <Tag>{children}</Tag>
      <style jsx>{`
        ${Tag} {
          color: red;
          font-family: sans-serif;
        }
      `}</style>
    </>
  );
};

export default Title;