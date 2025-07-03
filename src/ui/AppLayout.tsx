import Editor from '../features/resume/Editor';
import Preview from '../features/resume/Preview';

export default function AppLayout() {
  return (
    <main className="flex h-screen">
      <Editor />
      <Preview />
    </main>
  );
}
