import { FMComponent } from "../types";

export function TextArea({
  label,
  value,
  valueKey,
  stateValue,
  setValue,
}: FMComponent) {
  type ObjectKey = keyof typeof stateValue;

  const updateState = (
    e: React.ChangeEvent<HTMLTextAreaElement>,
    valueKey: ObjectKey
  ) => {
    let copiedState: typeof stateValue = { ...stateValue };
    copiedState[valueKey] = e.target.value;
    setValue(copiedState);
  };

  return (
    <div className="grid sm:grid-cols-[150px_1fr]">
      <label>{label}</label>
      <textarea
        value={value}
        onChange={(e): void => updateState(e, valueKey as ObjectKey)}
        className="text-black px-2"
      />
    </div>
  );
}
