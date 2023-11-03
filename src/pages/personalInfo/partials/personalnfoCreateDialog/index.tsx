import { DatePicker } from "../../../../components/datepicker";
import { Dialog } from "../../../../components/dialog";
import { IExtendedDialogProps } from "../../../../model";

function PersonalInfoCreateDialog({
  closeModal,
  isOpen,
}: IExtendedDialogProps) {
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
            <label className="text-sm text-gray-800">Nome:</label>
            <input className="input input-bordered w-full" />
          </div>
          <div className="flex flex-col items-start gap-y-2 w-full">
            <label className="text-sm text-gray-800">Cognome:</label>
            <input className="input input-bordered w-full" />
          </div>
        </div>
        <div className="flex gap-x-4 items-center">
          <div className="flex flex-col items-start gap-y-2 w-full">
            <label className="text-sm text-gray-800">Codice Fiscale:</label>
            <input className="input input-bordered w-full" />
          </div>
          <div className="flex flex-col items-start gap-y-2 w-full">
            <label className="text-sm text-gray-800">Email:</label>
            <input className="input input-bordered w-full" />
          </div>
        </div>
        <div className="flex gap-x-4 items-center">
          <div className="flex flex-col items-start gap-y-2 w-full">
            <label className="text-sm text-gray-800">Mansione:</label>
            <select className="select select-bordered w-full bg-white">
              <option></option>
              <option value="manager">Manager</option>
              <option value="Senior Manager">Senior Manager</option>
              <option value="Director">Director</option>
            </select>
          </div>
          <div className="flex flex-col items-start gap-y-2 w-full">
            <label className="text-sm text-gray-800">Tipo di contratto:</label>
            <select className="select select-bordered w-full bg-white">
              <option></option>
              <option value="tempo">Tempo Determinato</option>
              <option value="manager">Manager</option>
              <option value="Senior Manager">Senior Manager</option>
              <option value="Director">Director</option>
            </select>
          </div>
        </div>

        <div className="flex gap-x-4 items-center">
          <div className="flex flex-col items-start gap-y-2 w-full">
            <label className="text-sm text-gray-800">
              Livello Contrattuale:
            </label>
            <select className="select select-bordered w-full bg-white">
              <option></option>
              <option value="tempo">Tempo Determinato</option>
              <option value="manager">Manager</option>
              <option value="Senior Manager">Senior Manager</option>
              <option value="Director">Director</option>
            </select>
          </div>
          <div className="flex flex-col items-start gap-y-2 w-full">
            <label className="text-sm text-gray-800">
              Data fine contratto:
            </label>
            <DatePicker placeholder="Pick a date" />
          </div>
        </div>
        <div className="flex gap-x-4 items-center">
          <div className="flex flex-col items-start gap-y-2 w-full">
            <label className="text-sm text-gray-800">Numero Telefono:</label>
            <input type="number" className="input input-bordered w-full" />
          </div>
          <div className="flex flex-col items-start gap-y-2 w-full">
            <label className="text-sm text-gray-800">Data Nascità:</label>
            <DatePicker placeholder="Pick a date" />
          </div>
        </div>
        <div className="flex gap-x-4 items-center">
          <div className="flex flex-col items-start gap-y-2 w-1/3">
            <label className="text-sm text-gray-800">Citta Residenza:</label>
            <input className="input input-bordered w-full" />
          </div>
          <div className="flex flex-col items-start gap-y-2 w-full">
            <label className="text-sm text-gray-800">
              Indirizzo Residenza:
            </label>
            <input className="input input-bordered w-full" />
          </div>
        </div>
        <button className="btn btn-success btn-green-500 w-fit ms-auto">
          Salva
        </button>
      </Dialog.Panel>
    </Dialog>
  );
}

export default PersonalInfoCreateDialog;
