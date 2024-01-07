export const getFormattedDateString = (date: Date): string => {
  const day = date.getDate();
  let ordinal = "th";

  if (day < 4 || day > 20) {
    switch (day % 10) {
      case 1:
        ordinal = "st";
        break;
      case 2:
        ordinal = "nd";
        break;
      case 3:
        ordinal = "rd";
        break;
      default:
        ordinal = "th";
        break;
    }
  }

  return (
    day +
    ordinal +
    " " +
    date.toLocaleDateString("en-gb", {
      month: "long",
      year: "numeric",
    })
  );
};
