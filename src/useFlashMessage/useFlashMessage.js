import bus from "./bus";

export default function useFlashMessage() {
  function setFlashMessage(type, message, time, template) {
    bus.emit("flash", {
      type: type,
      message: message,
      time: time,
      template: template,
    });
  }
  return { setFlashMessage };
}
