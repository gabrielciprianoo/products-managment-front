import { useFetcher } from "react-router-dom";
import { useState } from "react";
import ConfirmDialog from "./ConfirmDialog"; 

type Props = {
  id: number;
};

export default function DeleteProductButton({ id }: Props) {
  const [isOpen, setIsOpen] = useState(false);
  const fetcher = useFetcher();

  return (
    <>
      <button
        type="button"
        className="p-2 w-full bg-red-700 text-sm uppercase cursor-pointer text-white font-bold rounded-md hover:bg-red-800 transition-colors"
        onClick={() => setIsOpen(true)}
      >
        Delete
      </button>

      <ConfirmDialog
        isOpen={isOpen}
        title="Are you sure?"
        message="This action cannot be undone."
        onCancel={() => setIsOpen(false)}
        onConfirm={() => {
          setIsOpen(false);
          fetcher.submit(null, {
            method: "post",
            action: `/products/${id}/delete`,
          });
        }}
      />
    </>
  );
}
