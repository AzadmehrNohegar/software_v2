import { Fragment } from "react";
import { Pagination } from "../../shared/pagination";

function EsigenzeFormative() {
  return (
    <Fragment>
      <div className="py-16 container-xxl px-8 flex items-center justify-between">
        <h1 className="text-3xl font-semibold text-white">
          Esigenze Formative
        </h1>
        <div className="border border-white border-opacity-80 rounded-md flex items-center gap-x-1 px-3 py-1">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="#ffffff"
            className="bi bi-search"
            viewBox="0 0 16 16"
          >
            <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" />
          </svg>
          <input
            className="input input-ghost input-sm focus:bg-transparent focus:outline-transparent"
            placeholder="Search"
          />
        </div>
      </div>
      <div className="bg-white p-10 container-xxl flex flex-col items-center justify-center">
        <div className="overflow-x-auto max-w-full w-full">
          <table className="table border-collapse">
            <thead>
              <tr className="bg-green-50 text-gray-800">
                <th className="font-normal text-sm px-5 py-4 border border-slate-100">
                  Cognome
                </th>
                <th className="font-normal text-sm px-5 py-4 border border-slate-100">
                  Nome
                </th>
                <th className="font-normal text-sm px-5 py-4 border border-slate-100">
                  Macchina
                </th>
                <th className="font-normal text-sm px-5 py-4 border border-slate-100">
                  Codice
                </th>
                <th className="font-normal text-sm px-5 py-4 border border-slate-100">
                  Procedura
                </th>
                <th className="font-normal text-sm px-5 py-4 border border-slate-100">
                  Data emissione
                </th>
                <th className="font-normal text-sm px-5 py-4 border border-slate-100">
                  Vision
                </th>
                <th className="font-normal text-sm px-5 py-4 border border-slate-100">
                  Coordinatore
                </th>
                <th className="font-normal text-sm px-5 py-4 border border-slate-100">
                  Validazione
                </th>
                <th className="font-normal text-sm px-5 py-4 border border-slate-100">
                  Prossima formazione
                </th>
                <th className="font-normal text-sm px-5 py-4 border border-slate-100">
                  Tempo
                </th>
                <th className="font-normal text-sm px-5 py-4 border border-slate-100"></th>
              </tr>
            </thead>
            <tbody>
              <tr onClick={() => {}}>
                <td className="border-start px-5 py-4 border text-[13px] border-slate-100">
                  BIANCO
                </td>
                <td className="border-start px-5 py-4 border text-[13px] border-slate-100">
                  PAOLO
                </td>
                <td className="border-start px-5 py-4 border text-[13px] border-slate-100">
                  924
                </td>
                <td className="border-start px-5 py-4 border text-[13px] border-slate-100">
                  1
                </td>
                <td className="border-start px-5 py-4 border text-[13px] border-slate-100">
                  MISURA RACLE
                </td>
                <td className="border-start px-5 py-4 border text-[13px] border-slate-100">
                  2018/07/20
                </td>
                <td className="border-start px-5 py-4 border text-[13px] border-slate-100">
                  0
                </td>
                <td className="border-start px-5 py-4 border text-[13px] border-slate-100">
                  P&PC
                </td>
                <td className="border-start px-5 py-4 border text-[13px] border-slate-100">
                  ANNUALE
                </td>
                <td className="border-start px-5 py-4 border text-[13px] border-slate-100">
                  2019/07/20
                </td>
                <td className="border-start px-5 py-4 border text-[13px] border-slate-100">
                  0.2
                </td>
                <td
                  className="border-start px-5 py-4 border text-[13px] border-slate-100 w-min"
                  align="right"
                >
                  <button className="btn p-0 text-success btn-ghost btn-link decoration-transparent">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      fill="currentColor"
                      className="bi bi-check2-square scale-150"
                      viewBox="0 0 16 16"
                    >
                      <path d="M3 14.5A1.5 1.5 0 0 1 1.5 13V3A1.5 1.5 0 0 1 3 1.5h8a.5.5 0 0 1 0 1H3a.5.5 0 0 0-.5.5v10a.5.5 0 0 0 .5.5h10a.5.5 0 0 0 .5-.5V8a.5.5 0 0 1 1 0v5a1.5 1.5 0 0 1-1.5 1.5H3z" />
                      <path d="m8.354 10.354 7-7a.5.5 0 0 0-.708-.708L8 9.293 5.354 6.646a.5.5 0 1 0-.708.708l3 3a.5.5 0 0 0 .708 0z" />
                    </svg>
                  </button>
                </td>
              </tr>
              <tr onClick={() => {}}>
                <td className="border-start px-5 py-4 border text-[13px] border-slate-100">
                  BIANCO
                </td>
                <td className="border-start px-5 py-4 border text-[13px] border-slate-100">
                  PAOLO
                </td>
                <td className="border-start px-5 py-4 border text-[13px] border-slate-100">
                  924
                </td>
                <td className="border-start px-5 py-4 border text-[13px] border-slate-100">
                  1
                </td>
                <td className="border-start px-5 py-4 border text-[13px] border-slate-100">
                  MISURA RACLE
                </td>
                <td className="border-start px-5 py-4 border text-[13px] border-slate-100">
                  2018/07/20
                </td>
                <td className="border-start px-5 py-4 border text-[13px] border-slate-100">
                  0
                </td>
                <td className="border-start px-5 py-4 border text-[13px] border-slate-100">
                  P&PC
                </td>
                <td className="border-start px-5 py-4 border text-[13px] border-slate-100">
                  ANNUALE
                </td>
                <td className="border-start px-5 py-4 border text-[13px] border-slate-100">
                  2019/07/20
                </td>
                <td className="border-start px-5 py-4 border text-[13px] border-slate-100">
                  0.2
                </td>
                <td
                  className="border-start px-5 py-4 border text-[13px] border-slate-100 w-min"
                  align="right"
                >
                  <button className="btn p-0 text-success btn-ghost btn-link decoration-transparent">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      fill="currentColor"
                      className="bi bi-check2-square scale-150"
                      viewBox="0 0 16 16"
                    >
                      <path d="M3 14.5A1.5 1.5 0 0 1 1.5 13V3A1.5 1.5 0 0 1 3 1.5h8a.5.5 0 0 1 0 1H3a.5.5 0 0 0-.5.5v10a.5.5 0 0 0 .5.5h10a.5.5 0 0 0 .5-.5V8a.5.5 0 0 1 1 0v5a1.5 1.5 0 0 1-1.5 1.5H3z" />
                      <path d="m8.354 10.354 7-7a.5.5 0 0 0-.708-.708L8 9.293 5.354 6.646a.5.5 0 1 0-.708.708l3 3a.5.5 0 0 0 .708 0z" />
                    </svg>
                  </button>
                </td>
              </tr>
              <tr onClick={() => {}}>
                <td className="border-start px-5 py-4 border text-[13px] border-slate-100">
                  BIANCO
                </td>
                <td className="border-start px-5 py-4 border text-[13px] border-slate-100">
                  PAOLO
                </td>
                <td className="border-start px-5 py-4 border text-[13px] border-slate-100">
                  924
                </td>
                <td className="border-start px-5 py-4 border text-[13px] border-slate-100">
                  1
                </td>
                <td className="border-start px-5 py-4 border text-[13px] border-slate-100">
                  MISURA RACLE
                </td>
                <td className="border-start px-5 py-4 border text-[13px] border-slate-100">
                  2018/07/20
                </td>
                <td className="border-start px-5 py-4 border text-[13px] border-slate-100">
                  0
                </td>
                <td className="border-start px-5 py-4 border text-[13px] border-slate-100">
                  P&PC
                </td>
                <td className="border-start px-5 py-4 border text-[13px] border-slate-100">
                  ANNUALE
                </td>
                <td className="border-start px-5 py-4 border text-[13px] border-slate-100">
                  2019/07/20
                </td>
                <td className="border-start px-5 py-4 border text-[13px] border-slate-100">
                  0.2
                </td>
                <td
                  className="border-start px-5 py-4 border text-[13px] border-slate-100 w-min"
                  align="right"
                >
                  <button className="btn p-0 text-success btn-ghost btn-link decoration-transparent">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      fill="currentColor"
                      className="bi bi-check2-square scale-150"
                      viewBox="0 0 16 16"
                    >
                      <path d="M3 14.5A1.5 1.5 0 0 1 1.5 13V3A1.5 1.5 0 0 1 3 1.5h8a.5.5 0 0 1 0 1H3a.5.5 0 0 0-.5.5v10a.5.5 0 0 0 .5.5h10a.5.5 0 0 0 .5-.5V8a.5.5 0 0 1 1 0v5a1.5 1.5 0 0 1-1.5 1.5H3z" />
                      <path d="m8.354 10.354 7-7a.5.5 0 0 0-.708-.708L8 9.293 5.354 6.646a.5.5 0 1 0-.708.708l3 3a.5.5 0 0 0 .708 0z" />
                    </svg>
                  </button>
                </td>
              </tr>
              <tr onClick={() => {}}>
                <td className="border-start px-5 py-4 border text-[13px] border-slate-100">
                  BIANCO
                </td>
                <td className="border-start px-5 py-4 border text-[13px] border-slate-100">
                  PAOLO
                </td>
                <td className="border-start px-5 py-4 border text-[13px] border-slate-100">
                  924
                </td>
                <td className="border-start px-5 py-4 border text-[13px] border-slate-100">
                  1
                </td>
                <td className="border-start px-5 py-4 border text-[13px] border-slate-100">
                  MISURA RACLE
                </td>
                <td className="border-start px-5 py-4 border text-[13px] border-slate-100">
                  2018/07/20
                </td>
                <td className="border-start px-5 py-4 border text-[13px] border-slate-100">
                  0
                </td>
                <td className="border-start px-5 py-4 border text-[13px] border-slate-100">
                  P&PC
                </td>
                <td className="border-start px-5 py-4 border text-[13px] border-slate-100">
                  ANNUALE
                </td>
                <td className="border-start px-5 py-4 border text-[13px] border-slate-100">
                  2019/07/20
                </td>
                <td className="border-start px-5 py-4 border text-[13px] border-slate-100">
                  0.2
                </td>
                <td
                  className="border-start px-5 py-4 border text-[13px] border-slate-100 w-min"
                  align="right"
                >
                  <button className="btn p-0 text-success btn-ghost btn-link decoration-transparent">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      fill="currentColor"
                      className="bi bi-check2-square scale-150"
                      viewBox="0 0 16 16"
                    >
                      <path d="M3 14.5A1.5 1.5 0 0 1 1.5 13V3A1.5 1.5 0 0 1 3 1.5h8a.5.5 0 0 1 0 1H3a.5.5 0 0 0-.5.5v10a.5.5 0 0 0 .5.5h10a.5.5 0 0 0 .5-.5V8a.5.5 0 0 1 1 0v5a1.5 1.5 0 0 1-1.5 1.5H3z" />
                      <path d="m8.354 10.354 7-7a.5.5 0 0 0-.708-.708L8 9.293 5.354 6.646a.5.5 0 1 0-.708.708l3 3a.5.5 0 0 0 .708 0z" />
                    </svg>
                  </button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        <Pagination
          count={40}
          next={null}
          page={1}
          perPage={10}
          prev={null}
          setPage={console.log}
        />
      </div>
    </Fragment>
  );
}

export default EsigenzeFormative;
