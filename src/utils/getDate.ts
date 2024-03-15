export const getDate = (date) => {
	let dateFormat = new Date(date);

  let dataDate = {
    day: dateFormat.getDay(),
    month: dateFormat.toLocaleString("en-US", { month: "long" }),
    year: dateFormat.getFullYear(),
  };

	return dataDate
}