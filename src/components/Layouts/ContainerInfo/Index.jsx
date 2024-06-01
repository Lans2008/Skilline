import InfoSection from '../../Fragments/InfoSection/Index';
import Heading from '../../Elements/Heading/Index';
import classroom from '/img/classroom.png';
import features from '/img/features.png';
import student from '/img/student.png';
import Point from '../../Elements/Point/Index';
import opt from '/img/opt.png';
import user from '/img/user.png';
import layer from '/img/layer.png';
import question from '/img/question.png';
import gradebook from '/img/gradebook.png';
import discussions from '/img/discussions.png';
import Button from '../../Elements/Button/Index';
import app from '/img/app.png';
import testi from '/img/testi.png';
import arrow from '/img/arrow.png';

const ContainerInfo = () => {
  return (
    <div id="container-info">
      <InfoSection title="Everything you can do in a physical classroom," span="you can do with Skilline" src={classroom}>
        <p className="my-8 font-poppins text-[#696984] w-[90%] max-[768px]:my-5 max-[768px]:text-sm max-[576px]:text-xs max-[576px]:my-3 max-[576px]:w-full">
          Skilline's school management software helps traditional and online schools manage scheduling, attendance, payments and virtual classrooms all in one secure cloud-based system.
        </p>
        <a className="font-poppins text-[#696984] max-[576px]:text-xs" href="#">
          Learn more
        </a>
      </InfoSection>
      <Heading span="Our" desc="This very extraordinary feature, can make learning activities more efficient">
        {' '}
        Features
      </Heading>
      <InfoSection className="flex-row-reverse justify-between mt-16 max-[768px]:mt-10 max-[576px]:mt-5" figure="justify-start" title="A user interface designed for " span="the classroom" src={features}>
        <Point src={opt}>Teachers don't get lost in the grid view and have a dedicated Podium space.</Point>
        <Point src={layer}>TA's and presenters can be moved to the front of the class.</Point>
        <Point src={user}>Teachers can easily see all students and class data at one time.</Point>
      </InfoSection>
      <InfoSection span="Learners" title="Tools For Teachers And " src={student} className="py-24 max-[576px]:pb-14">
        <p className="my-5 font-poppins text-[#696984] w-[90%] leading-loose max-[768px]:text-sm max-[576px]:w-full">
          Class has a dynamic set of teaching tools built to be deployed and used during class. Teachers can handout assignments in real-time for students to complete and submit.
        </p>
      </InfoSection>
      <InfoSection className="flex-row-reverse py-20" figure="justify-start" span=" Tests" title="Assessments, Quizzes," src={question}>
        <p className="my-5 font-poppins text-[#696984] w-[90%] leading-loose max-[768px]:text-sm max-[576px]:w-full">Easily launch live assignments, quizzes, and tests. Student results are automatically entered in the online gradebook.</p>
      </InfoSection>
      <InfoSection span="Tools for Educators" title="Class Management " src={gradebook} className=" py-24" figure="justify-end">
        <p className="my-5 font-poppins text-[#696984] w-[90%] leading-loose max-[768px]:text-sm max-[576px]:w-full">
          Class provides tools to help run and manage the class such as Class Roster, Attendance, and more. With the Gradebook, teachers can review and grade tests and quizzes in real-time.
        </p>
      </InfoSection>
      <InfoSection span="Discussions" title="One-on-One " src={discussions} className="flex-row-reverse py-24" figure="justify-start">
        <p className="my-5 font-poppins text-[#696984] w-[90%] leading-loose max-[768px]:text-sm max-[576px]:w-full">Teachers and teacher assistants can talk with students privately without leaving the Zoom environment.</p>
      </InfoSection>
      <div className="w-full flex justify-center">
        <Button className="border border-[#F48C06] bg-white text-[#F48C06] max-[768px]:text-sm">See more features</Button>
      </div>
      <InfoSection span="integrations" title="200+ educational tools and platform " src={app} className="flex-row-reverse py-24 justify-between" figure="w-[40%]">
        <p className="my-5 font-poppins text-[#696984] w-[90%] leading-loose max-[768px]:text-sm max-[576px]:w-full">
          Schoology has every tool your classroom needs and comes pre-integrated with more than 200+ tools, student information systems (SIS), and education platforms.
        </p>
        <div className="flex max-[576px]:justify-center">
          <Button className="border border-[#F48C06] w-max bg-white text-[#F48C06] max-[768px]:text-sm">See All Integrations</Button>
        </div>
      </InfoSection>
      <InfoSection span="Say?" title="What They " src={testi} className="py-24 justify-between" figure="w-[40%] justify-end">
        <p className="mt-5 font-poppins text-[#696984] w-[90%] max-[576px]:w-full leading-loose max-[768px]:text-sm">Skilline has got more than 100k positive ratings from our users around the world. </p>
        <p className="my-5 font-poppins text-[#696984] w-[90%] max-[576px]:w-full leading-loose max-[768px]:text-sm">Some of the students and teachers were greatly helped by the Skilline.</p>
        <p className="mb-5 font-poppins text-[#696984] w-[90%] max-[576px]:w-full leading-loose max-[768px]:text-sm">Are you too? Please give your assessment</p>
        <div className='flex max-[576px]:justify-center'>
          <Button className="relative border border-[#F48C06] w-max bg-white text-[#F48C06] flex items-center justify-between pr-14 mt-10 max-[768px]:text-sm">
            Write your assessment
            <span className="absolute right-0 py-3 px-2 flex border rounded-full items-center justify-center border-[#F48C06]">
              <img src={arrow} alt="Arrow" className="w-[90%]" />
            </span>
          </Button>
        </div>
      </InfoSection>
    </div>
  );
};

export default ContainerInfo;
