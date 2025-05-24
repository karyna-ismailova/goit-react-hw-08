import { Link } from "react-router-dom";

const NotFoundPage = () => {
  return (
    <div
      style={{
        background: "linear-gradient(135deg, #ffe9ff, #e0e7ff)",
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <h1
        style={{
          color: " #1e3a8a",
          fontSize: "52px",
        }}
      >
        Oops! Page Not Found
      </h1>

      <Link
        to="/"
        style={{
          display: "inline-block",
          color: " #1e3a8a",
          fontSize: "36px",
        }}
      >
        Back Home
      </Link>
    </div>
  );
};

export default NotFoundPage;
