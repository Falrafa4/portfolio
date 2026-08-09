import clsx from "clsx";
import { Link } from "react-router";

export default function Button({ children, target, classname = '' }) {
  return (
    <Link
      to={target}
      className={clsx(
        "inline-flex items-center gap-2 bg-primary rounded px-4 py-2.5 border-2 border-primary text-sm font-bold text-white transition hover:bg-transparent hover:border-2 hover:border-dashed hover:text-primary",
        classname,
      )}
    >
      {children}
    </Link>
  );
}
