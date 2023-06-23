import { useState } from "react";

function NextPage({ page }) {
  const [pages, SetPages] = useState(1);

  const handleDecress = () => {
    if (pages > 1) {
      SetPages(pages - 1);
      page(pages - 1);
    }
  };

  const handleIncrement = () => {
    SetPages(pages + 1);
    page(pages + 1);
  };

  return (
    <>
      <div className="next-page ">
        <button className="btn btn-warning" onClick={handleDecress}>
          {"<<"}
        </button>
        <p>Current Page : {pages}</p>
        <button className="btn btn-warning" onClick={handleIncrement}>
          {">>"}
        </button>
      </div>
    </>
  );
}

export default NextPage;
