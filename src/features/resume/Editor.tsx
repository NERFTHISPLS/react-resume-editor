import About from './About';
import Certificates from './Certificates';
import Education from './Education';
import Experience from './Experience';
import PersonalInfoBlock from './PersonalInfoBlock';
import Skills from './Skills';

export default function Editor() {
  return (
    <div className="flex-1 border-r border-gray-200 flex flex-col gap-4 p-4">
      <PersonalInfoBlock />
      <Experience />
      <Education />
      <Skills />
      <Certificates />
      <About />
    </div>
  );
}
