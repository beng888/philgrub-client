import React from "react";
import { useInView } from "react-intersection-observer";

const Faqs = ({ f }) => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.4 });

  return (
    <div
      ref={ref}
      className={`${
        inView ? "translate-x-0 opacity-100" : " -translate-x-12 opacity-0"
      } transform trans-linear flex flex-col md:flex-row`}
    >
      <h4 className="w-1/3">{f.title}</h4>
      <div className="w-full border-t-4  border-quaternary">
        {f.faqs.map((faq, i) => (
          <details key={i} className="border-b-4  border-quaternary ">
            <summary className="summary">{faq.question}</summary>
            <div className="content tracking-widest mb-8 leading-loose">
              {faq.answer}
            </div>
          </details>
        ))}
      </div>
    </div>
  );
};

export default Faqs;
