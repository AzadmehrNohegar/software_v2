import { Controller, useForm } from "react-hook-form";
import { DatePicker } from "../../../../components/datepicker";
import { Dialog } from "../../../../components/dialog";
import { IExtendedDialogProps } from "../../../../model";
import { useMutation, useQuery, useQueryClient } from "react-query";
import axios from "axios";
import { useSearchParams } from "react-router-dom";

function StandardEditDialog({ closeModal, isOpen }: IExtendedDialogProps) {
  const queryClient = useQueryClient();
  const [searchParams] = useSearchParams();

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const putCorsoformativo = async ({ body }: any) => {
    return await axios.put(`http://3.76.7.86:9980/corsoformativo/`, body);
  };

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const getCorsoformativoById = async ({ id }: any) => {
    return await axios.get(`http://3.76.7.86:9980/corsoformativo/${id}`);
  };

  const { data: corsoformativoById } = useQuery(
    `corsoformativo-${searchParams.get("id")}`,
    () => getCorsoformativoById({ id: searchParams.get("id") }),
    {
      enabled: !!searchParams.get("id"),
    }
  );

  const { register, handleSubmit, setValue, control } = useForm({
    defaultValues: {
      codiceUnivocoFormazione: "",
      coordinatore: "",
      denominazioneFormazione: "",
      durata: 0,
      emissione: "string",
      idCorsoFormativo: 0,
      managment: 0,
      mansione: "",
      produzione: "false",
      qualita: "false",
      sicurezza: "false",
      tipoFormazione: "",
      validita: 0,
      vision: 0,
    },
    values: {
      codiceUnivocoFormazione:
        corsoformativoById?.data.data.codiceUnivocoFormazione || "",
      coordinatore: corsoformativoById?.data.data.coordinatore || "",
      denominazioneFormazione:
        corsoformativoById?.data.data.denominazioneFormazione || "",
      durata: corsoformativoById?.data.data.durata || "",
      emissione: corsoformativoById?.data.data.emissione || "",
      idCorsoFormativo: corsoformativoById?.data.data.idCorsoFormativo || "",
      managment: corsoformativoById?.data.data.managment || "",
      mansione: corsoformativoById?.data.data.mansione || "",
      produzione: String(corsoformativoById?.data.data.produzione) || "",
      qualita: String(corsoformativoById?.data.data.qualita) || "",
      sicurezza: String(corsoformativoById?.data.data.sicurezza) || "",
      tipoFormazione: corsoformativoById?.data.data.tipoFormazione || "",
      validita: corsoformativoById?.data.data.validita || "",
      vision: corsoformativoById?.data.data.vision || "",
    },
  });

  const editCorsoformativo = useMutation(putCorsoformativo, {
    onSuccess: () => {
      queryClient.invalidateQueries("corsoformativo-pagination");
      closeModal();
    },
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
          editCorsoformativo.mutate({
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
              <option value="all">
                ASR RISCHIO ALTO - MODULO 3 - Anzio - aggiornamento
              </option>
              <option value="Manager">
                CARRELLI ELEVATORI - Modulo pratico (secondo ASR) - Anzio -
                aggiornamento
              </option>
              <option value="Senior Manager">
                PROVA ANNUALE EVACUAZIONE - Anzio - aggiornamento
              </option>
              <option value="Director">
                ASR RISCHIO BASSO - MODULO 1 - Anzio - aggiornamento
              </option>
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
              render={({ field: { value } }) => (
                <DatePicker
                  value={new Date(value)}
                  placeholder="Pick a date"
                  onChange={(val) =>
                    setValue(
                      "emissione",
                      new Date(val?.toString() || "").toISOString()
                    )
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
              <option value="all">
                ASR RISCHIO ALTO - MODULO 3 - Anzio - aggiornamento
              </option>
              <option value="Manager">
                CARRELLI ELEVATORI - Modulo pratico (secondo ASR) - Anzio -
                aggiornamento
              </option>
              <option value="Senior Manager">
                PROVA ANNUALE EVACUAZIONE - Anzio - aggiornamento
              </option>
              <option value="Director">
                ASR RISCHIO BASSO - MODULO 1 - Anzio - aggiornamento
              </option>
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
        </div>
        <div className="flex gap-x-4 items-center">
          <div className="flex flex-col items-start gap-y-2 w-full">
            <label className="text-sm text-gray-800">Management:</label>
            <input
              className="input input-bordered w-full"
              {...register("managment", {
                required: true,
              })}
            />
          </div>
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
        {/* <div className="flex flex-col gap-y-4">
          {fields.map((_item, index) => (
            <div
              className="flex flex-col items-start gap-y-2 w-full"
              key={index}
            >
              <label className="text-sm text-gray-800">Machine</label>
              <div className="flex items-center w-full gap-x-2">
                <Controller
                  render={({ field }) => (
                    <select
                      id={`${index}.inventory`}
                      className="select select-bordered w-full bg-white"
                      {...field}
                    >
                      <option></option>
                      <option value="all">
                        ASR RISCHIO ALTO - MODULO 3 - Anzio - aggiornamento
                      </option>
                      <option value="Manager">
                        CARRELLI ELEVATORI - Modulo pratico (secondo ASR) -
                        Anzio - aggiornamento
                      </option>
                      <option value="Senior Manager">
                        PROVA ANNUALE EVACUAZIONE - Anzio - aggiornamento
                      </option>
                      <option value="Director">
                        ASR RISCHIO BASSO - MODULO 1 - Anzio - aggiornamento
                      </option>
                    </select>
                  )}
                  name={`machine.${index}.value`}
                  control={control}
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
            className="btn btn-ghost bg-blue-500 w-fit text-white"
            onClick={() =>
              append({
                value: "",
              })
            }
          >
            Add
          </button>
        </div> */}
        <button className="btn btn-success btn-green-500 w-fit ms-auto">
          Salva
        </button>
      </Dialog.Panel>
    </Dialog>
  );
}

export { StandardEditDialog };
