const isOverdue = card => {
  if (!card.due_date) return false;
  return Date.now() > new Date(card.due_date);
};

const getClassName = card => {
  if (!card.due_date) return "";
  return isOverdue(card) ? "overdue" : "due-later";
};

const formatDate = card => {
  if (!card.due_date) return "";
  return new Date(card.due_date).toLocaleDateString();
};

export const getDateDetails = card => {
  return {
    isOverdue: isOverdue(card),
    className: getClassName(card),
    formattedDueDate: formatDate(card),
  };
};
