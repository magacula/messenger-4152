// function that sorts messages by createdAt property, ordering messages by date on page load
export const sortByCreatedAt = (messagesArr) => {
  // sorts messages by creation time (newer messages on at the bottom of Chat UI)
  return messagesArr.sort((a, b) => {
    return new Date(a.createdAt) - new Date(b.createdAt);
  });
};
