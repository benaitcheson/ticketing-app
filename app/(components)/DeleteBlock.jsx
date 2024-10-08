"use client";

import { faX } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useRouter } from "next/navigation";
import getBaseUrl from '../utils/getBaseUrl';

const DeleteBlock = ({ id }) => {
  const router = useRouter();

  const deleteTicket = async () => {
    const baseUrl = getBaseUrl();
    console.log(baseUrl, "delete");
    const res = await fetch(`${baseUrl}/api/Tickets/${id}`, {
      method: "DELETE",
    });
    if (res.ok) {
      router.refresh();
    }
  };

  return (
    <FontAwesomeIcon
      icon={faX}
      className=" text-red-400 hover:cursor-pointer hover:text-red-200"
      onClick={deleteTicket}
    />
  );
};

export default DeleteBlock;
