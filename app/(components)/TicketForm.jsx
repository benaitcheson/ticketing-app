"use client";

import { useRouter } from "next/navigation";
import React, { useState } from "react";

const TicketForm = ({ ticket }) => {
  const EDITMODE = ticket._id === "new" ? false : true;
  const router = useRouter();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => {
      return {
        ...prevState,
        [name]: value,
      };
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (EDITMODE) {
      const res = await fetch(`/api/Tickets/${ticket._id}`, {
        method: "PUT",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify({ formData }),
      });
      if (!res.ok) {
        throw new Error("Failed to update ticket");
      }
    } else {
      const res = await fetch("/api/Tickets", {
        method: "POST",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify({ formData }),
      });
      if (!res.ok) {
        throw new Error("Failed to create ticket");
      }
    }

    router.refresh();
    router.push("/");
  };

  const startingTicketData = {
    title: "",
    description: "",
    priority: 1,
    progress: 0,
    status: "open",
    category: "bug",
  };

  if (EDITMODE) {
    startingTicketData.title = ticket.title;
    startingTicketData.description = ticket.description;
    startingTicketData.priority = ticket.priority;
    startingTicketData.progress = ticket.progress;
    startingTicketData.status = ticket.status;
    startingTicketData.category = ticket.category;
  }

  const [formData, setFormData] = useState(startingTicketData);

  const priorities = [
    { value: 1, label: "High" },
    { value: 2, label: "Medium-High" },
    { value: 3, label: "Medium" },
    { value: 4, label: "Low" },
  ];
  return (
    <div className="flex justify-center">
      <form
        className="flex flex-col gap-3 w-1/2"
        method="post"
        onSubmit={handleSubmit}
      >
        <h3>{EDITMODE ? "Update your ticket" : "Create a new ticket"}</h3>
        <label htmlFor="title">Title: </label>
        <input
          id="title"
          name="title"
          type="text"
          onChange={handleChange}
          required={true}
          value={formData.title}
        />

        <label htmlFor="description">Description: </label>
        <textarea
          id="description"
          name="description"
          type="text"
          onChange={handleChange}
          required={true}
          value={formData.description}
          rows={4}
        />

        <label htmlFor="category">Category: </label>
        <select
          name="category"
          onChange={handleChange}
          value={formData.description}
        >
          <option value="bug">Bug</option>
          <option value="feature">Feature</option>
          <option value="chore">Other</option>
        </select>

        <label htmlFor="priority">Priority: </label>
        <div>
          {priorities.map((priority) => (
            <div key={priority.value}>
              <input
                id={`priority-${priority.value}`}
                name="priority"
                type="radio"
                onChange={handleChange}
                required={true}
                value={priority.value}
                checked={formData.priority == priority.value}
              />
              <label htmlFor={`priority-${priority.value}`}>
                {priority.label}
              </label>
            </div>
          ))}
        </div>

        <label htmlFor="progress">Progress: </label>
        <input
          id="progress"
          name="progress"
          type="range"
          onChange={handleChange}
          value={formData.progress}
          min={0}
          max={100}
        />

        <label htmlFor="status">Status: </label>
        <select name="status" onChange={handleChange} value={formData.status}>
          <option value="open">Open</option>
          <option value="in-progress">In Progress</option>
          <option value="resolved">Resolved</option>
          <option value="in-review">Code Review</option>
          <option value="requires-further-information">
            Requires Further Information
          </option>
          <option value="closed">Closed</option>
        </select>

        <input
          type="submit"
          className="btn"
          value={EDITMODE ? "Update ticket" : "Create ticket"}
        />
      </form>
    </div>
  );
};

export default TicketForm;
