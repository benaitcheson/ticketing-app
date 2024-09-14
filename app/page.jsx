import TicketCard from "./(components)/TicketCard";

const getTickets = async () => {
  const baseUrl = process.env.NODE_ENV === 'development'
    ? process.env.LOCAL_API_BASE_URL
    : process.env.PROD_API_BASE_URL;

  try {
    const response = await fetch(`${baseUrl}/api/Tickets`);

    if (!response.ok) {
      throw new Error("Failed to fetch tickets");
    }

    return response.json();
  } catch (error) {
    console.log("Error loading topics: ", error);
  }
};

const Dashboard = async () => {
  const data = await getTickets();

  if (!data?.tickets) {
    return <p>No tickets.</p>;
  }

  const tickets = data.tickets;

  const uniqueCategories = [
    ...new Set(tickets?.map(({ category }) => category)),
  ];

  return (
    <div className="p-5">
      <div>
        {tickets &&
          uniqueCategories?.map((uniqueCategory, categoryIndex) => (
            <div key={categoryIndex} className="mb-4">
              <h2>{uniqueCategory}</h2>
              <div className="lg:grid grid-cols-2 xl:grid-cols-4 ">
                {tickets
                  .filter((ticket) => ticket.category === uniqueCategory)
                  .map((filteredTicket, _index) => (
                    <TicketCard
                      id={_index}
                      key={_index}
                      ticket={filteredTicket}
                    />
                  ))}
              </div>
            </div>
          ))}
      </div>
    </div>
  );
};

export default Dashboard;
