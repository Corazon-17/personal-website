import { FMComponent } from "../types";

export function CheckBox({
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
    let copiedState: any = { ...stateValue };
    copiedState[valueKey] = e.target.checked;
    setValue(copiedState);
  };

  return (
    <div className="flex gap-2">
      <input
        type="checkbox"
        value={value}
        onChange={(e): void => updateState(e, valueKey as ObjectKey)}
        className="text-black px-2"
      />
      <label>{label}</label>
    </div>
  );
}
