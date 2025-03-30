import { Career } from "@/components/Career";
import { Skill } from "@/components/Skill";
import useFetchAbout from "@/hooks/useFetchAbout";
import useFetchCareer from "@/hooks/useFetchCareer";
import useFetchSkill from "@/hooks/useFetchSkill";
import Layout from "@/layout/Layout";

const Home = () => {
  const { about } = useFetchAbout();
  const { career } = useFetchCareer();
  const { skill } = useFetchSkill();

  return (
    <Layout>
      <main className="flex flex-col font-NotoSans justify-center">
        <section
          className="h-[500px] flex flex-col justify-center items-center mb-3"
          id="Home"
        >
          <div className="tb:text-6xl sp:text-5xl xs:text-3xl text-2xl font-semibold mb-5">
            Shota Kawasaki&apos;s
          </div>
          <div className="tb:text-6xl sp:text-5xl xs:text-3xl  font-semibold">
            Profile
          </div>
        </section>
        <section
          className="tb:w-[700px] w-3/4 flex flex-col justify-center mx-auto mb-40"
          id="About"
        >
          <div className="tb:text-4xl sp:text-3xl text-2xl font-semibold mx-auto mb-14">
            About
          </div>
          <div className="flex flex-col justify-center tb:text-lg sp:text-lg text-sm text-gray-700">
            <div className="mx-auto text-center">{about?.content}</div>
          </div>
        </section>
        <section
          className="flex flex-col justify-center items-center tb:w-[850px] w-4/5 mx-auto mb-40"
          id="Career"
        >
          <div className="tb:text-4xl sp:text-3xl text-2xl font-semibold mb-6">
            Career
          </div>
          {career?.map((c, i) => (
            <Career key={i} date={c.date} content={c.content} />
          ))}
        </section>

        <section
          className="tb:w-[850px] w-3/4 flex flex-col justify-center items-center mx-auto mb-35"
          id="Skills"
        >
          <div className="tb:text-4xl sp:text-3xl text-2xl font-semibold mb-6">
            Skills
          </div>
          {skill?.map((s, i) => (
            <Skill
              key={i}
              firstIcon={s.firstIcon}
              secondIcon={s.secondIcon}
              skill={s.skill}
              description={s.description}
            />
          ))}
        </section>
        <section
          className="h-[300px] flex flex-col justify-center items-center"
          id="Account"
        >
          <div className="tb:text-4xl sp:text-3xl text-2xl font-semibold mb-8">
            Account
          </div>
          <a
            href="https://github.com/kawaaaas"
            className="cursor-pointer flex text-gray-700 items-center"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={"image/github.svg"} className="mr-2 w-4" />
            <div>Github</div>
          </a>
          <a
            href="https://www.linkedin.com/in/shota-kawasaki-b2617222b/"
            className="cursor-pointer flex text-gray-700 items-center"
            target="_blank"
            rel="noopener noreferrer"
          >
            <div className="w-4">
              <img src={"image/linkedin.png"} className="mr-2" />
            </div>
            <div>Linkedin</div>
          </a>
        </section>
      </main>
    </Layout>
  );
};

export default Home;
