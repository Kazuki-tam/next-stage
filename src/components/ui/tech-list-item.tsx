interface TechListItemProps {
  text: string;
}

export function TechListItem({ text }: TechListItemProps) {
  return (
    <li className="flex items-center gap-2">
      <span className="w-2 h-2 bg-[var(--blue-primary)] rounded-full" />
      {text}
    </li>
  );
} 