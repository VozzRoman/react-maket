import { PageTitle } from "./PageTitle/PageTitle";
import { EventBoard } from "./EventBoard/EventBoard";
import eventsData from '../eventsData.json';
export const App = () => { // именованный экспорт
	return (
		<div>
			<PageTitle text="24th Core Worlds Coalition Conference" />
			<EventBoard  events={eventsData}/>
		</div>

	) 
};
