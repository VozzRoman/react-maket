import { formatDistanceStrict } from "date-fns";

export const formatEventDuration = (start, end) => {
	const newData = formatDistanceStrict(Date.parse(start), Date.parse(end));
	console.log(newData);
}


