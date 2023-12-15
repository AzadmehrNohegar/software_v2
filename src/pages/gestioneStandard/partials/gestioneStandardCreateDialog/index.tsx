import { Controller, useFieldArray, useForm } from "react-hook-form";
import { Dialog } from "../../../../components/dialog";
import { IExtendedDialogProps } from "../../../../model";
import axios from "axios";
import { useMutation, useQuery, useQueryClient } from "react-query";

function GestioneStandardCreateDialog({
  closeModal,
  isOpen,
}: IExtendedDialogProps) {
  const queryClient = useQueryClient();

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const postAnagrafica = async ({ body }: any) => {
    return await axios.post("http://3.76.7.86:9980/anagrafica", body);
  };

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const postAnagraficaMacchina = async ({ body, id, machineId }: any) => {
    return await axios.post(
      `http://3.76.7.86:9980/associazioni/anagrafica/${id}/macchina/${machineId}`,
      body
    );
  };

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const getMacchina = async ({ params }: any) => {
    return await axios.get("http://3.76.7.86:9980/macchina", {
      params,
    });
  };

  const { register, handleSubmit, control, getValues } = useForm({
    defaultValues: {
      cittaResidenza: "",
      codiceFiscale: "",
      cognome: "",
      contratto: "",
      dataFineContratto: "2023-11-03",
      dataNascita: "2023-11-03",
      indirizzoResidenza: "",
      livelloContrattuale: "",
      mansione: "",
      nome: "",
      numeroTelefono: "",
      machine: [
        {
          idMacchina: "",
        },
      ],
    },
  });

  const { data: macchina } = useQuery(
    "maccina-pagination",
    () =>
      getMacchina({
        params: {
          p: 0,
          n: 100,
        },
      }),
    {
      keepPreviousData: true,
    }
  );

  const createAnagrafica = useMutation(postAnagrafica, {
    onSuccess: async (res) => {
      if (res?.data) {
        const { idAnagrafica } = res.data.data;
        getValues("machine").map(
          async (item) =>
            await postAnagraficaMacchina({
              body: {
                idAnagrafica,
                idMacchina: item.idMacchina,
              },
              id: idAnagrafica,
              machineId: item.idMacchina,
            })
        );
      }

      queryClient.invalidateQueries("anagrafica-pagination");
      closeModal();
    },
  });

  const { fields, append, remove } = useFieldArray({
    control,
    name: "machine",
  });

  return (
    <Dialog isOpen={isOpen} closeModal={closeModal}>
      <Dialog.Title
        as="h2"
        className="p-5 flex items-center w-full justify-between border-b border-b-black border-opacity-10 font-semibold"
      >
        <span>Nuova Risorsa</span>
        <button
          className="btn btn-ghost btn-link decoration-transparent"
          onClick={closeModal}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
          >
            <rect
              opacity="0.5"
              x="6"
              y="17.3137"
              width="16"
              height="2"
              rx="1"
              transform="rotate(-45 6 17.3137)"
              fill="black"
            ></rect>
            <rect
              x="7.41422"
              y="6"
              width="16"
              height="2"
              rx="1"
              transform="rotate(45 7.41422 6)"
              fill="black"
            ></rect>
          </svg>
        </button>
      </Dialog.Title>
      <Dialog.Panel
        as="form"
        className="p-2 sm:px-16 sm:py-8 flex flex-col gap-y-4"
        onSubmit={handleSubmit((values) =>
          createAnagrafica.mutate({
            body: {
              ...values,
            },
          })
        )}
      >
        <div className="flex gap-x-4 items-center">
          {/* <div className="flex flex-col items-start gap-y-2 w-full">
            <label className="text-sm text-gray-800">Cognome:</label>
            <input
              className="input input-bordered w-full"
              {...register("cognome", {
                required: true,
              })}
            />
          </div> */}
          <div className="flex flex-col items-start gap-y-2 w-full">
            <label className="text-sm text-gray-800">Nome Autocomplete:</label>
            {/* <input
              className="input input-bordered w-full"
              {...register("nome", {
                required: true,
              })}
            /> */}
            <select
              className="select select-bordered w-full bg-white"
              {...register("nome", {
                required: true,
              })}
            >
              <option></option>
              PSA NIS PS MG NI WI
              <option value="PSA">Ricardo</option>
              <option value="NIS">Stefano</option>
              <option value="PS">Francessca</option>
              <option value="MG">Amigo</option>
              {/* <option value="NI">NI</option> */}
              {/* <option value="WI">WI</option> */}
            </select>
          </div>
        </div>
        <div className="flex gap-x-4 items-center">
          <div className="flex flex-col items-start gap-y-2 w-full">
            <label className="text-sm text-gray-800">Reparto:</label>
            <select className="select select-bordered w-full bg-white">
              <option></option>
              PSA NIS PS MG NI WI
              <option value="PSA">PSA</option>
              <option value="NIS">NIS</option>
              <option value="PS">PS </option>
              <option value="MG">MG</option>
              <option value="NI">NI</option>
              <option value="WI">WI</option>
            </select>
          </div>
          <div className="flex flex-col justify-start items-start gap-x-2 w-full">
            <label className="text-sm text-gray-800">Check:</label>
            <div className="flex">
              <div className="form-control">
                <label className="label cursor-pointer flex items-center gap-x-1">
                  <input
                    type="radio"
                    className="radio checked:bg-blue-500"
                    value="true"
                  />
                  <span className="label-text">Yes</span>
                </label>
              </div>
              <div className="form-control">
                <label className="label cursor-pointer flex items-center gap-x-1">
                  <input
                    type="radio"
                    className="radio checked:bg-blue-500"
                    value="false"
                  />
                  <span className="label-text">No</span>
                </label>
              </div>
            </div>
          </div>
        </div>
        <div className="flex gap-x-4 items-center">
          <div className="flex flex-col justify-start items-start gap-x-2 w-full">
            <label className="text-sm text-gray-800">Internale:</label>
            <div className="flex">
              <div className="form-control">
                <label className="label cursor-pointer flex items-center gap-x-1">
                  <input
                    type="radio"
                    className="radio checked:bg-blue-500"
                    value="true"
                  />
                  <span className="label-text">Yes</span>
                </label>
              </div>
              <div className="form-control">
                <label className="label cursor-pointer flex items-center gap-x-1">
                  <input
                    type="radio"
                    className="radio checked:bg-blue-500"
                    value="false"
                  />
                  <span className="label-text">No</span>
                </label>
              </div>
            </div>
          </div>
        </div>
        <div className="flex gap-x-4 items-center">
          {/* <div className="flex flex-col items-start gap-y-2 w-full">
            <label className="text-sm text-gray-800">Citta:</label>
            <input
              className="input input-bordered w-full"
              {...register("cittaResidenza", {
                required: true,
              })}
            />
          </div> */}
          {/* <div className="flex flex-col justify-start items-start gap-x-2 w-full">
            <label className="text-sm text-gray-800">Safety:</label>
            <div className="flex">
              <div className="form-control">
                <label className="label cursor-pointer flex items-center gap-x-1">
                  <input
                    type="radio"
                    name="radio-10"
                    className="radio checked:bg-blue-500"
                    checked
                  />
                  <span className="label-text">Yes</span>
                </label>
              </div>
              <div className="form-control">
                <label className="label cursor-pointer flex items-center gap-x-1">
                  <input
                    type="radio"
                    name="radio-10"
                    className="radio checked:bg-blue-500"
                    checked
                  />
                  <span className="label-text">No</span>
                </label>
              </div>
            </div>
          </div> */}
        </div>

        <div className="flex flex-col gap-y-4">
          {fields.map((_item, index) => (
            <div
              className="flex flex-col items-start gap-y-2 w-full"
              key={index}
            >
              <div className="flex items-end w-full gap-x-2">
                <Controller
                  render={({ field }) => (
                    <div className="flex flex-col items-start gap-y-2 w-full">
                      <label className="text-sm text-gray-800">Machine</label>

                      <select
                        id={`${index}.inventory`}
                        className="select select-bordered w-full bg-white"
                        {...field}
                      >
                        <option></option>
                        {/* eslint-disable-next-line @typescript-eslint/no-explicit-any */}
                        {macchina?.data.data.map((item: any) => (
                          <option value={item.idMacchina}>
                            {item.nomeMacchina}
                          </option>
                        ))}
                      </select>
                    </div>
                  )}
                  name={`machine.${index}.idMacchina`}
                  control={control}
                />
                <div className="flex flex-col items-start gap-y-2 w-1/2">
                  <label className="text-sm text-gray-800">Level:</label>
                  <select className="select select-bordered w-full bg-white">
                    <option></option>
                    PSA NIS PS MG NI WI
                    <option value="PSA">PSA</option>
                    <option value="NIS">NIS</option>
                    <option value="PS">PS </option>
                    <option value="MG">MG</option>
                    <option value="NI">NI</option>
                    <option value="WI">WI</option>
                  </select>
                </div>
                <button
                  type="button"
                  className="btn btn-ghost bg-red-100 text-red-500 p-1 rounded-md btn-square"
                  onClick={() => remove(index)}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                  >
                    <rect
                      opacity="0.5"
                      x="6"
                      y="17.3137"
                      width="16"
                      height="2"
                      rx="1"
                      transform="rotate(-45 6 17.3137)"
                      fill="#F1416C"
                    ></rect>
                    <rect
                      x="7.41422"
                      y="6"
                      width="16"
                      height="2"
                      rx="1"
                      transform="rotate(45 7.41422 6)"
                      fill="#F1416C"
                    ></rect>
                  </svg>
                </button>
              </div>
            </div>
          ))}
          <button
            type="button"
            className="btn btn-ghost bg-blue-500 w-fit text-white"
            onClick={() =>
              append({
                idMacchina: "",
              })
            }
          >
            Add
          </button>
        </div>
        <button className="btn btn-success btn-green-600 w-fit ms-auto">
          Salva
        </button>
      </Dialog.Panel>
    </Dialog>
  );
}

export { GestioneStandardCreateDialog };
