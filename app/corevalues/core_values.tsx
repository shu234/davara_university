"use client";

import Image from "next/image";

interface CoreValue {
  title: string;
  description: string;
  image: string;
}

const coreValues: CoreValue[] = [
  {
    title: "Respect",
    description:
      "Respect inspires us to appreciate various viewpoints and to recognise the gifts and distinctive contributions of each member of the university community. Catholics and immigrants, young girls and women, women whose education had been halted by family obligations, those who were the first in their families to attend college—these populations lacked access to education in various historical periods. Shri Davara University has constantly accepted and supported these students in order to uphold their dignity and full potential.",
    image: "/images/core-values/respect.png",
  },
  {
    title: "Excellence",
    description:
      "Excellence forces us to push ourselves and make the most of the abilities that God has given us, including our moral, intellectual, social, and physical abilities. The dedication to excellence at Shri Davara University drives both individuals and the University to continually pursue achievements that are exemplary rather than merely satisfactory. Many facets of university life—academics, athletics, student services, campus environment, publications, special events, and regular business—are affected by this relentless pursuit of greatness. This principle also motivates the university community to honour the noteworthy accomplishments and contributions made to the well-being of others by its members.",
    image: "/images/core-values/excellence.png",
  },
  {
    title: "Compassion",
    description:
      "Compassion leads us to stand with and embrace others in their suffering so that we can all experience God&apos;s liberating and healing presence. This value captures the reality that calls for sensitivity, empathy, and care in addition to dedication, courage, and action. In times of personal difficulty or bereavement, members of the Shri Davara University community support one another and demonstrate compassion through a variety of actions that address the needs of people both inside and outside the University.",
    image: "/images/core-values/compassion.png",
  },
  {
    title: "Service",
    description:
      "Service requires us to use our strengths, talents, and abilities to promote the true well-being of our community and those we come into contact with. Service to students and service by students, staff, and faculty are fundamental tenets of life at Shri Davara University. Through campus clinics, off-campus internships, service trips, and a variety of volunteer opportunities, each of these groups contributes their individual skills and professional expertise to help others.",
    image: "/images/core-values/service.png",
  },
  {
    title: "Hospitality",
    description:
      "Hospitality inspires us to approach our everyday tasks with a cordial spirit that embraces new ideas and individuals of different origins and beliefs. At Shri Davara University, being gracious means creating room for an unexpected visitor, an unexpected thought, a new perspective, even a troubling query or a difficult opportunity. Even if accepting another person&apos;s opinions may not lead to agreement, doing so calls for careful listening and the willingness to change one&apos;s own.",
    image: "/images/core-values/hospitality.png",
  },
  {
    title: "Integrity",
    description:
      "Integrity encourages us to view our work and ourselves holistically and as one unified with others throughout the world, enabling us to see the larger good in our actions and projects. Integrity involves consistency between words and deeds, whether it be personal or institutional. Every member of the Shri Davara University community is urged to live in accordance with the University&apos;s self-described mission as an academic institution. Integrity means that the University is both entire in and connected to the greater educational, religious, and social contexts in which it operates.",
    image: "/images/core-values/integrity.png",
  },
  {
    title: "Learning For Life",
    description:
      "Learning for Life, in the liberal arts tradition, encourages us to seek knowledge and truth throughout our lives in ways that strengthen our understanding of one another, our communities, and ourselves. The dedication of Shri Davara University to the liberal arts and sciences, as well as to a range of professional degrees, is a dedication to education as a tool for enabling individuals to live fulfilling lives and make a living. According to the importance of lifelong learning, the University accepts students of all ages and sponsors initiatives that broaden the knowledge of community members, regardless of their age or level of formal education.",
    image: "/images/core-values/learning.png",
  },
  {
    title: "Diversity",
    description:
      "Diversity creates a community that stimulates a dialogue about the nature of diversity, engages faculty, staff, and students in activities that advance the university&apos;s basic principles, and establishes an environment that is open and hospitable to varied people, ideas, and perspectives.",
    image: "/images/core-values/diversity.png",
  },
];

export default function CoreValuesSection() {
  return (
    <section className="py-16 px-6 md:px-20 bg-[#F8F9FA]">
      <div className="max-w-6xl mx-auto">
        {/* Heading */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-[#1B2951] mb-4">
            Our Core Values
          </h2>
          <p className="text-gray-700 text-lg max-w-3xl mx-auto">
            Six core values that are always at the heart of Shri Davara University&apos;s mission, and co-curricular programs that ground and manifest the University&apos;s identity and commitment to knowledge for both personal enhancement and social progress.
          </p>
        </div>

        {/* Alternating Rows */}
        <div className="space-y-16">
          {coreValues.map((value, idx) => (
            <div
              key={idx}
              className={`flex flex-col md:flex-row items-center gap-8 ${
                idx % 2 !== 0 ? "md:flex-row-reverse" : ""
              }`}
            >
              {/* Image */}
              <div className="md:w-1/2 w-full h-64 relative">
                <Image
                  src={value.image}
                  alt={value.title}
                  fill
                  className="object-contain rounded-lg shadow-lg"
                />
              </div>

              {/* Text */}
              <div className="md:w-1/2 w-full text-gray-700">
                <h3 className="text-2xl font-semibold text-[#1B2951] mb-4">
                  {value.title}
                </h3>
                <p className="text-lg leading-relaxed">{value.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
