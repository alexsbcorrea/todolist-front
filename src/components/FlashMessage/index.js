import { useState, useEffect } from "react";
import * as C from "./styles";

import bus from "../../useFlashMessage/bus";

import { AiOutlineCheckCircle } from "react-icons/ai";
import { AiOutlineCloseCircle } from "react-icons/ai";
import { AiOutlineExclamationCircle } from "react-icons/ai";

export default function FlashMessage() {
  const [visibility, setVisibility] = useState(false);
  const [type, setType] = useState("");
  const [message, setMessage] = useState("");
  const [time, setTime] = useState();
  const [template, setTemplate] = useState("");

  useEffect(() => {
    bus.addListener("flash", ({ type, message, time, template }) => {
      setVisibility(true);
      setType(type);
      setMessage(message);
      setTime(time);
      setTemplate(template);

      setTimeout(() => {
        setVisibility(false);
      }, time);
    });
  }, []);

  if (visibility && template == "toast") {
    return (
      <C.Container onClick={() => setVisibility(false)}>
        <C.MessageToast>
          <div>
            {type == "success" && (
              <span className="success">
                <AiOutlineCheckCircle size={50}></AiOutlineCheckCircle>
              </span>
            )}
            {type == "error" && (
              <span className="error">
                <AiOutlineCloseCircle size={50}></AiOutlineCloseCircle>
              </span>
            )}
            {type == "notify" && (
              <span className="notify">
                <AiOutlineExclamationCircle
                  size={50}
                ></AiOutlineExclamationCircle>
              </span>
            )}
          </div>

          <div>
            {type == "success" && <p>Operação Concluída</p>}
            {type == "error" && <p>Falha na Operação</p>}
            {type == "notify" && <p>Aviso</p>}

            <p>{message}</p>
          </div>

          {type == "success" && <C.StatusBarS></C.StatusBarS>}
          {type == "error" && <C.StatusBarE></C.StatusBarE>}
          {type == "notify" && <C.StatusBarN></C.StatusBarN>}
        </C.MessageToast>
      </C.Container>
    );
  } else if (visibility && template == "popup") {
    return (
      <C.Container onClick={() => setVisibility(false)}>
        <C.Message>
          {type == "success" && (
            <p>
              <span className="success">
                <AiOutlineCheckCircle size={100}></AiOutlineCheckCircle>
              </span>
            </p>
          )}
          {type == "error" && (
            <p>
              <span className="error">
                <AiOutlineCloseCircle size={100}></AiOutlineCloseCircle>
              </span>
            </p>
          )}
          {type == "notify" && (
            <p>
              <span className="notify">
                <AiOutlineExclamationCircle
                  size={100}
                ></AiOutlineExclamationCircle>
              </span>
            </p>
          )}

          {type == "success" && <h2>Operação Concluída</h2>}
          {type == "error" && <h2>Falha na Operação</h2>}
          {type == "notify" && <h2>Aviso</h2>}

          <p>{message}</p>
          <button onClick={() => setVisibility(false)}>FECHAR</button>

          {type == "success" && <C.StatusBarS></C.StatusBarS>}
          {type == "error" && <C.StatusBarE></C.StatusBarE>}
          {type == "notify" && <C.StatusBarN></C.StatusBarN>}
        </C.Message>
      </C.Container>
    );
  }
}
