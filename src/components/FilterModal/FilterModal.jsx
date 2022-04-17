import "./filterModal.css";

export function FilterModal({setIsFilterVisible}){
    return (
        <div className="modal-wrapper">
            <output className="modal filter-modal">
                <button onClick={()=>setIsFilterVisible(false)}><i className="btn-icon fas fa-times"></i></button>
                <h3>Sort & Filter Notes</h3>
                <hr/>
                <h4>Sort by Priority</h4>
                <ul className="input-grp">
                    <li className="input">
                        <label><input type="radio" name="priority"/>Low to High</label>
                    </li>
                    <li className="input">
                        <label><input type="radio" name="priority"/>High to Low</label>
                    </li>
                </ul>
                <h4>Sort by Date</h4>
                <ul className="input-grp">
                    <li className="input">
                        <label><input type="radio" name="date"/>Recent first</label>
                    </li>
                    <li className="input">
                        <label><input type="radio" name="date"/>Old first</label>
                    </li>
                </ul>
                <h4>Filter by labels</h4>
                <ul>
                    <li className="input"><label><input type="checkbox"/>label1</label></li>
                    <li className="input"><label><input type="checkbox"/>label2</label></li>
                </ul>
                <div className="input-btn-wrapper">
                    <button className="btn btn-primary-outline" onClick={()=>setIsFilterVisible(false)}>Clear All Filters</button>
                    <button className="btn btn-primary" onClick={()=>setIsFilterVisible(false)}>Done</button>
                </div>
            </output>
        </div>
    );
}