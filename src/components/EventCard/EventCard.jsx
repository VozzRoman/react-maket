//Component EventCard
import PropType from 'prop-types';
import css from './EventCard.module.css';
export const EventCard = ({name, location, type, speaker, start, end}) => {
	return (
		<div className={css.event}>
			<h2 className={css.title}>{name}</h2>
			<p className={css.info}>
				<i className={css.chip}></i>
				{location}
			</p>
			<p className={css.info}>
				<i className={css.chip}></i>
				{speaker}
			</p>
			<p className={css.info}>
				<i className={css.chip}></i>
				{start}
			</p>
			<p className={css.info}>
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

