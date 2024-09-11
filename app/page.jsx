import TicketCard from "./(components)/TicketCard";

const getTickets = async () => {
  try {
    const response = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/api/Tickets`);
    if (!response.ok) {
      throw new Error("Failed to fetch tickets");
    }
    const data = await response.json();
    return { tickets: data.tickets };
  } catch (error) {
    console.error("Error fetching tickets:", error);
    return { tickets: [] };
  }
};

const Dashboard = async () => {
  const { tickets } = await getTickets();

  if (!tickets) {
    return <div>Error loading tickets</div>;
  }

  const uniqueCategories = [
    ...new Set(tickets?.map(({ category }) => category)),
  ];

  return (
    <div className="p-5">
      <div>
        {uniqueCategories.map((uniqueCategory, categoryIndex) => (
          <div key={categoryIndex} className="mb-4">
            <h2>{uniqueCategory}</h2>
            <div className="lg:grid grid-cols-2 xl:grid-cols-4"></div>

            {tickets
              .filter((ticket) => ticket.category === uniqueCategory)
              .map((filteredTicket, _index) => (
                <TicketCard id={_index} key={_index} ticket={filteredTicket} />
              ))}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Dashboard;
