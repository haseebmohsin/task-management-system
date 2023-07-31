import "../styles/ErrorPage.css";

function ErrorPage() {
  return (
    <div className="error-page-container">
      <div className="error-page-content">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="feather feather-alert-octagon"
        >
          <polygon points="12 2 2 7 12 12 22 7 12 2"></polygon>
          <line x1="12" y1="17" x2="12" y2="13"></line>
          <line x1="12" y1="8" x2="12.01" y2="8"></line>
        </svg>

        <h1 className="text-5xl mb-4">Oops!</h1>

        <p className="text-lg mb-2">Sorry, an error has occurred.</p>

        <p>
          <i>Something went wrong. Please try again later.</i>
        </p>
      </div>
    </div>
  );
}

export default ErrorPage;
