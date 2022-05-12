import { useNote } from "../../context";
import "./filterModal.css";

export function FilterModal({setIsFilterVisible}){
    const {noteState: {labels, filters: {sortByDate, sortByPriority, label}}, noteDispatch} = useNote();

    const clearFilterHandler = () => {
        noteDispatch({type:"CLEAR_ALL_FILTERS"});
        setIsFilterVisible(false)
    };

    return (
        <div className="modal-wrapper">
            <output className="modal filter-modal">
                <button onClick={()=>setIsFilterVisible(false)}><i className="btn-icon fas fa-times"></i></button>
                <h3>Sort & Filter Notes</h3>
                <hr/>
                <h4>Sort by Priority</h4>
                <ul className="input-grp">
                    <li className="input">
                        <label><input type="radio" checked={sortByPriority==="LOW_TO_HIGH"} 
                        onChange={()=>noteDispatch({type:"SORT_NOTES_BY_PRIORITY", payload:"LOW_TO_HIGH"})} 
                        name="priority"/>Low to High</label>
                    </li>
                    <li className="input">
                        <label><input type="radio" checked={sortByPriority==="HIGH_TO_LOW"} 
                        onChange={()=>noteDispatch({type:"SORT_NOTES_BY_PRIORITY", payload:"HIGH_TO_LOW"})} 
                        name="priority"/>High to Low</label>
                    </li>
                </ul>
                <h4>Sort by Date</h4>
                <ul className="input-grp">
                    <li className="input">
                        <label><input type="radio" checked={sortByDate==="RECENT_FIRST"} 
                        onChange={()=>noteDispatch({type:"SORT_NOTES_BY_DATE", payload:"RECENT_FIRST"})} 
                        name="date"/>Recent first</label>
                    </li>
                    <li className="input">
                        <label><input type="radio" checked={sortByDate==="OLD_FIRST"} 
                        onChange={()=>noteDispatch({type:"SORT_NOTES_BY_DATE", payload:"OLD_FIRST"})} 
                        name="date"/>Old first</label>
                    </li>
                </ul>
                <h4>Filter by labels</h4>
                <ul>
                    {labels.map(labelItem=><li key={labelItem} className="input">
                    <label><input type="checkbox" checked={label.includes(labelItem)} 
                        onChange={()=>noteDispatch({type:"FILTER_BY_LABEL", payload:labelItem})}
                    /><span>{labelItem}</span></label></li>)}
                </ul>
                <div className="input-btn-wrapper">
                    <button className="btn btn-primary-outline" onClick={clearFilterHandler}>Clear All Filters</button>
                    <button className="btn btn-primary" onClick={()=>setIsFilterVisible(false)}>Done</button>
                </div>
            </output>
        </div>
    );
}