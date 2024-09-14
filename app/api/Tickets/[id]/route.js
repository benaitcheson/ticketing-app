import Ticket from "../../(models)/Ticket";
import { nextResponse } from "next/server";

export async function DELETE(req, { params }) {
  try {
    const { id } = params;

    await Ticket.findByIdAndDelete(id);

    return nextResponse.json({ message: "Ticket Deleted" }, { status: 200 });
  } catch (error) {
    return nextResponse.json({ message: error.message }, { status: 500 });
  }
}
