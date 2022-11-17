import { Link } from "react-scroll";
export function Button({ type, url, children, Name }) {
  return (
    <>
      {type == "in" ? (
        <Link smooth={true} duration={500} to={url} className={`${Name} buttonModule`}>
          {children}
        </Link>
      ) : (
        <a href={url} className={`${Name} buttonModule`}>
          {children}
        </a>
      )}
    </>
  );
}
