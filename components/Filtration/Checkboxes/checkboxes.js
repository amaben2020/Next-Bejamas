import { useState } from 'react';
import { handleToggle } from './../utills';

const Checkboxes = ({ list, handleFilters }) => {
  const [checkedArray, setCheckedArray] = useState([]);
  console.log(list);

  const onChangeHandler = (checkboxId) => {
    //simply selects the checkboxId that matches the id in the array
    const newState = handleToggle(checkboxId, checkedArray);

    //passing the value to the checkedArray state
    setCheckedArray(newState);
    // Update this checked information into Parent Component
    handleFilters(newState.map((id) => list[id].value));
  };

  return list.map((item, index) => {
    console.log(checkedArray.indexOf(item.id) !== -1);
    return (
      <div key={index}>
        <input
          type="checkbox"
          id={item.name}
          checked={checkedArray.indexOf(item.id) !== -1}
          onChange={() => onChangeHandler(item.id)}
        />
        <label htmlFor={item.name}>{item.label} </label>
      </div>
    );
  });
};

export default Checkboxes;
