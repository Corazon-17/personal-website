import { FMComponent } from "../types"

export function TextInput({
  label,
  value,
  valueKey,
  stateValue,
  setValue,
}: FMComponent) {
  type ObjectKey = keyof typeof stateValue;

  const updateState = (
    e: React.ChangeEvent<HTMLInputElement>,
    valueKey: ObjectKey
  ) => {
    let copiedState: typeof stateValue = { ...stateValue };
    copiedState[valueKey] = e.target.value;
    setValue(copiedState);
  };

  return (
    <div className="grid sm:grid-cols-[150px_1fr]">
      <label>{label}</label>
      <input
        type="text"
        value={value}
        onChange={(e): void => updateState(e, valueKey as ObjectKey)}
        className="text-black px-2"
      />
    </div>
  );
}
