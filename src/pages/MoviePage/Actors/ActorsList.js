/* eslint react/prop-types: 0 */

import Actors from "./Actors";
import "./ActorsList.css";

function ActorsList({actors}) {
    return (
        <section className="actorslist">
            <h1 className="actorslist__title">Актеры</h1>
            <div className="actorslist__container">
                {actors.map((item) => (
                    <Actors key={item.id} name={item.name} picture={item.picture} />
                ))}
            </div>
        </section>
    );
}

export default ActorsList;
