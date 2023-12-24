import * as React from "react";
import Image from "next/image";
const Home = () => {
  return (
    <div className="w-full h-full">
      <div className="home-image relative">
        <div className="absolute bottom-0 left-0 right-0 top-0 home-background w-full h-full ">
          <div className="flex h-full items-center justify-center flex-col text-white ">
            <div className="text-white text-center">
              <h2 className="uppercase text-[50px] font-[400] text-center tracking-[1px] ">
                " Welcome to RSCOE Alumni Portal "
              </h2>
              <h4
                className="after:content-[''] after:top-[25%] after:ml-3 after:bg-white after:w-[50%] after:absolute after:h-[5px]  
        before:content-[''] before:top-[25%]  before:bg-white before:w-[50%] before:absolute before:h-[5px] before:left-[-12%]
        relative  text-[15px] font-semibold text-center uppercase tracking-[2px] leading-5 "
              >
                by RSCOE Community
              </h4>
              <h4 className=" text-[15px] font-semibold text-center uppercase tracking-[2px] leading-5 my-2">
                RSCOE Initiative
              </h4>
            </div>
            <h3 className="font-[700] w-1/3 text-center text-4xl tracking-tighter my-6">
              "The Forever Titans: Honoring the legacy of our graduates."
            </h3>
            <p className="w-1/2 font-sans font-[400] text-xl text-center mt-4">
              Alumni are the living legacy of our college. Join us on our alumni
              portal to celebrate your achievements, reconnect with classmates,
              and shape the future of our institution
            </p>
          </div>
        </div>
      </div>
      <section className="w-full  h-[70vh] ">
        <h3
          className="text-center text-4xl font-sans m-4 font-[400] relative underline-offset-[10px] underline
      "
        >
          “ Why Alumni Portal ? ”
        </h3>

        <div className="flex  gap-4 justify-start items-center font-sans ">
          <div className="home-section-div">
            <Image
              src="/home/Feeds.svg"
              alt="feed.svg"
              width={70}
              height={70}
            />
            <h5 className="home-icons-heading">Feed</h5>
            <p className="home-icons-subheading">
              Alumni can share any notable achievements or awards that they've
              received in their professional or personal life, as well as any
              significant contributions they've made to their community or
              industry.
            </p>
          </div>
          <div className="home-section-div">
            <Image
              src="/home/conference.svg"
              alt="conference.svg"
              width={70}
              height={70}
            />
            <h5 className="home-icons-heading">Alumni Talk</h5>
            <p className="home-icons-subheading">
              The Alumni Talk option is a valuable resource for our alumni
              community, offering a platform where graduates can connect with
              each other, learn from expert speakers, and grow both personally
              and professionally.
            </p>
          </div>
          <div className="home-section-div">
            <Image
              src="/home/agenda.svg"
              alt="Alumni Directory.svg"
              width={70}
              height={70}
            />
            <h5 className="home-icons-heading">Alumni Directory</h5>
            <p className="home-icons-subheading">
              Connect, network, and forge lasting relationships with your fellow
              alumni.Looking to reconnect with old classmates? Our Alumni
              Directory has got you covered.
            </p>
          </div>
          <div className="home-section-div">
            <Image
              src="/home/public-relation.svg"
              alt="Alumni Engage.svg"
              width={70}
              height={70}
            />
            <h5 className="home-icons-heading">Alumni Engage</h5>
            <p className="home-icons-subheading">
              The Alumni Engage section is designed to help our alumni community
              stay connected and engaged with our college/university.Alumni
              Engage offers a range of activities and resources to help you
              connect with your fellow graduates.
            </p>
          </div>
        </div>
      </section>
      <div className="w-full h-[110vh] bg-[#161A30] flex justify-start items-center flex-col">
        <h2 className="text-[#EA906C] font-sans text-center text-4xl leading-9 font-[900] underline underline-offset-[12px] decoration-white decoration-4 mt-12">
          " Alumni Talk Series "
        </h2>
        <div className="grid grid-cols-2 gap-16 mt-10 overflow-auto">
          <iframe
            width="560"
            height="300"
            src="https://www.youtube.com/embed/wKeZ88BJA5o?si=DDsZVDJ3hITWFsjz"
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          ></iframe>

          <iframe
            width="560"
            height="300"
            src="https://www.youtube.com/embed/8tWLo4RJ9Lk?si=B5HEQ6GTLE1lJ8iB"
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          ></iframe>

          <iframe
            width="560"
            height="300"
            src="https://www.youtube.com/embed/DhkNlFp6DG0?si=wkh9TDrUJyLcaflx"
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          ></iframe>

          <iframe
            width="560"
            height="300"
            src="https://www.youtube.com/embed/TeUQGd7XOD8?si=lphZoxSgNwtVAZ8F"
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          ></iframe>
        </div>
      </div>
      <div className="w-full h-[130vh] font-sans flex justify-start  flex-col">
        <h3 className="text-4xl font-[700] relative p-5 my-3 text-center">
          "Voices of Authority: Embracing Our Alumni Portal"
          <span className="flex-1 after:w-1/2 after:h-1 after:bg-black after:absolute after:top-[80%] after:left-[25%] after: after:content-['']"></span>
        </h3>
        <div className="flex gap-8 m-8 p-2  ">
          <Image
            src="/home/Principal.jpeg"
            alt="Principal.jpg"
            width={540}
            height={342}
            className="rounded-md "
          ></Image>
          <div className="gap-6 mt-10 ml-10">
            <h4 className="text-3xl font-[700] p-2">Dr. R.K Jain</h4>
            <h5 className="text-xl font-[600] p-2">Director, RSCOE</h5>
            <p className="w-[80%] p-2 text-md">
              Dear Friends, It is with immense pride, that I introduce you to an
              entirely new approach of learning in our college. An approach,
              where traditional methods of learning go hand in hand with modern
              learning techniques, keeping with the current trends and
              technology. We facilitate our students to excel academically and
              to develop their personalities in diverse fields. To this end, we
              have complemented academics with other developmental activities
              such as performing arts, sports, hobbies and technical clubs, to
              name a few.
            </p>
          </div>
        </div>
        <div className="flex gap-8 m-8 p-2  ">
          <div className="w-[60%] gap-6 mt-10 ml-10">
            <h4 className="text-3xl font-[700] p-2">Dr. S P Rao Borde</h4>
            <h5 className="text-xl font-[600] p-2">Dean of SI&IR's, RSCOE</h5>
            <p className="w-[80%] p-2 text-md">
              Dear Friends, From The Dean of SI&IR's Desk, I would like to
              introduce our campus, Rajarshi Shahu College of Engineering
              (RSCOE), an autonomous institute which is in the band 250 to 300
              of MHRD-NIRF 2022 and is also accredited by NAAC and NBA. Our
              college is the flagship institute of JSPM and TSSM Group of
              Institutes, Pune, Maharashtra. RSCOE is now also known as TEDxJSPM
              RSCOE. Being an autonomous institute, the companies like Veritas,
              TCS, KPIT & Persistent Systems, Bentley Institute, IIT Ropar, and
              Builders Association of India contributed to the curriculum
              integration, giving an opportunity to students from various social
              and economic backgrounds to be part of excelling in higher
              education.
            </p>
          </div>
          <Image
            src="/home/Spraoborde.jpeg"
            alt="TPO.jpg"
            width={540}
            height={342}
            className="rounded-md"
          ></Image>
        </div>
      </div>
      <div className="w-[100%] font-sans h-[115vh] bg-[#D9D9D9] flex justify-start items-center flex-col gap-5 p-10">
        <h3 className="text-4xl font-[700] underline underline-offset-8  ">
          “Memories We Will Never Forget”
        </h3>
        <Image
          src="/home/alumni-meet.jpeg"
          alt="alumni-meet.jpg"
          width={900}
          height={600}
         
          className=""
        ></Image>
      </div>
    </div>
  );
};

export default Home;
