import { useState } from "react";
import { CardTask, CardTaskClosed, Details, Commands } from "./styles";

import { AiOutlineCalendar } from "react-icons/ai";
import { MdSchedule } from "react-icons/md";
import { GrLocation } from "react-icons/gr";

import { RxBox } from "react-icons/rx";
import { BsCheck2Square } from "react-icons/bs";
import { FiEdit } from "react-icons/fi";
import { BsXSquare } from "react-icons/bs";

export default function Task({
  id,
  description,
  local,
  date,
  time,
  categorie,
  isClosed,
  open,
  closed,
  remove,
  edit,
}) {
  if (isClosed) {
    return (
      <CardTask closed={isClosed}>
        <Details>
          <h2 onClick={() => edit(id, description)}>{description}</h2>
          <p onClick={() => edit(id, description)}>
            <GrLocation size={15}></GrLocation>&nbsp;{local}
          </p>
          <span onClick={() => edit(id, description)}>
            <AiOutlineCalendar></AiOutlineCalendar>&nbsp;{date}
          </span>
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          <span onClick={() => edit(id, description)}>
            <MdSchedule></MdSchedule>&nbsp;{time}&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            {categorie}
          </span>
        </Details>

        <Commands>
          {!isClosed && (
            <RxBox
              size={30}
              className="pending"
              onClick={() => closed(id, description)}
            ></RxBox>
          )}

          {isClosed && (
            <BsCheck2Square
              size={32}
              className="close"
              onClick={() => open(id, description)}
            ></BsCheck2Square>
          )}
          <FiEdit
            size={30}
            className="edit"
            onClick={() => edit(id, description)}
          ></FiEdit>
          <BsXSquare
            size={26}
            className="remove"
            onClick={() => remove(id, description)}
          ></BsXSquare>
        </Commands>
      </CardTask>
    );
  } else {
    return (
      <CardTaskClosed closed={isClosed}>
        <Details>
          <h2 onClick={() => edit(id, description)}>{description}</h2>
          <p onClick={() => edit(id, description)}>
            <GrLocation size={15}></GrLocation>&nbsp;{local}
          </p>
          <span onClick={() => edit(id, description)}>
            <AiOutlineCalendar></AiOutlineCalendar>&nbsp;{date}
          </span>
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          <span onClick={() => edit(id, description)}>
            <MdSchedule></MdSchedule>&nbsp;{time}&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            {categorie}
          </span>
        </Details>

        <Commands>
          {!isClosed && (
            <RxBox
              size={30}
              className="pending"
              onClick={() => closed(id, description)}
            ></RxBox>
          )}

          {isClosed && (
            <BsCheck2Square
              size={32}
              className="close"
              onClick={() => open(id, description)}
            ></BsCheck2Square>
          )}
          <FiEdit
            size={30}
            className="edit"
            onClick={() => edit(id, description)}
          ></FiEdit>
          <BsXSquare
            size={26}
            className="remove"
            onClick={() => remove(id, description)}
          ></BsXSquare>
        </Commands>
      </CardTaskClosed>
    );
  }
}
