import { useMutation, useQueryClient } from "react-query";
import { Dialog } from "../../../../components/dialog";
import { IExtendedDialogProps } from "../../../../model";
import axios from "axios";
import { useForm } from "react-hook-form";

function MachineCreateDialog({ closeModal, isOpen }: IExtendedDialogProps) {
  const queryClient = useQueryClient();

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const postMacchina = async ({ body }: any) => {
    return await axios.post("http://3.76.7.86:9980/macchina", body);
  };

  const createMachine = useMutation(postMacchina, {
    onSuccess: () => {
      queryClient.invalidateQueries("maccina-pagination");
      closeModal();
    },
  });

  const { register, handleSubmit } = useForm({
    defaultValues: {
      descrizioneMacchina: "",
      nomeMacchina: "",
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
          createMachine.mutate({
            body: {
              descrizioneMacchina: "",
              nomeMacchina: values.nomeMacchina,
            },
          })
        )}
      >
        <div className="flex gap-x-4 items-center">
          <div className="flex flex-col items-start gap-y-2 w-full">
            <label className="text-sm text-gray-800">Nome:</label>
            <input
              className="input input-bordered w-full"
              {...register("nomeMacchina", {
                required: true,
              })}
            />
          </div>
        </div>

        <button className="btn btn-success btn-green-500 w-fit ms-auto">
          Salva
        </button>
      </Dialog.Panel>
    </Dialog>
  );
}

export { MachineCreateDialog };
