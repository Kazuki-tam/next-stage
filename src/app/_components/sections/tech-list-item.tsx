type TechListItemProps = {
  text: string;
};

export function TechListItem({ text }: TechListItemProps) {
  return (
    <>
      <span className="w-2 h-2 bg-[var(--blue-primary)] rounded-full" />
      {text}
    </>
  );
}
