/* eslint react/prop-types: 0 */

import "./Actors.css";

function Actors({ name, picture }) {
  return (
    <section className="actor">
      <img className="actor__img" alt="" src={picture} />
      <p className="actor__text">{name}</p>
    </section>
  );
}

export default Actors;
