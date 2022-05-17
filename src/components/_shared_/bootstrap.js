import Tracker from "@openreplay/tracker";

const tracker = new Tracker({ projectKey: process.env.REACT_APP_OPEN_REPLAY });

tracker.start();
