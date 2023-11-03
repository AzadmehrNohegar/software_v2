import axios from "axios";
import { Dialog } from "../../../../components/dialog";
import { IExtendedDialogProps } from "../../../../model";
import { useQuery } from "react-query";
import { useSearchParams } from "react-router-dom";

function GestioneStandardTableStatusDialog({
  closeModal,
  isOpen,
}: IExtendedDialogProps) {
  const [searchParams] = useSearchParams();

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const getAnagrafica = async ({ params }: any) => {
    return await axios.get(
      `http://54.93.150.247:9980/associazioni/anagrafica/${searchParams.get(
        "machine"
      )}/macchina`,
      {
        params,
      }
    );
  };

  const { data: anagraficaMachine } = useQuery(
    `anagrafica-${searchParams.get("machine")}-machine`,
    () =>
      getAnagrafica({
        params: {
          p: 1,
          n: 100,
        },
      }),
    {
      enabled: !!searchParams.get("machine"),
    }
  );

  return (
    <Dialog isOpen={isOpen} closeModal={closeModal}>
      <Dialog.Title
        as="h2"
        className="p-5 flex items-center w-full justify-between border-b border-b-black border-opacity-10 font-semibold"
      >
        <span>Machine | ...</span>
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
        <div className="flex items-center gap-x-2">
          <span className="inline-block w-full">Machine:</span>
          <span className="inline-block w-1/3">IP:</span>
        </div>
        {/* eslint-disable-next-line @typescript-eslint/no-explicit-any */}
        {anagraficaMachine?.data.data.map((item: any) => (
          <div className="flex items-center gap-x-2">
            <input
              placeholder={item.nomeMacchina}
              className="input input-bordered border-dashed w-full"
            />
            <input
              placeholder={item.descrizioneMacchina}
              className="input input-bordered border-dashed w-1/3"
            />
          </div>
        ))}
      </Dialog.Panel>
    </Dialog>
  );
}

export { GestioneStandardTableStatusDialog };
