"use client";
import React, { useState } from "react";
interface Props {
  text: string;
  limit: number;
  classText: string;
}

const Showmore = (props: Props) => {
  let [showMore, setShowMore] = useState<Boolean>(false);
  return (
    <>
      <div className={props.classText}>
        {showMore ? props.text : `${props.text.substring(0, props.limit)}`}
        {props.text.length > props.limit && (
          <span
            className="text-xs text-slate-500 cursor-pointer"
            onClick={() => {
              setShowMore(!showMore);
            }}
          >
            {showMore ? " ...show less" : " ...show more"}
          </span>
        )}
      </div>
    </>
  );
};

export default Showmore;
