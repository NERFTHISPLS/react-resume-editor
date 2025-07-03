import AddBlockButton from '../../ui/AddBlockButton';

export default function PersonalInfoBlock() {
  const personalInfo = null;

  return (
    <section className="flex flex-col">
      {!personalInfo && (
        <AddBlockButton>+ Добавить личные данные</AddBlockButton>
      )}
    </section>
  );
}
