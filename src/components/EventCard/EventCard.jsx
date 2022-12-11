//Component EventCard
import PropType from 'prop-types';
import { FaMapMarkerAlt, FaFortAwesomeAlt, FaCalendarAlt, FaClock } from "react-icons/fa"; //либа иконки
import { formatEventStar } from 'utils/formatEventStar';
import css from './EventCard.module.css';
export const EventCard = ({ name, location, type, speaker, start, end }) => {
	const formatedDate = formatEventStar(start);
	return (
		<div className={css.event}>
			<h2 className={css.title}>{name}</h2>
			<p className={css.info}>
				<FaMapMarkerAlt className={css.icon} size={16} />
				<i className={css.chip}></i>
				{location}
			</p>
			<p className={css.info}>
				<FaFortAwesomeAlt className={css.icon} size={16} />
				<i className={css.chip}></i>
				{speaker}
			</p>
			<p className={css.info}>
				<FaCalendarAlt className={css.icon} size={16} />
				<i className={css.chip}></i>
				{formatedDate}
			</p>
			<p className={css.info}>
				<FaClock className={css.icon} size={16} />
				<i className={css.chip}></i>
				Duration
			</p>
			{/* <span className="chip free|paid|vip">Event type</span> */}
		</div>
	);
};

EventCard.propTypes = {
	name: PropType.string.isRequired,
	location: PropType.string.isRequired,
	type: PropType.string.isRequired,
	speaker: PropType.string.isRequired,
	start: PropType.string.isRequired,
	end: PropType.string.isRequired
};

