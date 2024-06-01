import Heading from "../../Elements/Heading/Index";
import laptop from '/img/laptop.png'
import child from '/img/child.png'
import cat from '/img/cat.png'
import meeting from '/img/meeting.png'
import CardNews from "../../Elements/CardNews/Index";

const News = () => {
  return (
    <div id="news" className="max-[768px]:mt-10 max-[576px]:px-5">
      <Heading span="Lastest News and Resources" desc="See the developments that have occurred to Skillines in the world" />
      <article className="container-news w-full px-12 py-14 flex max-[768px]:px-8 max-[576px]:px-0 max-[576px]:flex-wrap ">
        <article className="news-left w-1/2 mr-16 max-[768px]:mr-8 max-[576px]:w-full max-[576px]:m-0 max-[576px]:mb-5">
          <figure>
            <img src={laptop} alt="Laptop" />
          </figure>
          <div className="w-max bg-[#F4C467] rounded-full px-8 py-1 my-7 text-[#252641] font-poppins font-medium">NEWS</div>
          <h2 className="font-poppins font-medium text-[#252641] text-xl max-[768px]:text-lg">Class adds $30 million to its balance sheet for a Zoom-friendly edtech solution</h2>
          <p className="my-5 font-poppins text-[#696984] max-[768px]:my-3 max-[768px]:text-sm">Class, launched less than a year ago by Blackboard co-founder Michael Chasen, integrates exclusively...</p>
          <a href="#" className="font-poppins text-[#696984] max-[768px]:text-sm">
            Read more
          </a>
        </article>
        <article className="news-right w-1/2 flex flex-col gap-10 max-[768px]:gap-5 max-[576px]:w-full">
          <CardNews src={child} title="Class Technologies Inc. Closes $30 Million Series A Financing to Meet High Demand" desc="Class Technologies Inc., the company that created Class,..." />
          <CardNews className="mr-10 max-[768px]:mr-6" src={meeting} title="Zoom’s earliest investors are betting millions on a better Zoom for schools" desc="Zoom was never created to be a consumer product. Nonetheless, the..." />
          <CardNews className="mr-5 max-[768px]:mr-3" src={cat} title="Former Blackboard CEO Raises $16M to Bring LMS Features to Zoom Classrooms" desc="This year, investors have reaped big financial returns from betting on Zoom...." />
        </article>
      </article>
    </div>
  );
};

export default News;
