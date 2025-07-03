import BlockInfoRow from './BlockInfoRow';
import PreviewBlock from './PreviewBlock';
import type { About } from './types';

interface Props {
  about: About;
}

export default function AboutPreview({ about }: Props) {
  return (
    <PreviewBlock title="О себе">
      <BlockInfoRow info={about.description} />
    </PreviewBlock>
  );
}
