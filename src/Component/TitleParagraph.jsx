import React from "react";

const TitleParagraph = ({ data }) => {
  return (
    <>
      {data.map((item, i) => (
        <div key={i}>
          <h3 className="text-xl sora-semibold mb-4">{item.heading}</h3>

          {item.info.map((info, i) => (
            <p
              key={i}
              className="mb-4"
              dangerouslySetInnerHTML={{ __html: info }}
            ></p>
          ))}
        </div>
      ))}
    </>
  );
};

export default TitleParagraph;
