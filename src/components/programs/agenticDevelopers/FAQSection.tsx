import { Minus, Plus } from "lucide-react";
import { useState } from "react";

type Category =
  | "Course-Related"
  | "Payments and Scholarships"
  | "Capstone and Real-time Projects"
  | "Certifications"
  | "Job Assistance"
  | "Mentorships"
  | "Support";

const CATEGORIES: Category[] = [
  "Course-Related",
  "Payments and Scholarships",
  "Capstone and Real-time Projects",
  "Certifications",
  "Job Assistance",
  "Mentorships",
  "Support",
];

const FAQS: Record<Category, { q: string; a: string }[]> = {
  "Course-Related": [
  {
    q: "What is the duration of this program?",
    a: "The program is designed to provide structured, hands-on learning through live sessions, practical assignments, and real-world projects from top-notch companies like Amazon, Deloitte, TCS, Infosys, and many more."
  },
  {
    q: "Who is this course designed for?",
    a: "This course is suitable for freshers, graduates, working professionals, career switchers, and individuals looking to build a successful career in the IT industry."
  },
  {
    q: "Are the classes live or recorded?",
    a: "The program includes live instructor-led sessions. Recorded sessions may also be available for revision and continued learning."
  },
  {
    q: "What tools and technologies will I learn?",
    a: "You will gain practical exposure to technologies and domains such as Data Science, Full Stack Development, Automation, Generative AI, Agentic AI, and many more."
  }
],

"Payments and Scholarships": [
  {
    q: "Are installment options available?",
    a: "Available payment options will be shared with you during the enrollment process."
  },
  {
    q: "Do you offer scholarships?",
    a: "Scholarship opportunities may be available for eligible candidates based on the current program and applicable criteria."
  },
  {
    q: "How can I pay the course fee?",
    a: "Payments can be made through the available payment methods provided during the enrollment process."
  },
  {
    q: "Can I get the complete fee details before enrolling?",
    a: "Yes, the program fee, payment options, and applicable offers will be clearly communicated before enrollment."
  }
],

"Capstone and Real-time Projects": [
  {
    q: "Will I work on real-time projects?",
    a: "Yes, the program includes hands-on projects designed around real-world business scenarios and industry use cases from top-notch companies like Amazon, Deloitte, TCS, Infosys, and many more."
  },
  {
    q: "How many projects will I complete?",
    a: "You will work on practical assignments and multiple industry-focused projects as part of your learning journey."
  },
  {
    q: "Can I add these projects to my portfolio?",
    a: "Yes, you can showcase your completed projects in your professional portfolio, resume, and LinkedIn profile."
  },
  {
    q: "Will I receive guidance during project development?",
    a: "Yes, trainers and mentors will provide guidance and support throughout your project development process."
  }
],

"Certifications": [
  {
    q: "Will I receive a certificate after completion?",
    a: "Yes, eligible learners will receive a program completion certificate after successfully completing the required course criteria."
  },
  {
    q: "What are the requirements to receive the certificate?",
    a: "You may be required to complete the course modules, assignments, assessments, and projects as applicable to the program."
  },
  {
    q: "Can I add the certificate to my LinkedIn profile?",
    a: "Yes, you can showcase your certificate on LinkedIn and include it in your professional resume."
  },
  {
    q: "Is the certificate useful for job applications?",
    a: "Yes, your certification, combined with practical projects and technical skills, can help strengthen your professional profile."
  }
],

"Job Assistance": [
  {
    q: "Do you provide placement support?",
    a: "Yes, eligible learners receive placement assistance and career support based on the terms of their enrolled program with India's first AI-integrated placement tool."
  },
  {
    q: "What does the placement support include?",
    a: "Placement support may include resume building, LinkedIn optimization, mock interviews, interview preparation, and relevant job opportunities and referrals."
  },
  {
    q: "Will I receive job opportunities after completing the course?",
    a: "Eligible candidates may receive relevant job opportunities based on their skills, profile, performance, and available openings."
  },
  {
    q: "Is job assistance available for freshers and career switchers?",
    a: "Yes, placement support is designed to assist freshers, career switchers, and eligible working professionals."
  }
],

"Mentorships": [
  {
    q: "Will I receive mentorship during the program?",
    a: "Yes, learners receive guidance from trainers and mentors throughout their learning journey."
  },
  {
    q: "Can I ask questions and clear my doubts with a mentor?",
    a: "Yes, you can ask questions and clarify doubts related to course concepts, assignments, and projects."
  },
  {
    q: "Will mentors provide career guidance?",
    a: "Yes, mentorship may include guidance on technical skills, projects, portfolio building, and career preparation."
  },
  {
    q: "How often are mentorship sessions conducted?",
    a: "Mentorship and doubt-clearing sessions are conducted according to the program schedule and learning requirements."
  }
],

"Support": [
  {
    q: "What kind of support will I receive during the course?",
    a: "You will receive academic, technical, and learning support based on your program requirements."
  },
  {
    q: "What if I miss a live class?",
    a: "You can use the available recorded sessions and learning materials to catch up on missed topics."
  },
  {
    q: "How can I get help with technical or course-related issues?",
    a: "You can reach our dedicated support team at supportdesk@phincoelite.com for assistance."
  },
  {
    q: "Will I receive support if I face any issues during the program?",
    a: "Yes. For any course-related, technical, or learning support, please contact supportdesk@phincoelite.com."
  }
],
};

export function FAQSection() {
  const [category, setCategory] = useState<Category>("Course-Related");
  const [openIndex, setOpenIndex] = useState<number>(0);

  const items = FAQS[category];

  return (
    <section className="bg-white py-10 sm:py-14 lg:py-20">
      <div className="mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-2xl font-extrabold leading-tight text-slate-900 sm:text-3xl lg:text-4xl">
            Frequently Asked Questions
          </h2>

          <p className="mt-3 text-sm leading-6 text-slate-500 sm:text-base">
            Everything you need to know about the course and curriculum.
          </p>
        </div>

        <div className="mt-8 grid grid-cols-1 gap-6 sm:mt-10 md:grid-cols-[230px_1fr] lg:grid-cols-[280px_1fr] lg:gap-8">
          {/* Categories */}
          <aside className="md:border-r md:border-slate-200 md:pr-4">
            <div className="-mx-4 flex snap-x gap-2 overflow-x-auto px-4 pb-2 sm:-mx-6 sm:px-6 md:mx-0 md:flex-col md:gap-1 md:overflow-visible md:px-0 md:pb-0 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
              {CATEGORIES.map((c) => {
                const isActive = c === category;

                return (
                  <button
                    key={c}
                    type="button"
                    onClick={() => {
                      setCategory(c);
                      setOpenIndex(0);
                    }}
                    className={`shrink-0 snap-start whitespace-nowrap rounded-full border px-4 py-2.5 text-left text-sm font-medium transition md:w-full md:whitespace-normal md:rounded-lg md:border-0 md:px-4 md:py-3 ${
                      isActive
                        ? "border-blue-600 bg-blue-50 text-blue-600 md:bg-transparent md:font-bold md:ring-1 md:ring-blue-100"
                        : "border-slate-200 bg-white text-slate-600 hover:border-slate-300 hover:text-slate-900 md:hover:bg-slate-50"
                    }`}
                  >
                    {c}
                  </button>
                );
              })}
            </div>
          </aside>

          {/* Questions */}
          <div className="rounded-2xl border border-slate-200 bg-white shadow-sm md:border-0 md:shadow-none">
            {items.map((item, i) => {
              const isOpen = openIndex === i;

              return (
                <div
                  key={item.q}
                  className="border-b border-slate-200 last:border-b-0"
                >
                  <button
                    type="button"
                    aria-expanded={isOpen}
                    onClick={() => setOpenIndex(isOpen ? -1 : i)}
                    className="flex w-full items-start justify-between gap-4 px-4 py-5 text-left sm:px-5 md:px-0"
                  >
                    <span className="text-sm font-bold leading-6 text-slate-900 sm:text-base">
                      {item.q}
                    </span>

                    <span className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-blue-50">
                      {isOpen ? (
                        <Minus className="h-4 w-4 text-blue-600" />
                      ) : (
                        <Plus className="h-4 w-4 text-blue-600" />
                      )}
                    </span>
                  </button>

                  {isOpen && (
                    <p className="px-4 pb-5 pr-14 text-sm leading-6 text-slate-600 sm:px-5 sm:text-base md:px-0 md:pr-12">
                      {item.a}
                    </p>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}