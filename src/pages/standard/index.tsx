import { Fragment, useState } from "react";
import { Pagination } from "../../shared/pagination";
import { StandardCreateDialog } from "./partials/standardCreateDialog";
import { StandardTableStatusDialog } from "./partials/standardTableStatusDialog";
import { useLocation, useSearchParams } from "react-router-dom";
import axios from "axios";
import { useQuery } from "react-query";
import { StandardEditDialog } from "./partials/standardEditDialog";

function Standard() {
  const [isStandardCreateDialogOpen, setIsStandardCreateDialogOpen] =
    useState(false);

  const [isStandardTableStatusDialogOpen, setIsStandardTableStatusDialogOpen] =
    useState(false);

  const [searchParams, setSearchParams] = useSearchParams();

  const { search } = useLocation();

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const getCorsoformativo = async ({ params }: any) => {
    return await axios.get("http://3.76.7.86:9980/corsoformativo", {
      params,
    });
  };

  const { data: corsformativo } = useQuery(
    ["corsoformativo-pagination", search],
    () =>
      getCorsoformativo({
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
        <h1 className="text-3xl font-semibold text-white">Standard</h1>
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
                  TIPOLOGIE
                </th>
                <th className="font-normal text-sm px-5 py-4 border border-slate-100">
                  CODICE
                </th>
                <th className="font-normal text-sm px-5 py-4 border border-slate-100">
                  DENOMINAZIONE
                </th>
                <th className="font-normal text-sm px-5 py-4 border border-slate-100">
                  Emissione
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
                  Durata
                </th>
                <th className="font-normal text-sm px-5 py-4 border border-slate-100">
                  Sicurezza
                </th>
                <th className="font-normal text-sm px-5 py-4 border border-slate-100">
                  Qualita
                </th>
                <th className="font-normal text-sm px-5 py-4 border border-slate-100">
                  Produzione
                </th>
                <th className="font-normal text-sm px-5 py-4 border border-slate-100">
                  Management
                </th>
                <th className="font-normal text-sm px-5 py-4 border border-slate-100"></th>
              </tr>
            </thead>
            <tbody>
              {/* eslint-disable-next-line @typescript-eslint/no-explicit-any */}
              {corsformativo?.data.data.map((item: any) => (
                <tr onClick={() => setIsStandardTableStatusDialogOpen(true)}>
                  <td className="border-start px-5 py-4 border text-[13px] border-slate-100">
                    {item.tipoFormazione}
                  </td>
                  <td className="border-start px-5 py-4 border text-[13px] border-slate-100">
                    {item.codiceUnivocoFormazione}
                  </td>
                  <td className="border-start px-5 py-4 border text-[13px] border-slate-100">
                    {item.denominazioneFormazione}
                  </td>
                  <td className="border-start px-5 py-4 border text-[13px] border-slate-100">
                    {new Intl.DateTimeFormat().format(new Date(item.emissione))}
                  </td>
                  <td className="border-start px-5 py-4 border text-[13px] border-slate-100">
                    {item.vision}
                  </td>
                  <td className="border-start px-5 py-4 border text-[13px] border-slate-100">
                    {item.coordinatore}
                  </td>
                  <td className="border-start px-5 py-4 border text-[13px] border-slate-100">
                    {item.validita}
                  </td>
                  <td className="border-start px-5 py-4 border text-[13px] border-slate-100">
                    {item.durata}
                  </td>
                  <td className="border-start px-5 py-4 border text-[13px] border-slate-100">
                    {item.sicurezza ? "Si" : "No"}
                  </td>
                  <td className="border-start px-5 py-4 border text-[13px] border-slate-100">
                    {item.qualita ? "Si" : "No"}
                  </td>
                  <td className="border-start px-5 py-4 border text-[13px] border-slate-100">
                    {item.produzione ? "Si" : "No"}
                  </td>
                  <td className="border-start px-5 py-4 border text-[13px] border-slate-100">
                    {item.management ? "Si" : "No"}
                  </td>

                  <td
                    className="border-start px-5 py-4 border text-[13px] border-slate-100 w-min"
                    align="right"
                  >
                    <button
                      className="btn p-0 text-warning btn-ghost btn-link decoration-transparent"
                      onClick={(e) => {
                        e.preventDefault();
                        e.stopPropagation();
                        searchParams.set("id", String(item.idCorsoFormativo));
                        setSearchParams(searchParams);
                      }}
                    >
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
          count={corsformativo?.data.paginazione.numeroTotaleElementi}
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
      <StandardCreateDialog
        isOpen={isStandardCreateDialogOpen}
        closeModal={() => setIsStandardCreateDialogOpen(false)}
      />
      <StandardEditDialog
        isOpen={!!searchParams.get("id")}
        closeModal={() => {
          searchParams.set("id", "");
          setSearchParams(searchParams);
        }}
      />
      <StandardTableStatusDialog
        isOpen={isStandardTableStatusDialogOpen}
        closeModal={() => setIsStandardTableStatusDialogOpen(false)}
      />
    </Fragment>
  );
}

export default Standard;
