export default function Button({ children, onClick, type }) {
  {
    /* This is a comment in JSX. */
  }
  return (
    <button className={`btn ${type}`} onClick={onClick}>
      {" "}
      {/*style={{borderRadius: "5px"}} would be how to style*/}
      {/* text inside the button  */}
      {children}
    </button>
  );
}
