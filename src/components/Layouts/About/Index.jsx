import Heading from '../../Elements/Heading/Index';
import CardAbout from '../../Elements/CardAbout/Index';
import instructor from '/img/instructor.png';
import students from '/img/students.png';

const About = () => {
  return (
    <div id="about" className="px-40 w-full max-[768px]:px-20 max-[576px]:px-5">
      <Heading
        span="What is "
        desc="Skilline is a platform that allows educators to create online classes whereby they can store the course materials online; manage assignments, quizzes and exams; monitor due dates; grade results and provide students with feedback all in one place. "
        className="w-[100%]">
        Skilline?
      </Heading>
      <article className="w-full flex justify-center gap-24 relative py-16 max-[768px]:py-6 max-[576px]:flex-wrap max-[576px]:gap-0">
        <CardAbout src={instructor} title="FOR INSTRUCTORS">
          Start a class today
        </CardAbout>
        <CardAbout className="bg-[#23BDEE] border-black" src={students} title="FOR STUDENTS">
          Enter access code
        </CardAbout>
      </article>
    </div>
  );
};

export default About;
