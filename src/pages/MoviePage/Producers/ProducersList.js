/* eslint react/prop-types: 0 */

import "../Actors/ActorsList.css";
import Actors from "../Actors/Actors";

function ProducersList({producers}) {
    return (
        <section className="actorslist">
            <h1 className="actorslist__title">Режиссеры</h1>
            <div className="actorslist__container">
                {producers.map((item) => (
                    <Actors key={item.id} name={item.name} picture={item.picture} />
                ))}
            </div>
        </section>
    );
}

export default ProducersList;
