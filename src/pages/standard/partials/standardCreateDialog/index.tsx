import { Controller, useFieldArray, useForm } from "react-hook-form";
import { DatePicker } from "../../../../components/datepicker";
import { Dialog } from "../../../../components/dialog";
import { IExtendedDialogProps } from "../../../../model";
import { useMutation, useQuery, useQueryClient } from "react-query";
import axios from "axios";

function StandardCreateDialog({ closeModal, isOpen }: IExtendedDialogProps) {
  const queryClient = useQueryClient();

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const postCorsoformativoMacchina = async ({ body, id, machineId }: any) => {
    return await axios.post(
      `http://3.76.7.86:9980/associazioni/corso/${id}/macchina/${machineId}`,
      body
    );
  };

  ///associazioni/corso/{idCorso}/macchina/{idMacchina}
  const { register, handleSubmit, control, getValues, reset } = useForm({
    defaultValues: {
      codiceUnivocoFormazione: "",
      coordinatore: "",
      denominazioneFormazione: "",
      durata: 0,
      emissione: "string",
      idCorsoFormativo: 0,
      managment: "false",
      mansione: "",
      produzione: "false",
      qualita: "false",
      sicurezza: "false",
      tipoFormazione: "",
      validita: 0,
      vision: 0,
      machine: [
        {
          idMacchina: "",
        },
      ],
    },
  });

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const postCorsoformativo = async ({ body }: any) => {
    return await axios.post("http://3.76.7.86:9980/corsoformativo", body);
  };

  const createCorsoformativo = useMutation(postCorsoformativo, {
    onSuccess: (res) => {
      if (res?.data) {
        const { idCorsoFormativo } = res.data.data;
        getValues("machine")
          .filter((item) => item.idMacchina !== "")
          .map(
            async (item) =>
              await postCorsoformativoMacchina({
                body: {
                  idCorso: idCorsoFormativo,
                  idMacchina: item.idMacchina,
                },
                id: idCorsoFormativo,
                machineId: item.idMacchina,
              })
          );
      }

      queryClient.invalidateQueries("corsoformativo-pagination");
      closeModal();
    },
  });

  const { fields, append, remove } = useFieldArray({
    control,
    name: "machine",
  });

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const getMacchina = async ({ params }: any) => {
    return await axios.get("http://3.76.7.86:9980/macchina", {
      params,
    });
  };

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

  return (
    <Dialog
      isOpen={isOpen}
      closeModal={() => {
        reset();
        closeModal();
      }}
    >
      <Dialog.Title
        as="h2"
        className="p-5 flex items-center w-full justify-between border-b border-b-black border-opacity-10 font-semibold"
      >
        <span>Nuova Standard</span>
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
          createCorsoformativo.mutate({
            body: {
              ...values,
            },
          })
        )}
      >
        <div className="flex gap-x-4 items-center">
          <div className="flex flex-col items-start gap-y-2 w-full">
            <label className="text-sm text-gray-800">TIPOLOGIE STD:</label>
            <select
              className="select select-bordered w-full bg-white"
              {...register("tipoFormazione", {
                required: true,
              })}
            >
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
          <div className="flex flex-col items-start gap-y-2 w-full">
            <label className="text-sm text-gray-800">
              DENOMINAZIONE STANDARD WORK:
            </label>
            <input
              className="input input-bordered w-full"
              {...register("denominazioneFormazione", {
                required: true,
              })}
            />
          </div>
        </div>
        <div className="flex gap-x-4 items-center">
          <div className="flex flex-col items-start gap-y-2 w-full">
            <label className="text-sm text-gray-800">Emissione:</label>
            <Controller
              control={control}
              name="emissione"
              render={({ field: { value, onChange } }) => (
                <DatePicker
                  value={value}
                  placeholder="Pick a date"
                  onChange={(val) =>
                    onChange(new Date(val?.toString() || "").toISOString())
                  }
                />
              )}
            />
          </div>
          <div className="flex flex-col items-start gap-y-2 w-full">
            <label className="text-sm text-gray-800">Coordinatore:</label>
            <select
              className="select select-bordered w-full bg-white"
              {...register("coordinatore", {
                required: true,
              })}
            >
              <option selected></option>
              <option value="Resp. Sicurezza">Resp. Sicurezza</option>
              <option value="Product & Process Coordinator">
                Product & Process Coordinator
              </option>
              <option value="Capo Turno">Capo Turno</option>
              <option value="Quality Manager">Quality Manager</option>
              <option value="Production Manager">Production Manager</option>
              <option value="General Manager">General Manager</option>
              <option value="Ufficio tecnico">Ufficio tecnico</option>
              <option value="Human Resource">Human Resource</option>
            </select>
          </div>
        </div>

        <div className="flex gap-x-4 items-center">
          <div className="flex flex-col items-start gap-y-2 w-full">
            <label className="text-sm text-gray-800">Durata</label>
            <input
              className="input input-bordered w-full"
              {...register("durata", {
                required: true,
              })}
            />
          </div>
          <div className="flex flex-col items-start gap-y-2 w-full">
            <label className="text-sm text-gray-800">Validata:</label>
            <select
              className="select select-bordered w-full bg-white"
              {...register("validita", {
                required: true,
              })}
            >
              <option selected></option>
              <option value="1">Annuale</option>
              <option value="2">Semestrale</option>
              <option value="3">Trimestrale</option>
              <option value="4">Bimestrale</option>
              <option value="5">Mensile</option>
              <option value="6">Settimanale</option>
            </select>
          </div>
        </div>
        <div className="flex gap-x-4 items-center">
          <div className="flex flex-col justify-start items-start gap-x-2 w-full">
            <label className="text-sm text-gray-800">Safety:</label>
            <div className="flex">
              <div className="form-control">
                <label className="label cursor-pointer flex items-center gap-x-1">
                  <input
                    type="radio"
                    className="radio checked:bg-blue-500"
                    value="true"
                    {...register("sicurezza")}
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
                    {...register("sicurezza")}
                  />
                  <span className="label-text">No</span>
                </label>
              </div>
            </div>
          </div>
          <div className="flex flex-col justify-start items-start gap-x-2 w-full">
            <label className="text-sm text-gray-800">Quality:</label>
            <div className="flex">
              <div className="form-control">
                <label className="label cursor-pointer flex items-center gap-x-1">
                  <input
                    type="radio"
                    className="radio checked:bg-blue-500"
                    value="true"
                    {...register("qualita")}
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
                    {...register("qualita")}
                  />
                  <span className="label-text">No</span>
                </label>
              </div>
            </div>
          </div>
          <div className="flex flex-col justify-start items-start gap-x-2 w-full">
            <label className="text-sm text-gray-800">Production:</label>
            <div className="flex">
              <div className="form-control">
                <label className="label cursor-pointer flex items-center gap-x-1">
                  <input
                    type="radio"
                    className="radio checked:bg-blue-500"
                    value="true"
                    {...register("produzione")}
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
                    {...register("produzione")}
                  />
                  <span className="label-text">No</span>
                </label>
              </div>
            </div>
          </div>
          <div className="flex flex-col items-start gap-y-2 w-full">
            <label className="text-sm text-gray-800">Management:</label>
            <div className="flex">
              <div className="form-control">
                <label className="label cursor-pointer flex items-center gap-x-1">
                  <input
                    type="radio"
                    className="radio checked:bg-blue-500"
                    value="true"
                    {...register("managment")}
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
                    {...register("managment")}
                  />
                  <span className="label-text">No</span>
                </label>
              </div>
            </div>
          </div>
        </div>
        <div className="flex gap-x-4 items-center">
          <div className="flex flex-col items-start gap-y-2 w-full">
            <label className="text-sm text-gray-800">Vision:</label>
            <input
              className="input input-bordered w-full"
              {...register("vision", {
                required: true,
              })}
            />
          </div>
        </div>
        <div className="flex flex-col gap-y-4">
          <label className="text-sm text-gray-800">Seleziona le macchine</label>
          {fields.map((_item, index) => (
            <div
              className="flex flex-col items-start gap-y-2 w-full"
              key={index}
            >
              <div className="flex items-end w-full gap-x-2">
                <Controller
                  control={control}
                  render={({ field }) => (
                    <div className="flex flex-col items-start gap-y-2 w-full">
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
                />
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
            className="btn btn-success w-fit text-white"
            onClick={() =>
              append({
                idMacchina: "",
              })
            }
          >
            Add Macchine
          </button>
        </div>
        <button className="btn btn-success btn-green-600 w-fit ms-auto">
          Salva
        </button>
      </Dialog.Panel>
    </Dialog>
  );
}

export { StandardCreateDialog };
