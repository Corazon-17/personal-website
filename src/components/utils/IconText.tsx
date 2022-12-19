interface IconTextProps {
  icon: any;
  text: string;
}

export function IconText({ icon, text }: IconTextProps) {
  return (
    <div className="flex items-center h-max pt-1.5">
      <span className="self-center">{icon}</span>
      <span className="ml-2.5">{text}</span>
    </div>
  );
}
