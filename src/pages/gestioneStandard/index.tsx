import { Fragment, useState } from "react";
import { Pagination } from "../../shared/pagination";
import { GestioneStandardTableStatusDialog } from "./partials/gestioneStandardTableStatusDialog";
import { GestioneStandardCreateDialog } from "./partials/gestioneStandardCreateDialog";
import { useQuery } from "react-query";
import axios from "axios";
import { useLocation, useSearchParams } from "react-router-dom";

function GestioneStandard() {
  const [isStandardCreateDialogOpen, setIsStandardCreateDialogOpen] =
    useState(false);

  const [searchParams, setSearchParams] = useSearchParams();

  const { search } = useLocation();

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const getAnagrafica = async ({ params }: any) => {
    return await axios.get("http://3.76.7.86:9980/anagrafica", {
      params,
    });
  };

  const { data: anagrafica } = useQuery(
    ["anagrafica-pagination", search],
    () =>
      getAnagrafica({
        params: {
          p: searchParams.get("page") || 0,
          n: 10,
        },
      }),
    {
      keepPreviousData: true,
    }
  );

  return (
    <Fragment>
      <div className="py-16 container-xxl px-8 flex items-center justify-between">
        <h1 className="text-3xl font-semibold text-white">Gestione Standard</h1>
        <button
          className="btn bg-slate-100 text-slate-500 font-light"
          onClick={() => setIsStandardCreateDialogOpen(true)}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            className="bi bi-plus-square"
            viewBox="0 0 16 16"
          >
            <path d="M14 1a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1h12zM2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2z" />
            <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z" />
          </svg>
          Nuova Risorsa
        </button>
      </div>
      <div className="bg-white p-10 overflow-x-auto container-xxl flex flex-col items-center justify-center">
        <div className="overflow-x-auto max-w-full w-full">
          <table className="table border-collapse">
            <thead>
              <tr className="bg-slate-50 text-gray-800">
                <th className="font-normal text-sm px-5 py-4 border border-slate-100">
                  Cognome
                </th>
                <th className="font-normal text-sm px-5 py-4 border border-slate-100">
                  Nome
                </th>
                <th className="font-normal text-sm px-5 py-4 border border-slate-100">
                  Reparto
                </th>
                <th className="font-normal text-sm px-5 py-4 border border-slate-100">
                  Citta
                </th>

                <th className="font-normal text-sm px-5 py-4 border border-slate-100"></th>
              </tr>
            </thead>
            <tbody>
              {/* eslint-disable-next-line @typescript-eslint/no-explicit-any */}
              {anagrafica?.data.data.map((item: any) => (
                <tr
                  onClick={() => {
                    searchParams.set("machine", item.idAnagrafica);
                    setSearchParams(searchParams);
                  }}
                >
                  <td className="border-start px-5 py-4 border text-[13px] border-slate-100">
                    {item.cognome}
                  </td>
                  <td className="border-start px-5 py-4 border text-[13px] border-slate-100">
                    {item.nome}
                  </td>
                  <td className="border-start px-5 py-4 border text-[13px] border-slate-100">
                    {item.contratto}
                  </td>
                  <td className="border-start px-5 py-4 border text-[13px] border-slate-100">
                    {item.cittaResidenza}
                  </td>

                  <td
                    className="border-start px-5 py-4 border text-[13px] border-slate-100 w-min"
                    align="right"
                  >
                    <button className="btn p-0 text-warning btn-ghost btn-link decoration-transparent">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        fill="currentColor"
                        className="bi bi-pencil-square scale-150"
                        viewBox="0 0 16 16"
                      >
                        <path d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z" />
                        <path
                          fill-rule="evenodd"
                          d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5v11z"
                        />
                      </svg>
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <Pagination
          count={anagrafica?.data.paginazione.numeroTotaleElementi}
          next={null}
          page={+searchParams.get("page")! || 0}
          perPage={10}
          prev={null}
          setPage={(val) => {
            searchParams.set("page", String(val));
            setSearchParams(searchParams);
          }}
        />
      </div>
      <GestioneStandardCreateDialog
        isOpen={isStandardCreateDialogOpen}
        closeModal={() => setIsStandardCreateDialogOpen(false)}
      />
      <GestioneStandardTableStatusDialog
        isOpen={!!searchParams.get("machine")}
        closeModal={() => {
          searchParams.set("machine", "");
          setSearchParams(searchParams);
        }}
      />
    </Fragment>
  );
}

export default GestioneStandard;
