import './Actors.css';

function Actors({ name, surname }) {
	return (
		<section className="actor">
			<p className="actor__text">
				{name} {surname},
			</p>
		</section>
	);
}

export default Actors;
