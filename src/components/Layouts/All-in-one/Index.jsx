import Heading from '../../Elements/Heading/Index';
import CardSoftware from '../../Elements/CardSoftware/Index';
import file from '/img/file.png';
import calendar from '/img/calendar.png';
import group from '/img/group.png';

const AllInOne = () => {
  return (
    <div id="all-in-one" className="w-full flex flex-col items-center px-42 py-16 max-[768px]:py-10 max-[576px]:px-5">
      <Heading span="All-In-One " desc="Skilline is one powerful online software suite that combines all the tools needed to run a successful school or office.">
        Cloud Software
      </Heading>
      <article className="w-full flex justify-center py-24 gap-24 max-[768px]:gap-1 max-[768px]:py-20 max-[768px]:justify-between max-[768px]:px-12 max-[576px]:px-0 max-[576px]:flex-wrap max-[576px]:gap-16 max-[576px]:pb-5">
        <CardSoftware
          src={file}
          title="Online Billing, Invoicing, & Contracts"
          desc="Simple and secure control of your organization's financial and legal transactions. Send customized invoices and contracts"
        />
        <CardSoftware className="bg-[#F48C06] p-3 px-1" src={calendar} title="Easy Scheduling & Attendance Tracking" desc="Schedule and reserve classrooms at one campus or multiple campuses. Keep detailed records of student attendance" />
        <CardSoftware className="bg-[#29B9E7] p-3 px-0" src={group} title="Customer Tracking" desc="Automate and track emails to individuals or groups. Skilline’s built-in system helps organize your organization " />
      </article>
    </div>
  );
};

export default AllInOne;
