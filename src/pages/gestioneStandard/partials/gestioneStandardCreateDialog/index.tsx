import { Controller, useFieldArray, useForm } from "react-hook-form";
import { Dialog } from "../../../../components/dialog";
import { IExtendedDialogProps } from "../../../../model";

function GestioneStandardCreateDialog({
  closeModal,
  isOpen,
}: IExtendedDialogProps) {
  const { control } = useForm({
    defaultValues: {
      machine: [
        {
          value: "",
          ip: "",
        },
      ],
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
      >
        <div className="flex gap-x-4 items-center">
          <div className="flex flex-col items-start gap-y-2 w-full">
            <label className="text-sm text-gray-800">Cognome:</label>
            <input className="input input-bordered w-full" />
          </div>
          <div className="flex flex-col items-start gap-y-2 w-full">
            <label className="text-sm text-gray-800">Nome:</label>
            <input className="input input-bordered w-full" />
          </div>
        </div>

        <div className="flex gap-x-4 items-center">
          <div className="flex flex-col items-start gap-y-2 w-full">
            <label className="text-sm text-gray-800">Reparto:</label>
            <input className="input input-bordered w-full" />
          </div>
          <div className="flex flex-col justify-start items-start gap-x-2 w-full">
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
          </div>
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
                    </div>
                  )}
                  name={`machine.${index}.value`}
                  control={control}
                />
                <div className="flex flex-col items-start gap-y-2 w-1/3">
                  <label className="text-sm text-gray-800">IP:</label>
                  <input className="input input-bordered w-full" />
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
                value: "",
                ip: "",
              })
            }
          >
            Add
          </button>
        </div>
        <button className="btn btn-success btn-green-500 w-fit ms-auto">
          Salva
        </button>
      </Dialog.Panel>
    </Dialog>
  );
}

export { GestioneStandardCreateDialog };
