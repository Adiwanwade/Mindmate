import React from "react";

const Home2 = () => {
  return (
    <section className="bg-gradient-to-b from-[#FFF5EC] to-[#FFE9E9] dark:from-gray-900 dark:to-gray-800 transition-colors duration-700">
      <div className="py-16 px-6 mx-auto max-w-screen-xl text-center">
        <div className="mx-auto mb-12 max-w-screen-md">
          <h2 className="mb-4 text-5xl tracking-tight font-extrabold text-gray-800 dark:text-white">
            🌿 Mental Health Awareness
          </h2>
          <p className="font-medium text-lg text-gray-600 dark:text-gray-300">
            Explore key topics and trusted resources on mental health and
            well-being.
          </p>
          <div className="mt-6 w-24 h-1 mx-auto bg-rose-400 rounded-full"></div>
        </div>

        <div className="grid gap-10 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {[
            {
              title: "ADHD",
              img: "https://img.freepik.com/premium-vector/adhd-attention-disorder-prevent-adhd-vector-stock-illustration_100456-10568.jpg",
              link: "https://applications.emro.who.int/docs/EMRPUB_leaflet_2019_mnh_214_en.pdf",
            },
            {
              title: "Depression",
              img: "https://st4.depositphotos.com/23877174/25249/v/450/depositphotos_252490948-stock-illustration-depression-icon-vector-from-human.jpg",
              link: "https://www.who.int/news-room/fact-sheets/detail/depression",
            },
            {
              title: "Bipolar Disorder",
              img: "https://i0.wp.com/www.additudemag.com/wp-content/uploads/2021/07/GettyImages-1250310797.jpg",
              link: "https://applications.emro.who.int/docs/EMRPUB_leaflet_2019_mnh_216_en.pdf",
            },
            {
              title: "PTSD",
              img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTIB4hzxb2gqZY1oD5Key0bryI_xkC_0IUY3LObg_y2Hg&s",
              link: "https://applications.emro.who.int/docs/WHOEMMNH235E-eng.pdf?ua=1",
            },
            {
              title: "Schizophrenia",
              img: "https://myfitbrain.in/images/Schizophrenia_1613450529.jpg",
              link: "https://www.who.int/news-room/fact-sheets/detail/schizophrenia",
            },
            {
              title: "Anxiety",
              img: "https://static01.nyt.com/images/2022/01/19/well/19good-anxiety/19good-anxiety-mediumSquareAt3X-v3.jpg",
              link: "https://www.who.int/news-room/fact-sheets/detail/anxiety-disorders",
            },
            {
              title: "Eating Disorder",
              img: "https://zinc.ca/wp-content/uploads/2023/04/zinc-eating-disorders.jpg",
              link: "https://www.nimh.nih.gov/health/statistics/eating-disorders",
            },
            {
              title: "Paranoia",
              img: "https://etimg.etb2bimg.com/photo/99479867.cms",
              link: "https://www.ncbi.nlm.nih.gov/pmc/articles/PMC6420131/",
            },
          ].map((topic, i) => (
            <div
              key={i}
              className="group bg-white dark:bg-gray-900 shadow-xl rounded-3xl p-6 border border-rose-100 dark:border-gray-700 hover:-translate-y-2 hover:shadow-2xl transition-all duration-300"
            >
              <img
                className="mx-auto mb-4 w-36 h-36 rounded-full object-cover border-4 border-rose-200 group-hover:border-rose-400 transition-all duration-300"
                src={topic.img}
                alt={topic.title}
              />
              <h3 className="mb-3 text-2xl font-semibold text-gray-800 dark:text-white">
                {topic.title}
              </h3>
              <a
                href={topic.link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block mt-2 text-rose-600 font-medium hover:text-rose-800 dark:hover:text-rose-400 transition-colors duration-300"
              >
                Read More →
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Home2;
