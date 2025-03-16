const clientDetail = ({isActive}) => {
    return (
        <article className={`dashboard clientdetail ${isActive === "menu" ? "" : "hidden"}`} >
            <h3>tafelnummer</h3>
            <ul>
                <li>koffie</li>
            </ul>
            <p>totaal</p>
            <button>afrekenen</button>
        </article>
    );
};

export default clientDetail;