import { Link, useLocation } from "react-router-dom";

function Breadcrumb() {
  const location = useLocation();

  const pathnames = location.pathname.split("/").filter((x) => x);

  return (
    <div className="bg-white border-b border-gray-200 py-3">
      <div className="max-w-7xl mx-auto px-4 flex items-center justify-between">
        <h1 className="text-lg font-semibold text-gray-800">
          {pathnames[pathnames.length - 1] || "Home"}
        </h1>

        <div className="flex items-center gap-2 text-sm text-gray-500">
          <Link to="/" className="text-green-700 hover:underline">
            Home
          </Link>

          {pathnames.map((name, index) => {
            const routeTo = "/" + pathnames.slice(0, index + 1).join("/");
            const isLast = index === pathnames.length - 1;

            return (
              <span key={routeTo} className="flex items-center gap-2">
                <span>/</span>
                {isLast ? (
                  <span className="text-gray-700 capitalize">{name}</span>
                ) : (
                  <Link
                    to={routeTo}
                    className="text-green-700 hover:underline capitalize"
                  >
                    {name}
                  </Link>
                )}
              </span>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Breadcrumb;