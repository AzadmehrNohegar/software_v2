import { useForm } from "react-hook-form";
import { DatePicker } from "../../../../components/datepicker";
import { Dialog } from "../../../../components/dialog";
import { IExtendedDialogProps } from "../../../../model";
import { useMutation, useQueryClient } from "react-query";
import axios from "axios";

function PersonalInfoCreateDialog({
  closeModal,
  isOpen,
}: IExtendedDialogProps) {
  const queryClient = useQueryClient();

  const { register, setValue, handleSubmit } = useForm({
    defaultValues: {
      cittaResidenza: "",
      codiceFiscale: "",
      cognome: "",
      contratto: "",
      dataFineContratto: "2023-11-23",
      dataNascita: "2023-11-23",
      indirizzoResidenza: "",
      livelloContrattuale: "",
      mansione: "",
      nome: "",
      numeroTelefono: "",
    },
  });

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const postAnagrafica = async ({ body }: any) => {
    return await axios.post("http://3.76.7.86:9980/anagrafica", body);
  };

  const createAnagrafica = useMutation(postAnagrafica, {
    onSuccess: () => {
      queryClient.invalidateQueries();
      closeModal();
    },
  });

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const onSubmit = (values: any) =>
    createAnagrafica.mutate({
      body: {
        ...values,
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
        onSubmit={handleSubmit(onSubmit)}
      >
        <div className="flex gap-x-4 items-center">
          <div className="flex flex-col items-start gap-y-2 w-full">
            <label className="text-sm text-gray-800">Nome:</label>
            <input
              className="input input-bordered w-full"
              {...register("nome")}
            />
          </div>
          <div className="flex flex-col items-start gap-y-2 w-full">
            <label className="text-sm text-gray-800">Cognome:</label>
            <input
              className="input input-bordered w-full"
              {...register("cognome")}
            />
          </div>
        </div>
        <div className="flex gap-x-4 items-center">
          <div className="flex flex-col items-start gap-y-2 w-full">
            <label className="text-sm text-gray-800">Codice Fiscale:</label>
            <input
              className="input input-bordered w-full"
              {...register("codiceFiscale")}
            />
          </div>
          {/* <div className="flex flex-col items-start gap-y-2 w-full">
            <label className="text-sm text-gray-800">Email:</label>
            <input className="input input-bordered w-full" {...register("")} />
          </div> */}
        </div>
        <div className="flex gap-x-4 items-center">
          <div className="flex flex-col items-start gap-y-2 w-full">
            <label className="text-sm text-gray-800">Mansione:</label>
            <select
              className="select select-bordered w-full bg-white"
              {...register("mansione")}
            >
              <option></option>
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
          <div className="flex flex-col items-start gap-y-2 w-full">
            <label className="text-sm text-gray-800">Tipo di contratto:</label>
            <select
              className="select select-bordered w-full bg-white"
              {...register("contratto")}
            >
              <option></option>
              <option value="Determinato">Determinato</option>
              <option value="Interinale">Interinale</option>
              <option value="Somministrazione">Somministrazione</option>
            </select>
          </div>
        </div>

        <div className="flex gap-x-4 items-center">
          <div className="flex flex-col items-start gap-y-2 w-full">
            <label className="text-sm text-gray-800">
              Livello Contrattuale:
            </label>
            <select
              className="select select-bordered w-full bg-white"
              {...register("livelloContrattuale")}
            >
              <option></option>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="A">A</option>
              <option value="B">B</option>
              <option value="IP">IP</option>
            </select>
          </div>
          <div className="flex flex-col items-start gap-y-2 w-full">
            <label className="text-sm text-gray-800">
              Data fine contratto:
            </label>
            <DatePicker
              placeholder="Pick a date"
              onChange={(val) => {
                const date = new Date(val?.toString() || "");
                setValue(
                  "dataFineContratto",
                  `${date.getUTCFullYear()}-${date.getUTCMonth()}-${date.getUTCDate()}`
                );
              }}
            />
          </div>
        </div>
        <div className="flex gap-x-4 items-center">
          <div className="flex flex-col items-start gap-y-2 w-full">
            <label className="text-sm text-gray-800">Numero Telefono:</label>
            <input
              type="number"
              className="input input-bordered w-full"
              {...register("numeroTelefono")}
            />
          </div>
          <div className="flex flex-col items-start gap-y-2 w-full">
            <label className="text-sm text-gray-800">Data Nascità:</label>
            <DatePicker
              placeholder="Pick a date"
              onChange={(val) => {
                const date = new Date(val?.toString() || "");
                setValue(
                  "dataNascita",
                  `${date.getUTCFullYear()}-${date.getUTCMonth()}-${date.getUTCDate()}`
                );
              }}
            />
          </div>
        </div>
        <div className="flex gap-x-4 items-center">
          <div className="flex flex-col items-start gap-y-2 w-1/3">
            <label className="text-sm text-gray-800">Citta Residenza:</label>
            <input
              className="input input-bordered w-full"
              {...register("cittaResidenza")}
            />
          </div>
          <div className="flex flex-col items-start gap-y-2 w-full">
            <label className="text-sm text-gray-800">
              Indirizzo Residenza:
            </label>
            <input
              className="input input-bordered w-full"
              {...register("indirizzoResidenza")}
            />
          </div>
        </div>
        <button className="btn btn-success btn-green-600 w-fit ms-auto">
          Salva
        </button>
      </Dialog.Panel>
    </Dialog>
  );
}

export default PersonalInfoCreateDialog;
