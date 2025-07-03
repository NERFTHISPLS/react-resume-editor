interface Props {
  title?: string;
  info: string;
}

export default function BlockInfoRow({ title, info }: Props) {
  return (
    <div>
      {title && <b>{title}:</b>} {info}
    </div>
  );
}
