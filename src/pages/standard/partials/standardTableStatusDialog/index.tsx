import { Dialog } from "../../../../components/dialog";
import { IExtendedDialogProps } from "../../../../model";

function StandardTableStatusDialog({
  closeModal,
  isOpen,
}: IExtendedDialogProps) {
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
          <input
            placeholder="test"
            className="input input-bordered border-dashed w-full"
          />
          <input
            placeholder="test"
            className="input input-bordered border-dashed w-full"
          />
        </div>
        <div className="flex items-center gap-x-2">
          <input
            placeholder="test"
            className="input input-bordered border-dashed w-full"
          />
          <input
            placeholder="test"
            className="input input-bordered border-dashed w-full"
          />
        </div>
      </Dialog.Panel>
    </Dialog>
  );
}

export { StandardTableStatusDialog };
