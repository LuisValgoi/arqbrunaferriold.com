import Tracker from "@openreplay/tracker";

export const tracker = new Tracker({ projectKey: process?.env?.REACT_APP_OPEN_REPLAY, __DISABLE_SECURE_MODE: true });

tracker.start();