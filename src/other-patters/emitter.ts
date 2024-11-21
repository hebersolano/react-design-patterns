import mitt from "mitt";

type Events = {
  inc: { info: string };
  dec: { info: string };
  bar?: number;
};

const emitter = mitt<Events>();

export default emitter;
