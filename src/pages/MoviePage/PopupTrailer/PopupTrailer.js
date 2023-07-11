import './PopupTrailer.css';

function PopupTrailer({ isPopupOpen, switchPopupTrailer }) {
    return (
        <div className={`popupTrailer ${isPopupOpen ? "popupTrailer_opened" : ""}`}>
            <iframe width="720" height="480" src="https://www.youtube.com/embed/dQw4w9WgXcQ" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen />
            <button className="popupTrailer__close" type="button" onClick={switchPopupTrailer}/>
        </div>
    );
}

export default PopupTrailer;
