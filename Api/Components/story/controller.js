// CREATE_STORY     - title, author, text, dateTime
// READ_STORY       - story_id
// UPDATE_STORY     - title, story_data
// DELETE_STORY     - story_id

import { response } from "../../../network";

export const createStory = (req, res) => {
  const { title, author, text, datetime } = req.body;
  return response({
    res,
    data: { title, author, text, datetime },
  });
};

export const readStory = (req, res) => {
  const { id } = req.params;
  return response({
    res,
    data: { id },
  });
};

export const updateStory = (req, res) => {
  const { id } = req.params;
  return response({
    res,
    data: { id },
  });
};

export const destroyStory = (req, res) => {
  const { id } = req.params;
  return response({
    res,
    data: { id },
  });
};
