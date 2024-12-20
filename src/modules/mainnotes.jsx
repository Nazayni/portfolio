import Cybersecurity from "../notepages/cybersecurity"
import JavascriptNotes from "../notepages/javascriptnotes";
import Reactnotes from "../notepages/reactnotes";

function MainNotes() {
    return ( 
        <div className="note-section">
            <Cybersecurity />
            <JavascriptNotes />
            <Reactnotes />
        </div>
    );
}

export default MainNotes