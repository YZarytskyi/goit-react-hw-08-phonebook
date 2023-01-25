import { useAppDispatch, useAppSelector } from "../../redux/hooks/hooks";
import { setFilter } from "../../redux/contactsSlice/contactsSlice";
import { Input, Label } from "./Filter.styled";


const Filter = () => {
  const filter = useAppSelector(state => state.contacts.filter)
  const dispatch = useAppDispatch();

  const onChangeInput: React.ChangeEventHandler<HTMLInputElement> = (e) => {
    dispatch(setFilter(e.currentTarget.value))
  }

  return (
    <Label>
      Find contacts by name
      <Input type="text" value={filter} onChange={onChangeInput} />
    </Label>
  );
};

export default Filter;
