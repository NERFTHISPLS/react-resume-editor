import Preview from '../features/resume/components/Preview';
import Editor from '../features/resume/dnd/Editor';

export default function AppLayout() {
  return (
    <main className="flex h-screen">
      <Editor />
      <Preview />
    </main>
  );
}
