import clsx from "clsx";

interface IPaginationProps {
  page: number;
  perPage: number;
  count: number;
  setPage: (val: number) => void;
  next: string | null;
  prev: string | null;
  containerClassName?: string;
}

function Pagination({
  count,
  next,
  page,
  perPage,
  prev,
  setPage,
}: IPaginationProps) {
  return (
    <div className="flex items-center py-4 bg-white">
      <div className="flex text-sm items-center gap-x-2 p-2 rounded-xl">
        <button
          className="btn btn-md btn-square btn-ghost"
          disabled={!prev}
          onClick={() => setPage(page - 1)}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            className="bi bi-chevron-left"
            viewBox="0 0 16 16"
          >
            <path
              fill-rule="evenodd"
              d="M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0z"
            />
          </svg>
        </button>
        {count &&
          new Array(Math.ceil(count / perPage)).fill(null).map((_, index) => (
            <button
              key={index}
              className={clsx(
                "btn btn-sm btn-square rounded-md font-light",
                !(page === index) && "btn-ghost",
                page === index && "bg-blue-500 text-white"
              )}
              onClick={() => setPage(index)}
            >
              {index + 1}
            </button>
          ))}
        <button
          className="btn btn-md btn-square btn-ghost"
          disabled={!next}
          onClick={() => setPage(page + 1)}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            className="bi bi-chevron-right"
            viewBox="0 0 16 16"
          >
            <path
              fill-rule="evenodd"
              d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"
            />
          </svg>
        </button>
      </div>
    </div>
  );
}

export { Pagination };
