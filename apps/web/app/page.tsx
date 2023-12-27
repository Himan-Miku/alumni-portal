import * as React from "react";
import Image from "next/image";
import Slider from "./components/Slider";
const Home = () => {
  let images = [
    "1.jpg",
    "2.jpg",
    "3.jpg",
    "5.jpg",
    "6.jpg",
    "7.jpg",
    "aluimg.jpg",
  ];
  return (
    <div className="flex flex-col gap-12 lg:pt-0 bg-white">
      <div className=" bg-commonbg px-7 py-4 md:p-0 md:home-image ">
        <div className=" bottom-0 left-0 right-0 top-0 md:home-background w-full h-full ">
          <div className="flex h-full items-center justify-center flex-col md:text-white gap-8">
            <div className="text-black md:text-white text-center flex flex-col gap-1">
              <h2 className="uppercase text-4xl lg:text-5xl font-[900] text-center tracking-[1px]">
                " Welcome to RSCOE Alumni Portal "
              </h2>
              <div className=" text-sm lg:text-lg uppercase font-semibold flex items-center gap-3 mt-3 lg:mt-0">
                <div className="w-full h-1 bg-black md:bg-white"></div>
                <div className="whitespace-nowrap">by RSCOE Community</div>
                <div className="w-full h-1 bg-black md:bg-white"></div>
              </div>
              <div className="text-[11px] text-slate-600 md:text-md md:text-slate-200 uppercase font-semibold">
                RSCOE INITIATIVE
              </div>
            </div>
            <div className="flex flex-col justify-center items-center gap-6 mx-4">
              <h3 className="font-[700] lg:w-1/3 text-center text-3xl lg:text-4xl tracking-tighter">
                " The Forever Titans: Honoring the legacy of our graduates. "
              </h3>
              <p className="lg:w-1/2 font-sans font-[400] text-lg lg:text-xl text-center mx-8">
                Alumni are the living legacy of our college. Join us on our
                alumni portal to celebrate your achievements, reconnect with
                classmates, and shape the future of our institution
              </p>
            </div>
          </div>
        </div>
      </div>
      <section className="w-full flex flex-col gap-8">
        <h3
          className="text-center text-4xl font-sans m-4 font-[700] relative underline-offset-[14px] underline
      "
        >
          “ Why Alumni Portal ? ”
        </h3>

        <div className="grid grid-rows-4 lg:grid-rows-1 lg:grid-cols-4 justify-items-center align-items-stretch gap-5 px-10">
          <div className="home-section-div ">
            <div className="image-name">
              <Image
                src="/home/Feeds.svg"
                alt="feed.svg"
                width={70}
                height={70}
              />

              <h5 className="home-icons-heading">Feed</h5>
            </div>
            <p className="home-icons-subheading">
              Alumni can share any notable achievements or awards that they've
              received in their professional or personal life, as well as any
              significant contributions they've made to their community or
              industry.
            </p>
          </div>
          <div className="home-section-div">
            <div className="image-name">
              <Image
                src="/home/conference.svg"
                alt="conference.svg"
                width={70}
                height={70}
              />
              <h5 className="home-icons-heading ">Alumni Talk</h5>
            </div>
            <p className="home-icons-subheading">
              The Alumni Talk option is a valuable resource for our alumni
              community, offering a platform where graduates can connect with
              each other, learn from expert speakers, and grow both personally
              and professionally.
            </p>
          </div>
          <div className="home-section-div">
            <div className="image-name">
              <Image
                src="/home/agenda.svg"
                alt="Alumni Directory.svg"
                width={70}
                height={70}
              />
              <h5 className="home-icons-heading">Alumni Directory</h5>
            </div>
            <p className="home-icons-subheading">
              Connect, network, and forge lasting relationships with your fellow
              alumni.Looking to reconnect with old classmates? Our Alumni
              Directory has got you covered.
            </p>
          </div>
          <div className="home-section-div">
            <div className="image-name">
              <Image
                src="/home/public-relation.svg"
                alt="Alumni Engage.svg"
                width={70}
                height={70}
              />
              <h5 className="home-icons-heading">Alumni Engage</h5>
            </div>
            <p className="home-icons-subheading">
              The Alumni Engage section is designed to help our alumni community
              stay connected and engaged with our college/university.Alumni
              Engage offers a range of activities and resources to help you
              connect with your fellow graduates.
            </p>
          </div>
        </div>
      </section>
      <div className="w-full  bg-[#161A30] flex justify-start items-center flex-col py-10 px-6">
        <h2 className="text-[#EA906C] font-sans text-center text-4xl leading-9 font-[900] underline underline-offset-[12px] decoration-white decoration-4 ">
          " Alumni Talk Series "
        </h2>
        <div className=" flex flex-col gap-16 lg:grid lg:grid-cols-2 mt-10">
          <iframe
            className="yt-videos"
            src="https://www.youtube.com/embed/wKeZ88BJA5o?si=DDsZVDJ3hITWFsjz"
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          ></iframe>

          <iframe
            className="yt-videos"
            src="https://www.youtube.com/embed/8tWLo4RJ9Lk?si=B5HEQ6GTLE1lJ8iB"
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          ></iframe>

          <iframe
            className="yt-videos"
            src="https://www.youtube.com/embed/DhkNlFp6DG0?si=wkh9TDrUJyLcaflx"
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          ></iframe>

          <iframe
            className="yt-videos"
            src="https://www.youtube.com/embed/TeUQGd7XOD8?si=lphZoxSgNwtVAZ8F"
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          ></iframe>
        </div>
      </div>
      <div className="w-full font-sans flex justify-start  flex-col">
        <h3 className="text-4xl font-[700]  relative p-5 my-3 text-center flex flex-col items-center gap-2">
          <span>"Voices of Authority: Embracing Our Alumni Portal"</span>
          <div className="w-[50%] h-1 bg-black"></div>
        </h3>

        <div className="flex flex-col gap-10 px-12">
          <div
            className="flex flex-col xl:flex-row items-center glass rounded-sm
          justify-center gap-8"
          >
            <Image
              src="/home/Principal.jpeg"
              alt="Principal.jpg"
              width={540}
              height={342}
              className="rounded-md aspect-[16/10]"
            ></Image>
            <div className=" flex flex-col gap-2 items-center">
              <h4 className="text-3xl font-[700] ">Dr. R.K Jain</h4>
              <h5 className="text-xl font-[600] ">Director, RSCOE</h5>
              <p className="w-[80%] text-md text-justify">
                Dear Friends, It is with immense pride, that I introduce you to
                an entirely new approach of learning in our college. An
                approach, where traditional methods of learning go hand in hand
                with modern learning techniques, keeping with the current trends
                and technology. We facilitate our students to excel academically
                and to develop their personalities in diverse fields. To this
                end, we have complemented academics with other developmental
                activities such as performing arts, sports, hobbies and
                technical clubs, to name a few.
              </p>
            </div>
          </div>
          <div
            className="flex flex-col-reverse md:flex-row items-center glass rounded-sm
          justify-center gap-8 "
          >
            <div className="flex flex-col gap-2 items-center">
              <h4 className="text-3xl font-[700]">Dr. S P Rao Borde</h4>
              <h5 className="text-xl font-[600]">Dean of SI&IR's, RSCOE</h5>
              <p className="w-[80%]  text-md text-justify">
                Dear Friends, From The Dean of SI&IR's Desk, I would like to
                introduce our campus, Rajarshi Shahu College of Engineering
                (RSCOE), an autonomous institute which is in the band 250 to 300
                of MHRD-NIRF 2022 and is also accredited by NAAC and NBA. Our
                college is the flagship institute of JSPM and TSSM Group of
                Institutes, Pune, Maharashtra. RSCOE is now also known as
                TEDxJSPM RSCOE. Being an autonomous institute, the companies
                like Veritas, TCS, KPIT & Persistent Systems, Bentley Institute,
                IIT Ropar, and Builders Association of India contributed to the
                curriculum integration, giving an opportunity to students from
                various social and economic backgrounds to be part of excelling
                in higher education.
              </p>
            </div>
            <Image
              src="/home/Spraoborde.jpeg"
              alt="TPO.jpg"
              width={540}
              height={342}
              className="rounded-md aspect-[16/10]"
            ></Image>
          </div>
        </div>
      </div>
      <div className="w-[100%] font-sans bg-[#D9D9D9] flex justify-start items-center flex-col gap-10 p-10">
        <h3 className="text-4xl font-[700] underline underline-offset-8  ">
          “Memories We Will Never Forget”
        </h3>
        <div className="m-14 my-2">
          <Slider
            imgarr={images.map((e) => {
              return "/home/slider/" + e;
            })}
          ></Slider>
        </div>
      </div>
    </div>
  );
};

export default Home;
